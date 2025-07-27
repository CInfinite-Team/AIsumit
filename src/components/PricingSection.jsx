import React from 'react';
import { useInView } from 'react-intersection-observer';
import PriceBg from '../assets/price-bg.svg'; 
import GreenTick from '../assets/GreenTick.svg';

const PricingSection = () => {
  const { ref: card1Ref, inView: card1InView } = useInView({ threshold: 0.4, triggerOnce: false });
  const { ref: card2Ref, inView: card2InView } = useInView({ threshold: 0.4, triggerOnce: false });

  return (
    <section className="bg-gradient-to-b relative from-[#1B1036] to-[#2C1A4D] py-16 text-white">
      <div className="absolute -top-20 -translate-y-[80%]" id="pricing"></div>
      <div className="mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          WHY ATTEND AI SUMMIT?
        </h2>
        <p className="text-center inter max-w-2xl mx-auto text-sm md:text-base text-gray-300 mb-12">
          Join CXOs and AI partners in a focused space for innovation, live showcases, and strategic networking. Discover solutions, spark collaborations, and drive enterprise transformation—together.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Card 1 */}
          <div
            ref={card1Ref}
            className={`bg-[#1B1332] min-h-[650px] p-4 rounded-xl w-fit h-full flex flex-col items-center justify-start transition-all duration-1000 ease-out 
              ${card1InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className='relative rounded-xl h-fit w-fit overflow-hidden text-center'>
              <img src={PriceBg} className='h-72' alt="" />
              <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10'>
                <h3 className="text-[5vw] md:text-2xl w-max font-bold mb-2 z-10">Join the Exclusive CXO Zone</h3>
                <p className="text-4xl font-bold mt-5 md:mt-10 z-10">$299</p>
                <a href="https://lu.ma/e7ghjzhz" target="_blank" className='flex items-center justify-center' rel="noopener noreferrer">
                  <div className="relative w-fit group rounded-md p-[2px] mt-5 md:mt-10 hover:overflow-hidden">
                    <div className="absolute inset-0 group-hover:w-[200%] group-hover:h-96 group-hover:-left-[70%] group-hover:-top-[210%] rounded-md group-hover:rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] transition-transform duration-700 group-hover:animate-spin pointer-events-none" style={{ zIndex: 1 }} />
                    <button className="relative z-10 flex h-fit justify-center items-center gap-2 transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] px-6 py-2 md:px-8 md:py-3 rounded-md text-sm text-white">
                      Get Your Pass
                    </button>
                  </div>
                </a>
              </div>
            </div>
            <div className="text-left z-10 text-sm max-w-sm md:text-base space-y-2 mt-6 text-gray-200">
              <h3 className="text-[5vw] md:text-2xl font-bold mb-2 text-center w-full text-[#CA5295] z-10">For CXO Delegates:</h3>
              <p className='pb-2 text-sm inter'>CXO Delegate & Partner Delegate ticket should be viewed in one screen view instead of scrolling.</p>
              {[
                "Hear from AI experts tackling critical enterprise challenges in an exclusive collaboration zone.",
                "Engage peers through curated CXO roundtables, workshops, and panels.",
                "Explore handpicked innovation showcases and live demos."
              ].map((text, i) => (
                <p key={i} className="text-gray-300 flex items-start justify-start text-sm leading-relaxed">
                  <img src={GreenTick} className='w-4 h-4 mt-1 mr-2' alt="" />
                  <span className='inter'>{text}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            className={`bg-[#1B1332] min-h-[650px] p-4 rounded-xl w-fit flex flex-col items-center justify-start transition-all duration-1000 ease-out 
              ${card2InView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className='relative rounded-xl h-fit w-fit overflow-hidden text-center '>
              <img src={PriceBg} className='h-72' alt="" />
              <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10'>
                <h3 className="text-[5vw] md:text-2xl w-max font-bold mb-2 z-10">Showcase Your AI Solution</h3>
                <p className="text-4xl font-bold mt-5 md:mt-10 z-10">$999</p>
                <a href="https://lu.ma/9tzfhtbr" target="_blank" className='flex items-center justify-center' rel="noopener noreferrer">
                  <div className="relative w-fit group rounded-md p-[2px] mt-5 md:mt-10 hover:overflow-hidden">
                    <div className="absolute inset-0 group-hover:w-[200%] group-hover:h-96 group-hover:-left-[70%] group-hover:-top-[210%] rounded-md group-hover:rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] transition-transform duration-700 group-hover:animate-spin pointer-events-none" style={{ zIndex: 1 }} />
                    <button className="relative z-10 flex h-fit justify-center items-center gap-2 transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] px-6 py-2 md:px-8 md:py-3 rounded-md text-sm text-white">
                      Get Your Pass
                    </button>
                  </div>
                </a>
              </div>
            </div>
            <div className="text-left z-10 text-sm max-w-sm md:text-base space-y-2 mt-6 text-gray-200">
              <h3 className="text-[5vw] md:text-2xl text-center w-full font-bold mb-2 text-[#CA5295] z-10">For Partner Delegates:</h3>
              <p className='pb-2 text-sm inter'>Partner Delegate: Designed for AI innovators to engage CXOs and turn exposure into real conversations.</p>
              {[
                "Showcase your AI in an exclusive CXO zone.",
                "Lead strategic dialogues with CXOs in exclusive sessions.",
                "Explore exclusive innovation showcases and demos.",
                "Present your offerings directly to decision-makers.",
                "Get matched with enterprise clients ready to engage.",
                "Maximize brand visibility in a high-intent setting."
              ].map((text, i) => (
                <p key={i} className="text-gray-300 flex items-start justify-start text-sm leading-relaxed">
                  <img src={GreenTick} className='w-4 h-4 mt-1 mr-2' alt="" />
                  <span className='inter'>{text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
