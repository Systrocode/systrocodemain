import connectDB from '../src/lib/mongodb.js';  
import { Service, Testimonial, Contact, Blog, Settings } from '../src/models/index.js';

async function resetDatabase() {
  try {
    console.log('🚀 Starting database reset...');
    
    await connectDB();
    console.log('✅ Connected to MongoDB');

    // Drop all collections
    await Service.deleteMany({});
    await Testimonial.deleteMany({});
    await Contact.deleteMany({});
    await Blog.deleteMany({});
    await Settings.deleteMany({});

    console.log('🗑️ All collections cleared');

    // Reset auto-increment counters if needed
    console.log('🔄 Database reset completed successfully!');
    
  } catch (error) {
    console.error('❌ Database reset failed:', error);
  } finally {
    process.exit(0);
  }
}

// Run reset
resetDatabase();
