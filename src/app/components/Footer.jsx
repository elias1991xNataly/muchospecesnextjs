import React from 'react';
import facebook from "../../../public/images/DeviconFacebook.svg";
import instagram from "../../../public/images/instagram.png";
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className='bg-footer w-screen'>
      <div className="mt-6 flex justify-center">
        <h2 id="contactUs" className='text-white'>¡Contáctanos para más información!</h2>
      </div>
      <div className='flex justify-center items-center flex-col mt-5 ml-5 md:ml-10'>

        <div className="flex flex-col md:flex-row mb-10">

          <iframe className="whereAreWe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.7670913241122!2d-3.8971514241324847!3d40.414010171440076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41855a5e7b6063%3A0xd1f745c3f7487e1d!2sC.%20Francisco%20Tom%C3%A1s%20y%20Valiente%2C%202%2C%2028660%20Boadilla%20del%20Monte%2C%20Madrid!5e0!3m2!1ses-419!2ses!4v1699364219634!5m2!1ses-419!2ses"
            height="200" width="200" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="columns mb-5 md:ml-5 xl:ml-10">

            <p className='text-white mt-4 '>
              Calle Francisco Tomás y Valiente, 2, 28660, Boadilla del Monte

            </p>
            <p className='text-white'>
              (dentro de la Escuela Infantil Muchos Peques)</p>
            <p className='text-white'>  Whatsapp o telefono: +34 650 35 20 42</p>
            <p className='text-white'>
              Información: muchospecesboadilla@gmail.com
            </p>
            <div className="flex gap-x-3 mt-3">

              <a name="contacto"></a>
              <a href="https://instagram.com/muchospeces?igshid=YzAwZjE1ZTI0Zg==" target="_blank">
                <Image
                  className="rounded-full" src={instagram} alt="" width={30} height={30} />

              </a>


              <a href="https://www.facebook.com/people/MuchosPeces/100095415516989/" target="_blank">
                <Image
                  className="rounded-full" src={facebook} alt="" width={30} height={30} />

              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer