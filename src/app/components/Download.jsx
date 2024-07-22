import React from 'react';
import Image from 'next/image';
import Screen from '../../../public/screen.png';
import Playstore from '../../../public/playstore.png'
import Appstore from '../../../public/applestore.png'
import Webapp from '../../../public/web.png'


const Download = () => {
  return (
    <div>
        <div className='flex download_bg h-[600px] justify-around items-center'>
                <div>
                    <h1 className='text-blue-950 text-3xl'>Explainer texts in higher size</h1>
                    <p className='text-blue-950'>The small section</p>
                    <div className='flex justify-between items-center'>
                    <Image className='w-[160px] h-[70px]' src={Playstore}/>
                    <Image className='w-[160px] h-[120px]' src={Appstore}/>
                    <Image className='w-[160px] h-[70px]' src={Webapp}/>
                    </div>
                    {/* <button className='border border-blue-950 w-[150px] h-[50px] text-2xl  text-blue-950'>ENROL</button> */}
                </div>
                <div>
                    <Image className='w-[350px]' src={Screen}/>
                </div>
        </div>
    </div>
  )
}

export default Download