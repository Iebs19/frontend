import { useState } from 'react'
import '../App.css'
import video from '../assets/gif.mp4'

function Hero() {
  return (
    <div className="relative h-full flex justify-center items-center overflow-hidden">
      <div className="relative z-10 text-black opacity-70 text-4xl text-center animate-fadeIn">
        <h1 className='font-eudoxus font-bold tracking-wider'>InsiMine</h1>
        <p className='text-3xl'>Mining Insights for Data Driven Success</p>
        <div className="mt-8 flex space-x-4 justify-center">
          <a href="#learn-more" className="px-4 py-2 rounded-full backdrop-blur-md bg-black/30 text-2xl text-black font-semibold hover:bg-white/50 transition-all duration-300">
            Learn More
          </a>
          <a href="#get-started" className="px-4 py-2 rounded-full backdrop-blur-md bg-black/30 text-2xl text-black font-semibold hover:bg-white/50 transition-all duration-300">
            Get Started
          </a>
        </div>
      </div>
      <video 
        className="absolute inset-0 w-full h-full object-cover transform rotate scale-110 animate-scroll opacity-50"
        src={video}
        autoPlay
        loop
        muted
        playsInline
        style={{ animationDuration: '30s' }}
      />
    </div>
  )
}

export default Hero
