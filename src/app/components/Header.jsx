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
import Link from 'next/link';


const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
}, [])
  return (
    <>
    <div className='pt-48 md:pt-60 header_bg h-[720px] md:h-[820px] '>
        <div className="spinning_bg"></div>
        <div className='text-center'>
            <div data-aos="zoom in" className=''>
                <div className='text-dark text-3xl lg:text-[90px] md:text-[80px] font-bold text-white'>
                 <div className='flex tracking-in-expand leading-normal justify-center items-center '>
                  <div>M</div>
                  <div><Image className='w-[40px] lg:w-[90px] md:w-[80px]' src={GeofenceImg}/></div>
                  <div>bile <span className='bg-gradient-to-r from-sky-500  via-purple-500 to-pink-500 bg-clip-text text-transparent'>School</span> <span>run</span> </div>
                  </div>  
                  <span>you can </span> <span className='bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>trust</span></div>
                <p className=' text-slate-200 text-[16px] md:text-[16px] mt-[10px] md:mt-[30px]'>A School pick up and drop off Manager.</p>
                  <div className='text-slate-50 mt-5'>
            <Link href={"https://app.pocketshuttle.com/login"}> <button className='bg-sky-400 text-black rounded-md  w-[150px] px-3 text-md font-medium py-3'>Get Started</button></Link> 
        </div>
                {/* <div className='flex justify-center items-center flex-wrap'>
                    <Image className='w-[140px] h-[50px]' src={Playstore}/>
                    <Image className='w-[140px] h-[82px]' src={Appstore}/>
                    <Image className='w-[140px] h-[50px]' src={Webapp}/>
                 </div> */}
            </div>
        </div>
        {/* <div className='mx-5 md:mx-20 mt-20 md:mt-48 overlap'>
              <div className='feature_bg py-10 rounded-3xl flex justify-center items-center flex-wrap gap-10'>
              <div className='text-slate-50'>
              <p className='text-slate-300 text-center text-xl md:text-2xl'>Join the Schools that are using our app. </p> 
              </div>
              <div className='text-slate-50'>
            <Link href={"https://app.pocketshuttle.com/login"}> <button className='bg-sky-400 text-black rounded-md  w-[200px] px-3 text-lg font-bold py-3'>Launch App </button></Link> 
              </div>
          </div>
        </div> */}
    </div>
   
    </>
  )
}

export default Header