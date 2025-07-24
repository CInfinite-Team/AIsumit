import React from 'react';
import DevHus from '../assets/DevHus.svg';
import Enterprise from '../assets/Enterprise.svg';
import developers from '../assets/developers.svg';
import designers from '../assets/designers.svg';
import Entrepreneurs from '../assets/Entrepreneurs.svg';
import TechCom from '../assets/TechCom.svg';
import Startup from '../assets/Startup.svg';
import investors from '../assets/investors.svg';
const WhoCanParticipate = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-16 font-sans">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">WHO CAN PARTICIPATE?</h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-sm md:text-base">
        AI Hack is open to a diverse group of innovators who are eager to explore AI-driven solutions and push the boundaries of technology.
      </p>

      <div className="grid md:grid-cols-2 gap-8">


            {/* Enterprises */}
        <div className="rounded-xl relative border flex flex-col overflow-hidden justify-between border-[#3d2b77] bg-[#1a1237] p-5 py-2 shadow-md">
          <div className="flex items-center gap-4 mb-5">
            <div className=" p-2  rounded-lg">
              <img src={Enterprise} className='w-32' alt="" />
            </div>
           <div className='absolute bottom-10 right-10 z-0 bg-[#31AEAE] w-44 h-44 rounded-full blur-[80px] '/>
          </div>
           <h3 className="text-xl font-semibold">Enterprises</h3>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Are you a company or startup looking for AI-powered innovation? AI Hack offers an opportunity for enterprises to collaborate, network, and discover fresh talent.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-3">
              <span className="rounded-full p-2 bg-cyan-400/30"><img src={TechCom} alt="" /></span>
              <span><strong>Tech Companies:</strong> Integrate AI with top developer talent.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full p-2 bg-pink-400/30"><img src={Startup} alt="" /></span>
              <span><strong>Corporates & Startups:</strong> Present challenges & engage with AI experts.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full p-2 bg-purple-400/30"><img src={investors} alt="" /></span>
              <span><strong>Investors & VCs:</strong> Scout top AI talent & emerging startups.</span>
            </li>
          </ul>
         <div className="inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
          <button className="px-6 py-3 rounded-md bg-[#2B204C] text-white font-semibold text-sm">
            Apply Now
          </button>
        </div>
        </div>


        {/* Developers & Hustlers */}
        <div className="rounded-xl border relative flex flex-col overflow-hidden justify-between border-[#3d2b77] bg-[#1a1237] p-5 py-2 shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <div className=" p-2 rounded-lg">
              <img src={DevHus} className='w-32' alt="" />
            </div>
                    <div className='absolute bottom-10 right-10 z-0 bg-[#31AEAE] w-44 h-44 rounded-full blur-[80px] '/>

          </div>
             <h3 className="text-xl font-semibold">Developers & Hustlers</h3>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Are you a coder, designer, or entrepreneur ready to build cutting-edge AI solutions? Join AI Hack and turn your ideas into reality!
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-3">
              <span className="rounded-full p-2 bg-cyan-400/30"><img src={developers} className='w-7' alt="" /></span>
              <span><strong>Developers:</strong> AI/ML experts solving real-world problems.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full p-2 bg-pink-400/30"><img src={designers} className='w-7' alt="" /></span>
              <span><strong>Designers:</strong> UI/UX specialists crafting intuitive AI interfaces.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full p-2 bg-purple-400/30"><img src={Entrepreneurs} className='w-7' alt="" /></span>
              <span><strong>Entrepreneurs:</strong> Innovators turning AI ideas into products.</span>
            </li>
          </ul>
           <div className="inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
          <button className="px-6 py-3 rounded-md bg-[#2B204C] text-white font-semibold text-sm">
            Apply Now
          </button>
        </div>
        </div>

      
      </div>
    </section>
  );
};

export default WhoCanParticipate;
