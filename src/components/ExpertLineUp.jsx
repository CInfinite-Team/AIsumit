import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import img1 from '../assets/Team/Abdallah-Abu-Sheikh.webp'
import img2 from '../assets/Team/Amr-Metwally.webp'
import img3 from '../assets/Team/Anuj-Gupta.webp'
import img4 from '../assets/Team/Chris-Yeh.webp'
import img5 from '../assets/Team/Debdulal-Dey.webp'
import img6 from '../assets/Team/Dr-Ahmed-Elmagarmid.webp'
import img7 from '../assets/Team/Dr-Ali-AlSanousi.webp'
import img8 from '../assets/Team/Dr-Arpit-Yadav.webp'
import img9 from '../assets/Team/Dr-Fatmah-Baothman.webp'
import img10 from '../assets/Team/Dr-Fethi-Filali.webp'
import img11 from '../assets/Team/Dr-Hanan-El-Basha.webp'
import img12 from '../assets/Team/Dr-Najwa.webp'
import img13 from '../assets/Team/Dr-Salim-Al-Shuaili.webp'
import img14 from '../assets/Team/Fatima-Tayeb.webp'
import img15 from '../assets/Team/Hussain-Sajjad-Ali-Al-Lawati.webp'
import img16 from '../assets/Team/Nikita-Gordeev.webp'
import img17 from '../assets/Team/Sanjay-Chawla.webp'
import img18 from '../assets/Team/Thuraya-Al-Harthi.webp'
const experts = [
  { name: 'Tony Ross', company: 'Space X', imageUrl: img1 },
  { name: 'Olivia Emma', company: 'Space X', imageUrl: img2 },
  { name: 'Michael James', company: 'Space X', imageUrl: img3},
  { name: 'Michael James', company: 'Space X', imageUrl: img4},
  { name: 'Michael James', company: 'Space X', imageUrl: img5},
  { name: 'Michael James', company: 'Space X', imageUrl: img6},
  { name: 'Michael James', company: 'Space X', imageUrl: img7},
  { name: 'Michael James', company: 'Space X', imageUrl: img8},
  { name: 'Michael James', company: 'Space X', imageUrl: img9},
  { name: 'Michael James', company: 'Space X', imageUrl: img10},
  { name: 'Michael James', company: 'Space X', imageUrl: img11},
  { name: 'Michael James', company: 'Space X', imageUrl: img12},
  { name: 'Michael James', company: 'Space X', imageUrl: img13},
  { name: 'Michael James', company: 'Space X', imageUrl: img14},
  { name: 'Michael James', company: 'Space X', imageUrl: img15},
  { name: 'Michael James', company: 'Space X', imageUrl: img16},
  { name: 'Michael James', company: 'Space X', imageUrl: img17},
  { name: 'Michael James', company: 'Space X', imageUrl: img18},

  
];

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const CardWrapper = ({ children }) => (
  <div className="relative w-[224px] mx-auto h-[300px]">
    <svg
      viewBox="0 0 264 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full z-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M24 1H193.451C206.588 1.00007 219.124 6.49806 228.023 16.1611L239.059 28.1436L251.973 43.5C259.095 51.9702 263 62.6823 263 73.749V276C263 288.703 252.703 299 240 299H24C11.2975 299 1 288.703 1 276V24C1 11.2975 11.2975 1 24 1Z"
        fill="#2B204C"
        stroke="url(#paint0_linear_335_327)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_335_327"
          x1="145.125"
          y1="2.6749e-06"
          x2="294.752"
          y2="139.431"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CD3A8C" />
          <stop offset="1" stopColor="white" stopOpacity="0.06" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end">{children}</div>
  </div>
);

const ExpertCard = ({ name, company, imageUrl }) => (
  <CardWrapper>
     <div className="absolute top-7 left-3 bg-white/10 rounded-full p-2 z-20">
        <LinkedInIcon />
      </div>
    <div className="relative">
     
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover rounded-[16px] mb-4 z-10 relative"
        style={{ clipPath: 'inset(0 round 16px)' }}
      />
    </div>
   <div className="relative  z-10 w-full">
  <div className="absolute bottom-0 left-0 right-0 mb-4 p-[2px] rounded-xl bg-gradient-to-r from-[#CA5295]  to-[#3DD8D8]">
    <div className="rounded-[10px] bg-[#2A2344] backdrop-blur-md p-2 text-center w-full border border-white/10">
      <h3 className="font-bold text-white text-base">{name}</h3>
      <p className="text-gray-300 text-xs">{company}</p>
    </div>
  </div>
</div>
  </CardWrapper>
);


const ExpertsLineup = () => {
  return (
    <div className="bg-[#2A2344] font-sans w-full min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">Experts Lineup</h2>
          <p className="text-gray-300 mt-2">Meet Our Industry Leaders & AI Gurus!</p>
        </div>

        <div className="relative flex items-center justify-center">
          <button className="experts-carousel-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-md bg-[#2A2344] hover:bg-gradient-to-r from-pink-500 to-blue-500  border-2 border-white/50 hover:bg-white/20 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <div className="experts-carousel-pagination flex justify-center items-center space-x-2 mt-12"></div>
      </div>
    </div>
  );
};

export default ExpertsLineup;
