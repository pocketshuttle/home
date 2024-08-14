import React from 'react';
import Image from 'next/image';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Subscribe = () => {
  return (
    <>
    <div className='inner_download pt-32'>
    <div className=' container mx-auto'>
      <h1 className='text-left text-slate-200 text-[50px] font-bold pt-4'>Trusted by 300,000+<br/>leading organizations</h1>
        <div className='flex container  mx-auto download_b h-[600px] justify-around items-center'>
               <div className='col min-h-[460px] hover:shadow-md hover:shadow-teal-600 border-teal-400 border shadow w-[300px] rounded-lg rounded-se-3xl p-8'>
                <h1 className='text-2xl text-teal-400 font-normal'>Basic</h1>
                <p className='text-slate-300 text-sm'>Lorem ipsum dolor sit amet elit.</p>
                <h1 className='text-5xl text-slate-300 my-3'> <span className='text-2xl'>$</span>0</h1>
                <button className='bg-teal-400 text-white text-md rounded-md w-[200px] px-3 font-normal py-3'> Get Started </button>
                <ul className='mt-5'>
                <li className='flex text-slate-300 justify-start items-center gap-2'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' /> Clockin & Out</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Sign up</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />20 Parents</li>
             
              </ul>
               </div>

               <div className='col min-h-[460px] hover:shadow-md hover:shadow-sky-600 border-sky-300 border shadow w-[300px]  rounded-lg rounded-se-3xl p-8'>
                <h1 className='text-2xl text-sky-300 font-normal'>Premium</h1>
                <p className='text-slate-300 text-sm'>Lorem ipsum dolor sit amet elit.</p>
                <h1 className='text-5xl text-slate-300 my-3'> <span className='text-2xl'>$</span>12</h1>
                <button className='bg-sky-400 text-white rounded-md w-[200px] px-3 text-md font-normal py-3'> Get Started </button>
                <ul className='mt-5'>
                <li className='flex text-slate-300 justify-start items-center gap-2'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' /> Geofencing</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' />Security Alert</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' />Unlimited Parents</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' /> Features</li>
               
              </ul>
               </div>

               <div className='col min-h-[460px] hover:shadow-md hover:shadow-pink-500 border-pink-500 border shadow w-[300px]  rounded-lg rounded-se-3xl p-8'>
                <h1 className='text-2xl text-pink-500 font-normal'>Advanced</h1>
                <p className='text-slate-300 text-sm'>Lorem ipsum dolor sit amet elit.</p>
                <h1 className='text-5xl text-slate-300 my-3'> <span className='text-2xl'>$</span>25</h1>
                <button className='bg-pink-500 text-white rounded-md w-[200px] px-3 text-md font-normal py-3'> Get Started </button>
                <ul className='mt-5'>
                <li className='flex text-slate-300 justify-start items-center gap-2'><IoIosCheckmarkCircle className='text-pink-500 text-2xl' /> Predictive Analytics</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-pink-500 text-2xl' />School Branding</li>
                <li className='flex text-slate-300 justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-pink-500 text-2xl' />Biometric</li>             
              </ul>
               </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Subscribe