import React from 'react';
import Image from 'next/image';
import './apps.css';

const page = () => {
  return (
    <div className='app_page'>
       <div className='pt-28 app_head_img text-center'>
        <h2 className='text-[50px] text-white font-bold'>Hey you!</h2>
        <div className='flex justify-center my-4'>
        <p className='w-[640px] text-slate-100 text-[20px] font-medium'>Did you come here because you were hungry or simply curious? It&apos;s perfectly fine if you came for both. Whether it&apos;s for your tastebuds or for curiosity&apos;s sake, download the app, for satisfaction guaranteed.</p>
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
       </div>
       <div className='flex justify-center items-center'>
        <p className='h-[150px] mt-10 border border-sky-300'></p>
       </div>
       <h2 className='text-[50px] text-center my-10 text-white font-bold'> This is how you do it</h2>
       <div className='flex justify-center items-center'>
        <p className='h-[150px] mt-10 border border-sky-300'></p>
       </div>
       <div className='pt-20 text-center'>
       <h2 className='text-[50px] text-white font-bold'>Hey you!</h2>
        <div className='flex justify-center my-4'>
        <p className='w-[640px] text-slate-500 text-[20px] font-medium'>Did you come here because you were hungry or simply curious? It&apos;s perfectly fine if you came for both. Whether it&apos;s for your tastebuds or for curiosity&apos;s sake, download the app, for satisfaction guaranteed.</p>
        </div>
        </div>
        <p className='text-teal-300 text-center text-sm underline'>Coming Soon</p>
        <div className='flex py-10 hover:shadow justify-center'>
       <Image src={'/phone.png'} width={250} height={250} alt="phone"/>
       </div>
    </div>
  )
}

export default page