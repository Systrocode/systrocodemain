import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Newsletter } from '@/models';

// GET - Retrieve all newsletter subscriptions (with filtering and pagination)
export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const status = searchParams.get('status');
    const source = searchParams.get('source');
    const search = searchParams.get('search');
    
    // Build filter object
    const filter = {};
    if (status) filter.status = status;
    if (source) filter.source = source;
    if (search) {
      filter.email = { $regex: search, $options: 'i' };
    }
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const total = await Newsletter.countDocuments(filter);
    
    // Get subscriptions with pagination and sorting
    const subscriptions = await Newsletter
      .find(filter)
      .sort({ subscribedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return NextResponse.json({
      success: true,
      data: subscriptions,
      pagination: {
        current: page,
        total: totalPages,
        count: subscriptions.length,
        totalRecords: total,
        hasNext: hasNextPage,
        hasPrev: hasPrevPage
      }
    });
    
  } catch (error) {
    console.error('Newsletter GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch newsletter subscriptions' },
      { status: 500 }
    );
  }
}

// POST - Subscribe to newsletter
export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { email, source, interests } = body;
    
    // Validation
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    
    // Check if email already exists
    const existingSubscription = await Newsletter.findOne({ 
      email: email.toLowerCase().trim() 
    });
    
    if (existingSubscription) {
      if (existingSubscription.status === 'subscribed') {
        return NextResponse.json(
          { success: false, error: 'Email is already subscribed to newsletter' },
          { status: 409 }
        );
      } else {
        // Reactivate subscription
        existingSubscription.status = 'subscribed';
        existingSubscription.subscribedAt = new Date();
        existingSubscription.unsubscribedAt = undefined;
        existingSubscription.source = source || existingSubscription.source;
        existingSubscription.interests = interests || existingSubscription.interests;
        
        await existingSubscription.save();
        
        return NextResponse.json({
          success: true,
          message: 'Successfully reactivated newsletter subscription!',
          data: existingSubscription
        });
      }
    }
    
    // Create new subscription
    const newSubscription = new Newsletter({
      email: email.toLowerCase().trim(),
      source: source || 'website',
      interests: interests || []
    });
    
    const savedSubscription = await newSubscription.save();
    
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      data: savedSubscription
    }, { status: 201 });
    
  } catch (error) {
    console.error('Newsletter POST Error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { success: false, error: validationErrors.join(', ') },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}

// PUT - Update subscription (unsubscribe, change interests, etc.)
export async function PUT(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { id, email, status, interests } = body;
    
    if (!id && !email) {
      return NextResponse.json(
        { success: false, error: 'Subscription ID or email is required' },
        { status: 400 }
      );
    }
    
    // Find subscription by ID or email
    const query = id ? { _id: id } : { email: email.toLowerCase().trim() };
    const subscription = await Newsletter.findOne(query);
    
    if (!subscription) {
      return NextResponse.json(
        { success: false, error: 'Subscription not found' },
        { status: 404 }
      );
    }
    
    // Update subscription
    if (status === 'unsubscribed') {
      subscription.status = 'unsubscribed';
      subscription.unsubscribedAt = new Date();
    } else if (status === 'subscribed') {
      subscription.status = 'subscribed';
      subscription.subscribedAt = new Date();
      subscription.unsubscribedAt = undefined;
    }
    
    if (interests) {
      subscription.interests = interests;
    }
    
    const updatedSubscription = await subscription.save();
    
    const message = status === 'unsubscribed' 
      ? 'Successfully unsubscribed from newsletter' 
      : 'Subscription updated successfully';
    
    return NextResponse.json({
      success: true,
      message,
      data: updatedSubscription
    });
    
  } catch (error) {
    console.error('Newsletter PUT Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update subscription' },
      { status: 500 }
    );
  }
}

// DELETE - Delete subscription
export async function DELETE(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const email = searchParams.get('email');
    
    if (!id && !email) {
      return NextResponse.json(
        { success: false, error: 'Subscription ID or email is required' },
        { status: 400 }
      );
    }
    
    // Find and delete subscription by ID or email
    const query = id ? { _id: id } : { email: email.toLowerCase().trim() };
    const deletedSubscription = await Newsletter.findOneAndDelete(query);
    
    if (!deletedSubscription) {
      return NextResponse.json(
        { success: false, error: 'Subscription not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Subscription deleted successfully'
    });
    
  } catch (error) {
    console.error('Newsletter DELETE Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete subscription' },
      { status: 500 }
    );
  }
}
