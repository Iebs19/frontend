import React, { Fragment, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PropTypes from "prop-types";

const testimonialList = [
  [
    {
      author: "Director of Data Science, Data Driven Pharma Company",
      content:
        "InsiMine’s big data management services have significantly enhanced our data processing capabilities. Their tailored solutions have allowed us to handle massive datasets with ease, resulting in more efficient and accurate data analysis. We highly recommend their services to any organization seeking excellence in data management.",
    },
    {
      author: "Head of Research, Consumer Goods company",
      content:
        "InsiMine’s expertise in AI and GenAI has been a game-changer for our research and development. Their innovative approaches have accelerated our drug discovery processes and improved our predictive analytics. The team’s knowledge and professionalism are unmatched.",
    },
    {
      author: "CIO, MedTech Company",
      content:
        "The data lake implementation provided by InsiMine has streamlined our data storage and retrieval processes. Their solution has enabled us to consolidate our disparate data sources into a centralized repository, facilitating better data governance and advanced analytics. We are extremely satisfied with their services.",
    },
  ],
  [
    {
      author: "VP of Data Management, Pharmaceutical Company",
      content:
        "InsiMine’s comprehensive big data solutions have transformed our data landscape. Their ability to manage and analyze large volumes of data has given us a competitive edge in the pharmaceutical industry. The team’s expertise and commitment to excellence are evident in every project they undertake.",
    },
    {
      author: "Chief Medical Officer, Precision Health Company",
      content:
        "The innovative GenAI services provided by InsiMine have revolutionized our approach to personalized medicine. Their cutting-edge solutions have enabled us to develop more accurate predictive models and improve patient outcomes. The team’s expertise and dedication are truly impressive.",
    },
    {
      author: "Director of AI Research, Diagnostic Company",
      content:
        "InsiMine’s data engineering and AI integration services have been instrumental in advancing our research capabilities. Their solutions have enhanced our data processing efficiency and enabled us to leverage AI for groundbreaking discoveries. We highly recommend InsiMine for their exceptional services and expertise.",
    },
  ],
];

const TestimonialItem = ({ item }) => {
  const { content, author } = item;
  return (
    <div className="backdrop-blur-md dark:bg-gray-700 shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6">
      <p className="text-darkBlue dark:text-gray-200 mb-6 leading-loose">{content}</p>
      <p className="font-bold text-lg text-darkBlue dark:text-gray-100">{author}</p>
    </div>
  );
};
TestimonialItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };

  return (
    <section className="ezy__testimonial20 light py-7 px-2 md:py-12 px-4 bg-transparent text-zinc-900 dark:text-white">
      <div className="container relative">
        <div className="flex justify-between items-center mb-md-4">
          <div className="w-2/3 lg:max-w-lg">
            <h2 className="font-bold text-3xl text-darkBlue md:text-[45px] leading-none mb-6">
              What Our Clients Say
            </h2>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <button
              className="text-lg bg-white shadow-xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
              onClick={() => handleControl("prev")}
            >
              <FiChevronLeft />
            </button>
            <button
              className="text-lg bg-white shadow-xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
              onClick={() => handleControl("next")}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-y-6 md:gap-x-6 mt-12">
          {testimonialList[index].map((item, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <TestimonialItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
