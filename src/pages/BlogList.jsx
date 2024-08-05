import React, { useState } from 'react';
import { motion } from 'framer-motion';
import blogs from '../pages/blogs.json'; // Adjust the path according to your project structure

const BlogList = () => {
  // State to manage the number of visible blogs
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  // Function to load more blogs
  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisible) => prevVisible + 3);
  };

  // Slice the blogs array to get only the number of visible blogs
  const displayedBlogs = blogs.slice(0, visibleBlogs);

  return (
    <section className="ezy__blog8 light py-4 md:py-6 text-stone-800 dark:bg-[#0b1727] dark:text-white overflow-hidden">
      <div className="container px-8 md:px-24">
        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-end-11 text-center">
            <h2 className="text-[32px] lg:text-[45px] text-darkBlue leading-none font-bold mb-4">
              Blog
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-6 mt-12 gap-6">
          {displayedBlogs.map((blog, index) => (
            <motion.div
              key={index}
              className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 p-4 backdrop-blur-lg rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="font-medium text-2xl text-darkBlue">{blog.title}</h4>
              <p className="opacity-80 mt-3 mb-6">{blog.description}</p>
              <a
                href={`/blog/${index + 1}`}
                className="bg-transparent hover:bg-green border border-darkBlue hover:text-black py-2 px-5 rounded transition"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
        {visibleBlogs < blogs.length && (
          <div className="text-center mt-8">
            <motion.button
              className="bg-darkBlue text-white hover:bg-green hover:text-black font-bold border border-green py-3 px-7 rounded transition"
              whileHover={{ scale: 1.1 }}
              onClick={loadMoreBlogs}
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
