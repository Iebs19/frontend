import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: '100vh' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
};

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
};

const officeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20, delay: 0.3 }
  }
};

const ContactUs = () => {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto p-8 backdrop-blur-md rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-full bg-blue-300 bg-opacity-60 backdrop-blur-lg p-8 rounded-lg shadow-xl mb-12"
        variants={formVariants}
      >
        <h1 className="text-4xl font-bold text-darkBlue mb-6 text-center">Contact Us</h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-darkBlue text-white hover:bg-green hover:text-black font-bold border border-green py-3 px-7 rounded transition"
          >
            Submit
          </button>
        </form>
      </motion.div>

      <motion.div
        className="w-full bg-blue-300 bg-opacity-60 backdrop-blur-lg p-8 rounded-lg shadow-xl"
        variants={officeVariants}
      >
        <h2 className="text-2xl font-semibold text-darkBlue mb-4 text-center">Our Office</h2>
        <p className="text-grey-800 mb-2 text-center">207-208 Welldone TechPark, Sohna Road Sector 48, Gurugram, Haryana 122018, India</p>
        <p className="text-grey-800 mb-2 text-center">+91-124-429-4218</p>
        <p className="text-grey-800 text-center">info@insimine.com</p>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
