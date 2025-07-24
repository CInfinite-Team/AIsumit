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
    color: "bg-[#2B0A3D] border-[#E336FF]"
  },
  {
    icon: spotlight2,
    title: "MENTORSHIP",
    description:
      "Gain direct access to seasoned AI professionals and thought leaders, they help you fine-tune your ideas, implementation, and think bigger.",
    color: "bg-[#2B0A3D] border-[#FF3A5E]"
  },
  {
    icon: spotlight3,
    title: "BOOTCAMP",
    description:
      "Exclusive post-hackathon access to a specialized AI Bootcamp designed to help you accelerate your learning and take your projects to the next level.",
    color: "bg-[#2B0A3D] border-[#30D1D9]"
  },
  {
    icon: spotlight4,
    title: "NETWORKING",
    description:
      "The hackathon is a unique opportunity to expand your professional field network, collaborations, & open doors to future job opportunities or startup.",
    color: "bg-[#2B0A3D] border-[#9D67FF]"
  },
  {
    icon: spotlight5,
    title: "PROTOTYPE DEVELOPMENT",
    description:
      "The process of creating a preliminary version of a product to test and evaluate its design and functionality.",
    color: "bg-[#2B0A3D] border-[#FFA522]"
  }
];

export default function AiSpotlight() {
  useEffect(() => {
    // Ensure swiper navigation buttons attach correctly
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
            <div key={index} className="w-[220px]">
              <div
                className="p-[2px] rounded-2xl h-full bg-gradient-to-tr from-pink-500 via-purple-500 to-pink-400 w-full mx-auto"
                style={{
                  clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%, 0 0)'
                }}
              >
                <div className="rounded-2xl h-full gap-2 flex flex-col bg-[#130A2D] p-4 min-h-[320px]">
                  <img src={card.icon} className="w-10 h-10" alt={card.title} />
                  <h3 className="text-xl text-left font-bold">{card.title}</h3>
                  <p className="text-sm text-left text-gray-300">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper with bottom buttons */}
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
            onInit={(swiper) => {
              setTimeout(() => swiper.navigation.update(), 100);
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="p-[2px] rounded-2xl h-full bg-gradient-to-tr from-pink-500 via-purple-500 to-pink-400 w-full mx-auto" style={{
                  clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%, 0 0)'
                }}>
                  <div className="rounded-2xl h-full gap-2 flex flex-col bg-[#130A2D] p-4 min-h-[320px]">
                    <img src={card.icon} className="w-10 h-10" alt={card.title} />
                    <h3 className="text-xl text-left font-bold">{card.title}</h3>
                    <p className="text-sm text-left text-gray-300">{card.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Navigation Buttons */}
          <div className="flex  justify-center gap-3 mt-6">
            <button className="swiper-button-prev-mobile  p-2 rounded-md bg-black hover:bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-md">
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
