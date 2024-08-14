import React from 'react';
import Image from 'next/image';
import schoolIcon from '../../../public/schoolbusicon.png';
import ParentIcon from '../../../public/parenticon.png';
import StudentIcon from '../../../public/studenticon.png';
import { IoIosCheckmarkCircle } from "react-icons/io";
import Map from '../../../public/bus.png';

const School = () => {
  return (
    <>
    <div className='school_bg pb-10'>
    <div className='container mx-auto'>
        <div className='text-center pt-20'>
                <h3 className='text-white font-bold text-4xl'>Security above movement be.</h3>
                <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, explicabo!</p>
        </div>
        <div className='flex justify-center items-center mt-20 gap-40'>
            <div className='col'>
            <Image className='w-[500px]' src={Map}/>
            </div>
          
            <div className='col'>
              <h1 className='text-3xl font-bold text-white'>Smartest Bus</h1>
              <p className='text-slate-500 w-[300px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, accusantium.</p>
              <ul className='mt-5'>
                <li className='flex text-white justify-start items-center gap-2'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' /> Schools</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' />Parents</li>
                <li className='flex text-white justify-start items-center gap-2 mt-3'><IoIosCheckmarkCircle className='text-sky-400 text-2xl' />Pupils</li>
              </ul>
            </div>
        </div>
    </div>
    </div>
    </>

  )
}

export default School