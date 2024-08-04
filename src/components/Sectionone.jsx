import React from 'react';
import { motion } from 'framer-motion';
import InfoGraphic from '../assets/1st-Infographic-Transparent.png'

const cards = [
    {
        title: 'Data Engineering:',
        description: 'Our Data Engineering services lay the foundation for efficient data management, ensuring that your data is clean, standardized, and ready for analysis. We cover the entire spectrum, from data ingestion and storage to validation and curation. By leveraging advanced technologies and best practices, we transform raw data into a valuable asset that fuels your business growth.',
    },
    {
        title: 'Data Science:',
        description: 'Unlock the hidden potential within your data with our Data Science expertise. Our team of data scientists excels in feature extraction, data modeling, and predictive analytics. We delve deep into your data to uncover patterns, generate actionable insights, and provide data-driven solutions tailored to your unique business needs.',
    },
    {
        title: 'Machine Learning Engineering:',
        description: 'Transform your business operations with cutting-edge Machine Learning models. Our Machine Learning Engineering services encompass the entire lifecycle of model development, from training and validation to packaging and deployment. We ensure that your models are robust, scalable, and seamlessly integrated into your existing systems, driving intelligent automation and enhanced decision-making.',
    },
];

const CardCarousel = () => {
    return (
        <div className="flex flex-col space-y-4">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className="p-4 bg-darkBlue rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <h3 className="font-bold">{card.title}</h3>
                    <p>{card.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

const NewSection = () => {
    return (
        <motion.div
            className="flex flex-col lg:flex-row items-center justify-between bg-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="lg:w-1/2 w-1/2 h-1/2 p-4">
                <CardCarousel />
            </div>
            <div className="lg:w-1/2 w-1/2 h-1/2 p-4">
                <img src={InfoGraphic} alt="Sample" className="w-full h-3/4 object-cover rounded-lg" />
            </div>
        </motion.div>
    );
};

const Sectionone = () => {
    return (
        <div className="text-white pt-4">
            <h2 className="text-4xl font-bold text-darkBlue mr-2">Comprehensive Data Solutions for Modern Enterprises</h2>
            <h3 className="text-xl font-bold text-darkBlue mr-2">Empowering Innovation through Data Engineering, Data Science, and Machine Learning</h3>
            <div className="w-screen h-3/4 flex items-center justify-center">
                <NewSection />
            </div>
        </div>
    );
};

export default Sectionone;
