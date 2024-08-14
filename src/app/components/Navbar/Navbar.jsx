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
      <ul className="nav-links text-md container flex items-center gap-1 justify-center text-center">
          <li>
          <Link href={'/'} className={`links ${activeItem === '/' ? 'border-b-2 border-blue-900 pb-1' : ''}`} onClick={() => handleItemClick('/')}>
              Home
            </Link>
          </li>
          <li>
          <Link href={'/'} className={`links ${activeItem === 'features' ? 'border-b-2 border-blue-900 pb-1' : ''}`} onClick={() => handleItemClick('/')}>
              Features
            </Link>

          </li>
          <li>
          <Link href={'/'} className={`links ${activeItem === 'features' ? 'border-b-2 border-blue-900 pb-1' : ''}`} onClick={() => handleItemClick('/')}>
              Apps
            </Link>

          </li>
          {/* <li>
            <Link href={'/'} className={`links ${activeItem === 'incorporate' ? 'border-b-2 border-blue-900 pb-1' : ''}`} onClick={() => handleItemClick('/')}>
              Login
            </Link>
          </li> */}
         
          <li>
          </li>
          
        </ul>
            {/* <Link href={'/'} className={`links p-2 mr-5 w-[100px] text-center bg-pink-600 rounded ${activeItem === 'incorporate' ? 'border-b-2 border-blue-900 pb-1' : ''}`} onClick={() => handleItemClick('/')}>
              Sign Up
            </Link> */}
        {/*New fix up */}
        
      {isMobile ? (
        <div className="hamburger" onClick={handleMenuClick}>
          <div className={`line  ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
        </div>
      ) : (
        <p></p>
        // <ul className="nav-links text-md container flex items-center gap-1 justify-center text-center">
        //   <li>
        //   <Link href={'/'} className={`links ${activeItem === '/' ? 'border-b-4 border-red-900 pb-1' : ''}`} onClick={() => handleItemClick('/')}>
        //       Home
        //     </Link>
        //   </li>
        //   <li>
        //   <Link href={'/'} className={`links ${activeItem === '/' ? 'border-b-4 border-red-900 pb-1' : ''}`} onClick={() => handleItemClick('/')}>
        //       Features
        //     </Link>

        //   </li>
        //   <li>
        //     <Link href={'/'} className={`links ${activeItem === '/' ? 'border-b-4 border-red-900 pb-1' : ''}`} onClick={() => handleItemClick('/')}>
        //       Incorporate
        //     </Link>
        //   </li>
        //   <li>
        //   </li>
        // </ul>
      )}

      {isMobile && (
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
          <button className="close-button" onClick={closeMobileMenu}>
          <IoCloseSharp />
          </button>
          <ul>
            <li>
              <Link href={'/'} className="links flex justify-start gap-3 items-center font-normal text-2xl" onClick={handleMenuClick}>
              <IoHome /> 
              </Link>
            </li>
            <li>
              <Link href={'/feature'} className="links flex justify-start gap-3 items-center font-normal text-2xl" onClick={handleMenuClick}>
              <BsRocketTakeoff />
              </Link>
            </li>
            <li>
              <Link href={'/incorporate'} className="links flex justify-start gap-3 items-center font-normal text-2xl" onClick={handleMenuClick}>
              <GrDomain />  
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
