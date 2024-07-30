import React from 'react';
import Image from 'next/image';
import DummyImg from '../../../public/point2.png';
import Clockin from '../../../public/clockin.gif';
import GeofenceImg from '../../../public/geofencing.gif';
import Predictive from '../../../public/predictive.gif';
import Alert from '../../../public/alert.gif';
import Biometric from '../../../public/biometric.gif';
import Brand from '../../../public/brand.gif';

const Features = () => {
  return (
   <>
    <div className='bg-slate-50 pb-20 features'>
         {/* <h1 className='text-4xl font-bold py-10 feature_bg text-center text-teal-400'>Know Better, Track better. Stay Safe!</h1> */}
        <div className='flex justify-around items-center gap-10 pt-10'>
           {/* <div className=''>
            <Image className='w-[300px]' src={DummyImg}/>
           </div> */}
           <div className=''>
            <div className='flex text-center justify-around gap-5 m-5'>
            <div className='w-[300px] p-4 bg-inherit border border-slate-300 h-[250px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Clock In</p>
                   <p className='text-left text-sm w-[200px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={Clockin}/> </div>
                     <div className='text-sm'>EXPLORE MORE</div>
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border border-slate-300 h-[250px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Geofencing</p>
                   <p className='text-left text-sm w-[200px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={GeofenceImg}/> </div>
                     <div className='text-sm'>EXPLORE MORE</div>
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border border-slate-300 h-[250px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Alert</p>
                   <p className='text-left text-sm w-[200px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={Alert}/> </div>
                     <div className='text-sm'>EXPLORE MORE</div>
                   </div>
                </div>
            </div>
            <div className='flex text-center justify-around gap-5 m-5'>
            <div className='w-[300px] p-4 bg-inherit border border-slate-300 h-[250px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Predictive Analytic</p>
                   <p className='text-left text-sm w-[200px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={Predictive}/> </div>
                     <div className='text-sm'>EXPLORE MORE</div>
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border border-slate-300 h-[250px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Brand</p>
                   <p className='text-left text-sm w-[200px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={Brand}/> </div>
                     <div className='text-sm'>EXPLORE MORE</div>
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border border-slate-300 h-[250px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Biometric</p>
                   <p className='text-left text-sm w-[200px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={Biometric}/> </div>
                     <div className='text-sm'>EXPLORE MORE</div>
                   </div>
                </div>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Features