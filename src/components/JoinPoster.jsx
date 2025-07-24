import React from 'react';
import JoinPosterImg from '../assets/JoinPoster.svg';

const JoinPoster = () => {
  return (
    <div className="bg-[#2a2344] w-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-[900px] max-w-7xl mx-auto">
        {/* Custom SVG Shape Wrapper */}
        <div className="relative rounded-[28px]  overflow-hidden">
          
          {/* SVG Border Shape */}
          <svg
            viewBox="0 0 1440 580"
            className="w-full h-full md:h-auto md:w-[900px] absolute top-0 left-0 z-0 pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              d="M24 1H1332.24C1345.64 1 1358.4 6.72115 1367.32 16.7246L1397.09 50.1201L1428.45 88.6455C1435.27 97.0284 1439 107.507 1439 118.316V556C1439 568.703 1428.7 579 1416 579H24C11.2975 579 1 568.703 1 556V24C1.00001 11.2975 11.2975 1 24 1Z"
              fill="#2B204C"
              stroke="url(#paint0_linear)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="paint0_linear" x1="252.869" y1="0" x2="601.27" y2="219.829" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.24" />
                <stop offset="1" stopColor="white" stopOpacity="0.04" />
              </linearGradient>
            </defs>
          </svg>

          {/* Background Image */}
          <img 
            src={JoinPosterImg} 
            alt="AI Poster Background" 
            className="absolute inset-0 w-full h-full object-right rounded-3xl lg:h-auto md:w-[900px] p-4 object-cover z-0" 
          />

          {/* Content */}
          <div className="relative z-10 px-8 sm:px-12 lg:px-20 py-16 flex flex-col  items-start justify-between  min-h-[400px]">
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                JOIN THE ULTIMATE
                <br />
                AI HACKATHON!
              </h2>
              <p className="text-gray-300 mt-4">
                Innovate, Compete, and Build the Future of AI
              </p>
            </div>

            <div className="md:pb-6 mt-6 md:mt-0 w-full md:w-fit flex flex-col sm:flex-row gap-4 md:items-center">
              <div className="inline-block w-full md:w-fit rounded-md overflow-hidden p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
                <button className="px-6 py-3 w-full md:w-fit rounded-md bg-[#2B204C] text-white font-semibold text-sm">
                  Become a Partner
                </button>
              </div>

              <button className="font-semibold text-white border-2 border-white rounded-lg px-6 py-3 hover:bg-white/10 transition-colors duration-300">
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPoster;
