
import React from 'react';
import { Navbar } from './components/Navbar';
import Video from '../src/assets/video_bg.mp4'
import Footer from './components/Footer';

const Layout = ({ children }) => {
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
    <div>
      <Navbar />
      <VideoBackground />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
