// app/category/[category]/page.tsx

import { notFound } from 'next/navigation';
import { fetchBlogsByCategory } from '../../lib/api';
import BlogCard from '../../page_components/BlogCard';
import NotFound from '../../page_components/NotFound';

const CategoryPage = async ({ params }) => {
  const { category } = params;

  try {
    const blogs = await fetchBlogsByCategory(category);

    if (!blogs || blogs.length === 0) {
      return notFound();
    }

    return (
      
       
        <div className="container mx-auto p-4">
        <h1 className="text-xl containers p-3 font-bold mb-4">Blogs in &quot;{category}&quot; Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
        </div>
    
    );
  } catch (error) {
    return  <NotFound />;
  }
};

// Generate static paths for categories
export async function generateStaticParams() {
  // You can fetch your categories from an API or define them manually
  const categories = ['tech', 'updates', 'news']; // Example categories
  return categories.map((category) => ({
    category,
  }));
}

export default CategoryPage;