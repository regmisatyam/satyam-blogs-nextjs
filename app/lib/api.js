// lib/api.js

export const fetchBlogsByCategory = async (category) => {
    try {
      const response = await fetch(`https://blogs.satyamregmi.com.np/api/blog/?category=${encodeURIComponent(category)}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data; // Assuming this returns the list of blogs
    } catch (error) {
      return { error: error.message };
    }
  };
  