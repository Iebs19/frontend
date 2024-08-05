import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: '100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 50, staggerChildren: 0.5 }
  }
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const AboutUs = () => {
  return (
    <motion.div
      className="max-w-full mx-auto p-8 backdrop-blur-md rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-4xl font-bold text-darkBlue mb-4" variants={childVariants}>
        Who We Are
      </motion.h1>
      <motion.p className="text-darkBlue mb-8" variants={childVariants}>
        <strong>InsiMine</strong> is a trusted AI and analytics-based solutions provider dedicated to empowering the pharmaceutical and healthcare industries. Our expert team combines deep industry knowledge with cutting-edge technology to help you navigate the complexities of the data landscape and achieve your strategic goals.
      </motion.p>
      
      <motion.div className="flex flex-wrap -mx-4" variants={childVariants}>
        <motion.div className="w-full md:w-1/3 px-4 mb-8" variants={childVariants}>
          <motion.div className="bg-darkBlue p-6 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-70 h-full flex flex-col" variants={childVariants}>
            <motion.h2 className="text-2xl font-semibold text-white mb-2 text-center" variants={childVariants}>
              Our Mission
            </motion.h2>
            <motion.p className="text-white text-center mt-auto mb-auto" variants={childVariants}>
              Enable pharmaceutical and healthcare organizations to harness the power of their data for improved decision-making, better patient outcomes, and enhanced operational efficiency.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="w-full md:w-1/3 px-4 mb-8" variants={childVariants}>
          <motion.div className="bg-darkBlue p-6 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-70 h-full flex flex-col" variants={childVariants}>
            <motion.h2 className="text-2xl font-semibold text-white mb-2 text-center" variants={childVariants}>
              Our Vision
            </motion.h2>
            <motion.p className="text-white text-center mt-auto mb-auto" variants={childVariants}>
              To be the global leader in data analytics and AI solutions for the pharmaceutical and healthcare industries, supporting enterprises through innovative technologies.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="w-full md:w-1/3 px-4 mb-8" variants={childVariants}>
          <motion.div className="bg-darkBlue p-6 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-70 h-full flex flex-col" variants={childVariants}>
            <motion.h2 className="text-2xl font-semibold text-white mb-2 text-center" variants={childVariants}>
              Our Values
            </motion.h2>
            <motion.ul className="list-none p-0 text-white mt-auto mb-auto" variants={childVariants}>
              <motion.li className="mb-2" variants={childVariants}><strong>Innovation:</strong> Perpetually driving the edge towards what's possible with data and technology.</motion.li>
              <motion.li className="mb-2" variants={childVariants}><strong>Integrity:</strong> Upholding the highest standards of ethics and transparency in all our dealings.</motion.li>
              <motion.li className="mb-2" variants={childVariants}><strong>Collaboration:</strong> Working closely with our clients to understand their unique challenges and deliver tailored solutions.</motion.li>
              <motion.li className="mb-2" variants={childVariants}><strong>Excellence:</strong> Committed to delivering the highest quality services and reliable solutions.</motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="mb-8" variants={childVariants}>
        <motion.h2 className="text-3xl font-semibold text-darkBlue mb-2 text-center" variants={childVariants}>
          Why InsiMine?
        </motion.h2>
        <motion.ul className="list-none p-0 text-darkBlue" variants={childVariants}>
          <motion.li className="mb-2" variants={childVariants}><strong>Industry Expertise:</strong> Extensive experience in the pharmaceutical and healthcare sectors.</motion.li>
          <motion.li className="mb-2" variants={childVariants}><strong>Advanced Technology:</strong> Leveraging the latest in data engineering, big data management, and AI technologies.</motion.li>
          <motion.li className="mb-2" variants={childVariants}><strong>Customized Solutions:</strong> Our tailored services to meet your organization's specific needs and goals.</motion.li>
          <motion.li className="mb-2" variants={childVariants}><strong>Proven Track Record:</strong> Demonstrated success in driving growth, improving efficiency, and enhancing patient outcomes.</motion.li>
        </motion.ul>
      </motion.div>

      <motion.div className="mb-8" variants={childVariants}>
        <motion.h2 className="text-3xl font-semibold text-darkBlue mb-2 text-center" variants={childVariants}>
          Our Approach
        </motion.h2>
        <motion.ul className="list-none p-0 text-darkBlue" variants={childVariants}>
          <motion.li className="mb-2" variants={childVariants}><strong>Strategize and Plan:</strong> Develop comprehensive strategies and project plans to ensure successful execution.</motion.li>
          <motion.li className="mb-2" variants={childVariants}><strong>Discovery and Design:</strong> Uncover insights and design solutions that align with your goals and vision.</motion.li>
          <motion.li className="mb-2" variants={childVariants}><strong>Build and Deploy:</strong> Implement secure, reliable AI solutions and scale them to production.</motion.li>
          <motion.li className="mb-2" variants={childVariants}><strong>Continuous Support:</strong> Provide ongoing assistance to ensure sustained success and client satisfaction.</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
