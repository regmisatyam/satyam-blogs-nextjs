'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NotFound from './NotFound';
import RelatedPost from './RelatedPost'; // Import RelatedPost component

const SingleBlog = ({ slug, setBlogNotFound }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://blogs.satyamregmi.com.np/api/blog/?slug=${slug}`);
        if (!response.ok) throw new Error('Page Not found');
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setBlog(data[0]);
        } else {
          setError('Data format is incorrect');
          setBlogNotFound(true);
        }
      } catch (error) {
        setError(error.message);
        setBlogNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, setBlogNotFound]);

  if (loading) return (
    <div className='flex space-x-2 justify-center items-center h-screen'>
      <span className='sr-only'>Loading...</span>
      <div className='h-8 w-8 bg-gray-200 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-8 w-8 bg-gray-200 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-8 w-8 bg-gray-200 rounded-full animate-bounce'></div>
    </div>
  );
  if (error) return <NotFound />;
  if (!blog) return <p>No blog data available</p>;

  const imageLink = "https://blogs.satyamregmi.com.np/uploads/";
  const cate = blog.category;

  return (
    <div className="p-3 flex-grow max-w-full text-justify">
      {/* Featured Image */}
      {blog.image && (
        <div className="relative mb-6">
          <Image
            src={`${imageLink}${blog.image}`}
            alt={blog.title}
            width={700}
            height={400}
            className="w-full max-h-96 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{blog.title || 'Default Title'}</h1>

      {/* Author and Date */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <p className="mr-4 font-semibold uppercase">By {blog.author || 'Unknown Author'}</p>
        <p>{new Date(blog.date).toLocaleDateString() || 'Unknown Date'}</p>
      </div>

      {/* Categories */}
      <div className="mb-6">
        {cate ? (
          <Link
            href={`/category/${blog.category}`}
            className="text-blue-600 font-medium hover:text-blue-700 mr-2"
          >
            {blog.category}
          </Link>
        ) : (
          <span className="text-gray-600 font-medium mr-2">
            Uncategorized
          </span>
        )}
      </div>

      {/* Content */}
      <div
        className="blog-content text-lg leading-relaxed text"
        dangerouslySetInnerHTML={{ __html: blog.contents || 'Default Content' }}
      />
      <div className="mt-4 bg-container rounded-md">   {/* Related Posts */}
        {cate && <RelatedPost category={cate} />} {/* Pass the category */}</div>

    </div>
  );
};

export default SingleBlog;
