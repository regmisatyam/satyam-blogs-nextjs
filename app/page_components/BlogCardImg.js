
'use client';
import { useFrontUi2Context } from '../context/FrontPage2Context';
import Link from 'next/link';
import Image from 'next/image';

const BlogCardImg = () => {
	const context = useFrontUi2Context();
	console.log('Context:', context); // Debugging log

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

	return (
		<div className="max-w-screen-xl p-5 mx-auto bg rounded-md">
		<div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
		  {blogs.map((blog) => {
			// For images: adding Links
			const imageLink = "https://blogs.satyamregmi.com.np/uploads/";
			return (
			  <div
				key={blog.id} // Add a unique key to each element for better performance
				className="relative flex items-end rounded-md justify-start w-full text-left bg bg-center bg-cover h-96"
			  >
				<Image
				  src={`${imageLink}`+ blog.image}
				  alt={blog.title}
				  layout="fill"
				  objectFit="cover"
				  className="absolute inset-0 rounded-md"
				  loading='lazy'
				  draggable="false"
				/>
				
				<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
				  <Link
					rel="noopener noreferrer"
					href={`/category/` + blog.category}
					className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 to-blue-500"
				  >
					{blog.category}
				  </Link>
				  <div className="flex flex-col justify-start text-center text-white">
					<span className="leading-none uppercase">{blog.date}</span>
				  </div>
				</div>
				<h2 className="z-10 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-85 w-full rounded-b-md">
				  <Link
					href={blog.slug}
					className="font-medium text-md hover:text-black text-white"
				  >
					{blog.title}
				  </Link>
				</h2>
			  </div>
			);
		  })}
		</div>
	  </div>

	);
};

export default BlogCardImg;
