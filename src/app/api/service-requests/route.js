import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { ServiceRequest } from '@/models';

// GET - Retrieve all service requests (with filtering and pagination)
export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const service = searchParams.get('service');
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const assignedTo = searchParams.get('assignedTo');
    const search = searchParams.get('search');
    
    // Build filter object
    const filter = {};
    if (service) filter.service = service;
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (assignedTo) filter.assignedTo = assignedTo;
    if (search) {
      filter.$or = [
        { 'contact.name': { $regex: search, $options: 'i' } },
        { 'contact.email': { $regex: search, $options: 'i' } },
        { 'contact.company': { $regex: search, $options: 'i' } },
        { 'projectDetails.requirements': { $regex: search, $options: 'i' } },
        { 'projectDetails.goals': { $regex: search, $options: 'i' } }
      ];
    }
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const total = await ServiceRequest.countDocuments(filter);
    
    // Get service requests with pagination and sorting
    const serviceRequests = await ServiceRequest
      .find(filter)
      .sort({ priority: 1, createdAt: -1 }) // High priority first, then newest
      .skip(skip)
      .limit(limit)
      .lean();
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return NextResponse.json({
      success: true,
      data: serviceRequests,
      pagination: {
        current: page,
        total: totalPages,
        count: serviceRequests.length,
        totalRecords: total,
        hasNext: hasNextPage,
        hasPrev: hasPrevPage
      }
    });
    
  } catch (error) {
    console.error('ServiceRequest GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch service requests' },
      { status: 500 }
    );
  }
}

// POST - Create new service request
export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { service, contact, projectDetails, priority, estimatedValue, assignedTo } = body;
    
    // Validation
    if (!service || !contact?.name || !contact?.email) {
      return NextResponse.json(
        { success: false, error: 'Service, contact name, and contact email are required' },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(contact.email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    
    // Create new service request
    const newServiceRequest = new ServiceRequest({
      service,
      contact: {
        name: contact.name.trim(),
        email: contact.email.toLowerCase().trim(),
        phone: contact.phone?.trim(),
        company: contact.company?.trim()
      },
      projectDetails: projectDetails || {},
      priority: priority || 'medium',
      estimatedValue: estimatedValue || 0,
      assignedTo: assignedTo?.trim()
    });
    
    const savedServiceRequest = await newServiceRequest.save();
    
    return NextResponse.json({
      success: true,
      message: 'Service request created successfully!',
      data: savedServiceRequest
    }, { status: 201 });
    
  } catch (error) {
    console.error('ServiceRequest POST Error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { success: false, error: validationErrors.join(', ') },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to create service request' },
      { status: 500 }
    );
  }
}

// PUT - Update service request
export async function PUT(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { id, status, priority, assignedTo, estimatedValue, followUpDate, notes, projectDetails } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Service request ID is required' },
        { status: 400 }
      );
    }
    
    // Build update object
    const updateData = {};
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (assignedTo) updateData.assignedTo = assignedTo;
    if (estimatedValue !== undefined) updateData.estimatedValue = estimatedValue;
    if (followUpDate) updateData.followUpDate = new Date(followUpDate);
    if (projectDetails) updateData.projectDetails = { ...projectDetails };
    
    // Handle notes addition
    if (notes) {
      updateData.$push = {
        notes: {
          content: notes,
          addedBy: assignedTo || 'system', // In a real app, this would be the user ID
          addedAt: new Date()
        }
      };
    }
    
    const updatedServiceRequest = await ServiceRequest.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedServiceRequest) {
      return NextResponse.json(
        { success: false, error: 'Service request not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Service request updated successfully',
      data: updatedServiceRequest
    });
    
  } catch (error) {
    console.error('ServiceRequest PUT Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update service request' },
      { status: 500 }
    );
  }
}

// DELETE - Delete service request
export async function DELETE(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Service request ID is required' },
        { status: 400 }
      );
    }
    
    const deletedServiceRequest = await ServiceRequest.findByIdAndDelete(id);
    
    if (!deletedServiceRequest) {
      return NextResponse.json(
        { success: false, error: 'Service request not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Service request deleted successfully'
    });
    
  } catch (error) {
    console.error('ServiceRequest DELETE Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete service request' },
      { status: 500 }
    );
  }
}
