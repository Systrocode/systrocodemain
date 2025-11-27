// Enhanced API functions with full CRUD operations
const API_BASE_URL = typeof window !== 'undefined' 
  ? `${window.location.origin}/api`
  : process.env.NODE_ENV === 'production' 
    ? 'https://your-domain.com/api' 
    : 'http://localhost:3000/api';

class ApiService {
  // Generic API call method
  async apiCall(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      throw error;
    }
  }

  // Services API
  async getServices() {
    return this.apiCall('/services');
  }

  async getService(type) {
    return this.apiCall(`/services/${type}`);
  }

  async createService(serviceData) {
    return this.apiCall('/services', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  }

  async updateService(type, serviceData) {
    return this.apiCall(`/services/${type}`, {
      method: 'PUT',
      body: JSON.stringify(serviceData),
    });
  }

  async deleteService(type) {
    return this.apiCall(`/services/${type}`, {
      method: 'DELETE',
    });
  }

  // Testimonials API
  async getTestimonials() {
    return this.apiCall('/testimonials');
  }

  async createTestimonial(testimonialData) {
    return this.apiCall('/testimonials', {
      method: 'POST',
      body: JSON.stringify(testimonialData),
    });
  }

  async updateTestimonial(id, testimonialData) {
    return this.apiCall(`/testimonials/${id}`, {
      method: 'PUT',
      body: JSON.stringify(testimonialData),
    });
  }

  async deleteTestimonial(id) {
    return this.apiCall(`/testimonials/${id}`, {
      method: 'DELETE',
    });
  }

  // Contact API
  async getContacts() {
    return this.apiCall('/contact');
  }

  async submitContact(contactData) {
    return this.apiCall('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  async deleteContact(id) {
    return this.apiCall(`/contact/${id}`, {
      method: 'DELETE',
    });
  }

  // Blog API (new)
  async getBlogs() {
    return this.apiCall('/blog');
  }

  async createBlog(blogData) {
    return this.apiCall('/blog', {
      method: 'POST',
      body: JSON.stringify(blogData),
    });
  }

  async updateBlog(id, blogData) {
    return this.apiCall(`/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blogData),
    });
  }

  async deleteBlog(id) {
    return this.apiCall(`/blog/${id}`, {
      method: 'DELETE',
    });
  }

  // Settings API (new)
  async getSettings() {
    return this.apiCall('/settings');
  }

  async updateSettings(settingsData) {
    return this.apiCall('/settings', {
      method: 'PUT',
      body: JSON.stringify(settingsData),
    });
  }

  // Analytics API (new)
  async getAnalytics() {
    return this.apiCall('/analytics');
  }
}

// Create singleton instance
const apiService = new ApiService();

// Export individual methods for convenience
export const getServices = (...args) => apiService.getServices(...args);
export const getService = (...args) => apiService.getService(...args);
export const createService = (...args) => apiService.createService(...args);
export const updateService = (...args) => apiService.updateService(...args);
export const deleteService = (...args) => apiService.deleteService(...args);
export const getTestimonials = (...args) => apiService.getTestimonials(...args);
export const createTestimonial = (...args) => apiService.createTestimonial(...args);
export const updateTestimonial = (...args) => apiService.updateTestimonial(...args);
export const deleteTestimonial = (...args) => apiService.deleteTestimonial(...args);
export const getContacts = (...args) => apiService.getContacts(...args);
export const submitContact = (...args) => apiService.submitContact(...args);
export const deleteContact = (...args) => apiService.deleteContact(...args);
export const getBlogs = (...args) => apiService.getBlogs(...args);
export const createBlog = (...args) => apiService.createBlog(...args);
export const updateBlog = (...args) => apiService.updateBlog(...args);
export const deleteBlog = (...args) => apiService.deleteBlog(...args);
export const getSettings = (...args) => apiService.getSettings(...args);
export const updateSettings = (...args) => apiService.updateSettings(...args);
export const getAnalytics = (...args) => apiService.getAnalytics(...args);

// Export the service instance
export default apiService;
