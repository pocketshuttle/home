import React from 'react';
import Image from 'next/image';
import Screen from '../../../public/phonebg.png';
import Playstore from '../../../public/playstore.png'
import Appstore from '../../../public/applestore.png'
import Webapp from '../../../public/web.png'


const Download = () => {
  return (
    <div className='bg-sky-300 m-20 rounded-3xl'>
        <div className='flex container mx-auto download_b h-[600px] justify-around items-center'>
                <div>
                    <h1 className='text-blue-950 text-3xl'>Explainer texts in higher size</h1>
                    <p className='text-blue-950'>The small section</p>
                    <div className='flex justify-between items-center'>
                    <Image className='w-[140px] h-[50px]' src={Playstore}/>
                    <Image className='w-[140px] h-[82px]' src={Appstore}/>
                    <Image className='w-[140px] h-[50px]' src={Webapp}/>
                    </div>
                    {/* <button className='border border-blue-950 w-[150px] h-[50px] text-2xl  text-blue-950'>ENROL</button> */}
                </div>
                <div>
                    <Image className='w-[400px]' src={Screen}/>
                </div>
        </div>
    </div>
  )
}

export default Download