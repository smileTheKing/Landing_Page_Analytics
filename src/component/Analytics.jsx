import React from 'react'
import { laptop } from '../assets/AssetImage'


const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto' src={laptop} alt='/'/>
        <div className=' flex flex-col justify-center'>
            <p className=' uppercase font-bold text-teal-400'>Data Analytics dashboard</p>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl py-2'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora, quisquam asperiores ipsam quidem iure fugit facilis? Ratione quod itaque ipsum soluta nemo iste unde nulla. Dignissimos, delectus! Atque, exercitationem?</p>
            <button className=' text-teal-400 bg-black w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0'>Get Started</button>
        </div>
        </div>
       
    </div>
  )
}

export default Analytics