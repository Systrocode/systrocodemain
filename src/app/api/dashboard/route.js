import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { 
  Contact, 
  Project, 
  Blog, 
  Newsletter, 
  Analytics, 
  ServiceRequest, 
  Service, 
  Testimonial 
} from '@/models';

// GET - Dashboard summary statistics
export async function GET(request) {
  try {
    const db = await connectDB();
    
    // Return mock dashboard data during build process
    if (!db) {
      return NextResponse.json({
        success: true,
        data: {
          overview: {
            totalContacts: 0,
            newContacts: 0,
            contactGrowthRate: 0,
            totalProjects: 0,
            activeProjects: 0,
            totalBlogs: 0,
            publishedBlogs: 0,
            totalSubscribers: 0,
            activeSubscribers: 0,
            totalServiceRequests: 0,
            pendingServiceRequests: 0,
            totalServices: 0,
            activeServices: 0,
            totalTestimonials: 0,
            activeTestimonials: 0
          },
          analytics: {
            pageViews: 0,
            uniqueVisitors: 0,
            sessions: 0,
            conversions: 0,
            conversionRate: 0,
            period: 30
          },
          distributions: {
            contactStatus: [],
            serviceRequestPriority: [],
            popularServices: []
          },
          recentActivity: {
            contacts: [],
            serviceRequests: [],
            subscribers: []
          },
          chartData: {
            dailyAnalytics: []
          }
        }
      });
    }
    
    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || '30'; // days
    
    // Calculate date range
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - parseInt(period));
    
    // Get counts for different entities
    const [
      totalContacts,
      newContacts,
      totalProjects,
      activeProjects,
      totalBlogs,
      publishedBlogs,
      totalSubscribers,
      activeSubscribers,
      totalServiceRequests,
      pendingServiceRequests,
      totalServices,
      activeServices,
      totalTestimonials,
      activeTestimonials,
      recentAnalytics
    ] = await Promise.all([
      // Contacts
      Contact.countDocuments(),
      Contact.countDocuments({
        createdAt: { $gte: startDate, $lte: endDate }
      }),
      
      // Projects
      Project.countDocuments(),
      Project.countDocuments({ status: { $in: ['planning', 'in-progress'] } }),
      
      // Blogs
      Blog.countDocuments(),
      Blog.countDocuments({ published: true }),
      
      // Newsletter
      Newsletter.countDocuments(),
      Newsletter.countDocuments({ status: 'subscribed' }),
      
      // Service Requests
      ServiceRequest.countDocuments(),
      ServiceRequest.countDocuments({ 
        status: { $in: ['new', 'reviewing', 'proposal-requested'] } 
      }),
      
      // Services
      Service.countDocuments(),
      Service.countDocuments({ isActive: true }),
      
      // Testimonials
      Testimonial.countDocuments(),
      Testimonial.countDocuments({ isActive: true }),
      
      // Analytics
      Analytics.find({
        date: { $gte: startDate, $lte: endDate }
      }).sort({ date: -1 }).limit(30)
    ]);
    
    // Calculate analytics totals
    const analyticsTotal = recentAnalytics.reduce((acc, day) => ({
      pageViews: acc.pageViews + (day.pageViews || 0),
      uniqueVisitors: acc.uniqueVisitors + (day.uniqueVisitors || 0),
      sessions: acc.sessions + (day.sessions || 0),
      conversions: acc.conversions + (
        (day.conversions?.contactForms || 0) +
        (day.conversions?.newsletterSignups || 0) +
        (day.conversions?.phoneClicks || 0) +
        (day.conversions?.emailClicks || 0)
      )
    }), { pageViews: 0, uniqueVisitors: 0, sessions: 0, conversions: 0 });
    
    // Get recent activity (last 10 items from various collections)
    const [recentContacts, recentServiceRequests, recentSubscribers] = await Promise.all([
      Contact.find().sort({ createdAt: -1 }).limit(5).select('name email service status createdAt'),
      ServiceRequest.find().sort({ createdAt: -1 }).limit(5).select('service contact.name status priority createdAt'),
      Newsletter.find({ status: 'subscribed' }).sort({ subscribedAt: -1 }).limit(5).select('email source subscribedAt')
    ]);
    
    // Get contact status distribution
    const contactStatusStats = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);
    
    // Get service request priority distribution
    const serviceRequestPriorityStats = await ServiceRequest.aggregate([
      {
        $group: {
          _id: '$priority',
          count: { $sum: 1 }
        }
      }
    ]);
    
    // Get most popular services from contacts
    const popularServices = await Contact.aggregate([
      {
        $group: {
          _id: '$service',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 10
      }
    ]);
    
    // Calculate conversion rate
    const conversionRate = analyticsTotal.uniqueVisitors > 0 
      ? ((analyticsTotal.conversions / analyticsTotal.uniqueVisitors) * 100).toFixed(2)
      : 0;
    
    // Calculate growth rates (compare with previous period)
    const previousStartDate = new Date(startDate);
    previousStartDate.setDate(previousStartDate.getDate() - parseInt(period));
    
    const [previousContacts, previousSubscribers] = await Promise.all([
      Contact.countDocuments({
        createdAt: { $gte: previousStartDate, $lt: startDate }
      }),
      Newsletter.countDocuments({
        subscribedAt: { $gte: previousStartDate, $lt: startDate },
        status: 'subscribed'
      })
    ]);
    
    const contactGrowthRate = previousContacts > 0 
      ? (((newContacts - previousContacts) / previousContacts) * 100).toFixed(2)
      : 0;
    
    // Prepare dashboard data
    const dashboardData = {
      overview: {
        totalContacts,
        newContacts,
        contactGrowthRate: parseFloat(contactGrowthRate),
        totalProjects,
        activeProjects,
        totalBlogs,
        publishedBlogs,
        totalSubscribers,
        activeSubscribers,
        totalServiceRequests,
        pendingServiceRequests,
        totalServices,
        activeServices,
        totalTestimonials,
        activeTestimonials
      },
      analytics: {
        ...analyticsTotal,
        conversionRate: parseFloat(conversionRate),
        period: parseInt(period)
      },
      distributions: {
        contactStatus: contactStatusStats,
        serviceRequestPriority: serviceRequestPriorityStats,
        popularServices
      },
      recentActivity: {
        contacts: recentContacts,
        serviceRequests: recentServiceRequests,
        subscribers: recentSubscribers
      },
      chartData: {
        dailyAnalytics: recentAnalytics.reverse() // Reverse to get chronological order
      }
    };
    
    return NextResponse.json({
      success: true,
      data: dashboardData
    });
    
  } catch (error) {
    console.error('Dashboard GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}
