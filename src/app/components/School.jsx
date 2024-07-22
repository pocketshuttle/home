import React from 'react';
import Image from 'next/image';
import Schbus from '../../../public/schoolbus.png';

const School = () => {
  return (
    <div>
        <div className='flex school_bg h-[600px] justify-around items-center'>
                <div>
                    <h1 className='text-blue-950 text-3xl'>Explainer texts in higher size</h1>
                    <p className='text-blue-950'>The small section</p>
                    <button className='border border-blue-950 w-[150px] h-[50px] mt-10 text-2xl  text-blue-950'>ENROL</button>
                </div>
                <div>
                    <Image className='w-[500px]' src={Schbus}/>
                </div>
        </div>
    </div>
  )
}

export default School