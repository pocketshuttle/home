import React from 'react';
import Image from 'next/image';
import schoolIcon from '../../../public/schoolbusicon.png';
import ParentIcon from '../../../public/parenticon.png';
import StudentIcon from '../../../public/studenticon.png';

const School = () => {
  return (
    <>
    <div className='school_bg'>
    <div className='container mx-auto h-[600px]'>
        <div className='text-left pt-40'>
                <h3 className='text-sky-400 font-bold text-4xl'>Colored Texts that will be.</h3>
        </div>
        <div className='flex justify-center items-center mt-20 gap-40'>
            <div className='col'>
            <div className='flex justify-start'><Image className='w-[60px] rounded-lg mb-3' src={schoolIcon}/></div>
              <h2 className='font-semibold text-left text-sky-300 text-xl'>School</h2>
              <p className='text-left text--200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, amet. Explicabo, veniam?</p>
            </div>
            <div className='col'>
           <div className='flex justify-start'> <Image className='w-[60px] rounded-lg mb-3' src={ParentIcon}/></div> 
              <h2  className='font-semibold text-left text-pink-600  text-xl'>Parent</h2>
              <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, amet. Explicabo, veniam?</p>
            </div>
            <div className='col'>
            <div className='flex justify-start'><Image className='w-[60px] rounded-lg mb-3' src={StudentIcon}/></div> 
              <h2  className='font-semibold text-left text-xl'>Pupils</h2>
              <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, amet. Explicabo, veniam?</p>
            </div>
        </div>
    </div>
    </div>
    </>

  )
}

export default School