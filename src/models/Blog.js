import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be longer than 200 characters']
  },
  slug: {
    type: String,
    required: [true, 'Blog slug is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  excerpt: {
    type: String,
    required: [true, 'Blog excerpt is required'],
    trim: true,
    maxlength: [500, 'Excerpt cannot be longer than 500 characters']
  },
  content: {
    type: String,
    required: [true, 'Blog content is required']
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  category: {
    type: String,
    required: [true, 'Blog category is required'],
    trim: true
  },
  tags: {
    type: String,
    default: ''
  },
  featuredImage: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    default: 'Admin User'
  },
  seoTitle: {
    type: String,
    trim: true,
    maxlength: [60, 'SEO title cannot be longer than 60 characters']
  },
  seoDescription: {
    type: String,
    trim: true,
    maxlength: [160, 'SEO description cannot be longer than 160 characters']
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  publishedAt: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create indexes for better query performance
BlogSchema.index({ status: 1 });
BlogSchema.index({ category: 1 });
BlogSchema.index({ publishedAt: -1 });
BlogSchema.index({ createdAt: -1 });

// Text search index
BlogSchema.index({
  title: 'text',
  excerpt: 'text',
  content: 'text',
  tags: 'text'
});

// Pre-save middleware to update timestamps
BlogSchema.pre('save', function(next) {
  if (this.isModified() && !this.isNew) {
    this.updatedAt = new Date();
  }
  next();
});

// Virtual for formatted publish date
BlogSchema.virtual('formattedPublishDate').get(function() {
  if (this.publishedAt) {
    return this.publishedAt.toLocaleDateString();
  }
  return null;
});

// Virtual for reading time estimation
BlogSchema.virtual('readingTime').get(function() {
  const wordsPerMinute = 200;
  const wordCount = this.content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
});

// Virtual for tag array
BlogSchema.virtual('tagArray').get(function() {
  return this.tags ? this.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
});

// Method to increment views
BlogSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

// Method to increment likes
BlogSchema.methods.incrementLikes = function() {
  this.likes += 1;
  return this.save();
};

// Static method to get published blogs
BlogSchema.statics.getPublished = function() {
  return this.find({ status: 'published', publishedAt: { $lte: new Date() } })
    .sort({ publishedAt: -1 });
};

// Static method to get popular blogs
BlogSchema.statics.getPopular = function(limit = 5) {
  return this.find({ status: 'published' })
    .sort({ views: -1, likes: -1 })
    .limit(limit);
};

// Static method to get recent blogs
BlogSchema.statics.getRecent = function(limit = 5) {
  return this.find({ status: 'published' })
    .sort({ publishedAt: -1 })
    .limit(limit);
};

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
