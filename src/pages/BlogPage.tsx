import React, { useState, useEffect } from 'react';
import { getPosts, getCategories, Post, Category } from '../services/api';
import PostCard from '../components/PostCard';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    document.title = "Blog | Mother's Day Blog";
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const [postsData, categoriesData] = await Promise.all([
          getPosts(),
          getCategories()
        ]);
        
        setPosts(postsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (categorySlug: string | null) => {
    setActiveCategory(categorySlug);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter posts based on active category and search query
  const filteredPosts = posts.filter(post => {
    // Filter by category if one is selected
    if (activeCategory) {
      const categoryId = categories.find(cat => cat.slug === activeCategory)?.id;
      if (!categoryId || !post.categoryIds.includes(categoryId)) {
        return false;
      }
    }
    
    // Filter by search query if one exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        
        {/* Search and Categories */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <svg 
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryClick(null)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  activeCategory === null 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                All Posts
              </button>
              
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    activeCategory === category.slug 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Posts Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent"></div>
            <p className="mt-2 text-gray-600">Loading posts...</p>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              {searchQuery 
                ? `No posts found matching "${searchQuery}"` 
                : 'No posts available in this category'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;