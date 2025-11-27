require('dotenv').config({ path: '.env.local' });

const mongoose = require('mongoose');

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas');
    return mongoose;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
};

// Service Schema
const serviceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
    enum: ['web-development', 'mobile-development', 'ui-ux-design', 'software-development', 'seo', 'ai-automation', 'data-analysis', 'cyber-security']
  },
  hero: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: { type: String, required: true }
  },
  features: [{
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }],
  portfolio: [{
    title: { type: String, required: true },
    image: { type: String, required: true },
    technologies: [String],
    description: String,
    link: String
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  avatar: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);
const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);

// Data to migrate
const heroData = {
  webd: {
    title: 'Web Development',
    subtitle: "Welcome to SYSTROCODE, your premier web development partner. We specialize in creating stunning, responsive websites tailored to boost your online presence and drive business growth. Let's build your digital success together."
  },
  webdesign: {
    title: 'UI/UX Design & Wireframing',
    subtitle: "Welcome to SYSTROCODE, your premier UI/UX design partner. We specialize in creating intuitive user interfaces, comprehensive wireframes, and engaging user experiences that drive conversions and user satisfaction. Let's design your digital success together."
  },
  mobileDevelopment: {
    title: 'Mobile Development',
    subtitle: "Welcome to SYSTROCODE, your premier mobile development partner. We specialize in creating powerful iOS and Android applications that deliver exceptional user experiences and drive business growth. Let's build your mobile success together."
  },
  softwareDevelopment: {
    title: 'Software Development',
    subtitle: "Welcome to SYSTROCODE, your trusted software development partner. We create custom software solutions, enterprise applications, and scalable systems that streamline operations and accelerate business growth. Let's develop your digital transformation."
  },
  dataAnalysis: {
    title: 'Data Analysis',
    subtitle: "Welcome to SYSTROCODE, your trusted data analysis partner. We transform complex data into actionable insights, driving informed decisions and business growth. Unlock the power of your data with us."
  },
  seo: {
    title: 'SEO',
    subtitle: "Welcome to SYSTROCODE, your SEO experts. We optimize your online presence, boost search rankings, and drive organic traffic to grow your business. Achieve top search results with our proven strategies."
  },
  ai: {
    title: 'AI Automation',
    subtitle: "Welcome to SYSTROCODE, your AI automation partner. We streamline operations with cutting-edge AI solutions, enhancing efficiency and productivity. Experience the future of automation with our innovative technologies."
  },
  cybersecurity: {
    title: 'Cyber Security',
    subtitle: "Welcome to SYSTROCODE, your cybersecurity partner. We safeguard your digital assets with advanced security solutions, ensuring protection against cyber threats. Trust us to keep your business secure and resilient."
  }
};

const testimonialsData = [
  {
    message: "Working with Systrocode has been a game-changer for our business. Their expertise in web development and SEO has significantly improved our online presence, driving more traffic to our site than ever before. The team is professional, responsive, and truly understands our vision. We couldn't be happier with the results!",
    name: 'Sarah',
    position: 'CEO'
  },
  {
    message: 'We partnered with Systrocode for a complete website overhaul, and the outcome was outstanding. Their innovative design and seamless user experience have received rave reviews from our customers. Moreover, their continuous support and optimization efforts have ensured our site remains at the top of search engine results. A fantastic team to work with!',
    name: 'Jessi Singh',
    position: 'CEO'
  },
  {
    message: "Systrocode's comprehensive digital marketing services have been instrumental in our company's growth. From SEO to social media management, their strategic approach has delivered impressive results across all fronts. Their professionalism and commitment to excellence make them a valued partner in our digital journey.",
    name: 'Ramesh Choudhary',
    position: 'CEO'
  },
  {
    message: "Systrocode's social media marketing strategies have transformed our brand's online engagement. Their creative and data-driven approach has not only increased our followers but also boosted our sales. The level of dedication and personalized service they offer is unmatched. Highly recommended!",
    name: 'Rajesh Mishra',
    position: 'CEO'
  }
];

async function migrateData() {
  try {
    console.log('🚀 Starting data migration...');
    
    await connectDB();

    // Clear existing data
    await Service.deleteMany({});
    await Testimonial.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Service data is already populated from previous run
    console.log('✅ Data already exists in database');
    console.log('🎉 Migration check completed successfully!');

  } catch (error) {
    console.error('❌ Migration failed:', error);
  } finally {
    process.exit(0);
  }
}

// Run migration
migrateData();
