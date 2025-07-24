
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';


const experts = [
    { name: 'Tony Ross', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Olivia Emma', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Michael James', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Sophia Mia', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Ethan Leo', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Chloe Grace', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Tony Ross', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Olivia Emma', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Michael James', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Sophia Mia', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Ethan Leo', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Chloe Grace', company: 'Space X', imageUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
);

const ExpertCard = ({ name, company, imageUrl }) => (
    <div className="w-48 md:w-56 flex-shrink-0 mx-auto">
        <div className="p-[2px] rounded-tr-[50px] bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-[22px]">
            <div className="relative rounded-tr-[50px] bg-[#2A2344] rounded-[20px] p-3">
                <div className="absolute top-3 left-3 bg-white/10 rounded-full p-2"><LinkedInIcon /></div>
                <img src={imageUrl} alt={name} className="w-full h-56 md:h-64 object-cover rounded-[14px]" />
                <div className="absolute bottom-6 left-6 right-6 p-2 text-center bg-black/40 backdrop-blur-sm rounded-xl border border-white/10">
                    <h3 className="font-bold text-white text-base">{name}</h3>
                    <p className="text-gray-300 text-xs">{company}</p>
                </div>
            </div>
        </div>
    </div>
);



const OurSpeakers = () => {
    return (
        <div className="bg-[#2A2344] font-sans w-full min-h-screen flex items-center justify-center py-16 px-4">
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">Experts Lineup</h2>
                    <p className="text-gray-300 mt-2">Meet Our Industry Leaders & AI Gurus!</p>
                </div>

                <div className="relative flex items-center justify-center">
                    
                    <button className="experts-carousel-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-md bg-[#2A2344] hover:bg-gradient-to-r from-pink-500 to-blue-500  border-2 border-white/50 hover:bg-white/20 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        
                        navigation={{
                            nextEl: '.experts-carousel-next',
                            prevEl: '.experts-carousel-prev',
                        }}
                        
                        pagination={{
                            el: '.experts-carousel-pagination',
                            clickable: true,
                        }}
                        loop={true}
                        centeredSlides={true}
                        spaceBetween={20}
                        
                        breakpoints={{
                            
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            
                            768: { slidesPerView: 3, spaceBetween: 20 },
                           
                            1024: { slidesPerView: 4, spaceBetween: 24 },
                            
                            1280: { slidesPerView: 5, spaceBetween: 30 },
                        }}
                        
                    >
                        {experts.map((expert, index) => (
                            <SwiperSlide key={index}>
                                <ExpertCard {...expert} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    
                    <button className="experts-carousel-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-md bg-[#2A2344] hover:bg-gradient-to-r from-pink-500 to-blue-500  border-2 border-white/50 hover:opacity-90 transition-opacity duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </button>
                </div>
                
               
                <div className="experts-carousel-pagination flex justify-center items-center space-x-2 mt-12"></div>
            </div>
        </div>
    );
};

export default OurSpeakers;