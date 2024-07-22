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
    <div className='bg-blue-950'>
        <div className='flex justify-around items-center gap-10 pt-10 h-[600px]'>
           <div className=''>
            <Image className='w-[300px]' src={DummyImg}/>
           </div>
           <div className=''>
            <div className='flex text-center justify-around gap-5 m-5'>
                <div className='w-[200px] bg-blue-100 h-[200px] shadow rounded-lg'>
                  <div className='flex justify-center items-center'><Image className='w-[150px]' src={Clockin}/></div> 
                    <p>Clocking In and Out</p>
                </div>
                <div className='w-[200px] bg-blue-100 h-[200px] shadow rounded-lg'>
                   <div className='flex justify-center items-center'> <Image className='w-[150px]' src={GeofenceImg}/> </div>
                   <p>Geofencing</p>
                </div>
                <div className='w-[200px] bg-blue-100 h-[200px] shadow rounded-lg'>
                    <div className='flex justify-center items-center'><Image className='w-[150px]' src={Predictive}/></div>
                    <p>Predictive Analytics</p>
                </div>
            </div>
            <div className='flex text-center justify-around gap-5 m-5'>
            <div className='w-[200px] bg-blue-100 h-[200px] shadow rounded-lg'>
               <div className='flex justify-center items-center'><Image className='w-[150px]' src={Alert}/></div>
               <p>Security Alerts</p>
            </div>
            <div className='w-[200px] bg-blue-100 h-[200px] shadow rounded-lg'>
               <div className='flex justify-center items-center'> <Image className='w-[150px]' src={Biometric}/></div>
               <p>Biometric</p> 
            </div>
            <div className='w-[200px] bg-blue-100 h-[200px] shadow rounded-lg'>
               <div className='flex justify-center items-center'> <Image className='w-[150px]' src={Brand}/></div>
               <p>Custom Branding</p> 
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Features