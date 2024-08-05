import React from "react";
import PropTypes from "prop-types";
import blogs from "../pages/blogs.json";

const BlogItem = ({ blog, blogId }) => {
	const { title, description, author, date, month, year, image } = blog;
	const blogUrl = `/blog/${blogId}`;
  
	return (
	  <article className="rounded-lg backdrop-blur-md">
		<div className="relative">
		  <img
			src={image}
			alt={title}
			className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
		  />
		  <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black text-darkBlue bg-green opacity-80 rounded-lg">
			{date}
			<br />
			{month}
			<br />
			{year}
		  </div>
		</div>
		<div className="p-3">
		  <p className="font-light text-sm leading-6 mb-2">
			By{" "}
			<a href={blogUrl} className="text-darkBlue">
			  InsiMine
			</a>
		  </p>
		  <h4 className="font-medium text-2xl text-darkBlue">{title}</h4>
		  <p className="opacity-80 mt-3 mb-6">{description}</p>
		  <a
			href={blogUrl}
			className="bg-transparent hover:bg-green border border-darkBlue hover:text-black py-2 px-5 rounded transition"
		  >
			Read More
		  </a>
		</div>
	  </article>
	);
  };
  
  BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
	blogId: PropTypes.number.isRequired,
  };

export const Blog = () => {
	const limitedBlogs = blogs.slice(0, 3);
  return (
    <section className="ezy__blog8 light py-4 md:py-6 text-stone-800 dark:bg-[#0b1727] dark:text-white overflow-hidden">
      <div className="container px-8 md:px-24">
        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-end-11 text-center">
            <h2 className="text-[32px] lg:text-[45px] text-darkBlue leading-none font-bold mb-4">
              Latest Insights
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-6 mt-12 gap-6">
          {limitedBlogs.map((blog, i) => (
            <div
              className="col-span-6 md:col-span-3 lg:col-span-2 mb-3"
              key={i}
            >
              <BlogItem blog={blog} blogId={i+1}/>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="/blog"
            className="bg-darkBlue text-white hover:bg-green hover:text-black font-bold border border-green py-3 px-7 rounded transition"
          >
            Load All Posts
          </a>
        </div>
      </div>
    </section>
  );
};
