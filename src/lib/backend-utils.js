// Backend utility functions
import nodemailer from 'nodemailer';

// Email configuration
export const createEmailTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Send notification email for new contact
export const sendContactNotification = async (contact) => {
  try {
    if (!process.env.SMTP_USER || !process.env.NOTIFICATION_EMAIL) {
      console.log('Email configuration not set, skipping notification');
      return;
    }

    const transporter = createEmailTransporter();
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Contact Form Submission - ${contact.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${contact.company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${contact.service}</p>
        <p><strong>Budget:</strong> ${contact.budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
        <p><strong>Submitted at:</strong> ${new Date(contact.createdAt).toLocaleString()}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent successfully');
  } catch (error) {
    console.error('Failed to send contact notification email:', error);
  }
};

// Send welcome email for newsletter subscription
export const sendWelcomeEmail = async (subscription) => {
  try {
    if (!process.env.SMTP_USER) {
      console.log('Email configuration not set, skipping welcome email');
      return;
    }

    const transporter = createEmailTransporter();
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: subscription.email,
      subject: 'Welcome to Systrocode Newsletter!',
      html: `
        <h2>Welcome to Systrocode Newsletter!</h2>
        <p>Thank you for subscribing to our newsletter. You'll receive updates about:</p>
        <ul>
          <li>Latest web development trends</li>
          <li>Digital marketing insights</li>
          <li>Technology news and tips</li>
          <li>Exclusive offers and services</li>
        </ul>
        <p>You can unsubscribe at any time by clicking the unsubscribe link in our emails.</p>
        <p>Best regards,<br>The Systrocode Team</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully');
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }
};

// Generate slug from string
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Calculate reading time for blog posts (words per minute)
export const calculateReadingTime = (content, wordsPerMinute = 200) => {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

// Sanitize user input to prevent XSS
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Generate pagination metadata
export const getPaginationMeta = (page, limit, total) => {
  const totalPages = Math.ceil(total / limit);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;
  
  return {
    current: page,
    total: totalPages,
    count: Math.min(limit, total - (page - 1) * limit),
    totalRecords: total,
    hasNext: hasNextPage,
    hasPrev: hasPrevPage,
    nextPage: hasNextPage ? page + 1 : null,
    prevPage: hasPrevPage ? page - 1 : null
  };
};

// Format error response
export const formatErrorResponse = (error, defaultMessage = 'An error occurred') => {
  console.error('API Error:', error);
  
  // Handle MongoDB validation errors
  if (error.name === 'ValidationError') {
    const validationErrors = Object.values(error.errors).map(err => err.message);
    return {
      success: false,
      error: validationErrors.join(', '),
      type: 'validation'
    };
  }
  
  // Handle MongoDB duplicate key errors
  if (error.code === 11000) {
    const field = Object.keys(error.keyPattern)[0];
    return {
      success: false,
      error: `A record with this ${field} already exists`,
      type: 'duplicate'
    };
  }
  
  // Handle MongoDB cast errors
  if (error.name === 'CastError') {
    return {
      success: false,
      error: 'Invalid ID format',
      type: 'cast'
    };
  }
  
  // Default error response
  return {
    success: false,
    error: error.message || defaultMessage,
    type: 'general'
  };
};

// Rate limiting helper
export const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
  standardHeaders: true,
  legacyHeaders: false
};

// API response helpers
export const successResponse = (data, message = 'Success', statusCode = 200) => {
  return Response.json({
    success: true,
    message,
    data
  }, { status: statusCode });
};

export const errorResponse = (error, statusCode = 500) => {
  const formattedError = typeof error === 'string' 
    ? { success: false, error } 
    : formatErrorResponse(error);
    
  return Response.json(formattedError, { status: statusCode });
};

// Database query helpers
export const buildSearchQuery = (searchTerm, fields) => {
  if (!searchTerm) return {};
  
  return {
    $or: fields.map(field => ({
      [field]: { $regex: searchTerm, $options: 'i' }
    }))
  };
};

export const buildDateRangeQuery = (startDate, endDate, field = 'createdAt') => {
  const query = {};
  
  if (startDate || endDate) {
    query[field] = {};
    if (startDate) query[field].$gte = new Date(startDate);
    if (endDate) query[field].$lte = new Date(endDate);
  }
  
  return query;
};

// File upload helpers (for future use)
export const allowedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
export const maxFileSize = 5 * 1024 * 1024; // 5MB

export const validateFileUpload = (file) => {
  if (!file) return { valid: false, error: 'No file provided' };
  
  if (!allowedImageTypes.includes(file.type)) {
    return { valid: false, error: 'Invalid file type. Only JPEG, PNG, and WebP are allowed' };
  }
  
  if (file.size > maxFileSize) {
    return { valid: false, error: 'File too large. Maximum size is 5MB' };
  }
  
  return { valid: true };
};

// API key validation (for future use)
export const validateApiKey = (apiKey) => {
  if (!process.env.API_KEY) return true; // No API key configured
  return apiKey === process.env.API_KEY;
};

// Export all utilities
export default {
  createEmailTransporter,
  sendContactNotification,
  sendWelcomeEmail,
  generateSlug,
  isValidEmail,
  calculateReadingTime,
  sanitizeInput,
  getPaginationMeta,
  formatErrorResponse,
  rateLimitConfig,
  successResponse,
  errorResponse,
  buildSearchQuery,
  buildDateRangeQuery,
  validateFileUpload,
  validateApiKey
};
