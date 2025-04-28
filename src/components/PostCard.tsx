import React from 'react';
import { Link } from 'react-router-dom';
import { Post, getAuthor, getCategories } from '../services/api';
import { Calendar } from 'lucide-react';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, featured = false }) => {
  const [author, setAuthor] = React.useState<any>(null);
  const [categories, setCategories] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    const fetchAuthor = async () => {
      const authorData = await getAuthor(post.authorId);
      setAuthor(authorData);
    };
    
    const fetchCategories = async () => {
      const allCategories = await getCategories();
      const postCategories = allCategories.filter(cat => 
        post.categoryIds.includes(cat.id)
      );
      setCategories(postCategories);
    };
    
    fetchAuthor();
    fetchCategories();
  }, [post]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <article className={`card overflow-hidden h-full flex flex-col ${featured ? 'md:flex-row' : ''}`}>
      <div className={`relative ${featured ? 'md:w-1/2' : ''}`}>
        <Link to={`/post/${post.slug}`}>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className={`w-full h-60 object-cover ${featured ? 'md:h-full' : ''}`}
          />
        </Link>
        {categories.length > 0 && (
          <div className="absolute top-4 left-4">
            <Link 
              to={`/category/${categories[0].slug}`}
              className="bg-primary-600 text-white px-3 py-1 text-sm font-medium rounded-full"
            >
              {categories[0].name}
            </Link>
          </div>
        )}
      </div>
      
      <div className={`p-6 flex flex-col flex-grow ${featured ? 'md:w-1/2' : ''}`}>
        <header>
          <h3 className="text-xl font-bold mb-2">
            <Link to={`/post/${post.slug}`} className="text-gray-900 hover:text-primary-600 transition-colors">
              {post.title}
            </Link>
          </h3>
          
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            
            {author && (
              <>
                <span className="mx-2">•</span>
                <Link to={`/author/${author.id}`} className="hover:text-primary-600 transition-colors">
                  {author.name}
                </Link>
              </>
            )}
          </div>
        </header>
        
        <div className="mb-4 text-gray-600 flex-grow">
          <p>{post.excerpt}</p>
        </div>
        
        <footer>
          <Link 
            to={`/post/${post.slug}`}
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Read More
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default PostCard;