# MongoDB Integration Setup Guide

## 🚀 Quick Start

Your Next.js website is now ready for MongoDB integration! Here's everything you need to know:

## 📋 Prerequisites

1. **MongoDB Atlas Account** (Free)
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free account
   - Create a new cluster (M0 Sandbox - Free forever)

## 🔧 Setup Steps

### 1. MongoDB Atlas Configuration

1. **Create Database User:**
   - Go to Database Access → Add New Database User
   - Choose "Password" authentication
   - Username: `systrocode-admin` (or your choice)
   - Password: Generate a secure password
   - User Privileges: Read and write to any database

2. **Configure Network Access:**
   - Go to Network Access → Add IP Address
   - Add `0.0.0.0/0` (Allow access from anywhere) for development
   - For production, add your server's specific IP

3. **Get Connection String:**
   - Go to Clusters → Connect → Connect your application
   - Copy the connection string
   - It looks like: `mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority`

### 2. Environment Configuration

Update your `.env.local` file:

```env
# Replace with your actual MongoDB connection string
MONGODB_URI=mongodb+srv://systrocode-admin:YOUR_PASSWORD@your-cluster.mongodb.net/systrocode?retryWrites=true&w=majority

# Database name
DB_NAME=systrocode

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here

# Formspree (existing)
NEXT_PUBLIC_FORMSPREE_FORM_ID=xrbzborb
```

### 3. Database Setup

Run the following commands to set up your database:

```bash
# Seed the database with your existing content
npm run db:migrate

# Or reset and re-seed if needed
npm run db:reset && npm run db:migrate
```

## 📊 What's Been Created

### 1. **Database Models** (`src/models/index.js`)
- **Services**: All your service pages (web-dev, mobile-dev, etc.)
- **Testimonials**: Client reviews and feedback
- **Contacts**: Form submissions and inquiries
- **Blog**: Future blog posts and articles
- **Settings**: Site-wide configuration

### 2. **API Routes** (`src/app/api/`)
- `GET /api/services` - Fetch all services
- `GET /api/services/[type]` - Fetch specific service
- `POST /api/services` - Create new service
- `PUT /api/services/[type]` - Update service
- `DELETE /api/services/[type]` - Delete service
- `GET /api/testimonials` - Fetch testimonials
- `POST /api/testimonials` - Add testimonial
- `GET /api/contact` - Fetch contacts
- `POST /api/contact` - Submit contact form

### 3. **Frontend Integration** (`src/lib/api.js`)
- Ready-to-use API functions
- Error handling and loading states
- Automatic fallback to static data

### 4. **Admin Panel** (`/admin-login`)
- Simplified admin dashboard with login
- Basic admin interface
- Lightweight and secure

## 🎯 Usage Examples

### Fetch Dynamic Content
```javascript
import { getService } from '@/lib/api';

// In your component
const [serviceData, setServiceData] = useState(null);

useEffect(() => {
  const loadService = async () => {
    try {
      const response = await getService('web-development');
      setServiceData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  loadService();
}, []);
```

### Submit Contact Form
```javascript
import { submitContact } from '@/lib/api';

const handleSubmit = async (formData) => {
  try {
    const response = await submitContact(formData);
    alert('Thank you! We will get back to you soon.');
  } catch (error) {
    alert('Error submitting form: ' + error.message);
  }
};
```

## 🔄 Migration Strategy

### Phase 1: Hybrid Approach (Current)
- Keep existing static data as fallback
- Gradually move pages to dynamic content
- Zero downtime migration

### Phase 2: Full Dynamic
- All content served from database
- Admin panel for content management
- Remove static data files

## 🛠️ Available Commands

```bash
# Development
npm run dev                 # Start development server

# Database Management
npm run db:migrate         # Populate database with existing data
npm run db:seed           # Same as migrate (alias)
npm run db:reset          # Clear all database content

# Production
npm run build             # Build for production
npm run start             # Start production server
```

## 🔍 Testing Your Setup

1. **Start Development Server:**
   ```bash
   npm run dev
   ```

2. **Seed Database:**
   ```bash
   npm run db:migrate
   ```

3. **Test API Endpoints:**
   - Visit `http://localhost:3000/api/services`
   - Should return JSON with your services

4. **Test Admin Panel:**
   - Visit `http://localhost:3000/admin-login`
   - Should show your services and testimonials

5. **Test Dynamic Page:**
   - Visit `http://localhost:3000/web-development-dynamic`
   - Should load content from database

## 🚀 Production Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect Vercel to your repository
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
```env
MONGODB_URI=your-production-mongodb-uri
DB_NAME=systrocode
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-secret
```

## 📈 Next Steps

1. **Content Management:**
   - Use the admin panel to manage content
   - Add new services and testimonials

2. **SEO Enhancement:**
   - Dynamic meta tags from database
   - Structured data for better search visibility

3. **Performance:**
   - Image optimization
   - Caching strategies
   - CDN integration

4. **Features to Add:**
   - User authentication
   - Blog functionality
   - Analytics dashboard
   - Email notifications

## 🆘 Troubleshooting

### Common Issues:

1. **Connection Error:**
   - Check your `MONGODB_URI` in `.env.local`
   - Verify network access in MongoDB Atlas
   - Ensure database user has correct permissions

2. **API Not Working:**
   - Check console for errors
   - Verify API routes exist
   - Test with tools like Postman

3. **Data Not Loading:**
   - Run `npm run db:migrate` to seed data
   - Check admin panel to verify data exists
   - Look for console errors in browser

### Need Help?
- Check the console for error messages
- Verify your `.env.local` file
- Test API endpoints directly
- Use the admin panel to check data

## 🎉 Success!

Your website is now powered by MongoDB! You have:
- ✅ Dynamic content management
- ✅ Scalable architecture
- ✅ Admin panel for easy updates
- ✅ API endpoints for future expansion
- ✅ Production-ready setup

Ready to take your website to the next level! 🚀
