// import React from 'react'
import logo from '../assets/Insimine-logo.png';
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="text-xl font-bold">
                <img src={logo} alt="Insimine Logo" className="h-8" />
            </div>
            <ul className="flex space-x-4">
              <li className="hover:text-black"><a href="#home">Home</a></li>
              <li className="hover:text-black"><a href="#about">About us</a></li>
              <li className="hover:text-black"><a href="#blogs">Blogs</a></li>
              <li><a href="#contact" className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600">Contact us</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar