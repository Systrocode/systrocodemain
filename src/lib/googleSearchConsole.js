/**
 * Google Search Console Integration Library
 * Provides methods to fetch and analyze Search Console data
 */

class GoogleSearchConsoleAPI {
  constructor(credentials) {
    this.credentials = credentials;
    this.baseURL = 'https://searchconsole.googleapis.com/webmasters/v3';
    this.accessToken = null;
    this.tokenExpiry = null;
  }

  /**
   * Authenticate with Google Search Console API
   */
  async authenticate() {
    try {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
          grant_type: 'refresh_token'
        })
      });

      const data = await response.json();
      
      if (data.access_token) {
        this.accessToken = data.access_token;
        this.tokenExpiry = Date.now() + (data.expires_in * 1000);
        return true;
      }
      
      throw new Error('Failed to authenticate with Google Search Console');
    } catch (error) {
      console.error('GSC Authentication error:', error);
      return false;
    }
  }

  /**
   * Check if token is valid and refresh if needed
   */
  async ensureValidToken() {
    if (!this.accessToken || Date.now() >= this.tokenExpiry) {
      return await this.authenticate();
    }
    return true;
  }

  /**
   * Make authenticated request to GSC API
   */
  async makeRequest(endpoint, method = 'GET', body = null) {
    await this.ensureValidToken();

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method,
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null
    });

    if (!response.ok) {
      throw new Error(`GSC API error: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get list of sites in Search Console
   */
  async getSites() {
    try {
      const data = await this.makeRequest('/sites');
      return data.siteEntry || [];
    } catch (error) {
      console.error('Error fetching sites:', error);
      return [];
    }
  }

  /**
   * Get search analytics data
   */
  async getSearchAnalytics(siteUrl, options = {}) {
    const {
      startDate = this.getDateString(-30), // 30 days ago
      endDate = this.getDateString(-1),    // Yesterday
      dimensions = ['date'],
      searchType = 'web',
      rowLimit = 1000,
      startRow = 0
    } = options;

    const requestBody = {
      startDate,
      endDate,
      dimensions,
      searchType,
      rowLimit,
      startRow
    };

    try {
      const data = await this.makeRequest(`/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, 'POST', requestBody);
      return data;
    } catch (error) {
      console.error('Error fetching search analytics:', error);
      return { rows: [] };
    }
  }

  /**
   * Get performance overview (clicks, impressions, CTR, position)
   */
  async getPerformanceOverview(siteUrl, days = 30) {
    const data = await this.getSearchAnalytics(siteUrl, {
      startDate: this.getDateString(-days),
      endDate: this.getDateString(-1),
      dimensions: ['date']
    });

    if (!data.rows || data.rows.length === 0) {
      return {
        totalClicks: 0,
        totalImpressions: 0,
        averageCTR: 0,
        averagePosition: 0,
        dailyData: []
      };
    }

    const totalClicks = data.rows.reduce((sum, row) => sum + row.clicks, 0);
    const totalImpressions = data.rows.reduce((sum, row) => sum + row.impressions, 0);
    const averageCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
    const averagePosition = data.rows.reduce((sum, row) => sum + row.position, 0) / data.rows.length;

    return {
      totalClicks,
      totalImpressions,
      averageCTR: parseFloat(averageCTR.toFixed(2)),
      averagePosition: parseFloat(averagePosition.toFixed(1)),
      dailyData: data.rows.map(row => ({
        date: row.keys[0],
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: parseFloat(((row.clicks / row.impressions) * 100).toFixed(2)),
        position: parseFloat(row.position.toFixed(1))
      }))
    };
  }

  /**
   * Get top performing queries
   */
  async getTopQueries(siteUrl, days = 30, limit = 20) {
    const data = await this.getSearchAnalytics(siteUrl, {
      startDate: this.getDateString(-days),
      endDate: this.getDateString(-1),
      dimensions: ['query'],
      rowLimit: limit
    });

    return data.rows || [];
  }

  /**
   * Get top performing pages
   */
  async getTopPages(siteUrl, days = 30, limit = 20) {
    const data = await this.getSearchAnalytics(siteUrl, {
      startDate: this.getDateString(-days),
      endDate: this.getDateString(-1),
      dimensions: ['page'],
      rowLimit: limit
    });

    return data.rows || [];
  }

  /**
   * Get country-wise performance
   */
  async getCountryPerformance(siteUrl, days = 30) {
    const data = await this.getSearchAnalytics(siteUrl, {
      startDate: this.getDateString(-days),
      endDate: this.getDateString(-1),
      dimensions: ['country'],
      rowLimit: 50
    });

    return data.rows || [];
  }

  /**
   * Get device-wise performance
   */
  async getDevicePerformance(siteUrl, days = 30) {
    const data = await this.getSearchAnalytics(siteUrl, {
      startDate: this.getDateString(-days),
      endDate: this.getDateString(-1),
      dimensions: ['device'],
      rowLimit: 10
    });

    return data.rows || [];
  }

  /**
   * Get search appearance data (rich results)
   */
  async getSearchAppearance(siteUrl, days = 30) {
    const data = await this.getSearchAnalytics(siteUrl, {
      startDate: this.getDateString(-days),
      endDate: this.getDateString(-1),
      dimensions: ['searchAppearance'],
      rowLimit: 20
    });

    return data.rows || [];
  }

  /**
   * Get comprehensive analytics dashboard data
   */
  async getDashboardData(siteUrl, days = 30) {
    try {
      const [
        overview,
        topQueries,
        topPages,
        countries,
        devices,
        searchAppearance
      ] = await Promise.all([
        this.getPerformanceOverview(siteUrl, days),
        this.getTopQueries(siteUrl, days, 10),
        this.getTopPages(siteUrl, days, 10),
        this.getCountryPerformance(siteUrl, days),
        this.getDevicePerformance(siteUrl, days),
        this.getSearchAppearance(siteUrl, days)
      ]);

      return {
        overview,
        topQueries,
        topPages,
        countries,
        devices,
        searchAppearance,
        lastUpdated: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error;
    }
  }

  /**
   * Get URL inspection data
   */
  async inspectUrl(siteUrl, inspectionUrl) {
    try {
      const requestBody = {
        inspectionUrl: inspectionUrl,
        siteUrl: siteUrl
      };

      const data = await this.makeRequest('/urlInspection/index:inspect', 'POST', requestBody);
      return data;
    } catch (error) {
      console.error('Error inspecting URL:', error);
      return null;
    }
  }

  /**
   * Get sitemaps for a site
   */
  async getSitemaps(siteUrl) {
    try {
      const data = await this.makeRequest(`/sites/${encodeURIComponent(siteUrl)}/sitemaps`);
      return data.sitemap || [];
    } catch (error) {
      console.error('Error fetching sitemaps:', error);
      return [];
    }
  }

  /**
   * Submit sitemap
   */
  async submitSitemap(siteUrl, sitemapUrl) {
    try {
      await this.makeRequest(
        `/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`,
        'PUT'
      );
      return true;
    } catch (error) {
      console.error('Error submitting sitemap:', error);
      return false;
    }
  }

  /**
   * Get mobile usability issues
   */
  async getMobileUsabilityIssues(siteUrl) {
    try {
      const data = await this.makeRequest(`/sites/${encodeURIComponent(siteUrl)}/mobileFriendlyTest`);
      return data;
    } catch (error) {
      console.error('Error fetching mobile usability:', error);
      return null;
    }
  }

  /**
   * Utility function to get date string in YYYY-MM-DD format
   */
  getDateString(daysFromToday = 0) {
    const date = new Date();
    date.setDate(date.getDate() + daysFromToday);
    return date.toISOString().split('T')[0];
  }

  /**
   * Format number with commas
   */
  formatNumber(num) {
    return num.toLocaleString();
  }

  /**
   * Calculate percentage change
   */
  calculateChange(current, previous) {
    if (previous === 0) return current > 0 ? 100 : 0;
    return parseFloat((((current - previous) / previous) * 100).toFixed(1));
  }

  /**
   * Get comparison data for two periods
   */
  async getComparisonData(siteUrl, currentDays = 30, previousDays = 30) {
    const currentStart = this.getDateString(-currentDays);
    const currentEnd = this.getDateString(-1);
    const previousStart = this.getDateString(-(currentDays + previousDays));
    const previousEnd = this.getDateString(-currentDays);

    const [currentData, previousData] = await Promise.all([
      this.getSearchAnalytics(siteUrl, {
        startDate: currentStart,
        endDate: currentEnd,
        dimensions: ['date']
      }),
      this.getSearchAnalytics(siteUrl, {
        startDate: previousStart,
        endDate: previousEnd,
        dimensions: ['date']
      })
    ]);

    const current = this.aggregateData(currentData.rows || []);
    const previous = this.aggregateData(previousData.rows || []);

    return {
      current,
      previous,
      changes: {
        clicks: this.calculateChange(current.clicks, previous.clicks),
        impressions: this.calculateChange(current.impressions, previous.impressions),
        ctr: this.calculateChange(current.ctr, previous.ctr),
        position: this.calculateChange(previous.position, current.position) // Inverted for position (lower is better)
      }
    };
  }

  /**
   * Aggregate data from multiple rows
   */
  aggregateData(rows) {
    if (!rows || rows.length === 0) {
      return { clicks: 0, impressions: 0, ctr: 0, position: 0 };
    }

    const totalClicks = rows.reduce((sum, row) => sum + row.clicks, 0);
    const totalImpressions = rows.reduce((sum, row) => sum + row.impressions, 0);
    const averagePosition = rows.reduce((sum, row) => sum + row.position, 0) / rows.length;

    return {
      clicks: totalClicks,
      impressions: totalImpressions,
      ctr: totalImpressions > 0 ? parseFloat(((totalClicks / totalImpressions) * 100).toFixed(2)) : 0,
      position: parseFloat(averagePosition.toFixed(1))
    };
  }
}

// Create singleton instance
let gscInstance = null;

/**
 * Get Google Search Console instance
 */
export function getGSCInstance() {
  if (!gscInstance) {
    gscInstance = new GoogleSearchConsoleAPI();
  }
  return gscInstance;
}

/**
 * Mock data for development/testing
 */
export const mockGSCData = {
  overview: {
    totalClicks: 15420,
    totalImpressions: 285340,
    averageCTR: 5.4,
    averagePosition: 12.3,
    dailyData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      clicks: Math.floor(Math.random() * 800) + 200,
      impressions: Math.floor(Math.random() * 15000) + 5000,
      ctr: parseFloat((Math.random() * 10 + 2).toFixed(2)),
      position: parseFloat((Math.random() * 20 + 5).toFixed(1))
    }))
  },
  topQueries: [
    { keys: ['web development'], clicks: 1250, impressions: 18500, ctr: 6.76, position: 8.2 },
    { keys: ['ai automation'], clicks: 980, impressions: 15200, ctr: 6.45, position: 9.8 },
    { keys: ['data analysis'], clicks: 750, impressions: 12800, ctr: 5.86, position: 11.2 },
    { keys: ['cybersecurity'], clicks: 620, impressions: 11200, ctr: 5.54, position: 13.5 },
    { keys: ['seo services'], clicks: 580, impressions: 9800, ctr: 5.92, position: 10.8 }
  ],
  topPages: [
    { keys: ['/services/web-development'], clicks: 2100, impressions: 25000, ctr: 8.4, position: 6.2 },
    { keys: ['/services/ai-automation'], clicks: 1800, impressions: 22000, ctr: 8.18, position: 7.5 },
    { keys: ['/services/data-analysis'], clicks: 1200, impressions: 18000, ctr: 6.67, position: 9.8 },
    { keys: ['/'], clicks: 900, impressions: 35000, ctr: 2.57, position: 15.2 },
    { keys: ['/about'], clicks: 450, impressions: 8500, ctr: 5.29, position: 12.8 }
  ],
  countries: [
    { keys: ['USA'], clicks: 8500, impressions: 120000, ctr: 7.08, position: 10.2 },
    { keys: ['CAN'], clicks: 2200, impressions: 35000, ctr: 6.29, position: 11.8 },
    { keys: ['GBR'], clicks: 1800, impressions: 28000, ctr: 6.43, position: 12.5 },
    { keys: ['AUS'], clicks: 1200, impressions: 18000, ctr: 6.67, position: 13.2 },
    { keys: ['DEU'], clicks: 900, impressions: 15000, ctr: 6.0, position: 14.8 }
  ],
  devices: [
    { keys: ['DESKTOP'], clicks: 8500, impressions: 140000, ctr: 6.07, position: 11.2 },
    { keys: ['MOBILE'], clicks: 6200, impressions: 125000, ctr: 4.96, position: 13.8 },
    { keys: ['TABLET'], clicks: 720, impressions: 20340, ctr: 3.54, position: 15.2 }
  ],
  searchAppearance: [
    { keys: ['WEB_RESULT'], clicks: 14500, impressions: 270000, ctr: 5.37, position: 12.1 },
    { keys: ['RICH_RESULT'], clicks: 920, impressions: 15340, ctr: 6.0, position: 8.5 }
  ]
};

export default GoogleSearchConsoleAPI;
