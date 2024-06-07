"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLinks from "../components/NavLinks";
import { Bars3Icon, XMarkIcon, Search } from '@heroicons/react/24/outline';
import MenuOverlay from "../components/MenuOverlay"
import Image from 'next/image';
import Untitled from "../../../public/images/Untitled.png"



const navLinks = [
    {
        title: "Inicio",
        path: "#inicio",
    },
    {
        title: "Quienes somos",
        path: "#quienessomos",
    },
    {
        title: "Las piscinas",
        path: "#laspiscinas",
    }
    ,
    {
        title: "Clases",
        path: "#clases",
    }
    ,
    {
        title: "Contacto",
        path: "#contacto",
    }

];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-white bg-opacity-100'>
            <div className='flex container flex-row lg:py-4  items-center justify-between  mx-auto px-4 py-2'>
                <Link href={"/"} className="text-2xl flex md:text-5xl  font-semibold">
                    <Image alt="Logo" width={100} height={100} src={Untitled} />
                    <p>Escuela de Natación MuchosPeces</p>
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {navbarOpen
                        ?
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className='flex items-center px-3 py-2 border rounded '
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>

                        :
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className='flex items-center px-3 py-2 border rounded '
                        >

                            <Bars3Icon className="h-5 w-5" />
                        </button>

                    }
                </div>


                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => {
                            return (

                                <li key={index}>
                                    <NavLinks href={link.path} title={link.title} />
                                </li>
                            )
                        }
                        )
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </ul>
                </div>

            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar