import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Analytics } from '@/models';

// GET - Retrieve analytics data (with date range filtering)
export async function GET(request) {
  try {
    const db = await connectDB();
    
    // Return mock data during build process
    if (!db) {
      return NextResponse.json({
        success: true,
        data: [],
        aggregated: {},
        pagination: {
          current: 1,
          total: 0,
          count: 0,
          totalRecords: 0,
          hasNext: false,
          hasPrev: false
        }
      });
    }
    
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const period = searchParams.get('period'); // daily, weekly, monthly
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 30;
    
    // Build filter object
    const filter = {};
    
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    } else if (period) {
      const now = new Date();
      let start = new Date();
      
      switch (period) {
        case 'daily':
          start.setDate(now.getDate() - 30); // Last 30 days
          break;
        case 'weekly':
          start.setDate(now.getDate() - (7 * 12)); // Last 12 weeks
          break;
        case 'monthly':
          start.setMonth(now.getMonth() - 12); // Last 12 months
          break;
        default:
          start.setDate(now.getDate() - 30);
      }
      
      filter.date = { $gte: start, $lte: now };
    }
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const total = await Analytics.countDocuments(filter);
    
    // Get analytics data with pagination and sorting
    const analytics = await Analytics
      .find(filter)
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Calculate aggregated metrics
    const aggregated = await Analytics.aggregate([
      { $match: filter },
      {
        $group: {
          _id: null,
          totalPageViews: { $sum: '$pageViews' },
          totalUniqueVisitors: { $sum: '$uniqueVisitors' },
          totalSessions: { $sum: '$sessions' },
          avgBounceRate: { $avg: '$bounceRate' },
          avgSessionDuration: { $avg: '$avgSessionDuration' },
          totalConversions: {
            $sum: {
              $add: [
                '$conversions.contactForms',
                '$conversions.newsletterSignups',
                '$conversions.phoneClicks',
                '$conversions.emailClicks'
              ]
            }
          }
        }
      }
    ]);
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return NextResponse.json({
      success: true,
      data: analytics,
      aggregated: aggregated[0] || {},
      pagination: {
        current: page,
        total: totalPages,
        count: analytics.length,
        totalRecords: total,
        hasNext: hasNextPage,
        hasPrev: hasPrevPage
      }
    });
    
  } catch (error) {
    console.error('Analytics GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}

// POST - Create or update analytics data for a specific date
export async function POST(request) {
  try {
    const db = await connectDB();
    
    // Return mock response during build process
    if (!db) {
      return NextResponse.json({
        success: true,
        message: 'Analytics data would be created successfully (build mode)',
        data: {}
      }, { status: 201 });
    }
    
    const body = await request.json();
    const { 
      date, 
      pageViews, 
      uniqueVisitors, 
      sessions, 
      bounceRate, 
      avgSessionDuration,
      topPages,
      trafficSources,
      devices,
      browsers,
      countries,
      conversions
    } = body;
    
    // Validation
    if (!date) {
      return NextResponse.json(
        { success: false, error: 'Date is required' },
        { status: 400 }
      );
    }
    
    const analyticsDate = new Date(date);
    analyticsDate.setHours(0, 0, 0, 0); // Normalize to start of day
    
    // Check if analytics data already exists for this date
    const existingAnalytics = await Analytics.findOne({ date: analyticsDate });
    
    if (existingAnalytics) {
      // Update existing analytics
      const updateData = {
        pageViews: pageViews || existingAnalytics.pageViews,
        uniqueVisitors: uniqueVisitors || existingAnalytics.uniqueVisitors,
        sessions: sessions || existingAnalytics.sessions,
        bounceRate: bounceRate || existingAnalytics.bounceRate,
        avgSessionDuration: avgSessionDuration || existingAnalytics.avgSessionDuration,
        topPages: topPages || existingAnalytics.topPages,
        trafficSources: { ...existingAnalytics.trafficSources, ...trafficSources },
        devices: { ...existingAnalytics.devices, ...devices },
        browsers: browsers || existingAnalytics.browsers,
        countries: countries || existingAnalytics.countries,
        conversions: { ...existingAnalytics.conversions, ...conversions }
      };
      
      const updatedAnalytics = await Analytics.findByIdAndUpdate(
        existingAnalytics._id,
        updateData,
        { new: true, runValidators: true }
      );
      
      return NextResponse.json({
        success: true,
        message: 'Analytics data updated successfully!',
        data: updatedAnalytics
      });
    } else {
      // Create new analytics entry
      const newAnalytics = new Analytics({
        date: analyticsDate,
        pageViews: pageViews || 0,
        uniqueVisitors: uniqueVisitors || 0,
        sessions: sessions || 0,
        bounceRate: bounceRate || 0,
        avgSessionDuration: avgSessionDuration || 0,
        topPages: topPages || [],
        trafficSources: trafficSources || {},
        devices: devices || {},
        browsers: browsers || [],
        countries: countries || [],
        conversions: conversions || {}
      });
      
      const savedAnalytics = await newAnalytics.save();
      
      return NextResponse.json({
        success: true,
        message: 'Analytics data created successfully!',
        data: savedAnalytics
      }, { status: 201 });
    }
    
  } catch (error) {
    console.error('Analytics POST Error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { success: false, error: validationErrors.join(', ') },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to save analytics data' },
      { status: 500 }
    );
  }
}

// PUT - Update analytics data
export async function PUT(request) {
  try {
    const db = await connectDB();
    
    // Return mock response during build process
    if (!db) {
      return NextResponse.json({
        success: true,
        message: 'Analytics data would be updated successfully (build mode)',
        data: {}
      });
    }
    
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Analytics ID is required' },
        { status: 400 }
      );
    }
    
    const updatedAnalytics = await Analytics.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedAnalytics) {
      return NextResponse.json(
        { success: false, error: 'Analytics data not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Analytics data updated successfully',
      data: updatedAnalytics
    });
    
  } catch (error) {
    console.error('Analytics PUT Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update analytics data' },
      { status: 500 }
    );
  }
}

// DELETE - Delete analytics data
export async function DELETE(request) {
  try {
    const db = await connectDB();
    
    // Return mock response during build process
    if (!db) {
      return NextResponse.json({
        success: true,
        message: 'Analytics data would be deleted successfully (build mode)'
      });
    }
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const date = searchParams.get('date');
    
    if (!id && !date) {
      return NextResponse.json(
        { success: false, error: 'Analytics ID or date is required' },
        { status: 400 }
      );
    }
    
    let deletedAnalytics;
    
    if (id) {
      deletedAnalytics = await Analytics.findByIdAndDelete(id);
    } else {
      const analyticsDate = new Date(date);
      analyticsDate.setHours(0, 0, 0, 0);
      deletedAnalytics = await Analytics.findOneAndDelete({ date: analyticsDate });
    }
    
    if (!deletedAnalytics) {
      return NextResponse.json(
        { success: false, error: 'Analytics data not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Analytics data deleted successfully'
    });
    
  } catch (error) {
    console.error('Analytics DELETE Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete analytics data' },
      { status: 500 }
    );
  }
}
