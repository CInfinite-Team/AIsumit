import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import AiIcon from '../assets/ai.svg';
import HackIcon from '../assets/hack.svg';
import TickBullet from '../assets/TickBullet.svg';

function About() {
  const [ChangeImg, setChnageImg] = useState(false);

  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <section className="w-full relative min-h-screen px-4 md:px-20 py-10 [background:linear-gradient(180deg,#2B204C_0%,#160C35_50%)] text-white flex flex-col xl:flex-row gap-10 lg:gap-20 items-center justify-between">
      <div className="absolute -top-20 -translate-y-1/2" id="about"></div>

      {/* Left Text Content */}
      <div
        ref={leftRef}
        className={`flex-1 order-2 xl:order-1 items-center lg:items-start flex flex-col gap-6 max-w-2xl transition-all duration-1000 ease-out
          ${leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/2'}`}
      >
        {/* Toggle Buttons */}
        <div className="flex gap-6">
          {['AI Summit', 'AI Hack'].map((label, idx) => {
            const isActive = ChangeImg === (idx === 1);
            return (
              <div
                key={label}
                className={`inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] `}
              >
                <button
                  onClick={() => setChnageImg(idx === 1)}
                  className={`px-6 py-3 rounded-md transition-colors duration-300 font-semibold text-sm 
                    ${isActive ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white' : 'bg-[#2B204C] text-white hover:bg-[#3c3357]'}`}
                >
                  {label}
                </button>
              </div>
            );
          })}
        </div>

        {/* Description */}
       { !ChangeImg ? <p className="font-light text-center inter lg:text-start text-gray-300">
          The <span className="font-bold">AI Summit</span> is a premier platform for C-suite leaders and decision-makers shaping AI-driven enterprise transformation. Alongside it, AI Hack fuels innovation through real-world challenges, insights, and strategic collaboration.
        </p>
    :
        <p className='inter font-light text-center inter lg:text-start text-gray-300'>The&nbsp;<strong className='font-bold inter'>AI Hackathon </strong>is where autonomous agents, LLM tool-users, and real-world data come together to solve tomorrow’s problems—today. In this fast-paced sprint, you’ll work with the latest stacks in:</p>
}
        {/* Bullet Points */}
        {!ChangeImg ?
         
       <>
         

           <p
           
            className="text-gray-300 flex items-start justify-start inter text-sm leading-relaxed"
          >
            <img src={TickBullet} className="w-4 h-4 mt-1 mr-2" alt="" />
            <span>
              <strong className="text-white"> Bringing together </strong>{' '}
            C-level executives and innovation leaders, the summit tackles key enterprise priorities — from AI integration and data-driven growth to aligning innovation with sustainability and policy.
            </span>
          </p>
          <p
            
            className="text-gray-300 flex items-start justify-start inter text-sm leading-relaxed"
          >
            <img src={TickBullet} className="w-4 h-4 mt-1 mr-2" alt="" />
            <span>
              <strong className="text-white"> Expect powerful keynotes</strong>{' '}
            , closed-door roundtables, curated networking, and actionable insights to lead in the era of intelligent transformation.
            </span>
          </p>
          <p
            
            className="text-gray-300 flex items-start justify-start inter text-sm leading-relaxed"
          >
            <img src={TickBullet} className="w-4 h-4 mt-1 mr-2" alt="" />
            <span>
              <strong className="text-white"> Whether you're setting strategy,</strong>{' '}
             driving transformation, or investing in the future — the AI Summit turns vision into action.
            </span>
          </p>
          </>
       :
        
        <>

         <p
           
            className="text-gray-300 flex items-start justify-start inter text-sm leading-relaxed"
          >
            <img src={TickBullet} className="w-4 h-4 mt-1 mr-2" alt="" />
            <span>
              <strong className="text-white"> Agentic AI </strong>{' '}
             – Design multi-agent systems that plan, reason, and act.
            </span>
          </p>
         
          <p
        
            className="text-gray-300 flex items-start justify-start inter text-sm leading-relaxed"
          >
            <img src={TickBullet} className="w-4 h-4 mt-1 mr-2" alt="" />
            <span>
              <strong className="text-white">Multimodal AI</strong>{' '}
            - Use text, vision, and data to build intelligent, cross-sensory workflows.
            </span>
          </p>
          <p
           
            className="text-gray-300 flex items-start justify-start inter text-sm leading-relaxed"
          >
            <img src={TickBullet} className="w-4 h-4 mt-1 mr-2" alt="" />
            <span>
              <strong className="text-white">Tackle forward </strong>{' '}
            - looking challenges in fintech, sustainability, and beyond.Tackle forward - looking challenges in fintech, sustainability, and beyond.
            </span>
          </p>
          <p
           
            className="text-gray-300 flex items-start justify-start inter text-sm leading-relaxed"
          >
            <img src={TickBullet} className="w-4 h-4 mt-1 mr-2" alt="" />
            <span>
              <strong className="text-white">Collaborate </strong>{' '}
            with industry mentors and showcase deployable prototypes.
            </span>
          </p>
          </>
          }

        {/* Partner Button */}
        <a
          href="https://forms.gle/QdQturFqbxXnkNa89"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
            <button className="px-6 py-3 rounded-md transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] text-white font-semibold text-sm">
              Become a Partner
            </button>
          </div>
        </a>
      </div>

      {/* Right Image Content */}
      <div
        ref={rightRef}
        className={`flex-1 order-1 xl:order-2 relative transition-all duration-1000 ease-out
           ${leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
      >
        <div className="rounded-2xl max-w-lg p-3">
          <img
            src={!ChangeImg ? AiIcon : HackIcon}
            alt="AI Icon"
            className="rounded-xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
