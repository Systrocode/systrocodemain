This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
```bash
# Copy the environment template
cp .env.local.example .env.local

# Edit .env.local with your actual credentials
# NEVER commit .env.local to Git - it's automatically ignored
```

### 3. Run Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 🔧 Features

### ✅ Current Features
- **Responsive Design**: Mobile-first, modern UI with Tailwind CSS
- **Admin Dashboard**: Complete admin panel with analytics
- **Google Search Console Integration**: Live SEO analytics and data
- **MongoDB Integration**: Full database functionality
- **Contact Forms**: Integrated with Formspree
- **Performance Optimized**: Image optimization, lazy loading, AOS animations

### 🚀 Google Search Console Analytics
- Real-time search performance data
- Top queries and pages tracking  
- Country and device analytics
- Mock data system for development
- Complete OAuth 2.0 authentication

## 🔐 Security Features

### Environment Protection
- **Automatic Git Ignore**: `.env.local` files are never committed
- **Template System**: Secure placeholder templates provided
- **Credential Rotation**: Easy to update and rotate secrets
- **Production Ready**: Environment-based configuration

### Setup Security
1. **Never commit credentials** - Use `.env.local.example` as template
2. **Rotate exposed credentials** - Change passwords if ever exposed  
3. **Use environment variables** - Production should use platform env vars
4. **Monitor access logs** - Check for unauthorized database access

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/            # React components
│   ├── admin/            # Admin dashboard components
│   └── ...               # Public site components
├── lib/                  # Utility libraries
├── models/               # Database models
└── utils/                # Helper functions
```

## 🛠 Development

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier available)
- Optional: Google Cloud account for Search Console integration

### Local Development
```bash
# Install dependencies
npm install

# Copy environment template
cp .env.local.example .env.local

# Edit .env.local with your credentials
# Start development server
npm run dev
```

### Production Deployment
1. Set environment variables in your hosting platform
2. Ensure MongoDB Atlas allows connections from your server
3. Deploy to Vercel, Netlify, or your preferred platform

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
