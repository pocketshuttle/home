import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/pslogo-2.png'

const Footer = () => {
  return (
    <>
    <div className='container mx-auto'>
        <div className='flex justify-around h-[400px] items-center'>
            <div>
            <Image className='w-[200px]' src={Logo} />
            <p className='w-[300px] mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni debitis repudiandae facilis.</p>
            </div>
            <div>
                <h4 className='font-bold text-lg'>Products</h4>
                <ul>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                </ul>
            </div>
            <div>
            <h4 className='font-bold text-lg'>About Us</h4>
                <ul>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                </ul>
            </div>
            <div>
            <h4 className='font-bold text-lg'>Resources</h4>
                <ul>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                </ul>
            </div>
            <div>
            <h4 className='font-bold text-lg'>Get In Touch</h4>
                <ul>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                </ul>
            </div>
        </div>
    </div>
    <div className='bg-blue-950'>If you are here</div>
    </>
  )
}

export default Footer