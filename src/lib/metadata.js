// SEO Metadata Generator - Fixes duplicate titles and descriptions
export const generateMetadata = (pageType, customTitle = '', customDescription = '') => {
  const baseUrl = 'https://systrocode.tech';
  
  const pageMetadata = {
    home: {
      title: 'Systrocode - Digital Marketing & Web Development Company in India',
      description: 'Leading digital marketing and web development company in India. Expert web design, SEO, social media marketing, and AI automation services. Transform your business today.',
      keywords: 'digital marketing company India, web development, SEO services, social media marketing, AI automation'
    },
    
    about: {
      title: 'About Systrocode - Expert Digital Marketing & Development Team',
      description: 'Meet the Systrocode team of digital marketing experts, web developers, and AI specialists. Learn about our mission to transform businesses through innovative digital solutions.',
      keywords: 'about systrocode, digital marketing team, web development experts, company profile'
    },
    
    services: {
      title: 'Digital Marketing & Web Development Services - Systrocode',
      description: 'Comprehensive digital marketing and web development services including SEO, social media marketing, web design, mobile apps, and AI automation solutions.',
      keywords: 'digital services, web development services, marketing services, SEO, social media'
    },
    
    contact: {
      title: 'Contact Systrocode - Get Your Free Digital Marketing Consultation',
      description: 'Ready to grow your business? Contact Systrocode for expert digital marketing, web development, and AI automation services. Free consultation available.',
      keywords: 'contact systrocode, digital marketing consultation, web development quote'
    },
    
    policy: {
      title: 'Privacy Policy - Systrocode Digital Marketing Company',
      description: 'Read Systrocode\'s privacy policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.',
      keywords: 'privacy policy, data protection, terms of service'
    },
    
    'web-development': {
      title: 'Professional Web Development Services - Custom Websites | Systrocode',
      description: 'Expert web development services including custom websites, e-commerce platforms, web applications, and responsive design. Modern, fast, and SEO-optimized solutions.',
      keywords: 'web development, custom websites, responsive design, e-commerce development'
    },
    
    'web-design': {
      title: 'Creative Web Design Services - UI/UX Design | Systrocode',
      description: 'Professional web design services focused on user experience and conversion optimization. Custom UI/UX design, wireframing, and brand identity solutions.',
      keywords: 'web design, UI UX design, website design, creative design services'
    },
    
    'mobile-development': {
      title: 'Mobile App Development Services - iOS & Android Apps | Systrocode',
      description: 'Custom mobile app development for iOS and Android. Native and cross-platform mobile applications with modern design and robust functionality.',
      keywords: 'mobile app development, iOS apps, Android apps, mobile applications'
    },
    
    'software-development': {
      title: 'Custom Software Development Solutions - Enterprise Apps | Systrocode',
      description: 'Tailored software development solutions for businesses. Enterprise applications, CRM systems, and custom software to streamline your operations.',
      keywords: 'software development, custom software, enterprise applications, business software'
    },
    
    seo: {
      title: 'SEO Services - Search Engine Optimization | Systrocode',
      description: 'Professional SEO services to improve your Google rankings. Keyword research, on-page optimization, link building, and technical SEO for better visibility.',
      keywords: 'SEO services, search engine optimization, Google ranking, keyword research'
    },
    
    'search-engine-optimization': {
      title: 'Advanced SEO Services - Rank Higher on Google | Systrocode',
      description: 'Advanced search engine optimization strategies to dominate Google rankings. Technical SEO, content optimization, and link building services.',
      keywords: 'advanced SEO, search engine optimization, Google ranking, SEO strategy'
    },
    
    'social-media-marketing': {
      title: 'Social Media Marketing Services - Grow Your Online Presence | Systrocode',
      description: 'Strategic social media marketing to boost your brand visibility. Facebook, Instagram, LinkedIn, and Twitter marketing with proven results.',
      keywords: 'social media marketing, Facebook marketing, Instagram marketing, social media strategy'
    },
    
    'digital-marketing': {
      title: 'Digital Marketing Services - Complete Online Marketing | Systrocode',
      description: 'Comprehensive digital marketing services including SEO, PPC, social media, content marketing, and email marketing. Drive more leads and sales.',
      keywords: 'digital marketing, online marketing, PPC advertising, content marketing'
    },
    
    'ppc-advertising': {
      title: 'PPC Advertising Services - Google Ads Management | Systrocode',
      description: 'Expert PPC advertising and Google Ads management. Maximize ROI with targeted ad campaigns, keyword optimization, and conversion tracking.',
      keywords: 'PPC advertising, Google Ads, pay per click, Google Ads management'
    },
    
    'google-ads-management': {
      title: 'Google Ads Management Services - Maximize Your Ad ROI | Systrocode',
      description: 'Professional Google Ads management to maximize your advertising ROI. Campaign optimization, keyword research, and performance tracking.',
      keywords: 'Google Ads management, Google advertising, PPC management, ad optimization'
    },
    
    'content-marketing': {
      title: 'Content Marketing Services - Engage & Convert Customers | Systrocode',
      description: 'Strategic content marketing to attract and engage your target audience. Blog writing, video content, infographics, and content strategy.',
      keywords: 'content marketing, blog writing, content strategy, digital content'
    },
    
    'email-marketing': {
      title: 'Email Marketing Services - Automated Email Campaigns | Systrocode',
      description: 'Effective email marketing campaigns to nurture leads and drive sales. Email automation, newsletter design, and performance analytics.',
      keywords: 'email marketing, email campaigns, marketing automation, newsletter marketing'
    },
    
    'influencer-marketing': {
      title: 'Influencer Marketing Services - Brand Partnership Strategy | Systrocode',
      description: 'Connect with your audience through strategic influencer partnerships. Influencer outreach, campaign management, and performance tracking.',
      keywords: 'influencer marketing, brand partnerships, influencer campaigns, social media influencers'
    },
    
    'marketing-automation': {
      title: 'Marketing Automation Services - Streamline Your Marketing | Systrocode',
      description: 'Automate your marketing processes for better efficiency. Lead nurturing, email automation, and customer journey optimization.',
      keywords: 'marketing automation, lead nurturing, automated marketing, customer journey'
    },
    
    'marketing-analytics': {
      title: 'Marketing Analytics Services - Data-Driven Marketing | Systrocode',
      description: 'Advanced marketing analytics to measure and optimize your campaigns. Performance tracking, ROI analysis, and data-driven insights.',
      keywords: 'marketing analytics, performance tracking, marketing metrics, data analysis'
    },
    
    'conversion-rate-optimization': {
      title: 'Conversion Rate Optimization - Increase Website Conversions | Systrocode',
      description: 'Optimize your website for higher conversions. A/B testing, user experience optimization, and conversion funnel analysis.',
      keywords: 'conversion rate optimization, CRO, website optimization, conversion tracking'
    },
    
    'ai-automation': {
      title: 'AI Automation Services - Intelligent Business Solutions | Systrocode',
      description: 'Transform your business with AI automation. Chatbots, process automation, machine learning solutions, and intelligent workflows.',
      keywords: 'AI automation, artificial intelligence, chatbots, process automation'
    },
    
    'data-analysis': {
      title: 'Data Analysis Services - Business Intelligence Solutions | Systrocode',
      description: 'Professional data analysis and business intelligence services. Data visualization, predictive analytics, and actionable insights.',
      keywords: 'data analysis, business intelligence, data visualization, analytics services'
    },
    
    'cyber-security': {
      title: 'Cybersecurity Services - Protect Your Digital Assets | Systrocode',
      description: 'Comprehensive cybersecurity solutions to protect your business. Security audits, threat assessment, and data protection services.',
      keywords: 'cybersecurity, data security, threat protection, security services'
    },
    
    'facebook-ads': {
      title: 'Facebook & Instagram Ads Management - Social Media Advertising | Systrocode',
      description: 'Expert Facebook and Instagram advertising services. Campaign management, audience targeting, and ad optimization for maximum social media ROI.',
      keywords: 'Facebook ads, Instagram ads, social media advertising, Facebook marketing'
    },
    
    blog: {
      title: 'Systrocode Blog - Digital Marketing & Tech Insights',
      description: 'Expert insights on digital marketing, web development, AI automation, and technology trends. Stay updated with the latest industry knowledge.',
      keywords: 'digital marketing blog, web development insights, technology trends, marketing tips'
    }
  };

  // Use custom title/description if provided, otherwise use predefined
  const metadata = pageMetadata[pageType] || pageMetadata.home;
  const finalTitle = customTitle || metadata.title;
  const finalDescription = customDescription || metadata.description;

  // Ensure title is under 60 characters for better SEO
  const optimizedTitle = finalTitle.length > 60 ? finalTitle.substring(0, 57) + '...' : finalTitle;

  return {
    title: optimizedTitle,
    description: finalDescription,
    keywords: metadata.keywords,
    openGraph: {
      title: optimizedTitle,
      description: finalDescription,
      url: `${baseUrl}/${pageType === 'home' ? '' : pageType}`,
      type: 'website',
      siteName: 'Systrocode',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: optimizedTitle,
      description: finalDescription,
      creator: '@systrocode'
    },
    alternates: {
      canonical: `${baseUrl}/${pageType === 'home' ? '' : pageType}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
};

// Blog post metadata generator
export const generateBlogMetadata = (post) => {
  const baseUrl = 'https://systrocode.tech';
  
  // Ensure title is under 60 characters
  const optimizedTitle = post.title.length > 57 ? post.title.substring(0, 54) + '...' : post.title;
  
  return {
    title: `${optimizedTitle} - Systrocode Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || 'digital marketing, web development, technology',
    authors: [{ name: post.author || 'Systrocode Team' }],
    openGraph: {
      title: optimizedTitle,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author || 'Systrocode Team'],
      siteName: 'Systrocode Blog',
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: optimizedTitle,
      description: post.excerpt,
      creator: '@systrocode',
      images: post.featuredImage ? [post.featuredImage] : undefined
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
};
