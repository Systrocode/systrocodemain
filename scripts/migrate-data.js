const dotenv = require('dotenv');
const connectDB = require('../src/lib/mongodb.js').default;
const { Service, Testimonial } = require('../src/models/index.js');

// Load environment variables
dotenv.config({ path: '.env.local' });

// Debug: Check if environment variables are loaded
console.log('Environment check:');
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
console.log('MONGODB_URI length:', process.env.MONGODB_URI ? process.env.MONGODB_URI.length : 0);

// Instead of importing from data.js (which has image imports), we'll define the data here
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
    console.log('✅ Connected to MongoDB');

    // Clear existing data (optional - remove if you want to keep existing data)
    await Service.deleteMany({});
    await Testimonial.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Migrate Services Data
    const servicesData = [
      {
        type: 'web-development',
        hero: {
          title: heroData.webd.title,
          subtitle: heroData.webd.subtitle,
          image: '/assets/img/Services/webd1.jpg'
        },
        features: [
          {
            icon: 'ShoppingCartIcon',
            title: 'E-commerce Website',
            description: 'At Systrocode, we transform your e-commerce vision into a thriving online reality with cutting-edge solutions that propel digital success.'
          },
          {
            icon: 'CogIcon',
            title: 'WordPress Website',
            description: 'At Systrocode, we excel in WordPress development, turning your online vision into a dynamic reality.'
          },
          {
            icon: 'CodeBracketIcon',
            title: 'Full-Stack Website',
            description: 'Unlock the potential of full-stack technology with Systrocode. Our dedicated team of professionals excels in crafting innovative projects.'
          }
        ],
        portfolio: [
          {
            title: 'E-commerce Platform',
            image: '/assets/img/Services/webd1.jpg',
            technologies: ['React', 'Next.js', 'MongoDB', 'Stripe'],
            description: 'Custom e-commerce solution with advanced features'
          },
          {
            title: 'WordPress Website',
            image: '/assets/img/Services/webd2.jpg',
            technologies: ['WordPress', 'PHP', 'MySQL'],
            description: 'Professional WordPress development'
          },
          {
            title: 'Full-Stack Application',
            image: '/assets/img/Services/webd3.jpg',
            technologies: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
            description: 'Complete full-stack web application'
          }
        ]
      },
      {
        type: 'mobile-development',
        hero: {
          title: heroData.mobileDevelopment.title,
          subtitle: heroData.mobileDevelopment.subtitle,
          image: '/assets/img/Services/webd1.jpg'
        },
        features: [
          {
            icon: 'DevicePhoneMobileIcon',
            title: 'Mobile Development',
            description: 'Unlock the potential of mobile technology with Systrocode. Our dedicated team of mobile developers excels in creating high-performance iOS and Android applications.'
          }
        ],
        portfolio: [
          {
            title: 'iOS Mobile App',
            image: '/assets/img/Services/webd1.jpg',
            technologies: ['Swift', 'iOS SDK', 'Core Data'],
            description: 'Native iOS application development'
          },
          {
            title: 'Android Mobile App',
            image: '/assets/img/Services/webd2.jpg',
            technologies: ['Kotlin', 'Android SDK', 'Firebase'],
            description: 'Native Android application development'
          }
        ]
      },
      {
        type: 'ui-ux-design',
        hero: {
          title: heroData.webdesign.title,
          subtitle: heroData.webdesign.subtitle,
          image: '/assets/img/Services/webdesign.jpg'
        },
        features: [
          {
            icon: 'PaintBrushIcon',
            title: 'UI/UX Design & Wireframing',
            description: 'Unlock the potential of exceptional user interface and user experience design with Systrocode.'
          }
        ],
        portfolio: [
          {
            title: 'UI/UX Design Project',
            image: '/assets/img/Services/webdesign.jpg',
            technologies: ['Figma', 'Adobe XD', 'Sketch'],
            description: 'Complete UI/UX design and wireframing'
          }
        ]
      },
      {
        type: 'software-development',
        hero: {
          title: heroData.softwareDevelopment.title,
          subtitle: heroData.softwareDevelopment.subtitle,
          image: '/assets/img/Services/webd2.jpg'
        },
        features: [
          {
            icon: 'ComputerDesktopIcon',
            title: 'Software Development',
            description: 'Unlock the potential of custom software solutions with Systrocode. Our dedicated team of software engineers excels in creating enterprise-grade applications.'
          }
        ],
        portfolio: [
          {
            title: 'Enterprise Software',
            image: '/assets/img/Services/webd3.jpg',
            technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
            description: 'Custom enterprise software solution'
          }
        ]
      },
      {
        type: 'seo',
        hero: {
          title: heroData.seo.title,
          subtitle: heroData.seo.subtitle,
          image: '/assets/img/Services/seo.jpg'
        },
        features: [
          {
            icon: 'MagnifyingGlassIcon',
            title: 'SEO',
            description: 'Unlock the potential of superior SEO strategies with Systrocode. Our dedicated team of experts excels in crafting tailored SEO solutions.'
          }
        ],
        portfolio: [
          {
            title: 'SEO Optimization Project',
            image: '/assets/img/Services/seo.jpg',
            technologies: ['Google Analytics', 'SEMrush', 'Ahrefs'],
            description: 'Complete SEO optimization and ranking improvement'
          }
        ]
      },
      {
        type: 'ai-automation',
        hero: {
          title: heroData.ai.title,
          subtitle: heroData.ai.subtitle,
          image: '/assets/img/Services/ai.jpg'
        },
        features: [
          {
            icon: 'CpuChipIcon',
            title: 'AI Automation',
            description: 'Unlock the potential of AI automation with Systrocode. Our dedicated team of experts excels in developing innovative AI solutions.'
          }
        ],
        portfolio: [
          {
            title: 'AI Automation Solution',
            image: '/assets/img/Services/ai.jpg',
            technologies: ['Python', 'TensorFlow', 'OpenAI API'],
            description: 'Custom AI automation and workflow optimization'
          }
        ]
      },
      {
        type: 'data-analysis',
        hero: {
          title: heroData.dataAnalysis.title,
          subtitle: heroData.dataAnalysis.subtitle,
          image: '/assets/img/Services/data.jpg'
        },
        features: [
          {
            icon: 'ChartBarIcon',
            title: 'Data Analysis',
            description: 'Unlock the potential of advanced data analysis with Systrocode. Our dedicated team of experts excels in delivering insightful data solutions.'
          }
        ],
        portfolio: [
          {
            title: 'Business Intelligence Dashboard',
            image: '/assets/img/Services/data.jpg',
            technologies: ['Python', 'Pandas', 'Power BI', 'Tableau'],
            description: 'Comprehensive data analysis and visualization'
          }
        ]
      },
      {
        type: 'cyber-security',
        hero: {
          title: heroData.cybersecurity.title,
          subtitle: heroData.cybersecurity.subtitle,
          image: '/assets/img/Services/cyber.jpg'
        },
        features: [
          {
            icon: 'ShieldCheckIcon',
            title: 'Cyber Security',
            description: 'Unlock the potential of robust cybersecurity with Systrocode. Our dedicated team of experts excels in crafting comprehensive security solutions.'
          }
        ],
        portfolio: [
          {
            title: 'Security Assessment',
            image: '/assets/img/Services/cyber.jpg',
            technologies: ['Penetration Testing', 'Security Audits', 'Compliance'],
            description: 'Complete cybersecurity assessment and protection'
          }
        ]
      }
    ];

    // Insert services
    for (const serviceData of servicesData) {
      const service = new Service(serviceData);
      await service.save();
      console.log(`✅ Created service: ${serviceData.type}`);
    }

    // Migrate Testimonials Data
    const testimonialsToInsert = testimonialsData.map((client, index) => ({
      name: client.name,
      position: client.position,
      company: 'Client Company',
      message: client.message,
      rating: 5,
      avatar: `/assets/img/testimonial/avatar${index + 1}.png`
    }));

    // Insert testimonials
    for (const testimonialData of testimonialsToInsert) {
      const testimonial = new Testimonial(testimonialData);
      await testimonial.save();
      console.log(`✅ Created testimonial: ${testimonialData.name}`);
    }

    console.log('🎉 Data migration completed successfully!');
    console.log(`📊 Migrated ${servicesData.length} services`);
    console.log(`💬 Migrated ${testimonialsToInsert.length} testimonials`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
  } finally {
    process.exit(0);
  }
}

// Run migration
migrateData();
