'use client';

import { useTheme } from '../context/ThemeContex'; // Adjust the path if needed
import SingleBlog from '../page_components/SingleBlog'; // Adjust the path if needed

const BlogPage = ({ params }) => {
  const { slug } = params;
  const { isDarkMode } = useTheme();

  return (
    <div className='md:mx-5'>
      <SingleBlog slug={slug} isDarkMode={isDarkMode} />
    </div>
  );
};

export default BlogPage;