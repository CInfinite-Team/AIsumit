import React from 'react';
import DevHus from '../assets/DevHus.svg';
import Enterprise from '../assets/Enterprise.svg';
import developers from '../assets/developers.svg';
import designers from '../assets/designers.svg';
import Entrepreneurs from '../assets/Entrepreneurs.svg';
import TechCom from '../assets/TechCom.svg';
import Startup from '../assets/Startup.svg';
import investors from '../assets/investors.svg';
import { useInView } from 'react-intersection-observer';

const CardWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* SVG Background */}
      <svg
        width="704"
        height="864"
        viewBox="0 0 704 864"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-2 -left-2 w-full md:w-[95%] lg:w-[98%] xl:w-fit h-[95%] z-0"
        preserveAspectRatio="none"
      >
        <path
          d="M24 1H549.262C563.354 1.00015 576.703 7.32376 585.63 18.2285L638.714 83.0752L693.646 156.567C699.718 164.692 703 174.564 703 184.707V840C703 852.703 692.703 863 680 863H24C11.2975 863 1 852.703 1 840V24C1.00001 11.2975 11.2975 1 24 1Z"
          fill="#2B204C"
          stroke="url(#paint0_linear_335_395)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_335_395"
            x1="387"
            y1="0"
            x2="829.133"
            y2="366.226"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CD3A8C" />
            <stop offset="1" stopColor="white" stopOpacity="0.24" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative z-10 p-3 py-2 gap-4 justify-items-end flex flex-col justify-center h-full">
        {children}
      </div>
    </div>
  );
};

const WhoCanParticipate = () => {
  return (
    <section id='Participate' className="text-white py-16 px-6 md:px-16 font-sans flex items-center justify-center min-h-screen">
      <div className="w-full">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">WHO CAN PARTICIPATE?</h2>
        <p className="text-center inter text-gray-300 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          AI Hack is open to a diverse group of innovators who are eager to explore AI-driven solutions and push the boundaries of technology.
        </p>

        <div className="grid lg:grid-cols-2 w-fit mx-auto xl:mx-[10vw] 2xl:max-w-screen-xl xl:pl-10 2xl:pl-40 2xl:mx-auto gap-6 items-stretch">
          {/* Developers & Hustlers */}
          <CardWrapper>

            <div className="flex items-center   ">
              <img src={DevHus} className='w-24' alt="Developers & Hustlers" />
              {/* <div className='absolute bottom-0 right-0 z-[-1] bg-[#31AEAE] w-44 h-44 rounded-full blur-[80px]' /> */}
            </div>
            <h3 className="text-lg uppercase font-semibold">Developers & Hustlers</h3>
            <p className="text-gray-300 w-[93%] xl:w-3/5 inter 2xl:w-[40%]  text-sm ">
              Are you a coder, designer, or entrepreneur ready to build cutting-edge AI solutions? Join AI Hack and turn your ideas into reality!
            </p>
            <ul className="space-y-2 ">
              <li className="flex items-center gap-3">
                <span className="rounded-full p-2 bg-cyan-400/30"><img src={developers} className='w-5' alt="Developers" /></span>
                <span className='inter text-gray-300 text-sm'><strong className='inter text-white'>Developers:</strong> <br /> AI/ML experts solving real-world problems.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-full p-2 bg-pink-400/30"><img src={designers} className='w-5' alt="Designers" /></span>
                 <span className='inter text-gray-300 text-sm'><strong className='inter text-white'>Designers:</strong> <br /> UI/UX specialists crafting intuitive AI interfaces.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-full p-2 bg-purple-400/30"><img src={Entrepreneurs} className='w-5' alt="Entrepreneurs" /></span>
                 <span className='inter text-gray-300 text-sm'><strong className='inter text-white'>Entrepreneurs:</strong> <br /> Innovators turning AI ideas into products.</span>
              </li>
            </ul>

            <a href="https://forms.gle/drtYKddbPGHpgTF19" target="_blank" rel="noopener noreferrer">
              <div className="inline-block mb-8 rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
                <button className="px-6 py-3 rounded-md transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] text-white font-semibold text-sm">
                  Register Your Interest
                </button>
              </div>
            </a>


          </CardWrapper>


          {/* Enterprises */}
          <CardWrapper>
            <div className="flex items-center ">
              <img src={Enterprise} className='w-24' alt="Enterprise" />
              {/* <div className='absolute bottom-10 right-10 z-[-1] bg-[#31AEAE] w-44 h-44 rounded-full blur-[80px]' /> */}
            </div>
            <h3 className="text-lg uppercase font-semibold">Enterprises</h3>
            <p className="text-gray-300  inter text-sm md:text-sm md:w-[93%] xl:w-3/5 2xl:w-[40%]">
              Are you a company or startup looking for AI-powered innovation? AI Hack offers an opportunity for enterprises to collaborate, network, and discover fresh talent.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <span className="rounded-full p-2 bg-cyan-400/30"><img src={TechCom} className='w-5' alt="Tech Companies" /></span>
                <span className='inter text-gray-300 text-sm'><strong className='inter text-white'>Tech Companies:</strong> <br /> Integrate AI with top developer talent.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-full p-2 bg-pink-400/30"><img src={Startup} className='w-5' alt="Startups" /></span>
                  <span className='inter text-gray-300 text-sm'><strong className='inter text-white'>Corporates & Startups:</strong> <br /> Present challenges & engage with AI experts.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-full p-2 bg-purple-400/30"><img src={investors} className='w-5' alt="Investors" /></span>
                  <span className='inter text-gray-300 text-sm'><strong className='inter text-white'>Investors & VCs:</strong> <br /> Scout top AI talent & emerging startups.</span>
              </li>
            </ul>
            <a href="https://forms.gle/QdQturFqbxXnkNa89" target="_blank" rel="noopener noreferrer">
              <div className="inline-block mb-8 rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
                <button className="px-6 py-3 rounded-md transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] text-white font-semibold text-sm">
                  Become a Partner
                </button>
              </div>
            </a>
          </CardWrapper>


        </div>
      </div>
    </section>
  );
};

export default WhoCanParticipate;
