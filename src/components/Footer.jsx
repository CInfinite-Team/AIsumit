import React from 'react';
import AI from '../assets/ai.svg'
import Call from '../assets/call.svg'
import Mail from '../assets/mail.svg'
import globe from '../assets/globeico.svg'
import locationico from '../assets/location.svg'
import { useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg';

// --- SVG Icon Components ---

const Footer = () => {
  const location = useLocation();

  const handlenavigation = (e,id) => {
    e.preventDefault();
    const pricingSection = document.getElementById(id);
    if (location.pathname === '/') {
      
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(`/#${id}`, '_blank', 'noopener,noreferrer');
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="[background:linear-gradient(180deg,#2B204C_0%,#160C35_50%)] text-gray-300 font-sans">
      <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          
          {/* Section 1: AI Hack */}
          <div className="space-y-4 ">
             <div className='flex flex-col w-fit items-center justify-center'>
                   <a href="/" target='_blank'><img src={Logo} alt="Logo" className="h-16" /></a>
                   <a className='text-[10px] text-center font-semibold ' href="https://risin.ventures/" target="_blank">Powered by <u>Risin Ventures</u></a>
                   </div> 
                        <p className="text-xs w-3/4">AI Hackathon is a premier event where developers, entrepreneurs, and enterprises collaborate to solve real-world problems using AI.</p>

             </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
     <li>  <a className='cursor-pointer' onClick={(e)=>handlenavigation(e,'spotlight')}>AI Spotlight</a></li>

              <li><a href="#Participate" className="hover:text-white transition-colors">Who can participate?</a></li>
              <li><a href="#Experts" className="hover:text-white transition-colors">Experts</a></li>
              {/* <li><a href="#" className="hover:text-white transition-colors">Prizes</a></li> */}
              <li><a href="#Partners" className="hover:text-white transition-colors">Partners</a></li>
              <li><a onClick={(e)=>handlenavigation(e,'FAQ')} className="cursor-pointer hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Section 3: Contact Us */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><div className='p-1 rounded-full bg-purple-700/20'><img src={Call} className='w-5' alt="" /></div> <a href="tel:+97444654622"><span>+974 4465 4622</span></a></li>
              <li className="flex items-center gap-3"><div className='p-1 aspect-square flex items-center rounded-full bg-purple-700/20'><img src={Mail} className='w-5' alt="" /></div> <a href="mailto:info@risin.ventures"><span>info@risin.ventures</span></a></li>
              <li className="flex items-center gap-3"><div className='p-1 rounded-full bg-purple-700/20'><img src={globe} className='w-5' alt="" /></div> <a href="https://risin.ventures/" target="_blank" rel="noopener noreferrer"><span>www.risin.ventures</span></a></li>
              <li className="flex items-center  gap-3"><div className=' w-7 h-7 aspect-square justify-center flex items-center rounded-full bg-purple-700/20'><img src={locationico} className='w-6 h-4' alt="" /></div> <span>Al Reem Tower, Office No 12, 3rd Floor, West Bay, Doha - Qatar</span></li>
            </ul>
          </div>

          {/* Section 4: Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-4">Subscribe Our Newsletter</h3>
            <div className="flex border items-center justify-between pr-2  bg-white/10 border-white/20 rounded-lg overflow-hidden  w-fit text-sm focus:outline-none focus:border-pink-500">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="bg-transparent focus:outline-none pl-4 w-[55%] py-3 rounded-l-lg  "
              />
                <div className="relative w-fit group rounded-md p-[2px] hover:overflow-hidden ">
              <div className="absolute inset-0 group-hover:w-[200%] group-hover:h-96 group-hover:-left-[70%] group-hover:-top-[210%] rounded-md group-hover:rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] transition-transform duration-700 group-hover:animate-spin pointer-events-none" style={{ zIndex: 1 }} />
              <button className="relative px-6 py-2 rounded-md transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] text-white font-semibold text-xs z-10" style={{ zIndex: 2 }}>
                Notify me
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0">
         <div className='flex flex-col items-start'>
          <p>&copy; 2025 AI Hackathon. Powered by <a  className="underline" href="https://risin.ventures">Risin Ventures.</a></p>
          <p>Designed and Developed by <a className="underline" href="https://www.luxury-method.com/">Luxury Method</a></p>
         </div> 
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
