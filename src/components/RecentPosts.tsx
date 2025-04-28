import React, { useState, useEffect } from 'react';
import { getRecentPosts, Post } from '../services/api';
import PostCard from './PostCard';

const RecentPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const recentPosts = await getRecentPosts(3);
        setPosts(recentPosts);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
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
          <p className="mt-2 text-gray-600">Loading recent posts...</p>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;