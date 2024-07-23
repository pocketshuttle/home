import React from 'react';
import Image from 'next/image';
import Map from '../../../public/map.png';


const Header = () => {
  return (
    <div className='pt-28 header_b bg-sky-300'>
        <div className='flex justify-center gap-20 items-center'>
            <div className='col_1'>
                <h1 className='text-dark text-5xl font-bold text-blue-950'>LOCATION YOU <br/> CAN TRUST</h1>
                <p className=' text-blue-950'>The small texts that will be on the home page.</p>
                <button className='border border-blue-950 w-[150px] h-[50px] mt-10 text-2xl  text-blue-950'>ENROL</button>
            </div>
            <div className='col_2'>
            <Image className='w-[500px]' src={Map}/>
            </div>
        </div>
        <h1 className='text-[200px] text-center font-extrabold text-blue-950'>LOCATION!</h1>
    </div>
  )
}

export default Header