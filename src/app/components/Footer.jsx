import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/ps.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
    const day = new Date();
    const year = day.getFullYear()
  return (
    <>
    <div className='footer_bg pt-30'>
    <div className='container mx-auto'>
        <div className='flex justify-between pt-16 items-center'>
            <div>
            <Image className='w-[200px]' src={Logo} />
            </div>
            <div className='col_1 flex justify-center items-center gap-3 text-slate-400 text-[20px]'>
           <p className='border border-sky-300 text-sky-300 p-2 rounded-full'><FaFacebookF/></p> 
           <p className='border border-sky-300 text-sky-300 p-2 rounded-full'> <FaLinkedinIn /></p>
           <p className='border border-sky-300 text-sky-300 p-2 rounded-full'> <FaXTwitter /></p>
           <p className='border border-sky-300 text-sky-300 p-2 rounded-full'> <FaInstagram /></p>
            </div>
        </div>
        <p className='border-b border-slate-400 pb-10 pt-3'></p>
        <div className='pt-4 pb-8 flex justify-between items-center'>
            <div className='flex justify-start text-[12px] items-center gap-5 text-slate-400'>
                <p>Term of Service</p>
                <p>Cookies and Policy</p>
                <p>Faq</p>
                <p>Support</p>
                <p>Careers</p>
            </div>
            <div className='text-slate-400 text-[12px]'>
                <p>Copyright © {year} PocketShuttle. All rights reserved.</p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer