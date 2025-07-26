import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/pagination';

const StrategicCollaborators = ({ logos, title = 'OUR PARTNERS' }) => {
  const { ref, inView } = useInView({
    threshold: 0.4, // 40% in view
    triggerOnce: false,
  });

  return (
    <section
      id="Partners"
      ref={ref}
      className={`w-full text-white py-10 transition-opacity duration-[1200ms] ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">{title}</h2>
        <p className="text-center text-gray-300 inter text-sm md:text-base max-w-xl mx-auto mb-8">
          Our global partnerships with leading technology and data firms fuel our innovation and expand our reach.
        </p>

        <div className="relative">
          {/* Top Gradient Border */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 z-10 rounded-full" />
          {/* Bottom Gradient Border */}
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
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper bg-[#1D1536] py-6 rounded-md"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="flex p-4 mx-auto items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 aspect-video object-contain opacity-90 hover:opacity-100 transition duration-300"
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
