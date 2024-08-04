import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        title: 'Data Engineering',
        description: 'Develop a robust data strategy, governance framework, and integration solutions for seamless data management.',
    },
    {
        title: 'Data Lakes & Big Data Management',
        description: 'Centralize and manage vast amounts of structured and unstructured data efficiently.',
    },
    {
        title: 'AI & Gen AI Applications',
        description: 'Leverage advanced analytics and AI-driven solutions to transform your business operations.',
    },
];

const OurServices = () => {
    const [activeService, setActiveService] = useState(null);
    const navigate = useNavigate();

    const handleMouseEnter = (index) => {
        setActiveService(index);
    };

    const handleMouseLeave = () => {
        setActiveService(null);
    };

    const handleButtonClick = () => {
        navigate('/services');
    };

    return (
        <div className="flex flex-col items-center py-16 backdrop-blur-md">
            <div className='flex flex-row'>
                <h2 className="text-4xl font-bold text-darkBlue mb-12 mr-2">Our </h2>
                <h2 className='text-4xl font-bold mb-12 text-darkBlue'> Capabilities</h2>
            </div>
            <div className="mb-6 text-center max-w-7xl">
                <p className="text-xl text-darkBlue mb-4">
                    Unlock the full potential of your data with InsiMine's specialized data and analytics services tailored for the pharmaceutical and healthcare industries.
                </p>
                <p className="text-xl text-darkBlue mb-4">
                    Our innovative solutions transform raw data into actionable insights, driving growth, improving patient outcomes, and enhancing operational efficiency.
                </p>
                <p className="text-xl text-darkBlue">
                    Discover how our expertise in Data Engineering, Data Lakes & Big Data Management, and AI & Gen AI Applications can empower your organization to make informed, intelligent decisions.
                </p>
            </div>
            <div className="relative flex justify-between w-full max-w-7xl mb-12" >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative flex-1 mx-2"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.div
                            className="text-center p-2 cursor-pointer bg-green rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                        </motion.div>
                        {activeService === index && (
                            <motion.div
                                className="absolute top-full left-0 right-0 mt-4 mb-4 p-4 bg-lightBlue text-darkBlue shadow-lg rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p>{service.description}</p>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
            <br />
            <motion.button
                onClick={handleButtonClick}
                className={`bg-darkBlue text-white hover:bg-green hover:text-black font-bold border border-green py-3 px-7 rounded transition ${activeService !== null ? 'mt-5' : ''}`}
                animate={{ y: activeService !== null ? 8 : 0 }}
                transition={{ duration: 0.3 }}
            >
                See All Services
            </motion.button>
        </div>
    );
};

export default OurServices;
