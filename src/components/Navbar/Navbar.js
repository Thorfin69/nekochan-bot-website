"use client";

import {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {AlignJustify} from 'lucide-react';

const oauthUrl = `https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent('http://localhost:3000/api/auth/discord/callback')}&response_type=code&scope=identify email`;

export default function Navbar() {
    const [isOpen,
        setIsOpen] = useState(false);
    const [user,
        setUser] = useState(null);
    const [dropdownOpen,
        setDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // Fetch user data from your API or session
    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch('/api/auth/user'); // Replace with your API route
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                } else {
                    console.warn('Failed to fetch user data:', res.status);
                    setUser(null);
                }
            } catch (error) {
                console.error("Failed to fetch user data:", error);
                setUser(null);
            }
        }

        fetchUser();
    }, []);

    const handleLogout = async() => {
        try {
            await fetch('/api/auth/logout', {method: 'POST'}); // Replace with your logout API route
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const avatarUrl = user && user.avatar
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
        : user
            ? `https://cdn.discordapp.com/embed/avatars/${user
                ?.discriminator % 5}.png`
                : '/default-avatar.png'; // A local fallback image if user data is not available

    return (
        <div
            className="container md:mx-auto border-solid flex flex-col md:flex-row md:items-center md:gap-[4rem] md:w-[70%]  mx-1 pr-4 rounded-sm mt-4 md:p-1 shadow-lg">
            <div className="flex-shrink-0 flex items-center">
                <Image
                    src="https://res.cloudinary.com/dcnjpg3bk/image/upload/v1724668847/nekochan%20imgs/oh10wfbzxvudddzyeqvv.jpg"
                    width={50}
                    height={50}
                    alt="icon"
                    className="rounded-sm shadow-md"/>
                <button className="md:hidden text-white ml-auto" onClick={toggleMenu}>
                    <AlignJustify/>
                </button>
            </div>

            <nav
                className={`md:flex navbar-animation ${isOpen
                ? 'block'
                : 'hidden'} md:block md:pr-4`}>
                <ul
                    className="flex  flex-col gap-[8px] md:flex-row md:space-x-6 md:items-center md:justify-center w-full">
                    {[
                        'Home',
                        'Store',
                        'Guide',
                        'Collection',
                        'About Us'
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="text-white text-lg font-semibold nav-buttons p-2"
                            onClick={closeMenu}>
                            <Link
                                href={`/${item === 'Home'
                                ? ''
                                : item.replace(/\s/g, '')}`}>{item}</Link>
                        </li>
                    ))}

                </ul>
                <li className="relative flex items-center md:ml-[50px] ">
                    {user
                        ? (
                            <div className="relative">
                                <Image
                                    src={avatarUrl}
                                    width={40}
                                    height={40}
                                    alt="User Avatar"
                                    className="rounded-full cursor-pointer"
                                    onClick={toggleDropdown}/> {dropdownOpen && (
                                    <div
                                        className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48">
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full px-4 py-2 text-left hover:bg-gray-700">
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                        : (
                            <a
                                href={oauthUrl}
                                className="navbar-animation text-white text-lg font-semibold nav-buttons p-2">
                                Login
                            </a>
                        )}
                </li>
            </nav>
        </div>
    );
}
