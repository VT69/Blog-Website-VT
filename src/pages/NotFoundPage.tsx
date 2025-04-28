import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  React.useEffect(() => {
    document.title = "404 Not Found | Mother's Day Blog";
  }, []);

  return (
    <div className="container py-20">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link 
            to="/" 
            className="btn btn-primary"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;