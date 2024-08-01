import { useState } from 'react'
import '../App.css'
import video from '../assets/gif.mp4'

function Hero() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="relative z-10 text-black opacity-70 text-4xl text-center animate-fadeIn ">
        <h1 className='font-eudoxus font-bold tracking-wider'>InsiMine</h1>
        <p className='text-3xl'>Mining Insights for Data Driven Success</p>
      </div>
      <video 
        className="absolute inset-0 w-full h-full object-cover transform rotate-12 scale-110 animate-scroll opacity-50"
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
