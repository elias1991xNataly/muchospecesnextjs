import React from 'react';
import Image from 'next/image';
import Logo from "../../../public/images/Logo.png"


const HeroSection = () => {
    return (
        <div
            className="h-screen bg-hero-image w-screen flex flex-row content-center justify-center bg-cover"
        >
            <div className='flex justify-center ml-7  flex-col'>
                <h1 className='text-white text-8xl font-bold'>ESCUELA DE NATACIÓN INFANTIL</h1>
                <p className='text-white mt-5 text-3xl font-semibold'> Descubre una Experiencia Única <br></br> de Natación Infantil en Boadilla del Monte</p>
            </div>
            <Image
                alt="" src={Logo} width={400} height={400} />

        </div>
    )
}

export default HeroSection;