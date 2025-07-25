import Texture from '../../assets/Texture.svg';
import { useEffect } from 'react';

import Ray from '../../assets/Ray.svg';
import Heroimg from '../../assets/Heroimg.svg';
import Globe from '../../assets/Globe.svg';
import partner1 from '../../assets/partner1.svg';
import partner2 from '../../assets/partner2.svg';
import partner3 from '../../assets/partner3.svg';
import HeroSectionvid from '../../assets/HeroSection.mp4'
import { useLocation } from 'react-router-dom';

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
  return (
    <div className=' py-10 xl:py-20 overflow-hidden flex items-center justify-center relative w-full [background:linear-gradient(180deg,#2B204C_0%,#160C35_50%)]'>
      {/* Background and overlay images */}
      <img src={Ray} className='absolute top-0 left-1/2 -translate-x-1/2 w-full mix-blend-color-dodge pointer-events-none' alt='' />
      <img src={Texture} className='w-full absolute h-screen object-cover pointer-events-none' alt='' />
      {/* <img src={Heroimg} className='hidden lg:block absolute top-0 h-screen right-0 z-20 object-cover pointer-events-none' alt='' /> */}


      {/* Main Content */}
      <div className='flex flex-col xl:flex-row items-center justify-center  md:gap-10 lg:gap-20 w-full max-w-7xl 2xl:max-w-[70vw]'>
      <div className='flex flex-col order-2 xl:order-1 z-20 pt-10 md:pt-0 items-center xl:items-start w-full max-w-3xl   justify-center gap-6 text-white '>
        <p className='font-medium text-xs md:text-xl  text-center  xl:text-left'>QATAR | 25TH - 27TH SEPTEMBER | QSTP, DOHA</p>
        <h1 className='text-[8vw] md:text-6xl xl:text-5xl 2xl:text-6xl font-bold text-center  xl:text-left leading-tight'>
          JOIN THE ULTIMATE<br />
          <span className='bg-gradient-to-r from-[#FF4E8E] to-[#A07CFF] bg-clip-text text-center  lg:text-left text-transparent'>AI SUMMIT</span>
          <span className='text-white'> | </span>
          <span className='bg-gradient-to-r from-[#FF4E8E] to-[#A07CFF] bg-clip-text text-center  lg:text-left text-transparent'>AI HACK</span>
        </h1>
       <div className="inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
          <button className="px-6 py-3 rounded-md bg-[#2B204C] text-white font-semibold text-sm" onClick={handleGetPassClick}>
            Get Your Pass
          </button>
        </div>
        {/* Partners */}
        <div className='flex flex-col md:flex-row items-center xl:items-start justify-center xl:justify-start gap-8 mt-5 w-full'>
          <div className='flex flex-col items-start'>
            <span className='text-teal-300 font-semibold mb-2'>Strategic Partner:</span>
           
            <div className='flex flex-col md:flex-row gap-4'>
              <img src={partner1} alt='' className='w-32  rounded flex items-center justify-center text-xs'/>
              <img src={partner2} alt='' className='w-32  rounded flex items-center justify-center text-xs'/>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <span className='text-teal-300 font-semibold mb-2'>Enterprise Partner:</span>
            
              <img src={partner3} alt='' className='w-32  rounded flex items-center justify-center text-xs'/>
          </div>
        </div>
      </div>
              <video className=' rounded-lg order-1 xl:order-2 w-[80%] xl:w-[50%] right-10 aspect-video  z-20 object-cover ' muted loop autoPlay playsInline src={HeroSectionvid}></video>
</div>

      
      <img src={Globe} alt='' className='absolute bottom-0 lg:w-[65%] left-1/2 translate-y-1/3 -translate-x-1/2 lg:-translate-x-[55%] pointer-events-none' />
    </div>
  );
}

export default HeroSection;
