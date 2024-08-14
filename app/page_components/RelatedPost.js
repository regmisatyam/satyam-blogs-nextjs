'use client';

import { useState, useEffect } from 'react';
import Slideshow from './Slideshow';

const RelatedPost = ({ category }) => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!category) {
      setError('Category is undefined');
      setLoading(false);
      return;
    }

    const fetchSlides = async () => {
      try {
        const response = await fetch(`https://blogs.satyamregmi.com.np/api/blog/?category=${category}&limit=6`);
        if (!response.ok) throw new Error('No posts found');
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setSlides(data.map(post => ({
            img: `https://blogs.satyamregmi.com.np/uploads/${post.image}`,
            caption: post.title || 'No Title'
          })));
        } else {
          setError('No related posts found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, [category]);

  if (loading) return (
    <div className='flex space-x-2 justify-center items-center'>
      <span className='sr-only'>Loading...</span>
    </div>
  );

  if (error) return <p>{error}</p>;

  if (slides.length === 0) return <p>No slides available</p>;

  return (
    <div className="p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
      <Slideshow slides={slides} />
    </div>
  );
};

export default RelatedPost;
