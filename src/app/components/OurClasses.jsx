import React from 'react';

const OurClasses = () => {
  return (
    <section className='mt-9'>
      <a name="clases"></a>
      <h3 className='flex justify-center text-blue-900 font-extrabold text-3xl'>Nuestras Clases</h3>
      <div className='bg-[#0582A2] h-auto w-screen mt-3 flex flex-col md:flex-row text-white md:justify-center items-center text-center p-6 gap-y-4 md:gap-x-4 xl:gap-x-20 xl:p-16'>
        <div>
          <h4>MATRONATACIÓN</h4>
          <p className='mt-3'>Diseñadas especialmente para niños de entre 5 meses y 2 años, acompañados por un adulto. En esta divertida y estimulante clase, nos enfocamos en objetivos lúdicos y desarrollo motor.</p>
        </div>
        <div>
          <h4>INICIACIÓN</h4>
          <p className='mt-3'>Diseñadas especialmente para niños en la primera infancia, de 2 a 6 años, enfocándose en el desarrollo de habilidades acuáticas fundamentales.</p>
        </div>
        <div>
          <h4>PARTICULARES</h4>
          <p className='mt-3'>Diseñadas para ofrecer una experiencia totalmente personalizada. Con los consejos de nuestros profesores podrás elegir como quieres que sean las clases.</p>
        </div>
      </div>
    </section>
  )
};

export default OurClasses;