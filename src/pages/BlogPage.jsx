import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Hardcoded blog data
const initialBlogs = [
  {
    title: "How I’m Styling Everyday Black Outfits",
    description:
      "It’s no secret that the digital industry is booming. From exciting startups to global brands.",
    author: "Mitwa Dadkan",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
    date: "26",
    month: "Oct",
    year: "2016",
  },
  {
    title: "Fashion Essentials All Men Should Know",
    description:
      "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
    author: "Mahws Georgia",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_14_3.jpg",
    date: "26",
    month: "Oct",
    year: "2016",
  },
  {
    title: "Not Your Regular Home Decoration?",
    description:
      "Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
    author: "Alex Hales",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_8.jpg",
    date: "29",
    month: "Feb",
    year: "2018",
  },
];

const BlogPage = () => {
  const [blogs, setBlogs] = useState(initialBlogs);

  // Commented out the fetching part for now
  // const fetchBlogs = async () => {
  //   try {
  //     const response = await axios.get(`https://api.example.com/blogs?page=${page}`);
  //     setBlogs([...blogs, ...response.data]);
  //   } catch (error) {
  //     console.error("Error fetching blogs:", error);
  //   }
  // };

  // Dummy load more function for now
  const loadMoreBlogs = () => {
    const moreBlogs = [
      {
        title: "How I’m Styling Everyday Black Outfits 2",
        description:
          "It’s no secret that the digital industry is booming. From exciting startups to global brands.",
        author: "Mitwa Dadkan",
        image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
        date: "26",
        month: "Oct",
        year: "2016",
      },
      {
        title: "Fashion Essentials All Men Should Know 2",
        description:
          "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
        author: "Mahws Georgia",
        image: "https://cdn.easyfrontend.com/pictures/blog/blog_14_3.jpg",
        date: "26",
        month: "Oct",
        year: "2016",
      },
      {
        title: "Not Your Regular Home Decoration? 2",
        description:
          "Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
        author: "Alex Hales",
        image: "https://cdn.easyfrontend.com/pictures/blog/blog_8.jpg",
        date: "29",
        month: "Feb",
        year: "2018",
      },
    ];

    setBlogs([...blogs, ...moreBlogs]);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-24 mb-8">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="mt-2 text-gray-700">{blog.description}</p>
            <p className="mt-2 text-gray-500">{blog.author}</p>
            <p className="mt-2 text-gray-500">{`${blog.date} ${blog.month}, ${blog.year}`}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <motion.button
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md"
          whileHover={{ scale: 1.1 }}
          onClick={loadMoreBlogs}
        >
          Load More
        </motion.button>
      </div>
    </div>
  );
};

export default BlogPage;
