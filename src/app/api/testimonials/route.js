import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Testimonial } from '@/models';

// GET - Retrieve all testimonials (with filtering and pagination)
export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const isActive = searchParams.get('isActive');
    const rating = searchParams.get('rating');
    const search = searchParams.get('search');
    
    // Build filter object
    const filter = {};
    if (isActive !== null) filter.isActive = isActive === 'true';
    if (rating) filter.rating = { $gte: parseInt(rating) };
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } },
        { position: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const total = await Testimonial.countDocuments(filter);
    
    // Get testimonials with pagination and sorting
    const testimonials = await Testimonial
      .find(filter)
      .sort({ isActive: -1, rating: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return NextResponse.json({
      success: true,
      data: testimonials,
      pagination: {
        current: page,
        total: totalPages,
        count: testimonials.length,
        totalRecords: total,
        hasNext: hasNextPage,
        hasPrev: hasPrevPage
      }
    });
    
  } catch (error) {
    console.error('Testimonials GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

// POST - Create new testimonial
export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, position, company, message, rating, avatar, isActive } = body;
    
    // Validation
    if (!name || !position || !company || !message || !avatar) {
      return NextResponse.json(
        { success: false, error: 'Name, position, company, message, and avatar are required' },
        { status: 400 }
      );
    }
    
    // Validate rating
    if (rating && (rating < 1 || rating > 5)) {
      return NextResponse.json(
        { success: false, error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }
    
    // Create new testimonial
    const newTestimonial = new Testimonial({
      name: name.trim(),
      position: position.trim(),
      company: company.trim(),
      message: message.trim(),
      rating: rating || 5,
      avatar: avatar.trim(),
      isActive: isActive !== false // Default to true unless explicitly false
    });
    
    const savedTestimonial = await newTestimonial.save();
    
    return NextResponse.json({
      success: true,
      message: 'Testimonial created successfully!',
      data: savedTestimonial
    }, { status: 201 });
    
  } catch (error) {
    console.error('Testimonial POST Error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { success: false, error: validationErrors.join(', ') },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}

// PUT - Update testimonial
export async function PUT(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Testimonial ID is required' },
        { status: 400 }
      );
    }
    
    // Validate rating if being updated
    if (updateData.rating && (updateData.rating < 1 || updateData.rating > 5)) {
      return NextResponse.json(
        { success: false, error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }
    
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedTestimonial) {
      return NextResponse.json(
        { success: false, error: 'Testimonial not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Testimonial updated successfully',
      data: updatedTestimonial
    });
    
  } catch (error) {
    console.error('Testimonial PUT Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update testimonial' },
      { status: 500 }
    );
  }
}

// DELETE - Delete testimonial
export async function DELETE(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Testimonial ID is required' },
        { status: 400 }
      );
    }
    
    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);
    
    if (!deletedTestimonial) {
      return NextResponse.json(
        { success: false, error: 'Testimonial not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Testimonial deleted successfully'
    });
    
  } catch (error) {
    console.error('Testimonial DELETE Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete testimonial' },
      { status: 500 }
    );
  }
}
