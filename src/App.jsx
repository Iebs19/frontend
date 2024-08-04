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
import CoverflowEffect from './components/CoverFlowEffect';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero/>

        <Sectionone />
        <CoverflowEffect/>
        <Footer />
      </div>
    </>
  );
}

export default App;
