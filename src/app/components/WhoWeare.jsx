import Image from 'next/image';
import React from 'react';
import betoy from "../../../public/images/beto y yy.jpg"

const WhoWeare = () => {
  return (
    <div className='flex flex-col mt-9'>

      <h1 className='flex justify-center'>
        ¿Quienes somos?
      </h1>

      <div className='flex flex-row mt-9 mx-8'>

        <Image alt="" width={500} height={500} src={betoy} />
        <p>
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