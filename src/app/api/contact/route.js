import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Contact } from '@/models';

// GET - Retrieve all contacts (with filtering and pagination)
export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const status = searchParams.get('status');
    const service = searchParams.get('service');
    const priority = searchParams.get('priority');
    const search = searchParams.get('search');
    
    // Build filter object
    const filter = {};
    if (status) filter.status = status;
    if (service) filter.service = service;
    if (priority) filter.priority = priority;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const total = await Contact.countDocuments(filter);
    
    // Get contacts with pagination and sorting
    const contacts = await Contact
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return NextResponse.json({
      success: true,
      data: contacts,
      pagination: {
        current: page,
        total: totalPages,
        count: contacts.length,
        totalRecords: total,
        hasNext: hasNextPage,
        hasPrev: hasPrevPage
      }
    });
    
  } catch (error) {
    console.error('Contact GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}

// POST - Create new contact submission
export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, email, phone, company, service, budget, message, source } = body;
    
    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
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
    
    // Get client IP and user agent for tracking
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ipAddress = forwardedFor?.split(',')[0] || realIp || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Create new contact
    const newContact = new Contact({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim(),
      company: company?.trim(),
      service: service || 'other',
      budget: budget || 'not-specified',
      message: message.trim(),
      source: source || 'website',
      ipAddress,
      userAgent
    });
    
    const savedContact = await newContact.save();
    
    // Send response (exclude sensitive data)
    const responseData = {
      _id: savedContact._id,
      name: savedContact.name,
      email: savedContact.email,
      service: savedContact.service,
      status: savedContact.status,
      createdAt: savedContact.createdAt
    };
    
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: responseData
    }, { status: 201 });
    
  } catch (error) {
    console.error('Contact POST Error:', error);
    
    // Handle duplicate email error
    if (error.code === 11000 && error.keyPattern?.email) {
      return NextResponse.json(
        { success: false, error: 'A contact with this email already exists' },
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
      { success: false, error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

// PUT - Update contact (status, notes, etc.)
export async function PUT(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { id, status, priority, notes, followUpDate, contacted } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Contact ID is required' },
        { status: 400 }
      );
    }
    
    // Build update object
    const updateData = {};
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (followUpDate) updateData.followUpDate = new Date(followUpDate);
    if (typeof contacted === 'boolean') {
      updateData.contacted = contacted;
      if (contacted) updateData.contactedAt = new Date();
    }
    
    // Handle notes addition
    if (notes) {
      updateData.$push = {
        notes: {
          content: notes,
          addedBy: 'system', // In a real app, this would be the user ID
          addedAt: new Date()
        }
      };
    }
    
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedContact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contact updated successfully',
      data: updatedContact
    });
    
  } catch (error) {
    console.error('Contact PUT Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update contact' },
      { status: 500 }
    );
  }
}

// DELETE - Delete contact
export async function DELETE(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Contact ID is required' },
        { status: 400 }
      );
    }
    
    const deletedContact = await Contact.findByIdAndDelete(id);
    
    if (!deletedContact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contact deleted successfully'
    });
    
  } catch (error) {
    console.error('Contact DELETE Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete contact' },
      { status: 500 }
    );
  }
}
