import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: 'https://via.placeholder.com/800x400',
    header: 'Slide 1 Header',
    description: 'This is the description for slide 1.',
    url: '/page1',
  },
  {
    image: 'https://via.placeholder.com/800x400',
    header: 'Slide 2 Header',
    description: 'This is the description for slide 2.',
    url: '/page2',
  },
  // Add more slides as needed
];

const Carousel = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: -currentIndex * 100 + '%',
      transition: { duration: 0.5 },
    });
  }, [currentIndex, controls]);

  const handleClick = (url) => {
    navigate(url);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-screen flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto overflow-hidden">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={controls}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="cursor-pointer flex-shrink-0 w-full"
              onClick={() => handleClick(slide.url)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative overflow-hidden shadow-lg">
                <motion.img
                  src={slide.image}
                  alt={slide.header}
                  className="w-full h-64 object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4">
                  <motion.h2
                    className="text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {slide.header}
                  </motion.h2>
                  <motion.p
                    className="text-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    {slide.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 ml-2 text-black rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 mr-2 text-black rounded-full"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
