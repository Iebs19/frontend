import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import OurServices from './components/OurServices';
import LogoCarousel from './components/LogoCarousel';
import Footer from './components/Footer';
import Sectionone from './components/Sectionone';
import CoverflowEffect from './components/CoverFlowEffect';

function App() {
  // const controlsHero = useAnimation();
  const controlsCarousel = useAnimation();
  const controlsServices = useAnimation();
  const controlsLogoCarousel = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // const heroSection = document.querySelector('#hero');
      const carouselSection = document.querySelector('#carousel');
      const servicesSection = document.querySelector('#services');
      const logoCarouselSection = document.querySelector('#logo-carousel');

      // const heroOffset = heroSection.getBoundingClientRect().top;
      const carouselOffset = carouselSection.getBoundingClientRect().top;
      const servicesOffset = servicesSection.getBoundingClientRect().top;
      const logoCarouselOffset = logoCarouselSection.getBoundingClientRect().top;

      // if (heroOffset < window.innerHeight) {
      //   controlsHero.start({ x: 0, opacity: 1 });
      // } else {
      //   controlsHero.start({ x: -100, opacity: 0 });
      // }

      if (carouselOffset < window.innerHeight) {
        controlsCarousel.start({ x: 0, opacity: 1 });
      } else {
        controlsCarousel.start({ x: 100, opacity: 0 });
      }

      if (servicesOffset < window.innerHeight) {
        controlsServices.start({ x: 0, opacity: 1 });
      } else {
        controlsServices.start({ x: -100, opacity: 0 });
      }

      if (logoCarouselOffset < window.innerHeight) {
        controlsLogoCarousel.start({ x: 0, opacity: 1 });
      } else {
        controlsLogoCarousel.start({ x: 100, opacity: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    // controlsHero,
     controlsCarousel, controlsServices, controlsLogoCarousel]);

  return (
    <>
      <div>
        <Navbar />

        <motion.div
          id="carousel"
          initial={{ x: 100, opacity: 0 }}
          animate={controlsCarousel}
          transition={{ duration: 1 }}
        >
          <Carousel />
        </motion.div>

        <Sectionone />

        <motion.div
          id="services"
          initial={{ x: -100, opacity: 0 }}
          animate={controlsServices}
          transition={{ duration: 1 }}
        >
          <OurServices />
        </motion.div>
        <CoverflowEffect/>

        <motion.div
          id="logo-carousel"
          initial={{ x: 100, opacity: 0 }}
          animate={controlsLogoCarousel}
          transition={{ duration: 1 }}
        >
          <LogoCarousel />
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default App;
