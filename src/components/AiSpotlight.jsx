import React, { useEffect } from "react"; 
import spotlight1 from '../assets/spotlight1.svg';
import spotlight2 from '../assets/spotlight2.svg';
import spotlight3 from '../assets/spotlight3.svg';
import spotlight4 from '../assets/spotlight4.svg';
import spotlight5 from '../assets/spotlight5.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const cardData = [
  {
    icon: spotlight1,
    title: "CXO SUMMIT",
    description:
      "The CXO Summit brings together the industry’s brightest minds to explore the dynamic intersection of innovation, leadership, and business transformation.",
  },
  {
    icon: spotlight2,
    title: "MENTORSHIP",
    description:
      "Gain direct access to seasoned AI professionals and thought leaders, they help you fine-tune your ideas, implementation, and think bigger.",
  },
  {
    icon: spotlight3,
    title: "BOOTCAMP",
    description:
      "Exclusive post-hackathon access to a specialized AI Bootcamp designed to help you accelerate your learning and take your projects to the next level.",
  },
  {
    icon: spotlight4,
    title: "NETWORKING",
    description:
      "The hackathon is a unique opportunity to expand your professional field network, collaborations, & open doors to future job opportunities or startup.",
  },
  {
    icon: spotlight5,
    title: "PROTOTYPE DEVELOPMENT",
    description:
      "The process of creating a preliminary version of a product to test and evaluate its design and functionality.",
  }
];

export default function AiSpotlight() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const event = new Event('resize');
      window.dispatchEvent(event);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-t from-[#2B204C] to-[#170929] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">AI SPOTLIGHT</h2>
        <p className="text-lg mb-12 max-w-4xl mx-auto">
          The AI Hackathon isn’t just about building incredible solutions—it’s your gateway to growth, recognition, and real-world impact. Here’s what you stand to gain by participating:
        </p>


        
        {/* Desktop Cards */}
        <div className="hidden xl:flex gap-6 justify-center ">
          {cardData.map((card, index) => (
             <div key={index} className="w-[260px] h-[270px] relative">
          {/* SVG Background */}
          <svg
            viewBox="0 0 264 330"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full z-0"
            preserveAspectRatio="none"
          >
            <path
              d="M24 1H192.085C205.996 1.00005 219.192 7.16275 228.122 17.8291L239.017 30.8418H239.018L253.34 49.5762C259.606 57.7726 263 67.8031 263 78.1201V306C263 318.703 252.703 329 240 329H24C11.2975 329 1 318.703 1 306V24C1 11.2975 11.2975 1 24 1Z"
              fill="#130A2D"
              stroke="url(#paint0_linear)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="145.125"
                y1="0"
                x2="307.88"
                y2="137.877"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CD3A8C" />
                <stop offset="1" stopColor="white" stopOpacity="0.06" />
              </linearGradient>
            </defs>
          </svg>

          {/* Card Content */}
          <div className="relative z-10 flex flex-col h-full p-4 gap-2">
            <img src={card.icon} className="w-10 h-10" alt={card.title} />
            <h3 className="text-xl font-bold text-white text-left">
              {card.title}
            </h3>
            <p className="text-sm text-left text-gray-300">
              {card.description}
            </p>
          </div>
        </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="xl:hidden relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={false}
            navigation={{
              prevEl: '.swiper-button-prev-mobile',
              nextEl: '.swiper-button-next-mobile',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onInit={(swiper) => setTimeout(() => swiper.navigation.update(), 100)}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="w-[264px] h-[260px] mx-auto relative">
                  <svg
                    viewBox="0 0 264 330"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full z-0"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M24 1H192.085C205.996 1.00005 219.192 7.16275 228.122 17.8291L239.017 30.8418H239.018L253.34 49.5762C259.606 57.7726 263 67.8031 263 78.1201V306C263 318.703 252.703 329 240 329H24C11.2975 329 1 318.703 1 306V24C1 11.2975 11.2975 1 24 1Z"
                      fill="#130A2D"
                      stroke="url(#paint0_linear_mobile)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_mobile"
                        x1="145.125"
                        y1="0"
                        x2="307.88"
                        y2="137.877"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#CD3A8C" />
                        <stop offset="1" stopColor="white" stopOpacity="0.06" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="relative z-10 flex flex-col h-full p-4 gap-2">
                    <img src={card.icon} className="w-10 h-10" alt={card.title} />
                    <h3 className="text-xl font-bold text-left">{card.title}</h3>
                    <p className="text-sm text-left text-gray-300">{card.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav Buttons */}
          <div className="flex justify-center gap-3 mt-6">
            <button className="swiper-button-prev-mobile p-2 rounded-md bg-black hover:bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-md">
              ←
            </button>
            <button className="swiper-button-next-mobile p-2 rounded-md bg-black hover:bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-md">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}