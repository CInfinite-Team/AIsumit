import React, { useState } from 'react';
import Sparkel from '../../assets/Sparkel.svg';
import Logo from '../../assets/logo.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 flex flex-col">
     
      <div className="flex flex-wrap items-center justify-center md:justify-start py-2 text-white gap-4 md:gap-5 px-4 md:px-20 bg-gradient-to-r from-[#7356CB] via-[#835ACB] to-[#9E4CC9]">
        <a href="#" className="mosserate text-lg md:text-lg font-extrabold">QATAR</a>
        <img src={Sparkel} alt="" className="h-4 w-4" />
        <a href="#" className="mosserate text-lg md:text-lg font-extrabold">OMAN</a>
        <img src={Sparkel} alt="" className="h-4 w-4" />
        <a href="#" className="mosserate text-lg md:text-lg font-extrabold">KSA</a>
      </div>

   
      <div className="flex items-center justify-between px-4 md:px-20 py-4 bg-[#1D1536] text-white">
        

        <img src={Logo} alt="Logo" className="h-10" />

       
        <button
          className="xl:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        
        <div className="hidden xl:flex gap-6 items-center justify">
          <a href="#">About</a>
          <a href="#">AI Spotlight</a>
          <a href="#">Who can participate?</a>
          <a href="#">Experts</a>
          <a href="#">Partners</a>
          <a href="#">FAQ</a>
          
        </div>
         <div className="hidden xl:inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r shadow-[0px_36px_72px_0px_rgba(247,70,169,0.24)] from-pink-500 via-purple-500 to-cyan-400">
            <button className="flex h-fit justify-center items-center gap-2 bg-[#2B204C] px-6 py-2 rounded-md text-sm">
              Become a Partner
            </button>
          </div>
      </div>
     

    
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 px-4 py-4 bg-[#1D1536] text-white xl:hidden">
          <a href="#">About</a>
          <a href="#">AI Spotlight</a>
          <a href="#">Who can participate?</a>
          <a href="#">Experts</a>
          <a href="#">Partners</a>
          <a href="#">FAQ</a>
          <div className="inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r shadow-[0px_36px_72px_0px_rgba(247,70,169,0.24)] from-pink-500 via-purple-500 to-cyan-400">
            <button className="flex h-fit justify-center items-center gap-2 bg-[#2B204C] px-6 py-2 rounded-md text-sm">
              Become a Partner
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
