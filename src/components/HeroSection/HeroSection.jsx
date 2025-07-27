import Texture from '../../assets/Texture.svg';
import Ray from '../../assets/Ray.svg';
import Globe from '../../assets/Globe.svg';
import partner1 from '../../assets/partner1.svg';
import partner2 from '../../assets/partner2.svg';
import partner3 from '../../assets/partner3.svg';
import HeroSectionvid from '../../assets/HeroSection.mp4';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function HeroSection() {
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const handleGetPassClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/event-detail') {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open('/event-detail#pricing', '_blank', 'noopener,noreferrer');
    }
  };

  // 👇 Animation visibility control using intersection observer
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div
      ref={heroRef}
      className='h-screen lg:h-[84vh] 2xl:h-[88vh] overflow-hidden flex items-center relative w-full [background:linear-gradient(180deg,#2B204C_0%,#160C35_50%)]'
    >
      {/* Background and overlay images */}
      <img src={Ray} className='absolute top-0 left-1/2 -translate-x-1/2 w-full mix-blend-color-dodge pointer-events-none' alt='' />
      <img src={Texture} className='w-full absolute h-screen object-cover pointer-events-none' alt='' />

      {/* Desktop Video */}
      <div className="hidden lg:block absolute top-0 w-[48%] h-screen right-0 z-20 object-cover pointer-events-none" style={{ clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
        <div className='w-full h-screen absolute bg-black/40' />
        <video className="w-full h-full object-cover" muted loop autoPlay playsInline src={HeroSectionvid} />
      </div>

      {/* Mobile Video */}
      <div className="lg:hidden absolute bottom-0 w-full min-h-screen left-0 z-20 object-cover pointer-events-none">
        <div className='w-full h-[120vh] absolute object-cover bg-black/75' />
        <video className=" h-[120vh] object-cover" muted loop autoPlay playsInline src={HeroSectionvid} />
      </div>

      {/* Main Content */}
      <div className={`flex flex-col z-20 pt-10 md:pt-0 items-center lg:items-start w-full max-w-3xl md:pl-24 justify-center gap-8 text-white left-[45%] md:-translate-x-1/2 lg:translate-x-0 lg:left-0 md:absolute transition-all duration-1000 ease-out
        ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>

        {/* Subheading */}
        <p className='font-medium text-xs md:text-xl text-center lg:text-left transition-opacity duration-1000 delay-[200ms]'>
          QATAR | 25TH - 27TH SEPTEMBER | QSTP, DOHA
        </p>

        {/* Heading */}
        <h1 className='text-[8vw] md:text-6xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left leading-tight transition-opacity duration-1000 delay-[400ms]'>
          JOIN THE ULTIMATE<br />
          <span className='bg-gradient-to-r from-[#FF4E8E] to-[#A07CFF] bg-clip-text text-transparent'>AI SUMMIT</span>
          <span className='bg-gradient-to-r from-[#FF4E8E] to-[#A07CFF] bg-clip-text text-transparent'> | </span>
          <span className='bg-gradient-to-r from-[#FF4E8E] to-[#A07CFF] bg-clip-text text-transparent'>AI HACK</span>
        </h1>

        {/* Button */}
        <div className="relative w-fit group rounded-md p-[2px] hover:overflow-hidden ">
          {/* Rotating Gradient Border */}
          <div className="absolute inset-0  group-hover:w-[200%] group-hover:h-96 group-hover:-left-[70%] group-hover:-top-[210%] rounded-md group-hover:rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] transition-transform duration-700 group-hover:animate-spin  pointer-events-none" style={{ zIndex: 1 }} />
          <button
            onClick={handleGetPassClick}
            className="relative flex h-fit justify-center items-center gap-2 bg-[#2B204C] hover:bg-[#3c3357] px-6 py-2 rounded-md text-sm text-white transition-colors duration-300 z-10"
            style={{ zIndex: 2 }}
          >
            Get Your Pass
          </button>
        </div>

        {/* Partners */}
        {/* <div className='flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 mt-12 w-full'>

          <div className={`flex flex-col items-start transition-all duration-1000 delay-[200ms]
              ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className='text-teal-300 font-semibold mb-2'>Strategic Partner</span>
            <div className='flex flex-col md:flex-row gap-4 '
            >
              <img src={partner1} alt='' className='w-32 rounded' />
              <img src={partner2} alt='' className='w-32 rounded' />
            </div>
          </div>

          <div className={`flex flex-col items-start transition-all duration-1000 delay-[200ms]
            ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <span className='text-teal-300 font-semibold mb-2'>Enterprise Partner</span>
            <img src={partner3} alt='' className='w-32 rounded' />
          </div>
        </div> */}
      </div>

      {/* Globe Illustration */}
      <img src={Globe} alt='' className='absolute bottom-0 lg:block hidden lg:w-[65%] left-1/2 translate-y-1/3 -translate-x-1/2 lg:-translate-x-[55%] pointer-events-none' />
    </div>
  );
}

export default HeroSection;
