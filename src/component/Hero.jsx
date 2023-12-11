import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className="max-w-[800px] mt-[-96px] h-screen mx-auto  px-4 text-center flex flex-col justify-center">
            <p className='uppercase text-teal-400 font-bold p-2'>Growing with data analytics</p>
            <h1 className='font-bold text-4xl sm:text-6xl md:text-7xl md:py-6'>Grow with data.</h1>
            <div className='flex items-center justify-center '>
            <p className='font-bold text-xl sm:text-4xl md:text-5xl py-2'>Fast, flexible financing for</p>
            <Typed className='font-bold text-xl sm:text-4xl md:text-5xl pl-2 md:pl-3' strings={['BTB','BTC','SAAS']} typeSpeed={120} backSpeed={140} loop/>
            </div>
           <p className='font-bold text-xl md:text-2xl text-gray-500 '>Monitor your data analytics to increase revenue for BTB, BTC, & SAAS platform.</p>
           <button className=' text-black bg-teal-400 w-[200px] rounded-md font-medium my-6 py-3 mx-auto'>Get Started</button>
        </div>     
    </div>
  )
}

export default Hero