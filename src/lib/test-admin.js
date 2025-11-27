// Quick test to verify admin panel functionality
console.log('Testing admin panel API calls...');

import { getServices, getTestimonials, getContacts } from '@/lib/api';

async function testAdminAPIs() {
  try {
    console.log('Testing getServices...');
    const services = await getServices();
    console.log('Services:', services?.data?.length || 0, 'items');

    console.log('Testing getTestimonials...');
    const testimonials = await getTestimonials();
    console.log('Testimonials:', testimonials?.data?.length || 0, 'items');

    console.log('Testing getContacts...');
    const contacts = await getContacts();
    console.log('Contacts:', contacts?.data?.length || 0, 'items');

    console.log('All APIs working correctly!');
  } catch (error) {
    console.error('API test failed:', error);
  }
}

// Export for use in components
export { testAdminAPIs };
