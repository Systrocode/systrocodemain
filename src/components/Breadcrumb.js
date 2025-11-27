import Link from 'next/link';
import { FiChevronRight, FiHome } from 'react-icons/fi';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb py-4" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              href="/" 
              className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
              aria-label="Go to homepage"
            >
              <FiHome className="w-4 h-4" />
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <FiChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              {index === items.length - 1 ? (
                <span 
                  className="text-gray-700 font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
