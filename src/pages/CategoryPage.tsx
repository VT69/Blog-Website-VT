import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryBySlug, getPostsByCategorySlug, Category, Post } from '../services/api';
import PostCard from '../components/PostCard';
import NotFoundPage from './NotFoundPage';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const categoryData = await getCategoryBySlug(category!);
        
        if (!categoryData) {
          setNotFound(true);
          setLoading(false);
          return;
        }
        
        setCategoryData(categoryData);
        document.title = `${categoryData.name} | Mother's Day Blog`;
        
        const categoryPosts = await getPostsByCategorySlug(category!);
        setPosts(categoryPosts);
      } catch (error) {
        console.error('Error fetching category data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">Loading category...</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return <NotFoundPage />;
  }

  if (!categoryData) {
    return null;
  }

  return (
    <div className="py-12">
      <div className="container">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">{categoryData.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getCategoryDescription(categoryData.slug)}
          </p>
        </header>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No posts available in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to get category descriptions
const getCategoryDescription = (slug: string): string => {
  const descriptions: Record<string, string> = {
    stories: "Personal experiences, reflections, and stories about motherhood and the journey of raising children.",
    gifts: "Thoughtful and meaningful gift ideas for the special mothers in your life, with options for every budget.",
    history: "Exploring the rich history and cultural significance of Mother's Day celebrations around the world.",
    celebration: "Creative and heartfelt ways to celebrate and honor mothers on their special day and throughout the year."
  };
  
  return descriptions[slug] || "Explore our collection of articles in this category.";
};

export default CategoryPage;