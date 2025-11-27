import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Blog } from '@/models';

// GET - Retrieve all blog posts (with filtering and pagination)
export async function GET(request) {
  try {
    const db = await connectDB();
    
    // Return empty data during build process
    if (!db) {
      return NextResponse.json({
        success: true,
        data: [],
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
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const category = searchParams.get('category');
    const published = searchParams.get('published');
    const featured = searchParams.get('featured');
    const search = searchParams.get('search');
    const tag = searchParams.get('tag');
    
    // Build filter object
    const filter = {};
    if (category) filter.category = category;
    if (published !== null) filter.published = published === 'true';
    if (featured !== null) filter.featured = featured === 'true';
    if (tag) filter.tags = { $in: [tag] };
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { 'author.name': { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const total = await Blog.countDocuments(filter);
    
    // Get blog posts with pagination and sorting
    const blogs = await Blog
      .find(filter)
      .sort({ featured: -1, publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return NextResponse.json({
      success: true,
      data: blogs,
      pagination: {
        current: page,
        total: totalPages,
        count: blogs.length,
        totalRecords: total,
        hasNext: hasNextPage,
        hasPrev: hasPrevPage
      }
    });
    
  } catch (error) {
    console.error('Blog GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST - Create new blog post
export async function POST(request) {
  try {
    const db = await connectDB();
    
    // Return mock response during build process
    if (!db) {
      return NextResponse.json({
        success: true,
        message: 'Blog post would be created successfully (build mode)',
        data: {}
      }, { status: 201 });
    }
    
    const body = await request.json();
    const { title, excerpt, content, author, category, tags, featuredImage, seo, readTime, published } = body;
    
    // Validation
    if (!title || !excerpt || !content || !author?.name || !category) {
      return NextResponse.json(
        { success: false, error: 'Title, excerpt, content, author name, and category are required' },
        { status: 400 }
      );
    }
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return NextResponse.json(
        { success: false, error: 'A blog post with this title already exists' },
        { status: 409 }
      );
    }
    
    // Calculate read time if not provided (average 200 words per minute)
    const calculatedReadTime = readTime || Math.ceil(content.split(' ').length / 200);
    
    // Create new blog post
    const newBlog = new Blog({
      title: title.trim(),
      slug,
      excerpt: excerpt.trim(),
      content: content.trim(),
      author: {
        name: author.name.trim(),
        email: author.email?.trim(),
        avatar: author.avatar,
        bio: author.bio?.trim()
      },
      category,
      tags: tags || [],
      featuredImage: featuredImage || {},
      seo: seo || {},
      readTime: calculatedReadTime,
      published: published || false,
      publishedAt: published ? new Date() : null
    });
    
    const savedBlog = await newBlog.save();
    
    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully!',
      data: savedBlog
    }, { status: 201 });
    
  } catch (error) {
    console.error('Blog POST Error:', error);
    
    // Handle duplicate slug error
    if (error.code === 11000 && error.keyPattern?.slug) {
      return NextResponse.json(
        { success: false, error: 'A blog post with this slug already exists' },
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
      { success: false, error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}

// PUT - Update blog post
export async function PUT(request) {
  try {
    const db = await connectDB();
    
    // Return mock response during build process
    if (!db) {
      return NextResponse.json({
        success: true,
        message: 'Blog post would be updated successfully (build mode)',
        data: {}
      });
    }
    
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Blog post ID is required' },
        { status: 400 }
      );
    }
    
    // If title is being updated, regenerate slug
    if (updateData.title) {
      const newSlug = updateData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      // Check if new slug conflicts with existing blog (excluding current)
      const existingBlog = await Blog.findOne({ 
        slug: newSlug, 
        _id: { $ne: id } 
      });
      
      if (existingBlog) {
        return NextResponse.json(
          { success: false, error: 'A blog post with this title already exists' },
          { status: 409 }
        );
      }
      
      updateData.slug = newSlug;
    }
    
    // Update published date if publishing for the first time
    if (updateData.published === true) {
      const currentBlog = await Blog.findById(id);
      if (currentBlog && !currentBlog.published) {
        updateData.publishedAt = new Date();
      }
    }
    
    // Recalculate read time if content is updated
    if (updateData.content && !updateData.readTime) {
      updateData.readTime = Math.ceil(updateData.content.split(' ').length / 200);
    }
    
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedBlog) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Blog post updated successfully',
      data: updatedBlog
    });
    
  } catch (error) {
    console.error('Blog PUT Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog post
export async function DELETE(request) {
  try {
    const db = await connectDB();
    
    // Return mock response during build process
    if (!db) {
      return NextResponse.json({
        success: true,
        message: 'Blog post would be deleted successfully (build mode)'
      });
    }
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Blog post ID is required' },
        { status: 400 }
      );
    }
    
    const deletedBlog = await Blog.findByIdAndDelete(id);
    
    if (!deletedBlog) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully'
    });
    
  } catch (error) {
    console.error('Blog DELETE Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
