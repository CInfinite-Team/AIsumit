import React from 'react';
import AI from '../assets/ai.svg'
import Call from '../assets/call.svg'
import Mail from '../assets/mail.svg'
import globe from '../assets/globeico.svg'
import location from '../assets/location.svg'
// --- SVG Icon Components ---
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const Footer = () => {
  return (
    <footer className="[background:linear-gradient(180deg,#2B204C_0%,#160C35_50%)] text-gray-300 font-sans">
      <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          
          {/* Section 1: AI Hack */}
          <div className="space-y-4 ">
            <div className="flex items-center gap-3">
                
                <img src={AI} alt="" />
                 <p className="text-xs w-full">| Powered By <span className="font-semibold text-white">Risin Ventures</span></p>
        
            </div>
                        <p className="text-sm">AI Hackathon is a premier event where developers, entrepreneurs, and enterprises collaborate to solve real-world problems using AI.</p>

             </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About AI Hack</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Who can participate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Experts Line-up</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prizes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Section 3: Contact Us */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><div className='p-1 rounded-full bg-purple-700/20'><img src={Call} className='w-5' alt="" /></div> <span>+974 4465 4622</span></li>
              <li className="flex items-center gap-3"><div className='p-1 aspect-square flex items-center rounded-full bg-purple-700/20'><img src={Mail} className='w-5' alt="" /></div> <span>info@risin.ventures</span></li>
              <li className="flex items-center gap-3"><div className='p-1 rounded-full bg-purple-700/20'><img src={globe} className='w-5' alt="" /></div> <span>www.risin.ventures</span></li>
              <li className="flex items-center  gap-3"><div className=' w-7 h-7 aspect-square justify-center flex items-center rounded-full bg-purple-700/20'><img src={location} className='w-6 h-4' alt="" /></div> <span>Al Reem Tower, Office No 12, 3rd Floor, West Bay, Doha - Qatar</span></li>
            </ul>
          </div>

          {/* Section 4: Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-4">Subscribe Our Newsletter</h3>
            <div className="flex border items-center  bg-white/10 border-white/20 rounded-lg overflow-hidden  w-fit text-sm focus:outline-none focus:border-pink-500">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="bg-transparent focus:outline-none pl-2 w-[55%] py-3 rounded-l-lg  "
              />
                <div className="inline-block md:mr-2 rounded-lg h-fit overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
          <button className="px-6 py-2 w-fit rounded-lg bg-[#2B204C] text-white font-semibold text-xs whitespace-nowrap">
            notify me
          </button>
        </div>
            </div>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0">
          <p>&copy; 2025 AI Hackathon. Powered by Risin Ventures.</p>
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
