'use client';

import { useTheme } from '../context/ThemeContex'; // Adjust the path if needed
import SideBar from '../page_components/SideBar';
import SingleBlog from '../page_components/SingleBlog'; // Adjust the path if needed
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BlogPage = ({ params }) => {
  const { slug, category } = params;
  const { isDarkMode } = useTheme();
  const [blogNotFound, setBlogNotFound] = useState(false);
  const router = useRouter();

  if (blogNotFound) {
    router.push('/404'); // Redirect to custom 404 page
    return null; // Prevent rendering of the current page
  }


  console.log('Params:', params); // Debugging line

  return (
    <div className='flex flex-col md:flex-row gap-6 lg:flex flex-grow container mx-auto md:px-6'>
      <div className="md:w-2/3">
        <SingleBlog slug={slug} isDarkMode={isDarkMode} setBlogNotFound={setBlogNotFound} />
      </div>
      <div className="md:w-1/3">
        <SideBar />
      </div>
    </div>
  );
};

export default BlogPage;
