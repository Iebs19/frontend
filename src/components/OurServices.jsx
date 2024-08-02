import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import vector2 from '../assets/Vector2.png'

const services = [
    {
        title: 'Service 1',
        description: 'This is a detailed description of Service 1.',
    },
    {
        title: 'Service 2',
        description: 'This is a detailed description of Service 2.',
    },
    {
        title: 'Service 3',
        description: 'This is a detailed description of Service 3.',
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
        <div className="flex flex-col items-center py-16">
            <div className='flex flex-row'>

                <h2 className="text-4xl font-bold text-darkBlue mb-12 mr-2">Our </h2><h2 className='text-4xl font-bold mb-12 text-darkBlue'> Services</h2>
            </div>
            <div className="relative flex justify-between w-full max-w-4xl mb-12 " >
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
                                className="absolute top-full left-0 right-0 mt-4 p-4 bg-white shadow-lg rounded-lg"
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
            <button
                onClick={handleButtonClick}
                className="px-6 py-2 rounded-full bg-darkBlue text-white text-xl font-semibold hover:bg-blue-600 transition-all duration-300"
            >
                See All Services
            </button>
        </div>
    );
};

export default OurServices;
