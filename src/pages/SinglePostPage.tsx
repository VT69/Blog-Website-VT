import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, getAuthor, getCategories, getRelatedPosts, Post, Author, Category } from '../services/api';
import { Calendar, User } from 'lucide-react';
import PostCard from '../components/PostCard';
import NotFoundPage from './NotFoundPage';

const SinglePostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchPostData = async () => {
      setLoading(true);
      try {
        const postData = await getPostBySlug(id!);
        
        if (!postData) {
          setNotFound(true);
          setLoading(false);
          return;
        }
        
        setPost(postData);
        document.title = `${postData.title} | Mother's Day Blog`;
        
        // Fetch related data
        const [authorData, allCategories, relatedPostsData] = await Promise.all([
          getAuthor(postData.authorId),
          getCategories(),
          getRelatedPosts(postData.id, 3)
        ]);
        
        setAuthor(authorData || null);
        
        const postCategories = allCategories.filter(cat => 
          postData.categoryIds.includes(cat.id)
        );
        setCategories(postCategories);
        
        setRelatedPosts(relatedPostsData);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [id]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return <NotFoundPage />;
  }

  if (!post) {
    return null;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {categories.length > 0 && (
              <div className="mb-4">
                {categories.map(category => (
                  <Link 
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="inline-block bg-primary-600 text-white px-3 py-1 text-sm font-medium rounded-full mr-2"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
            
            <h1 className="mb-6 text-4xl md:text-5xl font-bold">{post.title}</h1>
            
            <div className="flex items-center justify-center text-gray-300">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              
              {author && (
                <>
                  <span className="mx-3">•</span>
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{author.name}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
              
              {/* Tags/Categories */}
              {categories.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium mb-3">Categories:</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Link 
                        key={category.id}
                        to={`/category/${category.slug}`}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Author Box */}
              {author && (
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <img 
                      src={author.avatar} 
                      alt={author.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-medium">{author.name}</h3>
                      <p className="text-gray-600 mt-1">{author.bio}</p>
                    </div>
                  </div>
                </div>
              )}
            </article>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <div key={relatedPost.id} className="bg-white border rounded-lg overflow-hidden">
                        <Link to={`/post/${relatedPost.slug}`} className="block">
                          <img 
                            src={relatedPost.coverImage} 
                            alt={relatedPost.title} 
                            className="w-full h-48 object-cover"
                          />
                        </Link>
                        <div className="p-4">
                          <h4 className="font-medium mb-2">
                            <Link to={`/post/${relatedPost.slug}`} className="text-gray-900 hover:text-primary-600 transition-colors">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <div className="text-sm text-gray-500">
                            <time dateTime={relatedPost.date}>{formatDate(relatedPost.date)}</time>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Newsletter */}
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-4">Get the latest posts delivered straight to your inbox</p>
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-3"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePostPage;