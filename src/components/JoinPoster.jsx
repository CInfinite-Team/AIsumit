import React from 'react';
// import JoinPosterImg from '../assets/JoinPoster.svg';
import JoinPosterImg from '../assets/bg.png';
import { useInView } from 'react-intersection-observer';

const JoinPoster = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, 
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bg-[#2a2344] w-full flex items-center justify-center py-16 px-0 sm:px-6 lg:px-8 
        transition-all duration-1000 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <div className=" w-[900px] xl:w-[1000px] md:max-w-8xl mx-auto">
        <div className="relative rounded-[28px] overflow-hidden md:min-h-[450px]">
          {/* <div className="absolute bg-gray-50 w-52 hidden lg:block h-52 left-0 top-0" /> */}

        

          {/* Background Image */}
          <img
            src={JoinPosterImg}
            alt="AI Poster Background"
            className="absolute inset-0 w-full h-full object-right rounded-3xl lg:h-auto md:w-[1000px] p-4 object-fill z-0"
          />

          {/* Content */}
          <div className="relative z-10 px-8 sm:px-12 lg:px-20 py-16 flex flex-col items-start justify-between min-h-[400px]">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white ">
                JOIN THE ULTIMATE <br /> AI SUMMIT | <br /> AI HACKATHON
              </h2>
            </div>

            <div className="md:pb-6 mt-6 md:mt-0 w-full md:w-fit flex flex-col sm:flex-row gap-4 md:items-center">
              <div className="mt-8 ml-auto w-full flex flex-col sm:flex-row gap-4">
                <a href="https://forms.gle/QdQturFqbxXnkNa89" className='w-full md:w-fit' target="_blank" rel="noopener noreferrer">
            <div className="relative w-full md:w-fit group rounded-md p-[2px] hover:overflow-hidden ">
              <div className="absolute w-full inset-0 group-hover:w-[250%] group-hover:md:w-[200%] group-hover:h-96 group-hover:-left-[70%] group-hover:-top-[210%] rounded-md group-hover:rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] transition-transform duration-700 group-hover:animate-spin pointer-events-none" style={{ zIndex: 1 }} />
              <button className="relative px-6 w-full py-3 rounded-md transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] text-white font-semibold text-sm z-10" style={{ zIndex: 2 }}>
                Become a Partner
              </button>
            </div>
          </a>
                <a
                  className="w-full md:w-fit"
                  href="https://forms.gle/zhRKvXVju4QgoUix9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-full md:w-fit group rounded-md p-[2px] hover:overflow-hidden ">
              <div className="absolute w-full inset-0 border-2 border-white group-hover:w-[250%] group-hover:md:w-[200%] group-hover:h-96 group-hover:-left-[70%] group-hover:-top-[210%] rounded-md group-hover:rounded-full p-[2px] group-hover:bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] transition-transform duration-700 group-hover:animate-spin pointer-events-none" style={{ zIndex: 1 }} />
              <button className="relative px-6 w-full py-3 rounded-md transition-colors duration-300 hover:bg-[#3c3357] text-white font-semibold text-sm z-10" style={{ zIndex: 2 }}>
                Become a Sponsor
              </button>
            </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPoster;
