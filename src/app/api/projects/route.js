import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Project } from '@/models';

// GET - Retrieve all projects (with filtering and pagination)
export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const published = searchParams.get('published');
    const search = searchParams.get('search');
    
    // Build filter object
    const filter = {};
    if (category) filter.category = category;
    if (featured !== null) filter.featured = featured === 'true';
    if (published !== null) filter.published = published === 'true';
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { 'client.name': { $regex: search, $options: 'i' } },
        { technologies: { $in: [new RegExp(search, 'i')] } }
      ];
    }
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const total = await Project.countDocuments(filter);
    
    // Get projects with pagination and sorting
    const projects = await Project
      .find(filter)
      .sort({ featured: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return NextResponse.json({
      success: true,
      data: projects,
      pagination: {
        current: page,
        total: totalPages,
        count: projects.length,
        totalRecords: total,
        hasNext: hasNextPage,
        hasPrev: hasPrevPage
      }
    });
    
  } catch (error) {
    console.error('Projects GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST - Create new project
export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { title, description, content, category, technologies, client, images, results, duration, teamSize, budget } = body;
    
    // Validation
    if (!title || !description || !content || !category) {
      return NextResponse.json(
        { success: false, error: 'Title, description, content, and category are required' },
        { status: 400 }
      );
    }
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    // Check if slug already exists
    const existingProject = await Project.findOne({ slug });
    if (existingProject) {
      return NextResponse.json(
        { success: false, error: 'A project with this title already exists' },
        { status: 409 }
      );
    }
    
    // Create new project
    const newProject = new Project({
      title: title.trim(),
      slug,
      description: description.trim(),
      content: content.trim(),
      category,
      technologies: technologies || [],
      client: client || {},
      images: images || [],
      results: results || [],
      duration: duration || {},
      teamSize: teamSize || 1,
      budget: budget || {}
    });
    
    const savedProject = await newProject.save();
    
    return NextResponse.json({
      success: true,
      message: 'Project created successfully!',
      data: savedProject
    }, { status: 201 });
    
  } catch (error) {
    console.error('Project POST Error:', error);
    
    // Handle duplicate slug error
    if (error.code === 11000 && error.keyPattern?.slug) {
      return NextResponse.json(
        { success: false, error: 'A project with this slug already exists' },
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
      { success: false, error: 'Failed to create project' },
      { status: 500 }
    );
  }
}

// PUT - Update project
export async function PUT(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Project ID is required' },
        { status: 400 }
      );
    }
    
    // If title is being updated, regenerate slug
    if (updateData.title) {
      const newSlug = updateData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      // Check if new slug conflicts with existing project (excluding current)
      const existingProject = await Project.findOne({ 
        slug: newSlug, 
        _id: { $ne: id } 
      });
      
      if (existingProject) {
        return NextResponse.json(
          { success: false, error: 'A project with this title already exists' },
          { status: 409 }
        );
      }
      
      updateData.slug = newSlug;
    }
    
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedProject) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Project updated successfully',
      data: updatedProject
    });
    
  } catch (error) {
    console.error('Project PUT Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

// DELETE - Delete project
export async function DELETE(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Project ID is required' },
        { status: 400 }
      );
    }
    
    const deletedProject = await Project.findByIdAndDelete(id);
    
    if (!deletedProject) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Project deleted successfully'
    });
    
  } catch (error) {
    console.error('Project DELETE Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
