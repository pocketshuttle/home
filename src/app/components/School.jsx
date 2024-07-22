import React from 'react';
import Image from 'next/image';
import schoolIcon from '../../../public/schoolbusicon.png';
import ParentIcon from '../../../public/parenticon.png';
import StudentIcon from '../../../public/studenticon.png';

const School = () => {
  return (
    <div>
        <div className='text-center pt-20'>
                <h3 className='text-sky-400 text-2xl'>Colored topic here</h3>
                <h1 className='font-semibold text-xl'>A more bigger texts to explain the and another section</h1>
              <div className='flex justify-center items-center'> <p className='text-slate-500 w-[400px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic sint labore distinctio eaque dicta illum enim.</p></div>
        </div>
        <div className='flex justify-center items-center mt-20 gap-40'>
            <div className='col text-center'>
            <div className='flex justify-center'><Image className='w-[60px] rounded-lg mb-3' src={schoolIcon}/></div>
              <h2 className='font-semibold text-xl'>A small text but big</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, amet. Explicabo, veniam?</p>
            </div>
            <div className='col text-center'>
           <div className='flex justify-center'> <Image className='w-[60px] rounded-lg mb-3' src={ParentIcon}/></div> 
              <h2  className='font-semibold text-xl'>A small text but big</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, amet. Explicabo, veniam?</p>
            </div>
            <div className='col text-center'>
            <div className='flex justify-center'><Image className='w-[60px] rounded-lg mb-3' src={StudentIcon}/></div> 
              <h2  className='font-semibold text-xl'>A small text but big</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, amet. Explicabo, veniam?</p>
            </div>
        </div>
    </div>
  )
}

export default School