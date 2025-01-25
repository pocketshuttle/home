import React from 'react';
import Image from 'next/image';
import './apps.css';

const page = () => {
  return (
    <div className='app_page'>
       <div className='pt-28 app_head_img text-center'>
        <h2 className='text-[50px] text-white font-bold'>Hello!</h2>
        <div className='flex justify-center my-4'>
        <p className='w-[640px] text-slate-100 text-[20px] font-medium'>We know you like to know about the safety of your studnts and update their parents as well. PocketShuttle is designed for Schools.</p>
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
       </div>
       <div className='flex justify-center items-center'>
        <p className='h-[150px] mt-10 border border-sky-300'></p>
       </div>
       <h2 className='text-[50px] text-center my-10 text-white font-bold'> One App</h2>
       <div className='flex justify-center items-center'>
        <p className='h-[150px] mt-10 border border-sky-300'></p>
       </div>
       <div className='pt-20 text-center'>
       <h2 className='text-[50px] text-white font-bold'>On Web and Mobile</h2>
        <div className='flex justify-center my-4'>
        <p className='w-[640px] text-slate-300 text-[20px] font-medium'>Currently available on Web.</p>
        </div>
        </div>
        <div className='flex py-10 hover:shadow justify-center'>
       <Image src={'/phone.png'} width={250} height={250} alt="phone"/>
       </div>
    </div>
  )
}

export default page