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
    <div className='bg-slate-50 pb-20  features'>
        <div className='flex justify-around items-center gap-10 pt-10 flex-wrap' id='features'>
           <div className=''>
            <h2 className='md:text-4xl text-md text-center font-bold ml-5 my-6 mb-10'>PocketShuttle App makes sure that you<br/> can do everything on one platform.</h2>
            <div className='md:flex text-center justify-around gap-5 m-5 flex-wrap'>
            <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl transition-all border-slate-300 h-[280px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Clock In</p>
                   <p className='text-left text-sm w-[250px] mt-3'>A clocking system that notify the parent/school for childs&apos; pick up and drop off.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={Clockin}/> </div>
                     {/* <div className='text-sm'>EXPLORE MORE</div> */}
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[280px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Geofencing</p>
                   <p className='text-left text-sm w-[250px] mt-3'>Parent/School know when the student(s) are in School when they step out of School.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={GeofenceImg}/> </div>
                     {/* <div className='text-sm'>EXPLORE MORE</div> */}
                   </div>
                </div>
                {/* <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[280px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Alert</p>
                   <p className='text-left text-sm w-[250px] mt-3'>A security system that trigger an alert to security organizations incase of emergency.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={Alert}/> </div>
                   </div>
                </div> */}
            </div>
            <div className='md:flex text-center justify-around gap-5 m-5 flex-wrap'>
            <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[280px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Predictive Analytic</p>
                   <p className='text-left text-sm w-[250px] mt-3'>This gives a future analysis on how the process of pick up and drop off can be better.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={Predictive}/> </div>
                     {/* <div className='text-sm'>EXPLORE MORE</div> */}
                   </div>
                </div>
                <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[280px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Brand</p>
                   <p className='text-left text-sm w-[250px] mt-3'>Personalized School interface customization.</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={Brand}/> </div>
                     {/* <div className='text-sm'>EXPLORE MORE</div> */}
                   </div>
                </div>
                {/* <div className='w-[300px] p-4 bg-inherit border my-1 hover:shadow-xl border-slate-300 h-[280px] shadow-md rounded-lg rounded-se-3xl'>
                   <p className='text-slate-900 text-left text-xl font-bold'>Biometric</p>
                   <p className='text-left text-sm w-[250px] mt-3'>School, Parents and Students Biometric identification</p>
                   <div className='flex justify-between mt-10 items-center'>
                   <div className='flex justify-around items-baseline'> <Image className='w-[100px]' src={Biometric}/> </div>
                   </div>
                </div> */}
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Features