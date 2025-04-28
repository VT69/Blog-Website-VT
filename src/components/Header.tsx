import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Mother's Day Blog
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link 
                    to="/" 
                    className={`${isActive('/') ? 'text-primary-600 font-medium' : 'text-gray-600 hover:text-primary-600'}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className={`${isActive('/blog') ? 'text-primary-600 font-medium' : 'text-gray-600 hover:text-primary-600'}`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className={`${isActive('/about') ? 'text-primary-600 font-medium' : 'text-gray-600 hover:text-primary-600'}`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={`${isActive('/contact') ? 'text-primary-600 font-medium' : 'text-gray-600 hover:text-primary-600'}`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex items-center">
              <button 
                aria-label="Search"
                className="p-2 text-gray-500 hover:text-primary-600 rounded-full hover:bg-gray-100"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
          
          <button 
            className="p-2 md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-16">
          <div className="container">
            <nav>
              <ul className="space-y-6 text-lg">
                <li>
                  <Link 
                    to="/" 
                    className={`${isActive('/') ? 'text-primary-600 font-medium' : 'text-gray-600'}`}
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className={`${isActive('/blog') ? 'text-primary-600 font-medium' : 'text-gray-600'}`}
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className={`${isActive('/about') ? 'text-primary-600 font-medium' : 'text-gray-600'}`}
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={`${isActive('/contact') ? 'text-primary-600 font-medium' : 'text-gray-600'}`}
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <button className="absolute right-3 top-2.5 text-gray-500">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;