'use client'
import Link from "next/link";
import React, { useState, FC, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny, MdMenu, MdOutlineClose } from "react-icons/md";
import { useTheme } from 'next-themes'

interface LinkItem {
    id: number;
    link: string;
}

const Navbar: FC = () => {
    const [nav, setNav] = useState(false);
    const { theme, setTheme } = useTheme()
    const links: LinkItem[] = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    // Function to hide nav on resize
    const handleResize = () => {
        if (window.innerWidth >= 768) { // Assuming 768px is your md breakpoint
            setNav(false);
        }
    };

    // Set up event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed nav">
            <button
                className="hover:bg-gray-300 dark:hover:bg-gray-600 font-bold p-3 rounded-full"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    {theme === 'dark' ? <MdSunny size={24} className="text-white" /> : <FaMoon size={24} className="text-gray-700" />}
                
            </button>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-light text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
                    >
                        <Link href={link}>{link}</Link>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => setNav(!nav)}
                className="dark:hover:bg-gray-600 text-white font-bold p-3 rounded-full md:hidden"
            >
                {nav ? <MdOutlineClose size={24} /> : <MdMenu size={24} />}
            </button>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
