import React from 'react';
import { useInView } from 'react-intersection-observer';

const StrategicCollaborators = ({ logos, title = 'OUR PARTNERS', className }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });



  const displayLogos = logos;

  return (
    <div className=" flex items-center">
      <style jsx>{`
        .scroll-container {
          --logo-width: 200px;
          --logo-gap: 32px;
          --total-width: calc(var(--logo-width) + var(--logo-gap));
          --total-logos: ${displayLogos.length};
          --scroll-distance: calc(var(--total-width) * var(--total-logos));
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--scroll-distance)));
          }
        }
        
        .scrolling-logos {
          animation: scroll 30s linear infinite;
          width: calc(var(--scroll-distance) * 2);
        }
        
        .scrolling-logos:hover {
          animation-play-state: paused;
        }
        
        .logo-item {
          width: var(--logo-width);
          margin-right: var(--logo-gap);
        }
      `}</style>
      
      <section
        ref={ref}
        className={`w-full text-white py-10 relative transition-all duration-[1200ms] ease-in-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute -top-40 -translate-y-1/2" id="Partners"></div>

        <div className="">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-2">{title}</h2>
          <p className="text-center text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-8">
            Our global partnerships with leading technology and data firms fuel our innovation and expand our reach.
          </p>
<div className='relative w-full'>
   <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 z-10 rounded-full" />

          <div className="relative overflow-hidden bg-[#1D1536] py-8 rounded-md scroll-container">
           
            <div className="scrolling-logos flex items-center will-change-transform">
              {/* Create enough copies to ensure smooth infinite scroll */}
              {Array.from({ length: 3 }, (_, setIndex) => 
                displayLogos.map((logo, logoIndex) => (
                  <div
                    key={`${setIndex}-${logoIndex}`}
                    className="logo-item flex-shrink-0 flex items-center justify-center h-20"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                  className={`${className} h-14 md:h-20  aspect-video object-contain opacity-90 hover:opacity-100 transition duration-300`}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          
</div>
        </div>
      </section>
    </div>
  );
};

export default StrategicCollaborators;