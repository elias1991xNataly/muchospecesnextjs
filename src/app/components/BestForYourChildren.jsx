import React from 'react';
import Image from 'next/image';
import Grupos from "../../../public/images/Icono MuchosPeces grupos reducidos.png";
import Cloro from "../../../public/images/Icono MuchosPeces no cloro.png";
import Recuperaciones from "../../../public/images/Icono MuchosPeces recuperaciones.png";
import Temperatura from "../../../public/images/Icono MuchosPeces temperatura.png";
import Link from 'next/link';
// flex flex-col md:flex-row gap-x-12 justify-start mt-80 mr-36 md:mt-40 xl:mt-32 transform -translate-x-1/2 -translate-y-1/2
const BestForYourChildren = () => {
    return (
        <div className='mt-9 flex flex-col justify-center'>
            <h3 className='text-blue-900 text-3xl font-extrabold flex justify-center'>¡Lo mejor para tus hijos!</h3>
            <div className='flex flex-col md:flex-row justify-center items-center md:gap-x-3 xl:gap-x-12 gap-y-2 '>
                <div>
                    <Image alt="" src={Temperatura} width={100} height={100} />
                    <p className='text-red-600 font-sans font-bold'>Agua a una</p><p className='text-red-600 font-sans font-bold'>temperatura de 30ºC.</p><p className='text-red-600 font-sans font-bold'>Que no pasen frío los</p>  <p className='text-red-600 font-sans font-bold'> más peques.</p>
                </div>
                <div>
                    <Image alt="" src={Cloro} width={100} height={100} />
                    <p className='text-cloro font-sans font-bold'>Agua libre de </p> <p className='text-cloro font-sans font-bold'>Cloro o Sal. Lo mejor</p><p className='text-cloro font-sans font-bold'>para las  pieles más</p> <p className='text-cloro font-sans font-bold'> sensibles.</p>
                </div>
                <a name="laspiscinas"></a>
                <div>
                    <Image alt="" src={Grupos} width={100} height={100} />
                    <p className='text-groups font-sans font-bold'>Grupos reducidos.</p> <p className='text-groups font-sans font-bold'> Máximo 3 alumnos por</p><p className='text-groups font-sans font-bold'>grupo. Lo más</p><p className='text-groups font-sans font-bold'>personalizado.</p>
                </div>
                <div>
                    <Image alt="" src={Recuperaciones} width={100} height={100} />
                    <p className='text-uptodate font-sans font-bold'>Recuperación de </p><p className='text-uptodate font-sans font-bold'>clases perdidas. No te</p><p className='text-uptodate font-sans font-bold'> pierdas nada, cada</p><p className='text-uptodate font-sans font-bold'> clase importa.</p>
                </div>
            </div>
        </div>
    )
}

export default BestForYourChildren