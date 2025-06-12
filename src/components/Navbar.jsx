import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo-light.svg";
import { useState } from 'react';

const Navbar = () => {

    // navbar toggle
    const [isOpen, setIsOpen] = useState(false)
    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    // navbar items
    const navLinks = [
        {
            id: 1,
            navTitle: 'About',
            path: '/about',
        },
        {
            id: 2,
            navTitle: 'Projects',
            path: '/projects',
        },
        {
            id: 3,
            navTitle: 'Contact',
            path: '/contact',
        }]


    return (
        <section className='z-30 relative bg-transparent backdrop-blur-md rounded-lg'>
            <header>
                <nav>
                    <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>

                        {/* logo */}
                        <Link to='/' className='flex items-center space-x-3'>
                            <img
                                src={Logo}
                                alt="Veerin Bajracharya Logo"
                                className='w-16 h-16'
                            />

                        </Link>

                        {/* menu btn */}
                        <button
                            onClick={toggleNav}
                            type='button'
                            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden'
                            aria-controls='navbar-default'
                            aria-expanded={isOpen ? "true" : "false"}>

                            {/* toggle */}
                            {isOpen ? (
                                // close-icon
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>

                            ) : (
                                // menu-icon
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>

                            )}

                        </button>

                        {/* navlinks here */}
                        <div
                            className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                            id='navbar-default'>
                            <ul className='flex flex-col md:p-0 md:flex-row justify-center gap-5 items-center font-medium cursor-pointer decoration-none list-none'>
                                {navLinks.map((navItem) => (
                                    <li key={navItem.id}>
                                        <Link
                                            to={navItem.path}
                                            className='relative inline-block px-2 py-1 text-[var(--light-color)] transition-all duration-300 hover:scale-105 after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 hover:after:w-full'>
                                            {navItem.navTitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </nav>
            </header>
        </section>
    )
}

export default Navbar