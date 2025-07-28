import React from 'react';
import { useInView } from 'react-intersection-observer';

const StrategicCollaborators = ({ logos, title = 'OUR PARTNERS' }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`w-full text-white py-10 relative transition-opacity duration-[1200ms] ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute -top-40 -translate-y-1/2" id="Partners"></div>

      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-center mb-2">{title}</h2>
        <p className="text-center text-gray-300 inter text-sm md:text-base max-w-xl mx-auto mb-8">
          Our global partnerships with leading technology and data firms fuel our innovation and expand our reach.
        </p>

        <div className="relative overflow-hidden bg-[#1D1536] py-6 rounded-md">
          {/* Top and Bottom Gradient Borders */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 z-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 z-10 rounded-full" />

          <div className="whitespace-nowrap flex animate-slide gap-10 px-4">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-20 w-32 md:w-60"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 md:h-20 aspect-video object-contain opacity-90 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicCollaborators;
