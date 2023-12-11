import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {

    const [nav,setNav] = useState(false);
    const handleNav =()=>{
        setNav(!nav)
    }

  return (
    <div className='flex px-4 justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
        {/* logo */}
        <h1 className='w-full text-3xl font-bold text-teal-400 uppercase'>Reacat.</h1>
        {/* desktop menu */}
        <ul className='lg:flex  hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        
        {/* menu open */}
        <div onClick={handleNav} className='block md:hidden '>
            {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
            
        </div>

        {/* mobile menu */}
        <div className={nav ?'md:hidden fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':'fixed  left-[-100%]'}>
            {/* logo */}
        <h1 className='w-full p-4 text-3xl font-bold text-teal-400 uppercase my-4'>Reacat.</h1>
        <ul className='flex flex-col  uppercase '>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
        </div>  
    </div>
  )
}

export default Navbar