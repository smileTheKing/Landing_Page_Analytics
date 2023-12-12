import React from 'react';
import { double, single, triple } from '../assets/AssetImage';



const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full flex flex-col p-4 my-4 rounded-lg shadow-lg hover:scale-105 duration-300 text-center">
                <img src={single} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                <h2 className='text-2xl font-bold py-8'>Single User</h2>
                <p className='font-bold text-4xl'>$149</p>
                <div className='font-medium'>
                    <p className='border-b py-2 mx-8 mt-8'>500 GB Storage</p>
                    <p className='border-b py-2 mx-8'>1 Granted User</p>
                    <p className='border-b py-2 mx-8'>Send up to 2 GB</p>
                </div>
                <button className='font-medium bg-teal-400 w-[200px] px-6 py-3 my-6 mx-auto rounded-md'>Start Trial</button>
            </div>

            {/* doouble */}
            <div className="w-full flex flex-col p-4  md:my-0 my-8 rounded-lg bg-gray-100 shadow-lg hover:scale-105 duration-300 text-center">
                <img src={double} alt="/" className="w-20 mx-auto mt-[-3rem] rounded-md"/>
                <h2 className='text-2xl font-bold py-8'>Partnership</h2>
                <p className='font-bold text-4xl'>$199</p>
                <div className='font-medium'>
                    <p className='border-b py-2 mx-8 mt-8'>1 TB Storage</p>
                    <p className='border-b py-2 mx-8'>3 Users Allowed</p>
                    <p className='border-b py-2 mx-8'>Send up to 10 GB</p>
                </div>
                <button className='font-medium bg-black text-teal-400 w-[200px] px-6 py-3 my-6 mx-auto rounded-md'>Start Trial</button>
            </div>

            {/* triple */}

            <div className="w-full flex flex-col p-4 my-4 rounded-lg shadow-lg hover:scale-105 duration-300 text-center">
                <img src={triple} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                <h2 className='text-2xl font-bold py-8'>Single User</h2>
                <p className='font-bold text-4xl'>$149</p>
                <div className='font-medium'>
                    <p className='border-b py-2 mx-8 mt-8'>500 GB Storage</p>
                    <p className='border-b py-2 mx-8'>1 Granted User</p>
                    <p className='border-b py-2 mx-8'>Send up to 2 GB</p>
                </div>
                <button className='font-medium bg-teal-400 w-[200px] px-6 py-3 my-6 mx-auto rounded-md'>Start Trial</button>
            </div>

            
        </div>
    </div>
  )
}

export default Cards