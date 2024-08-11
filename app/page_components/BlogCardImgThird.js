
'use client';
import { useFrontUi3Context } from '../context/FrontPage3Context';
import Link from 'next/link';
import Image from 'next/image';

const BlogCardImgThird = () => {
    const context3 = useFrontUi3Context();
    console.log('Context:', context3); // Debugging log

    if (!context3) {
        return <p>Context is not available</p>;
    }
    const { blogs, loading, error } = context3;

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
        <section class="py-10">
            <div class="mx-auto grid max-w-screen-xl justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">

                {blogs.map((blog) => {
                    // For images: adding Links
                    const imageLink = "https://blogs.satyamregmi.com.np/uploads/";
                    return (

                        <article key={blog.id} class="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 containers transition hover:translate-y-2 hover:shadow-lg">
                            <Link href={blog.slug}>
                                <Image 
                                src={`${imageLink}`+ blog.image}
                                alt={blog.title}
                                width={300}
                                height={300}
                                class="h-56 w-full object-cover" />
                                <div class="flex-auto px-6 py-5">
                                    <span class="mb-2 flex items-center text-sm font-semibold">
                                    {blog.category}</span>
                                    <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">{blog.title}</h3>
                                    <p class="mb-4 text-base font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tempore officiis. Lorem, ipsum dolor.</p>
                                    <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm"> Read More </span>
                                </div>
                            </Link>
                        </article>

                    );
                })}

            </div>
        </section>


    );
};

export default BlogCardImgThird;
