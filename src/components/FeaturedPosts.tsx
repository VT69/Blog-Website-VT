import React, { useState, useEffect } from 'react';
import { getFeaturedPosts, Post } from '../services/api';
import PostCard from './PostCard';

const FeaturedPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const featuredPosts = await getFeaturedPosts();
        setPosts(featuredPosts);
      } catch (error) {
        console.error('Error fetching featured posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">Loading featured posts...</p>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;