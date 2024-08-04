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
import BlogPage from './pages/BlogList';
import Video from '../src/assets/video_bg.mp4'

function App() {
  return (
    <>
      <div>
        <Hero/>
        <Blog/>
        <OurServices />
        <Sectionone />
        <LogoCarousel />
        <Testimonials />
        {/* <BlogPage/> */}
      </div>
    </>
  );
}

export default App;
