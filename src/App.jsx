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
import Video from '../src/assets/video_bg.mp4'

function App() {
  const VideoBackground = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video autoPlay loop muted className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 opacity-50">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

  return (
    <>
      <div>
        <VideoBackground />
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
