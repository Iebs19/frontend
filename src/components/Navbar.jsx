// // import React from 'react'
import logo from '../assets/Insimine-logo.png';
// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//             <div className="text-xl font-bold">
//                 <img src={logo} alt="Insimine Logo" className="h-8" />
//             </div>
//             <ul className="flex space-x-4">
//               <li className="hover:text-black"><a href="#home">Home</a></li>
//               <li className="hover:text-black"><a href="#about">About us</a></li>
//               <li className="hover:text-black"><a href="#blogs">Blogs</a></li>
//               <li><a href="#contact" className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600">Contact us</a></li>
//             </ul>
//         </div>
//     </nav>
//   )
// }

// export default Navbar
import React, { Component, useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-between p-4 text-black bg-slate-50 rounded-xl mb-2 backdrop-blur-md">
      <div className="flex items-center">
        <Logo />
      </div>
      <Tabs />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="text-lg font-bold">
      <a href="/">
        <img src={logo} alt="Insimine Logo" className="h-8" />
      </a>
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex items-center gap-6"
    >
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={t.id}
          hasDropdown={!!t.dropdown}
          href={t.href}
        >
          {t.title}
        </Tab>
      ))}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected, hasDropdown, href }) => {
  return (
    <div className="relative">
      <a
        href={href || "#"}
        id={`shift-tab-${tab}`}
        onMouseEnter={() => handleSetSelected(tab)}
        onClick={() => handleSetSelected(tab)}
        className={`flex items-center gap-1 px-3 py-1.5 text-sm transition-colors ${
          selected === tab ? "text-black" : "text-gray-600"
        }`}
      >
        <span>{children}</span>
        {hasDropdown && (
          <FiChevronDown
            className={`transition-transform ${selected === tab ? "rotate-180" : ""}`}
          />
        )}
      </a>
    </div>
  );
};

const Content = ({ selected, dir }) => {
  const tab = TABS.find((t) => t.id === selected);
  if (!tab || !tab.dropdown) return null;

  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute left-0 top-[calc(100%_+_8px)] w-64 rounded-lg border border-gray-300 bg-gray-100 bg-opacity-70 p-4 shadow-lg backdrop-blur-md"
    >
      <Bridge />
      <Nub selected={selected} />

      {tab.dropdown.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: dir === "l" ? 100 : dir === "r" ? -100 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <item.Component />
        </motion.div>
      ))}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[8px] left-0 right-0 h-[8px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-gray-300 bg-gray-100 bg-opacity-70 shadow-lg"
    />
  );
};

const Blogs = () => {
  return (
    <div>
      <h3 className="mb-2 text-sm font-medium"><a href="/blog">Blogs</a></h3>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <div>
      <h3 className="mb-2 text-sm font-medium"><a href="/case-studies">Case Studies</a></h3>
    </div>
  );
};

const WhitePapers = () => {
  return (
    <div>
      <h3 className="mb-2 text-sm font-medium"><a href="/white-paper">White Paper</a></h3>
    </div>
  );
};

// const Services = () => {
//   return (
//     <div>
//       <h3 className="mb-2 text-sm font-medium"><a href="/services">Sevices</a></h3>
//     </div>
//   );
// };

const TABS = [
  {
    title: "About Us",
    href: "/about-us",
    Component: () => <a href='/about-us'>About Us</a>,
  },
  {
    title: "Services",
    href: "/services",
    Component: () => <a href='/services'>Services</a>,
  },
  {
    title: "Insights",
    Component: () => <div>Insights content</div>,
    dropdown: [
      { title: "Blogs", Component: Blogs },
      { title: "Case Studies", Component: CaseStudies },
      { title: "White Papers", Component: WhitePapers }
    ],
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    Component: () => <a href='/contact-us'>Contact Us</a>,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
