import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import question from '../assets/question.svg';

const faqData = [
  {
    question: 'How can I participate in the challenge?',
    answer: 'To participate, you need to apply during the call for application phase. Applications are open to startups, coders, hustlers, designers, and innovators. Once your application is screened and accepted, you will be invited to join the hackathon either virtually or in person.',
  },
  {
    question: 'Who can apply?',
    answer: 'The hackathon is open to individuals or teams of innovators, developers, designers, and entrepreneurs who are passionate about solving real-world business challenges using AI/ML technologies.',
  },
  {
    question: 'When can I apply?',
    answer: 'Applications typically open several weeks before the event. For this edition, the application process shall begin shortly, with the hackathon running across multiple countries in the GCC region.',
  },
  {
    question: 'How do I know if I qualify to apply?',
    answer: 'Eligibility criteria include having a strong interest in AI/ML, problem-solving skills, and the ability to collaborate effectively in a team. Initial screening will assess your qualifications based on the submitted application.',
  },
  {
    question: 'Is there any participation fee?',
    answer: 'No, there is no participation fee. The AI Hackathon is free to join, and participants will have access to technology platforms, mentors, workshops, and other resources.',
  },
  {
    question: 'Can Al Hackathon teams engage with the CXO Summit?',
    answer: 'Yes, hackathon participants are encouraged to network and collaborate with CXO Summit attendees. This provides an opportunity to showcase solutions, gain industry insights, and explore potential partnerships.',
  },
  {
    question: 'What happens after the hackathon?',
    answer: 'Winning solutions from the hackathon are fast-tracked for enterprise adoption or pilot programs. Additionally, participants gain visibility, mentorship, and potential funding opportunities.',
  },
  {
    question: 'Is there a separate application for the CXO Summit?',
    answer: 'Yes, the CXO Summit has a separate registration process. Interested participants can register through the official website or contact the organizers for more details.',
  },
  {
    question: 'How can I partner with the Al Hackathon or CXO Summit?',
    answer: 'Partnerships are available for organizations looking to support the event through funding, use case contributions, or resource provision. To partner, reach out to the organizing team via email at info@risin.ventures or call +974 4465 4622.',
  },
  {
    question: 'What are the benefits of attending the CXO Summit?',
    answer: 'C-level engagements with top corporates, enterprises and government officials. Attendees will also gain access to inspiring keynotes, expert panels, hands-on workshops, and networking opportunities. The summit also offers a platform to explore innovative partnerships, enhance brand visibility, and engage with top talent.',
  },
  {
    question: 'What is the format of the Al Hackathon?',
    answer: 'The hackathon follows a hybrid format, combining virtual and in-person participation. Over two days, participants engage in intense coding, mentoring, training, and prototype development.',
  },
  {
    question: 'Are there prizes for the winners?',
    answer: 'Yes, the total cash prize will be announced in the application. Winning teams also receive mentorship, visibility, and opportunities for immediate adoption or pilots within enterprises.',
  },
  {
    question: 'How can I stay updated about the event?',
    answer: 'Follow our website and social media channels for announcements, schedules, and updates. You can also subscribe to the newsletter for regular updates.',
  },
];
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

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div>
      <div className={`p-[2px] rounded-xl transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-pink-500 to-blue-500' : 'bg-transparent'}`}>
        <div className={`${isOpen ? 'border-transparent' : 'border-white/10'} border-2 relative bg-[#342D52] rounded-lg`}>
          <div className={`absolute top-0 left-0 right-0 h-[0.1px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-t-lg transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
          <button onClick={onClick} className="w-full flex items-center justify-between text-left p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-2 bg-[#8B5CF6]/30 rounded-full text-white">
                <img src={question} className="w-5" alt="Question Icon" />
              </div>
              <span className="flex-1 font-semibold text-white">{item.question}</span>
            </div>
            <div className="text-white">{isOpen ? <MinusIcon /> : <PlusIcon />}</div>
          </button>
          <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <p className="text-gray-300 inter px-6 pb-4">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
                                  <div className=" -translate-y-20" id='FAQ'></div>

    <div
      
      ref={ref}
      className={`bg-[#2A2344]  font-sans w-full min-h-screen flex items-center justify-center py-16 px-4 transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >

      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">FAQs</h2>
          <p className="text-gray-300 inter mt-4 max-w-2xl mx-auto">
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
    </>
  );
};

export default Faq;
