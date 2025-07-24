import React from 'react';
import JoinPosters from '../assets/JoinPoster.svg'
const JoinPoster = () => {
  return (
    <div className="bg-[#2a2344] w-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div 
          className="p-[2px] rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-400"
          style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 10%, 100% 100%, 0% 100%)' }}
        >
          <div className="relative bg-[#130A2D] rounded-[14px] overflow-hidden">
            
            <img 
              src={JoinPosters}
              alt="Abstract AI background" 
              className="absolute inset-0 w-full h-full object-cover "
            />
            
            <div 
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(19, 10, 45, 0.9) 0%, rgba(19, 10, 45, 0.1) 100%)' }}
            ></div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 min-h-[400px] flex flex-col justify-center items-start">
              <div className="max-w-md">
                <h2 className="text-2xl lg:text-5xl font-bold text-white leading-tight">
                  JOIN THE ULTIMATE
                  <br />
                  AI HACKATHON!
                </h2>
                <p className="text-gray-300 mt-4">
                  Innovate, Compete, and Build the Future of AI
                </p>
                
               
              </div>
               <div className="mt-8 ml-auto w-full flex flex-col sm:flex-row gap-4">
                 <div className="inline-block rounded-md w-full overflow-hidden md:w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
          <button className="px-6 py-3 w-full md:w-fit rounded-md bg-[#2B204C] text-white font-semibold text-sm">
            Become a Partner
          </button>
        </div>
                  <button className="font-semibold text-white border-2 border-white rounded-lg px-6 py-3 hover:bg-white/10 transition-colors duration-300 focus:outline-none">
                    Become a Sponsor
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPoster;
