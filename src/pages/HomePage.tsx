import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeaturedPosts from '../components/FeaturedPosts';
import RecentPosts from '../components/RecentPosts';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Mother's Day Blog - Celebrate Mothers Everywhere";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50">
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900">
              Celebrating Mothers Everywhere
            </h1>
            <p className="mb-8 text-xl text-gray-700">
              Stories, gift ideas, and inspiration to honor the incredible women in our lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="btn btn-primary"
              >
                Explore Our Blog
              </Link>
              <Link
                to="/about"
                className="btn btn-secondary"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-100 opacity-50 rounded-l-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary-100 opacity-50 rounded-tr-full"></div>
      </section>

      {/* Featured Posts Section */}
      <FeaturedPosts />
      
      {/* Recent Posts Section */}
      <RecentPosts />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">Join Our Newsletter</h2>
            <p className="mb-6">
              Get the latest stories, gift ideas, and celebration inspiration delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-center">Explore by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/category/stories" 
              className="group relative overflow-hidden rounded-lg shadow-md h-48 bg-gray-900 text-white"
            >
              <img 
                src="https://images.pexels.com/photos/1096141/pexels-photo-1096141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Stories" 
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-60 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-bold">Stories</h3>
                <p className="mt-2 text-sm text-gray-200">Personal journeys and reflections</p>
              </div>
            </Link>
            
            <Link 
              to="/category/gifts" 
              className="group relative overflow-hidden rounded-lg shadow-md h-48 bg-gray-900 text-white"
            >
              <img 
                src="https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Gift Ideas" 
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-60 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-bold">Gift Ideas</h3>
                <p className="mt-2 text-sm text-gray-200">Thoughtful presents for any budget</p>
              </div>
            </Link>
            
            <Link 
              to="/category/history" 
              className="group relative overflow-hidden rounded-lg shadow-md h-48 bg-gray-900 text-white"
            >
              <img 
                src="https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="History" 
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-60 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-bold">History</h3>
                <p className="mt-2 text-sm text-gray-200">The rich heritage of Mother's Day</p>
              </div>
            </Link>
            
            <Link 
              to="/category/celebration" 
              className="group relative overflow-hidden rounded-lg shadow-md h-48 bg-gray-900 text-white"
            >
              <img 
                src="https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Celebration Ideas" 
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-60 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-bold">Celebration Ideas</h3>
                <p className="mt-2 text-sm text-gray-200">Creative ways to make the day special</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;