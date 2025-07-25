import React from 'react';
import AiIcon from '../assets/ai.svg'; 
import HackIcon from '../assets/hack.svg';
import RobotImage from '../assets/robot.svg'; 
import TickBullet from '../assets/TickBullet.svg'
function About2() {
  return (
    <section id='about' className="w-full  min-h-screen px-4 md:px-20 py-10 [background:linear-gradient(180deg,#2B204C_0%,#160C35_50%)] text-white flex flex-col xl:flex-row gap-10 lg:gap-20 items-center justify-between">
      
      
      <div className="flex-1 order-2 xl:order-1 items-center lg:items-start flex flex-col gap-6 max-w-2xl">
        
        <div className="flex gap-6">
          <div className="flex items-center  gap-2 px-8 py-1 rounded-md border border-pink-500 bg-[#20113D]">
            AI Summit
           
          </div>
          <div className="flex items-center gap-2 px-8 py-1 rounded-md border border-cyan-500 bg-[#20113D]">
            AI Hack
            
          </div>
        </div>

        <h2 className=" font-light text-center inter lg:text-start">
          <span className="text-white inter">The edition brings together enterprise visionaries, innovation leaders, and top AI talent at the</span>
          <span className=" font-bold inter">AI Summit </span>
          <span className="  inter">and </span>
          <span className=" font-bold inter">AI Hackathon</span>
          <span className="text-white inter">to shape Qatar’s intelligent future. Designed to align with Qatar National Vision 2030, this dynamic platform blends high-level strategy with hands-on innovation—empowering organizations to adopt AI at scale, tackle real-world challenges, and build sustainable, future-ready solutions. From boardroom insights at the AI Summit to breakthrough prototypes at the AI Hackathon, it’s where ideas are transformed into impact.</span>
        </h2>

        <p className="text-gray-300 flex items-start justify-start inter text-sm leading-relaxed">
         <img src={TickBullet} className='w-4 h-4 mt-1 mr-2 inter' alt="" /> <span className='inter'><strong className='inter' >Bringing together</strong> C-level executives and innovation leaders, the summit tackles key enterprise priorities — from AI integration and data-driven growth to aligning innovation with sustainability and policy.</span>
        </p>

       <p className="text-gray-300 flex items-start justify-start inter text-sm leading-relaxed">
         <img src={TickBullet} className='w-4 h-4 mt-1 mr-2 inter' alt="" /> <span className='inter'><strong className='inter' >Expect powerful keynotes,</strong> closed-door roundtables, curated networking, and actionable insights to lead in the era of intelligent transformation.</span>
        </p>
       <p className="text-gray-300 flex items-start justify-start inter  text-sm leading-relaxed">
         <img src={TickBullet} className='w-4 h-4 mt-1 mr-2 inter' alt="" /> <span className='inter'><strong className='inter'>This is more than a hackathon strong </strong>— it's a launchpad for AI systems that are adaptive, autonomous, and enterprise-ready. Code with autonomy. Build with intelligence. Deploy with purpose.
</span>
        </p>

        
       
        <a href="https://forms.gle/QdQturFqbxXnkNa89" target="_blank" rel="noopener noreferrer">
          <div className="inline-block rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)]">
            <button className="px-6 py-3 rounded-md bg-[#2B204C] text-white font-semibold text-sm">
              Become a Partner
            </button>
          </div>
        </a>
      </div>

      
      <div className="flex-1 order-1 xl:order-2  relative">
       
          <div className="rounded-2xl max-w-lg  p-3">
            <img src={RobotImage} alt="AI Robot" className="rounded-xl object-cover w-full" />
          </div>
        
      </div>
    </section>
  );
}

export default About2;
