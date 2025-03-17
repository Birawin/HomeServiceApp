"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='p-5 shadow-sm flex justify-between items-center'>
        <div className='flex items-center gap-6'>
          <Image src='/logo.svg' alt='logo' 
            width={100} height={100} />
        </div>
        <div className="flex items-center gap-6">
          <div className={`bg-transparent md:static absolute md:min-h-fit min-h-[80vh] left-0 top-[9%] md:w-auto w-full md:flex ${isMenuOpen ? 'flex flex-col items-center justify-start' : 'hidden'}`}>
            <div className= 'flex md:flex-row flex-col items-center md:items-center md:gap-8 gap-8 w-full p-6'>
              <h2 className='hover:scale-105 hover:text-indigo-800 cursor-pointer'>Home</h2>
              <h2 className='hover:scale-105 hover:text-indigo-800 cursor-pointer'>Services</h2>
              <h2 className='hover:scale-105 hover:text-indigo-800 cursor-pointer'>About Us</h2>
            </div>
          </div>
          <Button className="bg-[#2b04db] hover:bg-[#000000] transition-colors">
              Get Started
          </Button>
          <button 
            onClick={toggleMenu} 
            className="text-3xl cursor-pointer md:hidden"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
    </div>
  )
}

export default Header;