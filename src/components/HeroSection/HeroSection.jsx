import Texture from '../../assets/Texture.svg';
import Ray from '../../assets/Ray.svg';
import Heroimg from '../../assets/Heroimg.svg';
import Globe from '../../assets/Globe.svg';
import partner1 from '../../assets/partner1.svg';
import partner2 from '../../assets/partner2.svg';
import partner3 from '../../assets/partner3.svg';
import HeroSectionvid from '../../assets/HeroSection.mp4'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
    <div className=' md:h-screen lg:max-h-[700px] overflow-hidden flex items-center relative w-full [background:linear-gradient(180deg,#2B204C_0%,#160C35_50%)]'>
      {/* Background and overlay images */}
      <img src={Ray} className='absolute top-0 left-1/2 -translate-x-1/2 w-full mix-blend-color-dodge pointer-events-none' alt='' />
      <img src={Texture} className='w-full absolute h-screen object-cover pointer-events-none' alt='' />
      {/* <img src={Heroimg} className='hidden lg:block absolute top-0 h-screen right-0 z-20 object-cover pointer-events-none' alt='' /> */}
<div
  className="hidden lg:block absolute top-0 w-[48%] h-screen right-0 z-20 object-cover pointer-events-none"
  style={{
    clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)'
  }}
>
  <video
    className="w-full h-full object-cover"
    muted
    loop
    autoPlay
    playsInline
    src={HeroSectionvid}
  />
</div>
      {/* Main Content */}
      <div className='flex flex-col z-20 pt-10 md:pt-0 items-center lg:items-start w-full max-w-3xl  md:pl-24 justify-center gap-6 text-white left-[45%] md:-translate-x-1/2 lg:translate-x-0 lg:left-0 md:absolute'>
        <p className='font-medium text-xs md:text-xl  text-center  lg:text-left'>QATAR | 25TH - 27TH SEPTEMBER | QSTP, DOHA</p>
        <h1 className='text-[8vw] md:text-6xl lg:text-5xl xl:text-6xl font-bold text-center  lg:text-left leading-tight'>
          JOIN THE ULTIMATE<br />
          <span className='bg-gradient-to-r from-[#FF4E8E] to-[#A07CFF] bg-clip-text text-center  lg:text-left text-transparent'>AI SUMMIT</span>
          <span className='bg-gradient-to-r from-[#FF4E8E] to-[#A07CFF] bg-clip-text text-center  lg:text-left text-transparent'> | </span>
          <span className='bg-gradient-to-r from-[#FF4E8E] to-[#A07CFF] bg-clip-text text-center  lg:text-left text-transparent'>AI HACK</span>
        </h1>
       <div className="inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r shadow-[0px_36px_72px_0px_rgba(247,70,169,0.24)] from-pink-500 via-purple-500 to-cyan-400">
            <button onClick={handleGetPassClick} className="flex h-fit justify-center items-center gap-2 transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] px-6 py-2 rounded-md text-sm">
              Get Your Pass
            </button>
          </div>
          
        {/* Partners */}
        <div className='flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 mt-12 w-full'>
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

      
      <img src={Globe} alt='' className='absolute bottom-0 lg:w-[65%] left-1/2 translate-y-1/3 -translate-x-1/2 lg:-translate-x-[55%] pointer-events-none' />
    </div>
  );
}

export default HeroSection;