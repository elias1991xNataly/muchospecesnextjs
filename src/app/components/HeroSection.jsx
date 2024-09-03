import React from 'react';
import Image from 'next/image';
import Logo from "../../../public/images/logo.png";


const HeroSection = () => {
    return (
        <div className='w-screen'>
            <div
                className="lg:h-screen bg-cover bg-no-repeat sm:bg-cover bg-hero-image w-screen flex flex-col lg:flex-row content-center justify-center"
                style={{ backgroundImage: `url(${Logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <a name="Inicio"></a>
                <div className='flex justify-center ml-14 lg:ml-7  flex-col'>
                    <h1 className='text-white text-3xl md:text-8xl font-bold'>ESCUELA DE NATACIÓN INFANTIL</h1>
                    <p className='text-white mt-5 text-3xl font-semibold'> Descubre una Experiencia Única </p>
                    <p className='text-white mt-5 text-3xl font-semibold'> de Natación Infantil en Boadilla del Monte</p>
                </div>
                <Image
                    alt="" src={Logo} width={400} height={400} layout="responsive" objectFit="cover" objectPosition="center"
                />
            </div>
        </div>
    )
}

export default HeroSection;