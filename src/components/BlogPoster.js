import React from 'react';
import Link from 'next/link';
import { 
  FiCode, 
  FiTrendingUp, 
  FiShield, 
  FiCpu, 
  FiBarChart3, 
  FiMail, 
  FiUsers, 
  FiTarget,
  FiSmartphone
} from 'react-icons/fi';

const BlogPoster = ({ post, index }) => {
  // Use custom poster config if available, otherwise use default category styles
  const defaultCategoryStyles = {
    'Web Development': {
      bgGradient: 'from-purple-500 to-purple-700',
      icon: FiCode,
      lightColor: 'purple'
    },
    'Digital Marketing': {
      bgGradient: 'from-green-500 to-green-700', 
      icon: FiTrendingUp,
      lightColor: 'green'
    },
    'AI & Automation': {
      bgGradient: 'from-orange-500 to-orange-700',
      icon: FiCpu,
      lightColor: 'orange'
    },
    'Cybersecurity': {
      bgGradient: 'from-red-500 to-red-700',
      icon: FiShield,
      lightColor: 'red'
    },
    'Data Analysis': {
      bgGradient: 'from-blue-500 to-blue-700',
      icon: FiBarChart3,
      lightColor: 'blue'
    }
  };

  // Use custom poster config or fall back to category defaults
  const customConfig = post.posterConfig;
  const defaultStyle = defaultCategoryStyles[post.category] || defaultCategoryStyles['Digital Marketing'];
  
  const bgGradient = customConfig?.bgGradient || defaultStyle.bgGradient;
  const customIcon = customConfig?.icon;
  const IconComponent = defaultStyle.icon;

  // Create simple icons for different blog topics
  const getTopicIcon = () => {
    // Use custom icon if available
    if (customIcon) {
      return <span className="text-4xl">{customIcon}</span>;
    }
    
    // Otherwise use topic-based icons
    if (post.title.toLowerCase().includes('mobile') || post.title.toLowerCase().includes('responsive')) {
      return <FiSmartphone size={48} className="text-white/80" />;
    }
    if (post.title.toLowerCase().includes('email')) {
      return <FiMail size={48} className="text-white/80" />;
    }
    if (post.title.toLowerCase().includes('social')) {
      return <FiUsers size={48} className="text-white/80" />;
    }
    if (post.title.toLowerCase().includes('roi') || post.title.toLowerCase().includes('conversion')) {
      return <FiTarget size={48} className="text-white/80" />;
    }
    return <IconComponent size={48} className="text-white/80" />;
  };

  // Extract key topic from title for subtitle
  const getSubtitle = () => {
    const category = post.category;
    if (category === 'Web Development') return 'Development & Design';
    if (category === 'Digital Marketing') return 'Marketing & Strategy';
    if (category === 'AI & Automation') return 'Process Automation';
    if (category === 'Cybersecurity') return 'Security & Protection';
    if (category === 'Data Analysis') return 'Analytics & Insights';
    return 'Technology & Innovation';
  };

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <div className={`relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br ${bgGradient} transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl cursor-pointer`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 right-8 w-4 h-4 bg-white rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          {/* Category Badge */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
              {['Web Development', 'Data Analysis', 'AI & Automation', 'Cybersecurity'].includes(post.category) ? '💻 Tech' : '📈 General'}
            </span>
          </div>

          {/* Icon */}
          <div className="flex justify-center">
            {getTopicIcon()}
          </div>

          {/* Title and Subtitle */}
          <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
              {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}
            </h3>
            <p className="text-white/80 text-sm font-medium">
              {getSubtitle()}
            </p>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};

// Blog Poster Grid Component
const BlogPosterGrid = ({ posts, limit = 6 }) => {
  const displayPosts = limit ? posts.slice(0, limit) : posts;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayPosts.map((post, index) => (
        <BlogPoster key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default BlogPoster;
export { BlogPosterGrid };
