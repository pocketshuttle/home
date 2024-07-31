import React from 'react';
import Image from 'next/image';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Subscribe = () => {
  return (
    <>
    <div className='download_bg pt-48'>
    <div className='inner_download mx-20 shadow-xl rounded-3xl'>
      <h1 className='text-center text-white text-3xl font-normal pt-4'>Plans</h1>
        <div className='flex container  mx-auto download_b h-[600px] justify-around items-center'>
               <div className='col'>
                <h1 className='text-2xl text-yellow-300 font-normal'>Basic</h1>
                <p className='text-slate-500 text-sm'>Lorem ipsum dolor sit amet elit.</p>
                <h1 className='text-5xl text-white my-3'> <span className='text-2xl'>$</span>0</h1>
                <button className='bg-white rounded-lg rounded-se-3xl w-[200px] px-3 text-sm font-normal py-2'> Get Started </button>
                <ul className='mt-5'>
                <li className='flex text-white justify-start items-center gap-2'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' /> Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' /> Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
              </ul>
               </div>

               <div className='col'>
                <h1 className='text-2xl text-teal-300 font-normal'>Premium</h1>
                <p className='text-slate-500 text-sm'>Lorem ipsum dolor sit amet elit.</p>
                <h1 className='text-5xl text-white my-3'> <span className='text-2xl'>$</span>12</h1>
                <button className='bg-white rounded-lg rounded-se-3xl w-[200px] px-3 text-sm font-normal py-2'> Get Started </button>
                <ul className='mt-5'>
                <li className='flex text-white justify-start items-center gap-2'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' /> Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' /> Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
              </ul>
               </div>

               <div className='col'>
                <h1 className='text-2xl text-pink-500 font-normal'>Advanced</h1>
                <p className='text-slate-500 text-sm'>Lorem ipsum dolor sit amet elit.</p>
                <h1 className='text-5xl text-white my-3'> <span className='text-2xl'>$</span>25</h1>
                <button className='border border-pink-500 text-pink-500 rounded-lg rounded-se-3xl w-[200px] px-3 text-sm font-normal py-2'> Get Started </button>
                <ul className='mt-5'>
                <li className='flex text-white justify-start items-center gap-2'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' /> Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' /> Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-teal-400 text-2xl' />Features</li>
              </ul>
               </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Subscribe