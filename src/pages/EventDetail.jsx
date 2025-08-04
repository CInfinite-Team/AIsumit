
import Navbar2 from '../components/Navbar/Navbar2'
import HeroSection from '../components/HeroSection/HeroSection'
import CountdownTimer from '../components/CountdownTimer'
import EventsPlanned from '../components/EventsPlanned'
import StrategicCollaborators from '../components/StrategicCollaborators'
// import WhoCanParticipate from '../components/WhoCanParticipate'
import ExpertLineUp from '../components/ExpertLineUp'
import PricingSection from '../components/PricingSection'
import JoinPoster from '../components/JoinPoster'
import Footer2 from '../components/Footer2'
// import OurSpeakers from '../components/OurSpeakers'
import BackToTopButton from '../components/BackToTopButton';
// import About2 from '../components/About2'
import { useEffect } from 'react';
import Alchemist from '../assets/collab/Alchemist.svg';
// import HMC from '../assets/collab/HMC.png';
import Kaic from '../assets/collab/Kaic.svg';
// import Meeza from '../assets/collab/Meeza.png';
// import Ooredoo from '../assets/collab/Ooredoo.png';
// import OoredooFintech from '../assets/collab/OoredooFintech.png';
// import QMIC from '../assets/collab/QMIC.png';
// import Qualetics from '../assets/collab/Qualetics.png';
import StartupGrind from '../assets/collab/StartupGrind.svg';
import CEOE from '../assets/CEOE.svg'
import Hyperthing from '../assets/collab/Hyperthing.svg'
import Itquan from '../assets/collab/Itquan.svg'
import PIH from '../assets/collab/PIH.svg'
// import img1 from '../assets/Team/Abdallah-Abu-Sheikh.webp'
import img2 from '../assets/Team/Amr-Metwally.webp'
// import img3 from '../assets/Team/Anuj-Gupta.webp'
// import img4 from '../assets/Team/Chris-Yeh.webp'
// import img5 from '../assets/Team/Debdulal-Dey.webp'
// import img6 from '../assets/Team/Dr-Ahmed-Elmagarmid.webp'
import img7 from '../assets/Team/Dr-Ali-AlSanousi.webp'
// import img8 from '../assets/Team/Dr-Arpit-Yadav.webp'
// import img9 from '../assets/Team/Dr-Fatmah-Baothman.webp'
// import img10 from '../assets/Team/Dr-Fethi-Filali.webp'
import img11 from '../assets/Team/Dr-Hanan-El-Basha.webp'
// import img12 from '../assets/Team/Dr-Najwa.webp'
import img13 from '../assets/Team/Dr-Salim-Al-Shuaili.webp'
// import img14 from '../assets/Team/Fatima-Tayeb.webp'
// import img15 from '../assets/Team/Hussain-Sajjad-Ali-Al-Lawati.webp'
import img16 from '../assets/Team/Nikita-Gordeev.webp'
// import img17 from '../assets/Team/Sanjay-Chawla.webp'
// import img18 from '../assets/Team/Thuraya-Al-Harthi.webp'


const experts = [
  { name: 'Amr Metwally', company: 'AED Director of Healthcare Innovation, Itqan Clinical Simulation & Innovation Center at Hamad Medical Corporation',Linkedinurl:'https://www.linkedin.com/in/amrmetwally/', imageUrl: img2 },
  // { name: 'Michael James', company: 'Space X',Linkedinurl:'', imageUrl: img6},
  { name: 'Dr. Ali AlSanousi', company: 'Executive Director Clinical Information Systems at Hamad Medical Corporation',Linkedinurl:'https://www.linkedin.com/in/sanousi/', imageUrl: img7},
//   { name: 'Dr. Fatmah Baothman', company: 'Chairwoman at Global Genie Ai',Linkedinurl:'https://www.linkedin.com/in/dr-fatmah-baothman-b7680b16b/?originalSubdomain=sa', imageUrl: img9},
  // { name: 'Michael James', company: 'Space X',Linkedinurl:'', imageUrl: img10},
  { name: 'Dr. Hanan El Basha', company: 'Co-Founder & Chief Strategy Officer (CSO) at Maverika',Linkedinurl:'https://www.linkedin.com/in/drhananelbasha/', imageUrl: img11},
//   { name: 'Dr. Najwa', company: 'Chief Executive Officer at Technology Innovation Institute',Linkedinurl:'https://www.linkedin.com/in/drnajwaaaraj/', imageUrl: img12},
  { name: 'Dr. Salim Al Shuaili', company: 'Global AI Ambassador at Global Council for Responsible AI',Linkedinurl:'https://www.linkedin.com/in/shoaily/', imageUrl: img13},
//   { name: 'Fatima Tayeb', company: 'Data & AI Cloud Solution Architect at Microsoft',Linkedinurl:'https://www.linkedin.com/in/fatimataayeb/', imageUrl: img14},
  { name: 'Nikita Gordeev', company: 'Chief Technology Officer at Snoonu',Linkedinurl:'https://www.linkedin.com/in/nmgordeev/', imageUrl: img16},
  // { name: 'Michael James', company: 'Space X', imageUrl: img17},
  { name: 'Amr Metwally', company: 'AED Director of Healthcare Innovation, Itqan Clinical Simulation & Innovation Center at Hamad Medical Corporation',Linkedinurl:'https://www.linkedin.com/in/amrmetwally/', imageUrl: img2 },
  // { name: 'Michael James', company: 'Space X',Linkedinurl:'', imageUrl: img6},
  { name: 'Dr. Ali AlSanousi', company: 'Executive Director Clinical Information Systems at Hamad Medical Corporation',Linkedinurl:'https://www.linkedin.com/in/sanousi/', imageUrl: img7},
//   { name: 'Dr. Fatmah Baothman', company: 'Chairwoman at Global Genie Ai',Linkedinurl:'https://www.linkedin.com/in/dr-fatmah-baothman-b7680b16b/?originalSubdomain=sa', imageUrl: img9},
  // { name: 'Michael James', company: 'Space X',Linkedinurl:'', imageUrl: img10},
  { name: 'Dr. Hanan El Basha', company: 'Co-Founder & Chief Strategy Officer (CSO) at Maverika',Linkedinurl:'https://www.linkedin.com/in/drhananelbasha/', imageUrl: img11},
//   { name: 'Dr. Najwa', company: 'Chief Executive Officer at Technology Innovation Institute',Linkedinurl:'https://www.linkedin.com/in/drnajwaaaraj/', imageUrl: img12},
  { name: 'Dr. Salim Al Shuaili', company: 'Global AI Ambassador at Global Council for Responsible AI',Linkedinurl:'https://www.linkedin.com/in/shoaily/', imageUrl: img13},
//   { name: 'Fatima Tayeb', company: 'Data & AI Cloud Solution Architect at Microsoft',Linkedinurl:'https://www.linkedin.com/in/fatimataayeb/', imageUrl: img14},
  { name: 'Nikita Gordeev', company: 'Chief Technology Officer at Snoonu',Linkedinurl:'https://www.linkedin.com/in/nmgordeev/', imageUrl: img16},
  // { name: 'Michael James', company: 'Space X', imageUrl: img17},

  
];
function EventDetail() {

const logos = [
  
  { src: Alchemist, alt: 'AWS' },
  { src: StartupGrind, alt: 'StartupGrind' },
  { src: CEOE, alt: 'CEOE' },
  { src: Kaic, alt: 'Kaic ai' },
  { src: Hyperthing, alt: 'Hyperthing' },
  { src: PIH, alt: 'PIH' },
  { src: Itquan, alt: 'Itquan' },
  { src: Alchemist, alt: 'AWS' },
  { src: StartupGrind, alt: 'StartupGrind' },
  { src: CEOE, alt: 'CEOE' },
  { src: Kaic, alt: 'Kaic ai' },
  { src: Hyperthing, alt: 'Hyperthing' },
  { src: PIH, alt: 'PIH' },
  { src: Itquan, alt: 'Itquan' },

];

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, []);
  return (
   <>
    <Navbar2/>
    <HeroSection/>
    {/* <About2 /> */}
    <CountdownTimer/>
    <EventsPlanned/>
    <StrategicCollaborators className='h-20' title='STRATEGIC COLLABORATORS' logos={logos}/>
    {/* <OurSpeakers/> */}

    {/* <WhoCanParticipate/> */}
    <ExpertLineUp experts={experts} />
    <PricingSection/>
    <JoinPoster/>
    <Footer2/>
    <BackToTopButton/>
   </>
  )
}

export default EventDetail
