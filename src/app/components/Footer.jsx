import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/pslogo.png'

const Footer = () => {
  return (
    <>
    <div className='footer_bg mt-40'>
    <div className='container mx-auto'>
        <div className='flex justify-around h-[400px] items-center'>
            <div>
            <Image className='w-[200px]' src={Logo} />
            <p className='text-slate-200 w-[300px] mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni debitis repudiandae facilis.</p>
            </div>
            <div>
                <h4 className='font-bold text-slate-300 text-lg'>Products</h4>
                <ul className='text-slate-200'>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                </ul>
            </div>
            <div>
            <h4 className='font-bold   text-slate-300  text-lg'>About Us</h4>
                <ul className='text-slate-200'>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                </ul>
            </div>
            <div>
            <h4 className='font-bold  text-slate-300  text-lg'>Resources</h4>
                <ul className='text-slate-200'>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                </ul>
            </div>
            <div>
            <h4 className='font-bold  text-slate-300  text-lg'>Get In Touch</h4>
                <ul className='text-slate-200'>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer