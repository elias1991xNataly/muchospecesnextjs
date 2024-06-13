import Image from 'next/image';
import React from 'react';
import betoy from "../../../public/images/beto y yy.jpg"

const WhoWeare = () => {
  return (
    <div className='flex flex-col mt-9'>
      <a name="quienessomos"></a>
      <h1 className='flex justify-center text-blue-900 font-extrabold text-3xl'>
        ¿Quienes somos?
      </h1>

      <div className='flex flex-col md:flex-row mt-9 mx-8 xl:justify-center'>

        <Image
          alt=""
          className=''
          width={200}
          height={200}
          src={betoy} />
        <p className='text-cyan-600 mt-5 xl:w-96 md:ml-5'>
          En MuchosPeces, nos dedicamos apasionadamente a brindar una experiencia de natación única
          y enriquecedora
          para aquellos niños que se están iniciando en el medio acuático. Nuestro objetivo principal es fomentar
          el amor por el agua y ayudar a los niños a desarrollar habilidades acuáticas fundamentales desde
          temprana edad.
        </p>
      </div>
    </div>
  )
}

export default WhoWeare