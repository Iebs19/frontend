import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const AboutUs = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center my-16">
        <motion.img
          src="https://via.placeholder.com/400"
          alt="Hero"
          className="w-full md:w-1/2 rounded-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="w-full md:w-1/2 md:ml-8 mt-8 md:mt-0 p-6 bg-white bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-gray-800">
            InsiMine empowers the pharmaceutical and healthcare industries with cutting-edge data and analytics solutions. Our team of experts combines deep industry knowledge with advanced technology to help you navigate the complexities of the data landscape and achieve your strategic goals.
          </p>
        </motion.div>
      </div>

      {/* Our Mission and Our Vision */}
      <div className="flex flex-col md:flex-row items-center my-16">
        <motion.div
          className="w-full md:w-1/2 p-6 bg-white bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg mb-8 md:mb-0 md:mr-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-800 text-left">
            To enable pharmaceutical and healthcare organizations to harness the power of their data for improved decision-making, better patient outcomes, and enhanced operational efficiency.
          </p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 p-6 bg-white bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg md:ml-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-800 text-left">
            To be the global leader in data analytics and AI solutions for the pharmaceutical and healthcare industries, transforming businesses through innovative technologies.
          </p>
        </motion.div>
      </div>

      {/* Our Values */}
      <motion.div
        className="my-16 p-6 bg-white bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Our Values</h2>
        <ul className="mt-4 list-disc pl-5 text-lg text-gray-800 text-left space-y-2">
          <li>Innovation: Continuously pushing the boundaries of what’s possible with data and technology.</li>
          <li>Integrity: Upholding the highest standards of ethics and transparency in all our dealings.</li>
          <li>Collaboration: Working closely with our clients to understand their unique challenges and deliver tailored solutions.</li>
          <li>Excellence: Committed to delivering the highest quality services and solutions.</li>
        </ul>
      </motion.div>

      {/* Why InsiMine? */}
      <motion.div
        className="my-16 p-6 bg-white bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Why InsiMine?</h2>
        <ul className="mt-4 list-disc pl-5 text-lg text-gray-800 text-left space-y-2">
          <li>Industry Expertise: Extensive experience in the pharmaceutical and healthcare sectors.</li>
          <li>Advanced Technology: Leveraging the latest in data engineering, big data management, and AI technologies.</li>
          <li>Proven Track Record: Demonstrated success in driving growth, improving efficiency, and enhancing patient outcomes.</li>
          <li>Customized Solutions: Tailored services to meet the specific needs and goals of your organization.</li>
        </ul>
      </motion.div>

      {/* Our Approach */}
      <motion.div
        className="my-16 p-6 bg-white bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Our Approach</h2>
        <ul className="mt-4 list-disc pl-5 text-lg text-gray-800 text-left space-y-2">
          <li>Strategize and Plan: Develop comprehensive strategies and project plans to ensure successful execution.</li>
          <li>Discovery and Design: Uncover insights and design solutions that align with your goals and vision.</li>
          <li>Build and Deploy: Implement secure, reliable AI solutions and scale them to production.</li>
          <li>Continuous Support: Provide ongoing assistance to ensure sustained success and client satisfaction.</li>
        </ul>
      </motion.div>

      {/* Go to Top Button */}
      <button
        className={`fixed bottom-10 right-10 p-3 rounded-full bg-lime-500 text-white shadow-md ${showScroll ? 'block' : 'hidden'}`}
        onClick={scrollTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default AboutUs;
