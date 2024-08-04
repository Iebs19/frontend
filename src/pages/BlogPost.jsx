import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BlogPost = ({ title, content }) => {
  // Hook to get scroll position
  const { scrollY } = useScroll();
  
  // Define parallax effect for the title
  const yTitle = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
    <div className="max-w-7xl text-darkBlue mx-auto p-8 rounded-lg shadow-md mb-8">
      <motion.h1
        style={{ y: yTitle }} // Apply the parallax effect
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        {title}
      </motion.h1>
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="backdrop-blur-md p-4 rounded-lg shadow-sm mb-4 text-left"
              >
                <p className="text-lg mb-0">{block.text}</p>
              </motion.div>
            );
          case 'header':
            return React.createElement(
              `h${block.level}`,
              {
                key: index,
                className: `text-${block.level * 10}px font-semibold mb-2 text-left`,
              },
              block.text
            );
          case 'list':
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-lightBlue/30 backdrop-blur-sm p-4 rounded-lg shadow-sm mb-4 text-left"
              >
                <ul className="list-disc list-inside mb-0">
                  {block.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogPost;
