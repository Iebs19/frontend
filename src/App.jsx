import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import { Navbar } from './components/Navbar';
import Carousel from './components/Carousel';
import OurServices from './components/OurServices';
import LogoCarousel from './components/LogoCarousel';
import Footer from './components/Footer';
import Sectionone from './components/Sectionone';
import { Blog } from './components/Blog';
import Testimonials from './components/Testimonials';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero/>
        <Blog/>
        <Sectionone />
        <Testimonials />
        <Footer />
        {/* <BlogPage/> */}
      </div>
    </>
  );
}

export default App;
