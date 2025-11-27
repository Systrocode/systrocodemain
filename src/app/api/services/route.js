import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Service } from '@/models';

// GET - Retrieve all services (with filtering and pagination)
export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const type = searchParams.get('type');
    const isActive = searchParams.get('isActive');
    const search = searchParams.get('search');
    
    // Build filter object
    const filter = {};
    if (type) filter.type = type;
    if (isActive !== null) filter.isActive = isActive === 'true';
    if (search) {
      filter.$or = [
        { 'hero.title': { $regex: search, $options: 'i' } },
        { 'hero.subtitle': { $regex: search, $options: 'i' } },
        { type: { $regex: search, $options: 'i' } },
        { 'features.title': { $regex: search, $options: 'i' } },
        { 'features.description': { $regex: search, $options: 'i' } }
      ];
    }
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const total = await Service.countDocuments(filter);
    
    // Get services with pagination and sorting
    const services = await Service
      .find(filter)
      .sort({ isActive: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return NextResponse.json({
      success: true,
      data: services,
      pagination: {
        current: page,
        total: totalPages,
        count: services.length,
        totalRecords: total,
        hasNext: hasNextPage,
        hasPrev: hasPrevPage
      }
    });
    
  } catch (error) {
    console.error('Services GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

// POST - Create new service
export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { type, hero, features, portfolio, isActive } = body;
    
    // Validation
    if (!type || !hero?.title || !hero?.subtitle || !hero?.image) {
      return NextResponse.json(
        { success: false, error: 'Type, hero title, subtitle, and image are required' },
        { status: 400 }
      );
    }
    
    // Check if service type already exists
    const existingService = await Service.findOne({ type });
    if (existingService) {
      return NextResponse.json(
        { success: false, error: 'A service with this type already exists' },
        { status: 409 }
      );
    }
    
    // Create new service
    const newService = new Service({
      type: type.trim(),
      hero: {
        title: hero.title.trim(),
        subtitle: hero.subtitle.trim(),
        image: hero.image.trim()
      },
      features: features || [],
      portfolio: portfolio || [],
      isActive: isActive !== false // Default to true unless explicitly false
    });
    
    const savedService = await newService.save();
    
    return NextResponse.json({
      success: true,
      message: 'Service created successfully!',
      data: savedService
    }, { status: 201 });
    
  } catch (error) {
    console.error('Service POST Error:', error);
    
    // Handle duplicate type error
    if (error.code === 11000 && error.keyPattern?.type) {
      return NextResponse.json(
        { success: false, error: 'A service with this type already exists' },
        { status: 409 }
      );
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { success: false, error: validationErrors.join(', ') },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to create service' },
      { status: 500 }
    );
  }
}

// PUT - Update service
export async function PUT(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Service ID is required' },
        { status: 400 }
      );
    }
    
    // If type is being updated, check for conflicts
    if (updateData.type) {
      const existingService = await Service.findOne({ 
        type: updateData.type, 
        _id: { $ne: id } 
      });
      
      if (existingService) {
        return NextResponse.json(
          { success: false, error: 'A service with this type already exists' },
          { status: 409 }
        );
      }
    }
    
    const updatedService = await Service.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedService) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Service updated successfully',
      data: updatedService
    });
    
  } catch (error) {
    console.error('Service PUT Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE - Delete service
export async function DELETE(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Service ID is required' },
        { status: 400 }
      );
    }
    
    const deletedService = await Service.findByIdAndDelete(id);
    
    if (!deletedService) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Service deleted successfully'
    });
    
  } catch (error) {
    console.error('Service DELETE Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
