import React from "react";
import PropTypes from "prop-types";

const blogs = [
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

const BlogItem = ({ blog }) => {
	const { title, description, author, date, month, year, image } = blog;

	return (
		<article className="rounded-lg">
			<div className="relative">
				<img
					src={image}
					alt={title}
					className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
				/>
				<div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
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
					<a href="#!" className="text-blue-600">
						{author}
					</a>
				</p>
				<h4 className="font-medium text-2xl">{title}</h4>
				<p className="opacity-60 mt-3 mb-6">{description}</p>
				<a
					href="#!"
					className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
				>
					Read More
				</a>
			</div>
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

export const Blog = () => {
	return (
		<section className="ezy__blog8 light py-14 md:py-24 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
			<div className="container px-8 md:px-24">
				<div className="grid grid-cols-12 justify-center">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-end-11 text-center">
						<h2 className="text-[32px] lg:text-[45px] leading-none font-bold mb-4">
							Heal the world with banking blog.
						</h2>
						<p className="text-lg font-medium opacity-80 lg:px-12 mb-9">
							Banking crises have developed many times throughout history when
							one or more risks have emerged for a banking sector as a whole.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-6 mt-12 gap-6">
					{blogs.map((blog, i) => (
						<div
							className="col-span-6 md:col-span-3 lg:col-span-2 mb-3"
							key={i}
						>
							<BlogItem blog={blog} />
						</div>
					))}
				</div>

				<div className="text-center mt-14">
					<a
						href="#!"
						className="bg-blue-600 hover:bg-opacity-90 text-white font-bold border border-blue-600 py-3 px-7 rounded transition"
					>
						Load All Posts
					</a>
				</div>
			</div>
		</section>
	);
};