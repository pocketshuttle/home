"use client"; // Add this line at the beginning

import React, { useState, useEffect } from 'react';
import { IoHome } from "react-icons/io5";
import { BsRocketTakeoff } from "react-icons/bs";
import { GrDomain } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import PSLOGO from '../../../../public/ps.png';
import { IoCloseSharp } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import './navbar.css';
import { useRouter } from 'next/navigation';




const Navbar = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (path) => {
    setActiveItem(path);
  };
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 764 : false
  );
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 764 : false);
      setShowMenu(false); // Close the menu on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    if (isMobile) {
      setShowMenu(!showMenu);
    }
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };


  return (
    <>
    <nav className="navbar bg-sk-300 py-4">
      <div className="logo">
        <Link href={'/'} className="links w-[50px]">
          <Image className='w-[140px]' src={PSLOGO} alt="" />
        </Link>
      </div>
        {/* New fix */}
        {/*New fix up */}
        
      {isMobile ? (
        <div className="hamburger" onClick={handleMenuClick}>
          <div className={`line  ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
        </div>
      ) : (
          <>
        <ul className="nav-links text-md container flex items-center gap-1 justify-center text-center">
          <li>
          <Link href={'/'} className={`links ${activeItem === '/' ? 'border-b-2 border-sky-300 pb-4' : ''}`} onClick={() => handleItemClick('/')}>
              Home
            </Link>
          </li>
          <a href=""></a>
          <li>
          <Link href={'#features'} className={`links ${activeItem === '' ? 'border-b-2 border-sky-300 pb-4' : ''}`} onClick={() => handleItemClick('')}>
              Features
            </Link>

          </li>
          <li>
            <Link href={'/apps'} className={`links ${activeItem === '/apps' ? 'border-b-2 border-sky-300 pb-4' : ''}`} onClick={() => handleItemClick('/apps')}>
              Apps
            </Link>
          </li>
        </ul>
        <div className='text-slate-50'>
            <Link href={"https://app.pocketshuttle.com/login"}> <button className='bg-sky-400 text-black rounded-md  w-[150px] px-3 text-md font-medium py-3'>Launch App </button></Link> 
        </div>
      </>
      )}

      {isMobile && (
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
          <button className="close-button" onClick={closeMobileMenu}>
          <IoCloseSharp className='text-white' />
          </button>
          <ul>
            <li>
              <Link href={'/'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <IoHome /> 
              Home
              </Link>
            </li>
            <li>
              <Link href={'/'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <BsRocketTakeoff /> 
              Feature
              </Link>
            </li>
            <li>
              <Link href={'/apps'} className="links flex justify-start gap-3 items-center font-normal text-lg" onClick={handleMenuClick}>
              <GrDomain /> 
               Apps
              </Link>
            </li>
          </ul>
           <div className='text-slate-50'>
            <Link href={"https://app.pocketshuttle.com/login"}> <button className='bg-sky-400 text-black rounded-md  w-[150px] px-3 text-md font-bold py-3'>Launch App </button></Link> 
              </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
