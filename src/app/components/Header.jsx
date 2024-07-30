'use client'
import React, {useEffect} from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import Map from '../../../public/map.png';
import GeofenceImg from '../../../public/geofencings.gif';
import Playstore from '../../../public/playstore.png'
import Appstore from '../../../public/applestore.png'
import Webapp from '../../../public/web.png'
import Try from '../../../public/try.png';
import Point from '../../../public/point2.png';


const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
}, [])
  return (
    <>
    <div className='pt-40 header_bg h-[820px] '>
        <div className='text-center'>
            <div data-aos="zoom in" className=''>
                <div className='text-dark text-6xl font-bold text-white'>
                 <div className='flex tracking-in-expand leading-normal justify-center items-center'>
                  <div>L</div>
                  <div><Image className='w-[50px]' src={GeofenceImg}/></div>
                  <div>cation Manager <span className='text-teal-400'>you</span> </div>
                  </div>  
                  <span className='text-teal-400 tracking-in-expand'>can always </span> Trust</div>
                <p className=' text-white mt-5'>The small texts that will be on the home page.</p>
                <div className='flex justify-center items-center'>
                    <Image className='w-[140px] h-[50px]' src={Playstore}/>
                    <Image className='w-[140px] h-[82px]' src={Appstore}/>
                    <Image className='w-[140px] h-[50px]' src={Webapp}/>
                    </div>
            </div>
        </div>
        <div className='mx-20 mt-48 overlap'>
              <div className='feature_bg py-20 rounded-3xl flex justify-center items-center gap-10'>
              <div className='text-slate-50'>
               
              </div>
              <div className='text-slate-50'>
                
              </div>
          </div>
        </div>
    </div>
   
    </>
  )
}

export default Header