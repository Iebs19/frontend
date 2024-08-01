import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gif from './assets/hero.gif'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='w-screen overflow-hidden'>
          <Navbar />
        </div>
        <Carousel />
      </div>
    </>
  )
}

export default App
