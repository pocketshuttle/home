"use client";

import React, { useState, useEffect } from 'react';
import { IoHome } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import PSLOGO from '../../../../public/whitelogo.png';
import Image from 'next/image';
import Link from 'next/link';
import './navbar.css';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('');
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 764 : false
  );
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 764 : false);
      setShowMenu(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleItemClick = (path) => setActiveItem(path);
  const handleMenuClick = () => { if (isMobile) setShowMenu(!showMenu); };
  const closeMobileMenu = () => setShowMenu(false);

  const navLinks = [
    { href: '/', label: 'HOME', Icon: IoHome },
    { href: '/solutions', label: 'SOLUTIONS', Icon: MdOutlineExplore },
    { href: '/apps', label: 'APPS', Icon: HiOutlineViewGrid },
    { href: '/team', label: 'TEAM', Icon: RiTeamFill },
  ];

  return (
    <nav className="navbar bg-sk-300 md:px-[50px] py-4">
      <div className="logo">
        <Link href='/' className="links w-[50px]">
          <Image className='w-[200px]' src={PSLOGO} alt="PocketShuttle" />
        </Link>
      </div>

      {isMobile ? (
        <div className="hamburger" onClick={handleMenuClick}>
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
          <div className={`line ${showMenu ? 'open' : ''}`} />
        </div>
      ) : (
        <>
          <ul className="nav-links text-md container flex items-center gap-1 justify-center text-center">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`links px-3 py-1 rounded-md transition-colors hover:text-sky-300 ${activeItem === href ? 'text-sky-300' : ''}`}
                  onClick={() => handleItemClick(href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='text-slate-50'>
            <Link href="https://app.pocketshuttle.com/login">
              <button className='bg-sky-400 hover:bg-sky-300 text-black rounded-md w-[150px] px-3 text-md font-medium py-3 transition-colors'>
                GET STARTED
              </button>
            </Link>
          </div>
        </>
      )}

      {isMobile && (
        <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
          <button className="close-button" onClick={closeMobileMenu}>
            <IoCloseSharp className='text-white' />
          </button>
          <ul>
            {navLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="links flex justify-start gap-3 items-center font-normal text-lg"
                  onClick={handleMenuClick}
                >
                  <Icon /> {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='text-slate-50 ml-2 mt-4'>
            <Link href="https://app.pocketshuttle.com/login">
              <button className='bg-sky-400 text-black rounded-md w-[150px] px-3 text-md font-medium py-3'>
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
