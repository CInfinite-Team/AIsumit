import React, { useState } from 'react';
import axios from 'axios';
import instagram from '../assets/instagram.svg';
import Linkedin from '../assets/linkedin.svg';
import Youtube from '../assets/youtube.svg';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [popup, setPopup] = useState({ show: false, message: '', type: 'success' });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      triggerPopup('Please enter a valid email address.', 'error');
      return;
    }

    try {
      await axios.post('https://aisumit.onrender.com/send-email', {
        recipient: email,
      });
      triggerPopup('Subscribed successfully!', 'success');
      setEmail('');
    } catch (error) {
      triggerPopup('Subscription failed. Please try again later.', 'error');
    }
  };

  const triggerPopup = (message, type = 'success') => {
    setPopup({ show: true, message, type });
    setTimeout(() => {
      setPopup({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B204C] via-purple-800 to-[#2B204C] text-white flex items-center justify-center px-4 py-10">
      {/* ✅ Custom Popup */}
      {popup.show && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 z-50 rounded-md text-sm font-medium shadow-lg transition-all duration-300 ${
            popup.type === 'success' ? 'bg-purple-900 text-white' : 'bg-red-600 text-white'
          }`}
        >
          {popup.message}
        </div>
      )}

      <div className="text-center max-w-xl w-full">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl  font-bold mb-10 animate-fade-in">Coming Soon</h1>

        {/* Section 4: Newsletter */}
        <div className='flex items-center flex-col gap-5'>
          <h3 className="font-bold text-white ">Join Our Newsletter</h3>
          <div className="flex border items-center justify-between pr-2 bg-white/10 border-white/20 rounded-lg overflow-hidden w-fit text-sm focus:outline-none focus:border-pink-500">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="bg-transparent focus:outline-none pl-4 w-[55%] py-3 rounded-l-lg"
            />
            <div className="relative w-fit group rounded-md p-[2px] hover:overflow-hidden">
              <div
                className="absolute inset-0 group-hover:w-[200%] group-hover:h-96 group-hover:-left-[70%] group-hover:-top-[210%] rounded-md group-hover:rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] transition-transform duration-700 group-hover:animate-spin pointer-events-none"
                style={{ zIndex: 1 }}
              />
              <button
                onClick={handleNewsletterSubmit}
                className="relative px-6 py-2 rounded-md transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] text-white font-semibold text-xs z-10"
                style={{ zIndex: 2 }}
              >
                Notify me
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className='flex gap-4 items-center'>
            <a href="https://www.instagram.com/risin.ventures/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} className='w-8' alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/risin-ventures/" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} className='w-[21px]' alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com/channel/UC2PZRHE-2nvkqRZPTPK9wNQ/featured" target="_blank" rel="noopener noreferrer">
              <img src={Youtube} className='w-[30px]' alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
