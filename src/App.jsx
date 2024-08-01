import { useState } from 'react'
import './App.css'
import video from './assets/gif.mp4'

function App() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="relative z-10 text-black text-4xl text-center animate-fadeIn">
        <h1>InSimine</h1>
      </div>
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}

export default App
