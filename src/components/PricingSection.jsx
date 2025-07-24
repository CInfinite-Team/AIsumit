
import PriceBg from '../assets/price-bg.svg'; 
import GreenTick from '../assets/GreenTick.svg';
const PricingSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#1B1036] to-[#2C1A4D] py-16 text-white">
      <div className=" mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          WHY ATTEND AI SUMMIT?
        </h2>
        <p className="text-center max-w-2xl mx-auto text-sm md:text-base text-gray-300 mb-12">
          Join CXOs and AI partners in a focused space for innovation, live showcases, and strategic networking. Discover solutions, spark collaborations, and drive enterprise transformation—together.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Card 1 */}
          <div
            className="bg-[#1B1332] p-4 rounded-xl w-fit flex flex-col items-center justify-center"
           
          >
            <div className='relative rounded-xl h-fit w-fit overflow-hidden  text-center'>
            <img src={PriceBg} className=' h-72 ' alt="" />
           <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10'>
             <h3 className="text-[5vw] md:text-2xl w-max font-bold mb-2 z-10">Join the Exclusive CXO Zone</h3>
            <p className="text-4xl font-bold mt-5 md:mt-10 z-10">$299</p>
             <a href="https://lu.ma/e7ghjzhz" target="_blank" rel="noopener noreferrer">
                <div className="inline-block mt-5 md:mt-10 rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r shadow-[0px_36px_72px_0px_rgba(247,70,169,0.24)] from-pink-500 via-purple-500 to-cyan-400">
                  <button className="flex h-fit justify-center items-center gap-2 bg-[#2B204C] px-6 py-2 md:px-8 md:py-3 rounded-md text-sm">
                    Get Your Pass
                  </button>
                </div>
              </a>
            </div>
            </div>
            <div className="text-left z-10 text-sm max-w-sm md:text-base space-y-2 mt-6 text-gray-200">
                <h3 className="text-[5vw] md:text-2xl font-bold mb-2 text-center w-full text-[#CA5295] z-10">For CXO Delegates:</h3>
                <p className='pb-2 text-sm'>Designed for strategic leaders and CXOs accelerating
enterprise innovation regionally.</p>
 <p className="text-gray-300 flex items-start justify-start text-sm leading-relaxed">
         <img src={GreenTick} className='w-4 h-4 mt-1 mr-2' alt="" /> <span> Hear from AI experts tackling critical enterprise
challenges.</span>
        </p>              
 <p className="text-gray-300 flex items-start justify-start text-sm leading-relaxed">
         <img src={GreenTick} className='w-4 h-4 mt-1 mr-2' alt="" /> <span> Engage with peers through curated CXO roundtables,
workshops, & panels.</span>
        </p>              
 <p className="text-gray-300 flex items-start justify-start text-sm leading-relaxed">
         <img src={GreenTick} className='w-4 h-4 mt-1 mr-2' alt="" /> <span> Explore handpicked innovation showcases &
live demos.</span>
        </p>              
            </div>
          </div>


          {/* Card 2 */}
          <div
            className="bg-[#1B1332] min-h-[592px] p-4 rounded-xl w-fit flex flex-col items-center justify-center"
           
          >
            <div className='relative rounded-xl h-fit w-fit overflow-hidden  text-center'>
            <img src={PriceBg} className=' h-72 ' alt="" />
           <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10'>
             <h3 className="text-[5vw] md:text-2xl w-max font-bold mb-2 z-10">Showcase Your AI Solution</h3>
            <p className="text-4xl font-bold mt-5 md:mt-10 z-10">$999</p>
            <a href="https://lu.ma/9tzfhtbr" target="_blank" rel="noopener noreferrer">
              <div className="inline-block mt-5 md:mt-10 rounded-md overflow-hidden w-fit p-[2px] bg-gradient-to-r shadow-[0px_36px_72px_0px_rgba(247,70,169,0.24)] from-pink-500 via-purple-500 to-cyan-400">
                <button className="flex h-fit justify-center items-center gap-2 bg-[#2B204C] px-6 py-2 md:px-8 md:py-3 rounded-md text-sm">
                  Get Your Pass
                </button>
              </div>
            </a>
            </div>
            </div>
            <div className="text-left z-10 text-sm max-w-sm md:text-base space-y-2 mt-6 text-gray-200">
              <h3 className="text-[5vw] md:text-2xl text-center w-full font-bold mb-2 text-[#CA5295] z-10">For Partner Delegates:</h3>
               <p className='pb-2 text-sm'>Designed for AI innovators to engage CXOs and turn
exposure into real conversations.</p>
              <p className="text-gray-300 flex items-start justify-start text-sm leading-relaxed">
         <img src={GreenTick} className='w-4 h-4 mt-1 mr-2' alt="" /> <span> Showcase your AI to top CXOs through live demos.</span>
        </p>       
              <p className="text-gray-300 flex items-start justify-start text-sm leading-relaxed">
         <img src={GreenTick} className='w-4 h-4 mt-1 mr-2' alt="" /> <span> Lead strategic talks via roundtables & workshops.</span>
        </p>       
              <p className="text-gray-300 flex items-start justify-start text-sm leading-relaxed">
         <img src={GreenTick} className='w-4 h-4 mt-1 mr-2' alt="" /> <span> Connect with buyers through curated matchmaking.</span>
        </p>       
              <p className="text-gray-300 flex items-start justify-start text-sm leading-relaxed">
         <img src={GreenTick} className='w-4 h-4 mt-1 mr-2' alt="" /> <span> Boost visibility in a high-intent CXO zone.</span>
        </p>       
            </div>
          </div>


         
         
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
