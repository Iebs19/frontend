import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gif from './assets/hero.gif'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen h-screen'>
    <Navbar/>

    <Hero/>
    </div>
    </>
  )
}

export default App
