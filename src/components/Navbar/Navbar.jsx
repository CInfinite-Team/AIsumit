import React, { useState } from 'react';
import Sparkel from '../../assets/Sparkel.svg';
import Logo from '../../assets/logo.svg';
import { useLocation } from 'react-router-dom';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="w-full sticky top-0 z-50 flex flex-col">
     
      <div className="flex flex-wrap items-center justify-center md:justify-start py-2 text-white gap-4 md:gap-5 px-4 md:px-20 bg-gradient-to-r from-[#7356CB] via-[#835ACB] to-[#9E4CC9]">
        <a href="/event-detail" target='_blank' className="mosserate text-lg md:text-lg font-extrabold">QATAR</a>
        <img src={Sparkel} alt="" className="h-4 w-4" />
        <a href="#" className="mosserate text-lg md:text-lg font-extrabold">OMAN</a>
        <img src={Sparkel} alt="" className="h-4 w-4" />
        <a href="#" className="mosserate text-lg md:text-lg font-extrabold">KSA</a>
      </div>

   
      <div className="flex items-center justify-between px-4 md:px-20 py-4 bg-[#1D1536] text-white">
        

        <img src={Logo} alt="Logo" className="h-14" />

       
        <button
          className="xl:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        
        <div className="hidden xl:flex gap-6 items-center justify">
          <a className='cursor-pointer' onClick={(e)=>handlenavigation(e,'about')}>About</a>
          <a className='cursor-pointer' onClick={(e)=>handlenavigation(e,'spotlight')}>AI Spotlight</a>
          <a href="#Participate">Who can participate?</a>
          <a href="#Experts">Experts</a>
          <a href="#Partners">Partners</a>
          <a className='cursor-pointer' onClick={(e)=>handlenavigation(e,'FAQ')}>FAQ</a>
          
        </div>
         <a href="https://forms.gle/QdQturFqbxXnkNa89" className='hidden xl:block' target="_blank" rel="noopener noreferrer">
            <div className="inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
              <button className="px-6 py-3 rounded-md bg-[#2B204C] text-white font-semibold text-sm">
                Become a Partner
              </button>
            </div>
          </a>
      </div>
     

    
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 px-4 py-4 bg-[#1D1536] text-white xl:hidden">
          <a href="#about">About</a>
          <a href="#spotlight">AI Spotlight</a>
          <a href="#Participate">Who can participate?</a>
          <a href="#Experts">Experts</a>
          <a href="#Partners">Partners</a>
          <a href="#FAQ">FAQ</a>
          <a href="https://forms.gle/QdQturFqbxXnkNa89" target="_blank" rel="noopener noreferrer">
            <div className="inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
              <button className="px-6 py-3 rounded-md bg-[#2B204C] text-white font-semibold text-sm">
                Become a Partner
              </button>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
