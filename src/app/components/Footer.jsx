import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/whitelogo.png'
// import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';




const Footer = () => {
    const day = new Date();
    const year = day.getFullYear()
  return (
    <>
    <div className='footer_bg pt-30'>
    <div className='container mx-auto'>
        <div className='flex justify-between pt-16 items-center'>
            <div>
            <Image className='md:w-[200px] w-[150px] ml-4' src={Logo} />
            </div>
            <div className='col_1 flex justify-center items-center mr-3 gap-3 text-slate-400 text-[18px]'>
           {/* <p className='border border-sky-300 text-sky-300 p-2 rounded-full'><FaFacebookF/></p>  */}
          <a href="https://www.instagram.com/pocketshuttle?igsh=MTdtZXR6NnZoaWR3eg%3D%3D&utm_source=qr" target='_blank'><p className='border border-sky-300 text-sky-300 p-2 rounded-full'><FaInstagram /></p></a> 
          <a href="https://x.com/pocketshuttle?s=11&t=zOQ4mzLlPtuNZBjqLsy8Dw" target='_blank'><p className='border border-sky-300 text-sky-300 p-2 rounded-full'> <FaXTwitter /></p></a> 
          <a href="https://www.linkedin.com/company/pocketshuttle/" target='_blank'><p className='border border-sky-300 text-sky-300 p-2 rounded-full'> <FaLinkedinIn /></p></a> 
           {/* <p className='border border-sky-300 text-sky-300 p-2 rounded-full'> <FaInstagram /></p> */}
            </div>
        </div>
        <p className='border-b border-slate-400 pb-10 pt-3'></p>
        <div className='pt-4 pb-8 flex justify-between items-center flex-wrap'>
            <div className='flex justify-start text-[12px] items-end md:items-center gap-5 text-slate-400 flex-wrap md:ml-0 ml-4'>
              <Link href={"/terms"} >Term of Service</Link>
               <Link href={"/privacy"}>Cookies and Policy</Link>
               <Link href={"/faq"}>Faq</Link>
               <Link href={"mailto:hello@pocketshuttle.com"}>Support</Link>
                <p>Careers</p>
            </div>
            <div className='text-slate-400 ml-4 mt-4 md:mt-0 text-center text-[12px]'>
                <p className='text-center'>Copyright © {year} PocketShuttle. All rights reserved.</p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer