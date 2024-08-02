import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
const logos = [
    'https://via.placeholder.com/150', // Replace with actual logo URLs
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150', // Replace with actual logo URLs
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150', // Replace with actual logo URLs
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    // Add more logos as needed
];

const LogoCarousel = () => {
    return (
        <div className="relative w-full overflow-hidden items-center">
                <div className='flex flex-row items-center justify-center'>
                    <h2 className="text-4xl font-bold text-darkBlue mb-12 mr-2">Our </h2><h2 className='text-4xl font-bold mb-12 text-darkBlue'>Clients</h2>
                </div>
            <div className="flex flex-nowrap w-full overflow-hidden">
                <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}>
                    {logos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-32 h-32 mx-4 flex items-center justify-center bg-white shadow-md rounded-lg">
                            <img src={logo} alt={`Logo ${index}`} className="w-24 h-24 object-contain" />
                        </div>
                    ))}

                </Marquee>
            </div>
        </div>
    );
};

export default LogoCarousel;
