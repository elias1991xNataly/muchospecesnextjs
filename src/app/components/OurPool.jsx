"use client";
import React from 'react';
import foto1 from "../../../public/images/IMG_20230531_084818.jpg";
import foto2 from "../../../public/images/IMG_20230531_114504 (1).jpg";
import foto3 from "../../../public/images/IMG_20231023_175757.jpg";
import foto4 from "../../../public/images/IMG_20231023_180102.jpg";
import foto5 from "../../../public/images/IMG_20231023_180857.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const arrayOfImages = [foto3, foto4, foto5];




const OurPool = () => {
  return (
    <>
      <h3 className='flex justify-center text-blue-900 font-extrabold text-3xl mt-4'>
        Nuestra Piscina
      </h3>
      <div className='flex w-full h-96 lg:flex-row flex-col items-center lg:justify-center mt-4'>
        <div className='flex flex-col gap-y-4'>
          <Image
            alt=""
            src={foto1}
            width={100}
            height={100}
          />
          <Image
            alt=""
            src={foto2}
            width={100}
            height={100}
          />
        </div>
        <div className='w-1/2 mt-3'>

          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            pagination={true}

          >

            {arrayOfImages.map((image, index) => {
              return (
                <SwiperSlide key={index} >

                  <div className='flex items-center justify-center'>

                    <Image
                      alt=""
                      src={image}
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default OurPool