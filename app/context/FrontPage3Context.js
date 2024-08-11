'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const FrontUi3Context = createContext();

export const Front3UI = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch3Blogs = async () => {
        
            try {
                const response = await fetch(`https://blogs.satyamregmi.com.np/api/blog/?limit=12`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setBlogs(data.slice(0, 12));
                setError(null);
            } catch (error) {
                console.error('Error fetching blog data:', error);
                setError('Error fetching blog data.');
            } finally {
                setLoading(false);
            }
        };

        fetch3Blogs();
    }, []);

    return (
        <FrontUi3Context.Provider value={{ blogs, loading, error }}>
            {children}
        </FrontUi3Context.Provider>
    );
};

export const useFrontUi3Context = () => useContext(FrontUi3Context);
