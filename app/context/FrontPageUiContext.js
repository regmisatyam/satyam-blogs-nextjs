'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const FrontUiContext = createContext();

export const FrontUI = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
        
            try {
                const response = await fetch(`https://blogs.satyamregmi.com.np/api/blog/?limit=4`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setBlogs(data.slice(0, 4));
                setError(null);
            } catch (error) {
                console.error('Error fetching blog data:', error);
                setError('Error fetching blog data.');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <FrontUiContext.Provider value={{ blogs, loading, error }}>
            {children}
        </FrontUiContext.Provider>
    );
};

export const useFrontUiContext = () => useContext(FrontUiContext);
