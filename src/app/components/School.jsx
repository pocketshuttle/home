import React from 'react';
import Image from 'next/image';
import schoolIcon from '../../../public/schoolbusicon.png';
import ParentIcon from '../../../public/parenticon.png';
import StudentIcon from '../../../public/studenticon.png';
import { IoIosCheckmarkCircle } from "react-icons/io";
import Bus from '../../../public/mappin.png';

const School = () => {
  return (
    <>
    <div className='school_bg pb-10'>
    <div className='container mx-auto'>
        <div className='text-center pt-20'>
                <h3 className='bg-gradient-to-r from-sky-500  via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-[30px] md:text-[90px]'>PocketShuttle?</h3>
                <div className='flex justify-center items-center'>
                <p className='text-slate-300 w-[300px] md:w-[660px] mt-4'>PocketShuttle Management App is a comprehensive solution designed to enhance the safety, convenience, and efficiency of school transportation. It provides real-time alerts to parents when their children arrive at school and when they are picked up, ensuring peace of mind.</p>
                </div>
        </div>
        <div className='flex justify-center items-center mt-20 gap-40 flex-wrap'>
            <div className='col '>
            <Image className='w-[500px]' src={Bus}/>
            </div>
          
            <div className='col'>
              <h1 className='text-3xl font-bold text-sky-300'>Smartest Mobile Bus</h1>
              <p className='text-slate-300 w-[300px]'>Comprehensive Management App For</p>
              <ul className='mt-5'>
                <li className='flex text-white justify-start items-center gap-2'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' /> Schools</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' />Parents</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' />Students</li>
              </ul>
            </div>
        </div>
    </div>
    </div>
    </>

  )
}

export default School