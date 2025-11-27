// Temporarily disabled MongoDB connection for deployment
// import connectDB from '@/lib/mongodb';
// import { Service } from '@/models';
import { NextResponse } from 'next/server';

// GET /api/services/[type] - Get specific service by type
export async function GET(request, { params }) {
  try {
    // Temporarily disabled MongoDB for deployment
    // await connectDB();
    
    const { type } = await params;
    
    // Mock service data for deployment
    const mockServices = {
      'web-development': {
        _id: '1',
        type: 'web-development',
        title: 'Web Development',
        description: 'Custom web applications and websites',
        features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization'],
        isActive: true
      },
      'web-design': {
        _id: '2',
        type: 'web-design',
        title: 'Web Design',
        description: 'Beautiful and functional web designs',
        features: ['UI/UX Design', 'Brand Identity', 'User Experience'],
        isActive: true
      },
      'seo': {
        _id: '3',
        type: 'seo',
        title: 'SEO Services', 
        description: 'Search engine optimization services',
        features: ['Keyword Research', 'On-page SEO', 'Technical SEO'],
        isActive: true
      },
      'social-media-marketing': {
        _id: '4',
        type: 'social-media-marketing',
        title: 'Social Media Marketing',
        description: 'Comprehensive social media strategy and management',
        features: ['Content Strategy', 'Community Management', 'Social Advertising', 'Analytics'],
        isActive: true
      },
      'email-marketing': {
        _id: '5',
        type: 'email-marketing',
        title: 'Email Marketing',
        description: 'Strategic email campaigns and automation',
        features: ['Campaign Strategy', 'Automation Setup', 'List Management', 'Analytics'],
        isActive: true
      },
      'content-marketing': {
        _id: '6',
        type: 'content-marketing',
        title: 'Content Marketing',
        description: 'Create valuable content that drives engagement',
        features: ['Content Strategy', 'Blog Writing', 'Video Content', 'Distribution'],
        isActive: true
      },
      'ppc-advertising': {
        _id: '7',
        type: 'ppc-advertising',
        title: 'PPC Advertising',
        description: 'Pay-per-click advertising campaigns',
        features: ['Google Ads', 'Social Media Ads', 'Landing Pages', 'Optimization'],
        isActive: true
      },
      'influencer-marketing': {
        _id: '8',
        type: 'influencer-marketing',
        title: 'Influencer Marketing',
        description: 'Authentic partnerships with content creators',
        features: ['Influencer Discovery', 'Campaign Strategy', 'Content Collaboration', 'Performance Tracking'],
        isActive: true
      },
      'digital-marketing': {
        _id: '9',
        type: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Comprehensive digital marketing solutions',
        features: ['Multi-Channel Strategy', 'Analytics', 'Optimization', 'ROI Tracking'],
        isActive: true
      }
    };
    
    const service = mockServices[type];
    
    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: service
    });
  } catch (error) {
    console.error('Service API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch service' },
      { status: 500 }
    );
  }
}

// PUT /api/services/[type] - Update specific service
export async function PUT(request, { params }) {
  try {
    // Temporarily disabled MongoDB for deployment
    // await connectDB();
    
    const { type } = await params;
    const data = await request.json();
    
    // Mock service update
    const service = {
      _id: Date.now().toString(),
      type,
      ...data,
      updatedAt: new Date()
    };
    
    return NextResponse.json({
      success: true,
      data: service,
      message: 'Service updated successfully'
    });
  } catch (error) {
    console.error('Update Service Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE /api/services/[type] - Delete specific service
export async function DELETE(request, { params }) {
  try {
    // Temporarily disabled MongoDB for deployment
    // await connectDB();
    
    const { type } = await params;
    
    // Mock service deletion
    return NextResponse.json({
      success: true,
      message: 'Service deleted successfully'
    });
  } catch (error) {
    console.error('Delete Service Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
