import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import AAMotors from '../assets/collab/AAMotors.png';
import Alchemist from '../assets/collab/Alchemist.png';
import HMC from '../assets/collab/HMC.png';
import Kaic from '../assets/collab/Kaic.png';
import Meeza from '../assets/collab/Meeza.png';
import Ooredoo from '../assets/collab/Ooredoo.png';
import OoredooFintech from '../assets/collab/OoredooFintech.png';
import QMIC from '../assets/collab/QMIC.png';
import Qualetics from '../assets/collab/Qualetics.png';

const logos = [
  { src: AAMotors, alt: 'KPMG' },
  { src: Alchemist, alt: 'AWS' },
  { src: HMC, alt: 'Microsoft' },
  { src: Kaic, alt: 'Alteryx' },
  { src: Meeza, alt: 'CODE' },
  { src: Ooredoo, alt: 'Dataiku' },
  { src: OoredooFintech, alt: 'Saudi Water Authority' },
  { src: QMIC, alt: 'DTVC' },
  { src: Qualetics, alt: 'Saudi Water Authority' },
];

const StrategicCollaborators = () => {
  return (
    <section id='Partners' className="w-full  text-white py-10">
      <div className="mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">OUR PARTNERS</h2>
        <p className="text-center inter text-sm md:text-base max-w-xl mx-auto mb-8">
          Our global partnerships with leading technology and data firms fuel our innovation and expand our reach.
        </p>

       
        <div className="relative">
         
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 z-10 rounded-full" />
          
          
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 z-10 rounded-full" />

          <Swiper
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
              1180: { slidesPerView: 8 },
            }}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper bg-[#1D1536] py-6 rounded-md" 
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="flex p-4 mx-auto items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-32 object-contain opacity-90  hover:opacity-100 transition duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default StrategicCollaborators;
