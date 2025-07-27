import React, { useState,useEffect } from 'react';
import Sparkel from '../../assets/Sparkel.svg';
import Ai from '../../assets/ai.svg'
import Hack from '../../assets/hack.svg'
import { useLocation } from 'react-router-dom';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const[Quatar,setQuatar]=useState(false)
  const location = useLocation();
  
useEffect(() => {
  if (location.pathname !== '/') {
    setQuatar(true)
  } else {
    setQuatar(false)
  }
}, [location.pathname]);


  return (
    <div className="w-full sticky top-0 z-50 flex flex-col">
     
      <div className="flex flex-wrap items-center justify-center md:justify-start py-2 text-white gap-4 md:gap-5 px-4 md:px-20 bg-gradient-to-r from-[#7356CB] via-[#835ACB] to-[#9E4CC9]">
        <a href="/event-detail" target='_blank' className={`mosserate text-lg md:text-lg font-extrabold ${Quatar ? 'text-[#58fff7]' : ''}`}>QATAR</a>
        <img src={Sparkel} alt="" className="h-4 w-4" />
        <a href="#" className="mosserate text-lg md:text-lg font-extrabold">OMAN</a>
        <img src={Sparkel} alt="" className="h-4 w-4" />
        <a href="#" className="mosserate text-lg md:text-lg font-extrabold">KSA</a>
      </div>

   
      <div className="flex items-center justify-between px-4 md:px-20 py-4 bg-[#1D1536] text-white">
        
    <div className='flex  items-center gap-4 justify-center'>
               <a href="/" target='_blank'><img src={Ai} alt="Logo" className="h-12 md:h-16" /></a>
               |
               <a href="/" target='_blank'><img src={Hack} alt="Logo" className="h-12 md:h-16" /></a>
               <a className=' text-[10px] md:text-xs font-thin ' href="https://risin.ventures/" target="_blank">Powered by <br /> <u className='font-normal text-gray-200'>Rising Ventures</u></a>
               </div>

       
        <button
          className="xl:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        
        <div className="hidden xl:flex gap-6 items-center justify">
          <a className='cursor-pointer' href='#Agenda'>Agenda</a>
          <a href="#pricing">Why Attend AI Summit?</a>
          <a href="#Experts">Our Speakers</a>
          
          
        </div>
         <a href="https://forms.gle/QdQturFqbxXnkNa89" className='hidden xl:block' target="_blank" rel="noopener noreferrer">
            <div className="relative w-fit group rounded-md p-[2px] hover:overflow-hidden ">
              <div className="absolute inset-0 group-hover:w-[200%] group-hover:h-96 group-hover:-left-[70%] group-hover:-top-[210%] rounded-md group-hover:rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] transition-transform duration-700 group-hover:animate-spin pointer-events-none" style={{ zIndex: 1 }} />
              <button className="relative px-6 py-3 rounded-md transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] text-white font-semibold text-sm z-10" style={{ zIndex: 2 }}>
                Become a Partner
              </button>
            </div>
          </a>
      </div>
     

    
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 px-4 py-4 bg-[#1D1536] text-white xl:hidden">
          <a onClick={() => setMenuOpen(false)} href="#Agenda">Agenda</a>
          <a onClick={() => setMenuOpen(false)} href="#pricing">Why Attend AI Summit?</a>
          <a onClick={() => setMenuOpen(false)} href="#Experts">Our Speakers</a>
          <a onClick={() => setMenuOpen(false)} href="https://forms.gle/QdQturFqbxXnkNa89" target="_blank" rel="noopener noreferrer">
            <div className="relative w-fit group rounded-md p-[2px] hover:overflow-hidden ">
              <div className="absolute inset-0 group-hover:w-[200%] group-hover:h-96 group-hover:-left-[70%] group-hover:-top-[210%] rounded-md group-hover:rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] transition-transform duration-700 group-hover:animate-spin pointer-events-none" style={{ zIndex: 1 }} />
              <button className="relative px-6 py-3 rounded-md transition-colors duration-300 active:bg-[#3c3357] bg-[#2B204C] text-white font-semibold text-sm z-10" style={{ zIndex: 2 }}>
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
