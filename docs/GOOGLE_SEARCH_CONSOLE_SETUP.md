# Google Search Console Integration Setup Guide

This guide explains how to set up Google Search Console integration to display live analytics in your admin dashboard.

## 🎯 Overview

The integration provides:
- **Live Search Console Data**: Real-time clicks, impressions, CTR, and position data
- **Top Performing Content**: Most clicked queries and pages
- **Geographic & Device Analytics**: Performance by country and device type
- **Trend Analysis**: Period-over-period comparisons with change indicators
- **Interactive Dashboard**: Full analytics interface with filtering and search

## 🔧 Setup Instructions

### Step 1: Google Cloud Console Setup

1. **Create/Select Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Note your project ID

2. **Enable Search Console API**
   - In Google Cloud Console, go to "APIs & Services" > "Library"
   - Search for "Google Search Console API"
   - Click "Enable"

3. **Create OAuth 2.0 Credentials**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Set application type to "Web application"
   - Add authorized redirect URIs:
     - `https://developers.google.com/oauthplayground`
     - Your production domain callback URL
   - Save the Client ID and Client Secret

### Step 2: Get Refresh Token

1. **OAuth 2.0 Playground**
   - Go to [Google's OAuth 2.0 Playground](https://developers.google.com/oauthplayground)
   - Click the gear icon (⚙️) and select "Use your own OAuth credentials"
   - Enter your Client ID and Client Secret
   - Select "Google Search Console API v1" scope:
     - `https://www.googleapis.com/auth/webmasters.readonly`
   - Click "Authorize APIs"
   - Complete the authorization flow
   - Click "Exchange authorization code for tokens"
   - Copy the **Refresh Token** (you'll need this)

### Step 3: Environment Configuration

1. **Update Environment Variables**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local with your credentials
   ```

2. **Add Your Credentials to .env.local**
   ```env
   # Google Search Console Integration
   GOOGLE_CLIENT_ID=your_google_client_id_here
   GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   GOOGLE_REFRESH_TOKEN=your_refresh_token_here
   
   # Your website URL in Google Search Console
   GSC_SITE_URL=https://yourdomain.com
   
   # Set to 'false' to use real API data
   GSC_USE_MOCK_DATA=false
   ```

### Step 4: Verify Search Console Property

1. **Add Your Website to Search Console**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your website as a property
   - Verify ownership using one of the available methods:
     - HTML file upload
     - HTML meta tag
     - Google Analytics
     - Google Tag Manager
     - Domain name provider

2. **Wait for Data Collection**
   - Google Search Console needs time to collect data
   - Initial data appears within 1-3 days
   - Full historical data may take longer

## 📊 Features Available

### Dashboard Overview
- **Real-time KPI Cards**: Live clicks, impressions, CTR, and position data
- **Search Console Widget**: Quick overview with top queries
- **Trend Indicators**: Period-over-period change indicators

### Full Analytics Page
- **Performance Overview**: Detailed metrics with time range selection
- **Top Queries Analysis**: Most searched terms driving traffic
- **Page Performance**: Top-performing landing pages
- **Geographic Insights**: Performance by country
- **Device Analytics**: Desktop vs Mobile vs Tablet performance
- **Search Appearance**: Rich results and feature appearances

### API Endpoints

#### Get Analytics Data
```javascript
GET /api/admin/analytics/gsc?days=30&mock=false
```
**Response:**
```json
{
  "success": true,
  "data": {
    "overview": {
      "totalClicks": 15420,
      "totalImpressions": 285340,
      "averageCTR": 5.4,
      "averagePosition": 12.3,
      "dailyData": [...]
    },
    "topQueries": [...],
    "topPages": [...],
    "countries": [...],
    "devices": [...],
    "comparison": {
      "changes": {
        "clicks": 12.5,
        "impressions": 8.2,
        "ctr": 0.4,
        "position": -1.2
      }
    }
  }
}
```

#### Perform Actions
```javascript
POST /api/admin/analytics/gsc
{
  "action": "refresh",
  "siteUrl": "https://yourdomain.com"
}
```

Available actions:
- `refresh`: Update analytics data
- `inspect_url`: Inspect specific URL
- `submit_sitemap`: Submit sitemap to Google
- `get_sitemaps`: List submitted sitemaps

## 🚀 Usage

### Accessing Analytics

1. **Dashboard Overview**
   - Login to admin dashboard
   - View Search Console data in KPI cards
   - See quick overview widget

2. **Full Analytics Page**
   - Navigate to "Analytics" in sidebar
   - Select time range (7, 30, or 90 days)
   - Browse different tabs for detailed insights

3. **Real-time Updates**
   - Click "Refresh" to update data
   - Data automatically refreshes on page load
   - Loading states show during API calls

### Development Mode

For development and testing:
```env
GSC_USE_MOCK_DATA=true
```
This uses realistic mock data without requiring API setup.

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit .env files to version control
   - Use different credentials for development/production
   - Rotate refresh tokens periodically

2. **API Quotas**
   - Google Search Console API has daily quotas
   - Implement caching for production use
   - Monitor API usage in Google Cloud Console

3. **Data Privacy**
   - Search Console data may contain sensitive information
   - Implement proper access controls
   - Consider data retention policies

## 🐛 Troubleshooting

### Common Issues

1. **"Failed to authenticate" Error**
   - Check Client ID and Secret are correct
   - Verify refresh token is still valid
   - Ensure Search Console API is enabled

2. **"No data available" Error**
   - Website may not be verified in Search Console
   - Data collection may still be in progress
   - Check if site URL matches exactly

3. **API Quota Exceeded**
   - Reduce refresh frequency
   - Implement caching layer
   - Monitor usage in Google Cloud Console

### Debug Mode

Enable detailed logging:
```javascript
// In your API route
console.log('GSC Debug:', {
  authenticated: gsc.accessToken ? 'Yes' : 'No',
  siteUrl,
  error: error.message
});
```

## 📈 Performance Optimization

1. **Caching Strategy**
   - Cache GSC data for 15-30 minutes
   - Use Redis or database for persistent cache
   - Implement background refresh jobs

2. **Error Handling**
   - Graceful fallbacks to mock data
   - Retry mechanisms for failed requests
   - User-friendly error messages

3. **Rate Limiting**
   - Implement request throttling
   - Batch multiple API calls
   - Use exponential backoff

## 🎨 Customization

### Adding New Metrics
```javascript
// In googleSearchConsole.js
async getCustomMetric(siteUrl, options) {
  // Your custom implementation
}
```

### Custom Visualizations
```javascript
// In Analytics.js component
const CustomChart = ({ data }) => {
  // Your chart implementation
};
```

## 📞 Support

For issues with the integration:
1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Test with mock data first (`GSC_USE_MOCK_DATA=true`)
4. Check Google Cloud Console for API errors

The integration is designed to work seamlessly with fallbacks to ensure your dashboard remains functional even if the Google Search Console API is unavailable.
