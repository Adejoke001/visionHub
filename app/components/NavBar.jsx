// "use client";
// import {assets} from '@/assets/assets';
// import Image from 'next/image';
// import * as Icon from "@phosphor-icons/react/dist/ssr";
// import { useRef } from 'react';
// import React from 'react';


 


// const NavBar = () => {

//     const sideMenuRef = useRef();
//     const openMenu = () => {
//         sideMenuRef.current.style.transform = 'translateX(-16rem)'
//     }
//      const closeMenu = () => {
//         sideMenuRef.current.style.transform = 'translateX(16rem)'
//     }
//     return (
//         <>
//         <nav className='container relative flex items-center justify-between w-full sticky top-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4 bg-teal-700 h-15 z-50'>
//             <a href='#top'>
//                <Image 
//           src={assets.visionLogo} 
//           alt="Vision Logo"
//           className='w-30 md:w-40 lg:w-50 cursor-pointer md:mr-14'
//           priority={true}

        
//         />

//             </a>
//             <ul className='hidden md:flex items-center gap-6 lg:gap-8 text-lg font-semibold rounded-full px-12 py-3'>
//                 <li className='font-Ovo'><a href='#home'>Home</a></li>
//                 <li className='font-Ovo'><a href='#about'>About</a></li>
//                 <li className='font-Ovo'><a href='#service'>Services</a></li>
//                 <li className='font-Ovo'><a href='#blog'>Blogs</a></li>
//                 <li className='hidden lg:flex items-center gap-2 py-2.5 font-Ovo'>
//                     <a href='#contact' className="flex items-center gap-2">
//                         Contact <Icon.PhoneCall className="w-4" />
//                     </a>
//                 </li>
//             </ul>
//         <div>
//            <button className='hidden md:block md:border-1 lg:border-2 border-teal-200 bg-white rounded-full px-5.5 md:py-1 py-1.5 hover:bg-white hover:text-teal-700 transition font-Ovo'>
//              <a href='#booking' target='_blank' className="flex items-center text-teal-700 text-sm md:text-lg font-bold hover:text-blue-600 transition" >
//                  <Icon.CalendarCheck weight="bold" size={20} className="w-3 md:w-5"/><span>Book Now</span></a>
//            </button>
//            <button className='block md:hidden ml-3' onClick={openMenu}>
//             <Icon.List className='text-3xl' weight='bold'/>
//            </button>
//             </div>
             
//               {/* Hamburger (only on mobile) */}
//               <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bg-teal-500 w-64 h-120 transition-all duration-400 ease-in-out z-50'>

//                 <div className='absolute right-6 top-6'onClick={closeMenu}>
//                     <Icon.XIcon className='text-2xl cursor-pointer' weight='bold'/>
//                 </div>
//                 <li className='font-Ovo' onClick={closeMenu}><a href='#home'>Home</a></li>
//                 <li className='font-Ovo' onClick={closeMenu}><a href='#about'>About</a></li>
//                 <li className='font-Ovo' onClick={closeMenu}><a href='#service'>Services</a></li>
//                 <li className='font-Ovo' onClick={closeMenu}><a href='#blog'>Blogs</a></li>
//                 <li className='hidden lg:flex items-center gap-2 py-2.5 font-Ovo' onClick={closeMenu}>
//                     <a href='#contact' className="flex items-center gap-2">
//                         Contact <Icon.PhoneCall className="w-4" />
//                     </a>
//                 </li>
//               </ul>
//         </nav>
//         </>
//     );
// };

// export default NavBar;

"use client";
import {assets} from '@/assets/assets';
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRef } from 'react';
import React from 'react';
import Link from 'next/link';
import styles from './navbar.modules.css';

const NavBar = () => {
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    
    return (
        <>
        <nav className='container relative flex items-center justify-between w-full sticky top-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4 bg-white h-15 z-50'>
            <Link href='/' className='logo'>
               <Image 
                  src={assets.visionLogo} 
                  alt="Vision Logo"
                  className='w-30 md:w-40 lg:w-50 cursor-pointer md:mr-14'
                  priority={true}
                />
            </Link>
            <ul className='nav hidden md:flex items-center gap-6 lg:gap-8 text-lg font-semibold rounded-full px-12 py-3'>
                <li className='font-Ovo'><Link href='/'>Home</Link></li>
                <li className='font-Ovo'><Link href='/about'>About</Link></li>
                <li className='font-Ovo'><Link href='/services'>Services</Link></li>
                <li className='font-Ovo'><Link href='/blog'>Blogs</Link></li>
                <li className='hidden lg:flex items-center gap-2 py-2.5 font-Ovo'>
                    <Link href='/contact' className="flex items-center gap-2">
                        Contact <Icon.PhoneCall className="w-4" />
                    </Link>
                </li>
            </ul>
            <div>
               <button className='hidden md:block md:border-1 lg:border-2 border-teal-200 bg-teal-700 rounded-full px-5.5 md:py-1 py-1.5 hover:bg-white hover:text-teal-700 transition font-Ovo'>
                 <Link href='/booking' target='_blank' className="flex items-center text-white text-sm md:text-lg font-bold hover:text-blue-600 transition" >
                     <Icon.CalendarCheck weight="bold" size={20} className="w-3 md:w-5"/><span>Book Now</span></Link>
               </button>
               <button className='block md:hidden ml-3' onClick={openMenu}>
                <Icon.List className='text-3xl' weight='bold'/>
               </button>
            </div>
             
              {/* Mobile Menu */}
              <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bg-teal-500 w-64 h-120 transition-all duration-400 ease-in-out z-50'>
                <div className='absolute right-6 top-6'onClick={closeMenu}>
                    <Icon.XIcon className='text-2xl cursor-pointer' weight='bold'/>
                </div>
                <li className='font-Ovo' onClick={closeMenu}><Link href='/'>Home</Link></li>
                <li className='font-Ovo' onClick={closeMenu}><Link href='/about'>About</Link></li>
                <li className='font-Ovo' onClick={closeMenu}><Link href='/services'>Services</Link></li>
                <li className='font-Ovo' onClick={closeMenu}><Link href='/blog'>Blogs</Link></li>
                <li className='font-Ovo' onClick={closeMenu}><Link href='/contact'>Contact</Link></li>
              </ul>
        </nav>
        </>
    );
};

export default NavBar;