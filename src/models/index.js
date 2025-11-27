import mongoose from 'mongoose';

// Service Schema
const serviceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
    enum: ['web-development', 'mobile-development', 'ui-ux-design', 'software-development', 'seo', 'ai-automation', 'data-analysis', 'cyber-security']
  },
  hero: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: { type: String, required: true }
  },
  features: [{
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }],
  portfolio: [{
    title: { type: String, required: true },
    image: { type: String, required: true },
    technologies: [String],
    description: String,
    link: String
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  avatar: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

// Enhanced Contact Form Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  service: {
    type: String,
    enum: [
      'web-development', 
      'mobile-development', 
      'ui-ux-design', 
      'software-development', 
      'seo', 
      'ai-automation', 
      'data-analysis', 
      'cyber-security',
      'digital-marketing',
      'social-media-marketing',
      'ppc-advertising',
      'content-marketing',
      'email-marketing',
      'conversion-rate-optimization',
      'marketing-analytics',
      'marketing-automation',
      'influencer-marketing',
      'facebook-instagram-ads',
      'google-ads-management',
      'search-engine-optimization',
      'web-design',
      'web-development-dynamic',
      'other'
    ],
    default: 'other'
  },
  budget: {
    type: String,
    enum: ['under-5k', '5k-10k', '10k-25k', '25k-50k', '50k-plus', 'not-specified'],
    default: 'not-specified'
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  source: {
    type: String,
    enum: ['website', 'social-media', 'referral', 'google', 'direct'],
    default: 'website'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'proposal-sent', 'closed-won', 'closed-lost', 'in-progress', 'completed'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  notes: [{
    content: String,
    addedBy: String,
    addedAt: { type: Date, default: Date.now }
  }],
  followUpDate: Date,
  contacted: { type: Boolean, default: false },
  contactedAt: Date,
  isRead: { type: Boolean, default: false },
  ipAddress: String,
  userAgent: String
}, {
  timestamps: true
});

// Create indexes for better performance
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ createdAt: -1 });
contactSchema.index({ service: 1 });

// Blog Post Schema (for future use)
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: {
    type: String,
    enum: ['web-development', 'mobile-development', 'ui-ux-design', 'software-development', 'seo', 'ai-automation', 'data-analysis', 'cyber-security', 'technology', 'business']
  },
  tags: [String],
  featuredImage: String,
  isPublished: { type: Boolean, default: false },
  publishedAt: Date,
  readTime: Number, // in minutes
  views: { type: Number, default: 0 }
}, {
  timestamps: true
});

// Settings Schema (for site-wide settings)
const settingsSchema = new mongoose.Schema({
  siteName: { type: String, default: 'Systrocode' },
  siteDescription: { type: String, default: 'Professional Web Development & Digital Solutions' },
  contactEmail: String,
  contactPhone: String,
  socialLinks: {
    facebook: String,
    twitter: String,
    linkedin: String,
    instagram: String,
    github: String
  },
  seoSettings: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  },
  isMaintenanceMode: { type: Boolean, default: false }
}, {
  timestamps: true
});

// Project Model (for portfolio/case studies)
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  content: {
    type: String,
    required: [true, 'Project content is required']
  },
  category: {
    type: String,
    required: true,
    enum: [
      'web-development',
      'mobile-app',
      'e-commerce',
      'digital-marketing',
      'seo-campaign',
      'social-media',
      'ai-automation',
      'data-analytics',
      'ui-ux-design',
      'software-development',
      'cyber-security'
    ]
  },
  technologies: [{
    type: String,
    trim: true
  }],
  client: {
    name: String,
    industry: String,
    website: String
  },
  images: [{
    url: String,
    alt: String,
    caption: String
  }],
  results: [{
    metric: String,
    value: String,
    description: String
  }],
  duration: {
    start: Date,
    end: Date,
    timeline: String // e.g., "3 months"
  },
  teamSize: Number,
  budget: {
    range: String,
    currency: { type: String, default: 'USD' }
  },
  status: {
    type: String,
    enum: ['planning', 'in-progress', 'completed', 'on-hold'],
    default: 'completed'
  },
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 }
}, {
  timestamps: true
});

projectSchema.index({ slug: 1 });
projectSchema.index({ category: 1 });
projectSchema.index({ featured: 1 });
projectSchema.index({ published: 1 });

// Newsletter Subscription Model
const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  status: {
    type: String,
    enum: ['subscribed', 'unsubscribed', 'bounced'],
    default: 'subscribed'
  },
  source: {
    type: String,
    enum: ['website', 'blog', 'social-media', 'manual'],
    default: 'website'
  },
  interests: [{
    type: String,
    enum: [
      'web-development',
      'mobile-development', 
      'digital-marketing',
      'seo',
      'ai-automation',
      'business-tips'
    ]
  }],
  subscribedAt: { type: Date, default: Date.now },
  unsubscribedAt: Date,
  lastEmailSent: Date,
  emailsSent: { type: Number, default: 0 },
  emailsOpened: { type: Number, default: 0 },
  linksClicked: { type: Number, default: 0 }
}, {
  timestamps: true
});

newsletterSchema.index({ email: 1 });
newsletterSchema.index({ status: 1 });

// Analytics Model (for tracking website metrics)
const analyticsSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  pageViews: { type: Number, default: 0 },
  uniqueVisitors: { type: Number, default: 0 },
  sessions: { type: Number, default: 0 },
  bounceRate: { type: Number, default: 0 },
  avgSessionDuration: { type: Number, default: 0 },
  topPages: [{
    path: String,
    views: Number,
    title: String
  }],
  trafficSources: {
    organic: { type: Number, default: 0 },
    direct: { type: Number, default: 0 },
    referral: { type: Number, default: 0 },
    social: { type: Number, default: 0 },
    email: { type: Number, default: 0 },
    paid: { type: Number, default: 0 }
  },
  devices: {
    desktop: { type: Number, default: 0 },
    mobile: { type: Number, default: 0 },
    tablet: { type: Number, default: 0 }
  },
  browsers: [{
    name: String,
    count: Number
  }],
  countries: [{
    code: String,
    name: String,
    count: Number
  }],
  conversions: {
    contactForms: { type: Number, default: 0 },
    newsletterSignups: { type: Number, default: 0 },
    phoneClicks: { type: Number, default: 0 },
    emailClicks: { type: Number, default: 0 }
  }
}, {
  timestamps: true
});

analyticsSchema.index({ date: -1 });

// Service Request Model (for specific service inquiries)
const serviceRequestSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
    enum: [
      'web-development',
      'mobile-development',
      'digital-marketing',
      'seo',
      'social-media-marketing',
      'ppc-advertising',
      'content-marketing',
      'email-marketing',
      'ai-automation',
      'data-analysis',
      'cyber-security'
    ]
  },
  contact: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    company: String
  },
  projectDetails: {
    timeline: String,
    budget: String,
    requirements: String,
    goals: String,
    currentSolution: String
  },
  status: {
    type: String,
    enum: ['new', 'reviewing', 'proposal-requested', 'proposal-sent', 'closed'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  assignedTo: String,
  estimatedValue: Number,
  followUpDate: Date,
  notes: [{
    content: String,
    addedBy: String,
    addedAt: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true
});

serviceRequestSchema.index({ service: 1 });
serviceRequestSchema.index({ status: 1 });
serviceRequestSchema.index({ createdAt: -1 });

// Export models
const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);
const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
const Settings = mongoose.models.Settings || mongoose.model('Settings', settingsSchema);
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
const Newsletter = mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema);
const Analytics = mongoose.models.Analytics || mongoose.model('Analytics', analyticsSchema);
const ServiceRequest = mongoose.models.ServiceRequest || mongoose.model('ServiceRequest', serviceRequestSchema);

export { 
  Service, 
  Testimonial, 
  Contact, 
  Blog, 
  Settings,
  Project,
  Newsletter,
  Analytics,
  ServiceRequest
};
