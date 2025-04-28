import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Mother's Day Blog</h3>
            <p className="text-gray-300 mb-4">
              Celebrating mothers everywhere with heartfelt stories, 
              practical tips, and beautiful tributes. Join us in honoring 
              the extraordinary women who shape our lives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/stories" className="text-gray-300 hover:text-white transition-colors">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/category/gifts" className="text-gray-300 hover:text-white transition-colors">
                  Gift Ideas
                </Link>
              </li>
              <li>
                <Link to="/category/history" className="text-gray-300 hover:text-white transition-colors">
                  History
                </Link>
              </li>
              <li>
                <Link to="/category/celebration" className="text-gray-300 hover:text-white transition-colors">
                  Celebration Ideas
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-gray-400 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Mother's Day Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;