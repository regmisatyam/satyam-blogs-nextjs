'use client';
import { useFrontUiContext } from '../context/FrontPageUiContext';
import Link from 'next/link';
import Image from 'next/image';

const FrontUiList = () => {
  const context = useFrontUiContext();
  // console.log('Context:', context); // Debugging log

  if (!context) {
    return <p>Context is not available</p>;
  }
  const { blogs, loading, error } = context;

  if (loading) return (
    <div className='flex space-x-2 justify-center items-center bg h-dvh'>
      <span className='sr-only'>Loading...</span>
      <div className='h-8 w-8 ld-bg rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-8 w-8 ld-bg rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-8 w-8 ld-bg rounded-full animate-bounce'></div>
    </div>
  );
  if (error) return <p>Error: {error}</p>;

  const layoutClasses = [
    'col-span-1 h-48 md:h-72', // small
    'md:col-span-2 h-48 md:h-72', // long
    'md:col-span-2 h-48 md:h-72', // long
    'col-span-1 h-48 md:h-72', // small
  ];

  return (
    <div className="py-3 sm:py-4 lg:py-8 md:mx-10">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {blogs.map((blog, index) => {
            const layoutClass = layoutClasses[index % layoutClasses.length]; // Use modulo to cycle through the classes if more blogs are added
            // For images : adding Links
            const imageLink = "https://blogs.satyamregmi.com.np/uploads/";
            return (
              <Link
                key={blog.id}
                href={blog.slug}
                className={`group relative flex ${layoutClass} items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg`}
              >
                <Image
                  src={`${imageLink}` + blog.image} // Assuming `featured_image` is the URL
                  alt={blog.title} // Use blog title or another descriptive alt text
                  layout="fill" // Ensures the image covers the entire container
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                  draggable="false"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                  <div className="px-2 m-2 text-opacity-100 w-fit py-2 text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 to-blue-500">

                    {blog.category}

                  </div>

                </div>
                <span className="relative font-bold ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl">
                  {blog.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrontUiList;