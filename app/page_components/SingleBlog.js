'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NotFound from './NotFound';

const SingleBlog = ({ slug, isDarkMode }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://blogs.satyamregmi.com.np/api/blog/?slug=${slug}`);
        if (!response.ok) throw new Error('Page Not found');
        const data = await response.json();
        // console.log('Fetched Data:', data); // Log raw response

        // Check if data is an array and has at least one item
        if (Array.isArray(data) && data.length > 0) {
          setBlog(data[0]); // Use the first item in the array
        } else {
          // console.error('Invalid data format:', data);
          setError('Data format is incorrect');
        }
      } catch (error) {
        // console.error('Fetch Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return (
    <div className='flex space-x-2 justify-center items-center bg h-dvh'>
      <span className='sr-only'>Loading...</span>
      <div className='h-8 w-8 ld-bg rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-8 w-8 ld-bg rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-8 w-8 ld-bg rounded-full animate-bounce'></div>
    </div>
  );
  if (error) return (
    <NotFound />
    // <p className="text-red-500">Err: {error}</p>
  );
  if (!blog) return <p>No blog data available</p>;

  const imageLink = "https://blogs.satyamregmi.com.np/uploads/";
    const cate = blog.category;
  return (
  
    <div
    className={`p-1 mx-auto mt-2 max-w-4xl ${isDarkMode ? 'text-white' : 'text-black'} rounded-lg`}>
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
    <h1 className="md:text-3xl font-extrabold mb-6">{blog.title || 'Default Title'}</h1>
  
    {/* Author and Date */}
    <div className="flex items-center text-sm text-gray-600 mb-6">
      <p className="mr-4">By {blog.author || 'Unknown Author'}</p>
      <p>{new Date(blog.date).toLocaleDateString() || 'Unknown Date'}</p>
    </div>
  
    {/* Categories */}
    <div className="mb-6">
       {cate ? (
            <Link
              href={`/category/${blog.category}`}
              className="text-blue-500 font-semibold hover:text-blue-600 mr-2"
            >
              {blog.category}
            </Link>
          ) : (
            <span className="text-blue-500 font-semibold hover:text-blue-600 mr-2">
              Uncategorized
            </span>
          )}
    </div>
  
    {/* Content */}
    <div
      className="blog-content text-base leading-relaxed mb-5"
      dangerouslySetInnerHTML={{ __html: blog.contents || 'Default Content' }}
    />
  </div>
  
  );
};

export default SingleBlog;