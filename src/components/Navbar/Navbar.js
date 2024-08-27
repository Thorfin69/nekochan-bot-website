"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AlignJustify } from 'lucide-react';
import Router from 'next/router';
// import NProgress from 'nprogress';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    //fix it later 
    // useEffect(() => {
    //     const handleStart = () => {
    //         console.log('Route change started');
    //         NProgress.start();
    //     };
    //     const handleStop = () => {
    //         console.log('Route change completed');
    //         NProgress.done();
    //     };
    
    //     Router.events.on('routeChangeStart', handleStart);
    //     Router.events.on('routeChangeComplete', handleStop);
    //     Router.events.on('routeChangeError', handleStop);
    
    //     return () => {
    //         Router.events.off('routeChangeStart', handleStart);
    //         Router.events.off('routeChangeComplete', handleStop);
    //         Router.events.off('routeChangeError', handleStop);
    //     };
    // }, []);
    

    return (
        <>
            <div className="container md:mx-auto border-solid  flex flex-col md:flex-row md:items-center md:gap-[4rem] md:w-[70%] w-[97%] mx-1 pr-4 rounded-sm mt-4 md:p-1 shadow-lg">
                <div className="flex-shrink-0 flex items-center">
                    <Image
                        src="https://res.cloudinary.com/dcnjpg3bk/image/upload/v1724668847/nekochan%20imgs/oh10wfbzxvudddzyeqvv.jpg"
                        width={50}
                        height={50}
                        alt="icon"
                        className="rounded-sm shadow-md"
                    />
                    <button
                        className="md:hidden text-white ml-auto"
                        onClick={toggleMenu}
                    >
                        <AlignJustify />
                    </button>
                </div>

                <nav className={`md:flex navbar-animation ${isOpen ? 'block' : 'hidden'} md:block md:pr-4`}>
                    <ul className="flex flex-col gap-[8px] md:flex-row md:space-x-6 md:items-center md:justify-center w-full">
                        <li className="text-white text-lg border:2px font-semibold nav-buttons p-2" onClick={closeMenu}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-white text-lg font-semibold nav-buttons p-2" onClick={closeMenu}>
                            <Link href="/PearlsShop">Store</Link>
                        </li>
                        <li className="text-white text-lg font-semibold nav-buttons p-2" onClick={closeMenu}>
                            <Link href="/Guide">Guide</Link>
                            </li>
                        <li className="text-white text-lg font-semibold nav-buttons p-2" onClick={closeMenu}>
                            <Link href="/Pass">About Us</Link>
                        </li>
                       
                        <li className="text-white text-lg font-semibold nav-buttons p-2" onClick={closeMenu}>
                            <Link href="/CardsList">Collection</Link>
                        </li>
                        <li className="text-white text-lg font-semibold nav-buttons p-2" onClick={closeMenu}>
                            <Link href="/AboutUs">About Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
