import React from 'react';
import Image from 'next/image';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Subscribe = () => {
  return (
    <>
    <div className='inner_download py-32'>
    <div className=' container mx-auto'>
      <h1 className='text-left text-slate-200 text-[40px] md:text-[50px] px-12 md:px-5 font-bold py-10'>Enjoy  A Swift<br/> Pick up & Drop off.</h1>
        <div className='flex container mx-auto h-auto justify-around items-center flex-wrap'>
               <div className='col min-h-[560px] mx-3 my-3 hover:shadow-md hover:shadow-teal-600 border-teal-400 border shadow w-[500px] rounded-lg rounded-se-3xl p-8'>
                <h1 className='text-2xl text-teal-400 font-normal'>Basic</h1>
                <p className='text-slate-400 mt-3 text-sm'>Get Started with the Basic Plan.</p>
                <h1 className='text-5xl font-bold text-slate-300 my-3'> <span className='text-2xl'>N</span>0</h1>
                <button className='bg-teal-400 text-white text-md hover:bg-inherit hover:border hover:border-teal-400 hover:text-teal-400 rounded-md w-[200px] px-3 font-normal py-3'> Get Started </button>
                <ul className='mt-5'>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' /> Registration</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />School Profile Setup</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Add up to 10 Parents</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Clock in and out</li>
             
              </ul>
               </div>

               <div className='col min-h-[560px] mx-3 hover:shadow-md hover:shadow-sky-600 border-sky-300 border shadow w-[500px]  rounded-lg rounded-se-3xl p-8'>
                <h1 className='text-2xl text-sky-300 font-normal'>Premium</h1>
                <p className='text-slate-400 mt-3 text-sm'>Join the Premium Class with N4,000 per parent termly to use the awesome Features.</p>
                <h1 className='text-5xl font-bold text-slate-300 my-3'> <span className='text-2xl'>N</span>4,000</h1>
                <button className='bg-sky-400 text-white  hover:bg-inherit hover:border hover:border-sky-300 hover:text-sky-300 rounded-md w-[200px] px-3 text-md font-normal py-3'> Get Started </button>
                <ul className='mt-5'>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' /> All Basic Features</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' /> Geofencing</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' />Unlimited Parents</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' /> Attendance Reports</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' /> Historical Data</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' /> Priority Customer Service</li>
               
              </ul>
               </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Subscribe