import React from 'react';
import { motion } from 'framer-motion';
import Logo from "../assets/logo.png"

const footerData = {
  logo: {Logo}, // Replace with your company's logo URL
  menus: [
    {
      title: 'Company',
      links: [
        { title: 'About Us', link: '/about' },
        { title: 'Careers', link: '/careers' },
        { title: 'Contact Us', link: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'Blog', link: '/blog' },
        { title: 'Help Center', link: '/help' },
        { title: 'Privacy Policy', link: '/privacy' },
      ],
    },
    {
      title: 'Product',
      links: [
        { title: 'Features', link: '/features' },
        { title: 'Pricing', link: '/pricing' },
        { title: 'Integrations', link: '/integrations' },
      ],
    },
  ],
  legal: [
    { title: 'Privacy Policy', link: '/privacy' },
    { title: 'Terms of Service', link: '/terms' },
  ],
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-darkBlue/30 backdrop-blur-md text-white py-12"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <img src={Logo} alt="Company Logo" className="h-16" />
          </div>
          {footerData.menus.map((menu, index) => (
            <div key={index} className="w-full lg:w-1/4 mb-8 lg:mb-0">
              <h2 className="text-lg font-semibold mb-4">{menu.title}</h2>
              <ul>
                {menu.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    className="mb-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href={link.link} className="text-sm text-darkBlue">
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center">
          <p className="text-sm">© 2024 InsiMine. All rights reserved.</p>
          <div className="flex space-x-4">
            {footerData.legal.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="text-sm text-darkBlue"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.title}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
