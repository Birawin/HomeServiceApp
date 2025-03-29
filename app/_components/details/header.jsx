"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='p-5 shadow-sm flex justify-between items-center relative z-50 bg-white'>
        <div className='flex items-center gap-6'>
          <Image src='/logo.svg' alt='logo' 
            width={100} height={100} />
        </div>
        <div className="flex items-center gap-6">
          {/* Mobile Menu */}
          <div className={`absolute top-full left-0 w-full bg-white shadow-lg 
            ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className='flex flex-col items-center py-4 space-y-4'>
              <h2 className='hover:text-indigo-800 cursor-pointer'>Home</h2>
              <h2 className='hover:text-indigo-800 cursor-pointer'>Services</h2>
              <h2 className='hover:text-indigo-800 cursor-pointer'>About Us</h2>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>
            <h2 className='hover:text-indigo-800 cursor-pointer'>Home</h2>
            <h2 className='hover:text-indigo-800 cursor-pointer'>Services</h2>
            <h2 className='hover:text-indigo-800 cursor-pointer'>About Us</h2>
          </div>

          <Button className="bg-[#2b04db] hover:bg-[#000000] transition-colors">
            Get Started
          </Button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-3xl cursor-pointer md:hidden"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-white bg-opacity-50 z-100 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Header;