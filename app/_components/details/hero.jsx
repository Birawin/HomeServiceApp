import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

export default function Hero() {
  return (
    <div>
      <h2 className='flex text-center justify-center text-5xl md:text-5xl font-extrabold text-black-800 leading-tight p-4 mt-7 gap-4'>
        Find Home Service Providers Near You
      </h2>
      <h2 className='flex text-center justify-center align-middle md:text-1xl text-black '>
        Receive top-notch service from our vetted professionals
      </h2>
      <div className="flex justify-center items-center w-full p-4 mt-4 flex gap-x-2">
      <Input 
        placeholder="Search" className="rounded-s-lg md:w-[400px] md:h-[50px] w-[300px] h-[40px] px-4"
      />
        <Button className="rounded-full h-[45px]">
          <Search className="h-4 w-4"/>

        </Button>
      </div>  
    </div>
  )
} 