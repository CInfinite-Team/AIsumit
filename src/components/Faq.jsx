import React, { useState } from 'react';

import question from '../assets/question.svg';
const faqData = [
  {
    question: 'How Do I Participate in this Challenge?',
    answer: 'To enter the competition, you must fill out the online application form for your startup before the application deadline of 25th September 2025.',
  },
  {
    question: 'Who can apply?',
    answer: 'The challenge is open to early-stage startups with a focus on AI-driven solutions. Your company must be less than 3 years old and have received less than $1M in funding.',
  },
  {
    question: 'When can I apply?',
    answer: 'The application portal opens on 1st August 2025 and closes on 25th September 2025 at 11:59 PM IST.',
  },
  {
    question: 'Is there a limit to the number of entries?',
    answer: 'Each startup or team can submit only one application for the challenge. Multiple entries from the same entity will be disqualified.',
  },
  {
    question: 'How do I know if my startup qualifies to apply?',
    answer: 'Please review the "Eligibility Criteria" section on our official challenge page. If you still have questions, you can reach out to our support team.',
  },
  {
    question: 'What stage should my startup be at to be considered?',
    answer: 'We are looking for startups from the ideation stage to those with a minimum viable product (MVP). Both pre-seed and seed-stage startups are encouraged to apply.',
  },
  {
    question: 'Is there any participation fee?',
    answer: 'No, there is absolutely no fee to participate in this challenge. Our goal is to foster innovation, not to create barriers.',
  },
];

// --- SVG Icons ---
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

const QuestionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);



const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className={` `}>
        <div className={`p-[2px]  rounded-xl transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-pink-500 to-blue-500' : 'bg-transparent'}`}>
            <div className={`${isOpen ? 'border-transparent' : 'border-white/10'} border-2  relative bg-[#342D52] rounded-lg`}>
                
              
                <div className={`absolute top-0 left-0 right-0 h-[0.1px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-t-lg transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>

                <button
                    onClick={onClick}
                    className="w-full flex items-center justify-between text-left p-4"
                >
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 p-2 bg-[#8B5CF6]/30 rounded-full text-white">
                            <img src={question} className='w-5' alt="Question Icon" />
                        </div>
                        <span className="flex-1 font-semibold text-white">{item.question}</span>
                    </div>
                    <div className="text-white">
                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </div>
                </button>

                <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <p className="text-gray-300 px-6 pb-4">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};



const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div id='FAQ' className="bg-[#2A2344] font-sans w-full min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">FAQs</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            We are offering cash prizes, incubation opportunities, and exclusive mentorship sessions to help winners take their AI innovations to the next level!
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;