"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AlignJustify } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    

    return (
        <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between bg-slate-400 p-4 shadow-lg">
            <div className="flex-shrink-0 flex items-center">
                <Image
                    src="https://res.cloudinary.com/dcnjpg3bk/image/upload/v1724668847/nekochan%20imgs/oh10wfbzxvudddzyeqvv.jpg"
                    width={50}
                    height={50}
                    alt="icon"
                    className={`rounded-sm shadow-md  `}
                />
            
            {/* Toggle Button For Mobile */}
            <button
                className="md:hidden text-white ml-auto"
                onClick={toggleMenu}
            >
                <AlignJustify />
            </button>
            </div>

            <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col md:flex-row md:space-x-6">
                    <li
                        className="text-white text-lg font-semibold hover:text-gray-300 transition-colors duration-300"
                        onClick={closeMenu}
                    >
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className="text-white text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
                        onClick={closeMenu}
                    >
                        <Link href="/PearlsShop">Store</Link>
                    </li>
                    <li
                        className="text-white text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
                        onClick={closeMenu}
                    >
                        <Link href="/Guide">Guide</Link>
                    </li>
                    <li
                        className="text-white text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
                        onClick={closeMenu}
                    >
                        <Link href="/CardsList">Collection</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
