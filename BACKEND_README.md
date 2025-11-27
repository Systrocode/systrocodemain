# Systrocode Backend API Documentation

## Overview
This comprehensive backend system provides full CRUD operations for all business entities including contacts, projects, blog posts, newsletters, analytics, service requests, services, and testimonials.

## Features
✅ **Complete Database Models** - Enhanced schemas with validation, indexes, and relationships  
✅ **RESTful API Endpoints** - Full CRUD operations for all entities  
✅ **Advanced Filtering** - Search, pagination, sorting, and filtering capabilities  
✅ **Email Notifications** - Automated emails for contacts and newsletter subscriptions  
✅ **Analytics Dashboard** - Comprehensive business metrics and insights  
✅ **Data Validation** - Server-side validation with detailed error messages  
✅ **Error Handling** - Standardized error responses and logging  
✅ **Performance Optimized** - Database indexes and efficient queries  

## API Endpoints

### Dashboard
- `GET /api/dashboard` - Get comprehensive dashboard statistics

### Contacts
- `GET /api/contact` - Get contacts with filtering and pagination
- `POST /api/contact` - Create new contact submission
- `PUT /api/contact` - Update contact (status, notes, follow-up)
- `DELETE /api/contact` - Delete contact

### Projects
- `GET /api/projects` - Get projects with filtering and pagination
- `POST /api/projects` - Create new project
- `PUT /api/projects` - Update project
- `DELETE /api/projects` - Delete project

### Blog Posts
- `GET /api/blog` - Get blog posts with filtering and pagination
- `POST /api/blog` - Create new blog post
- `PUT /api/blog` - Update blog post
- `DELETE /api/blog` - Delete blog post

### Newsletter
- `GET /api/newsletter` - Get newsletter subscriptions
- `POST /api/newsletter` - Subscribe to newsletter
- `PUT /api/newsletter` - Update subscription (unsubscribe, change interests)
- `DELETE /api/newsletter` - Delete subscription

### Analytics
- `GET /api/analytics` - Get analytics data with date ranges
- `POST /api/analytics` - Create/update analytics data
- `PUT /api/analytics` - Update analytics data
- `DELETE /api/analytics` - Delete analytics data

### Service Requests
- `GET /api/service-requests` - Get service requests with filtering
- `POST /api/service-requests` - Create new service request
- `PUT /api/service-requests` - Update service request
- `DELETE /api/service-requests` - Delete service request

### Services
- `GET /api/services` - Get services with filtering and pagination
- `POST /api/services` - Create new service
- `PUT /api/services` - Update service
- `DELETE /api/services` - Delete service

### Testimonials
- `GET /api/testimonials` - Get testimonials with filtering
- `POST /api/testimonials` - Create new testimonial
- `PUT /api/testimonials` - Update testimonial
- `DELETE /api/testimonials` - Delete testimonial

## Database Models

### Contact Model
Enhanced contact form submissions with:
- Contact information (name, email, phone, company)
- Service and budget preferences
- Status tracking and priority levels
- Notes and follow-up dates
- Source tracking and analytics

### Project Model
Portfolio and case study management:
- Project details and descriptions
- Client information and results
- Technology stack and team size
- Duration and budget tracking
- Featured and published status

### Blog Model
Content management system:
- SEO-optimized blog posts
- Author information and categories
- Tags and featured images
- Publishing workflow and metrics
- Reading time calculation

### Newsletter Model
Email subscription management:
- Subscription status tracking
- Interest preferences
- Email analytics and engagement
- Source attribution

### Analytics Model
Website performance tracking:
- Daily metrics and KPIs
- Traffic sources and devices
- Conversion tracking
- Geographic and browser data

### Service Request Model
Detailed service inquiries:
- Service-specific requirements
- Project details and timelines
- Priority and assignment tracking
- Estimated value and notes

## Environment Configuration

Create a `.env.local` file with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/systrocode
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/systrocode

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=admin@systrocode.com

# Security
JWT_SECRET=your-super-secret-jwt-key
API_KEY=your-api-key-for-admin-operations

# Optional Analytics
GOOGLE_ANALYTICS_ID=GA-XXXXX-X
```

## Getting Started

1. **Install Dependencies**
```bash
npm install mongodb mongoose nodemailer
```

2. **Set Up MongoDB**
   - Install MongoDB locally OR use MongoDB Atlas
   - Create database named 'systrocode'
   - Update MONGODB_URI in .env.local

3. **Configure Email (Optional)**
   - Set up SMTP credentials for notifications
   - Update email configuration in .env.local

4. **Start Development Server**
```bash
npm run dev
```

5. **Test API Endpoints**
   - Use tools like Postman or curl
   - Check http://localhost:3000/api/contact

## API Usage Examples

### Create Contact
```javascript
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Tech Corp",
  "service": "web-development",
  "budget": "10k-25k",
  "message": "Need a new website for our business"
}
```

### Get Contacts with Filtering
```javascript
GET /api/contact?page=1&limit=10&status=new&service=web-development&search=john
```

### Subscribe to Newsletter
```javascript
POST /api/newsletter
{
  "email": "subscriber@example.com",
  "source": "website",
  "interests": ["web-development", "digital-marketing"]
}
```

### Create Blog Post
```javascript
POST /api/blog
{
  "title": "Getting Started with Next.js",
  "excerpt": "A comprehensive guide to Next.js development",
  "content": "Full blog content here...",
  "author": {
    "name": "Jane Developer",
    "email": "jane@systrocode.com"
  },
  "category": "web-development",
  "tags": ["nextjs", "react", "development"],
  "published": true
}
```

## Features in Detail

### Advanced Filtering
All endpoints support comprehensive filtering:
- **Pagination**: `page`, `limit` parameters
- **Search**: Full-text search across relevant fields
- **Status Filtering**: Filter by status, priority, category
- **Date Ranges**: Filter by creation dates
- **Sorting**: Automatic sorting by relevance and date

### Email Notifications
Automated email system:
- Contact form submissions notify admin
- Newsletter subscriptions send welcome emails
- Configurable SMTP settings
- HTML email templates

### Analytics Dashboard
Comprehensive business metrics:
- Contact conversion rates
- Popular services analysis
- Growth rate calculations
- Recent activity feeds
- Statistical distributions

### Data Validation
Robust server-side validation:
- Email format validation
- Required field checking
- Character length limits
- Enum value validation
- Duplicate prevention

### Error Handling
Standardized error responses:
- Detailed validation messages
- Appropriate HTTP status codes
- Error logging and debugging
- Graceful failure handling

## Deployment Notes

### MongoDB Setup
1. **Local Development**: Install MongoDB Community Edition
2. **Production**: Use MongoDB Atlas for managed hosting
3. **Indexes**: Automatically created for performance optimization

### Email Configuration
1. **Gmail**: Use App Passwords for SMTP authentication
2. **SendGrid**: Professional email service for production
3. **Postmark**: Transactional email service alternative

### Performance Optimization
- Database indexes on frequently queried fields
- Pagination to limit response sizes
- Lean queries for faster data retrieval
- Connection pooling with MongoDB

### Security Considerations
- Input sanitization to prevent XSS
- Email validation to prevent spam
- Rate limiting (configurable)
- Environment variable protection

## Support and Maintenance

### Monitoring
- Error logging with detailed stack traces
- Database connection monitoring
- Email delivery status tracking

### Backup and Recovery
- Regular database backups recommended
- Environment variable backup
- API endpoint documentation

### Scaling Considerations
- Horizontal scaling with MongoDB sharding
- Load balancing for high traffic
- CDN integration for static assets
- Caching strategies for frequently accessed data

This backend system provides a solid foundation for managing all aspects of the Systrocode business operations with professional-grade features and scalability.
