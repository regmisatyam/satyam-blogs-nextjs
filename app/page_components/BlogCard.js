'use client';

import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ blog }) => {
  const excerpt = blog.excerpt || ''; // Use the 'rendered' field if it's available

  // For images: adding Links
  const imageLink = "https://blogs.satyamregmi.com.np/uploads/";
  const cate = blog.category;

  return (
    <div className="flex flex-col containers shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-2xl m-auto max-w-md w-full">
      {/* Image */}
      <div className="relative w-full">
        <Image
          src={`${imageLink}${blog.image}`}
          alt={blog.title}
          width={600}  // Adjust width for responsive design
          height={400} // Adjust height for responsive design
          className="w-full h-60 object-cover"
          draggable="false"
        />
      </div>

      {/* Title */}
      <div className="p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">
          <Link href={`/${blog.slug}`} className="text hover:text-blue-500">
            {blog.title}
          </Link>
        </h2>

        {/* Categories */}
        <div className="mt-3 text-sm">
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

        {/* Excerpt */}
        {blog.excerpt && (
          <div className="mt-4 text">
            <div
              className="text"
            />
            {blog.excerpt}
          </div>
        )}

        {/* Author and Date */}
        <p className="text-xs text-gray-500 mt-3 uppercase flex items-center">
          Author: {blog.author} &nbsp; • &nbsp;
          Date: {new Date(blog.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
