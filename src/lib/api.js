// API utility functions for frontend

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
export const getContacts = (...args) => apiService.getContacts(...args);
export const submitContact = (...args) => apiService.submitContact(...args);

// Export the service instance
export default apiService;
