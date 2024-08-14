import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NotFound from './NotFound';

const SideBar = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`https://blogs.satyamregmi.com.np/api/blog/?limit=5`);
                if (!response.ok) throw new Error('Page Not found');
                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    setBlogs(data);
                } else {
                    setError('Data format is incorrect');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return (
        <div className='flex space-x-2 justify-center items-center h-screen'>
            <span className='sr-only'>Loading...</span>
            <div className='h-8 w-8 bg-gray-200 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-8 w-8 bg-gray-200 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-8 w-8 bg-gray-200 rounded-full animate-bounce'></div>
        </div>
    );

    if (error) return <NotFound />;
    if (blogs.length === 0) return <p>No blog data available</p>;

    const imageLink = "https://blogs.satyamregmi.com.np/uploads/";

    return (
        <div className="mx-auto my-6 p-4 max-w-md bg-container rounded-md shadow-md overflow-hidden">
            <h2 className='text-xl font-bold text mb-4'>You May Like:</h2>
            {blogs.map((blog) => (
                <div key={blog.id} className="relative mb-4 container rounded-md">
                    <Image
                        src={`${imageLink}${blog.image}`}
                        alt={blog.title}
                        width={500} // Set the width according to your design
                        height={300} // Set the height according to your design
                        className="w-full h-60 object-cover rounded-md"
                        loading='lazy'
                        draggable="false"
                    />
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <Link
                            rel="noopener noreferrer"
                            href={`/category/${blog.category}`}
                            className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                        >
                            {blog.category}
                        </Link>
                        <div className="flex flex-col justify-start text-center text-white">
                            <span className="leading-none uppercase">{blog.date}</span>
                        </div>
                    </div>
                    <h2 className="absolute bottom-0 left-0 w-full rounded-b-md bg-gradient-to-r from-cyan-500 to-blue-500 p-3">
                        <Link
                            href={`/${blog.slug}`} // Assuming you want to link to individual blog pages
                            className="font-medium hover:text-gray-300"
                        >
                            {blog.title}
                        </Link>
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default SideBar;
