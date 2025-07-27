
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import About from '../components/About'
import AiSpotlight from '../components/AiSpotlight'
import WhoCanParticipate from '../components/WhoCanParticipate'
import ExpertLineUp from '../components/ExpertLineUp'
import Faq from '../components/Faq'
import JoinPoster from '../components/JoinPoster'
import Footer from '../components/Footer'
import StrategicCollaborators from '../components/StrategicCollaborators'
import BackToTopButton from '../components/BackToTopButton';
import SambaNova from '../assets/SambaNova.svg';
import AWS from '../assets/AWS.svg';
import Microsoft from '../assets/Microsoft.svg';
import Google from '../assets/Google.svg';
import Oracle from '../assets/Oracle.svg';
import IBM from '../assets/IBM.svg';
import img1 from '../assets/Team/Abdallah-Abu-Sheikh.webp'
// import img2 from '../assets/Team/Amr-Metwally.webp'
import img3 from '../assets/Team/Anuj-Gupta.webp'
import img4 from '../assets/Team/Chris-Yeh.webp'
import img5 from '../assets/Team/Debdulal-Dey.webp'
// import img6 from '../assets/Team/Dr-Ahmed-Elmagarmid.webp'
// import img7 from '../assets/Team/Dr-Ali-AlSanousi.webp'
import img8 from '../assets/Team/Dr-Arpit-Yadav.webp'
// import img9 from '../assets/Team/Dr-Fatmah-Baothman.webp'
// import img10 from '../assets/Team/Dr-Fethi-Filali.webp'
// import img11 from '../assets/Team/Dr-Hanan-El-Basha.webp'
// import img12 from '../assets/Team/Dr-Najwa.webp'
// import img13 from '../assets/Team/Dr-Salim-Al-Shuaili.webp'
// import img14 from '../assets/Team/Fatima-Tayeb.webp'
import img15 from '../assets/Team/Hussain-Sajjad-Ali-Al-Lawati.webp'
// import img16 from '../assets/Team/Nikita-Gordeev.webp'
// import img17 from '../assets/Team/Sanjay-Chawla.webp'
import img18 from '../assets/Team/Thuraya-Al-Harthi.webp'


function Home() {
  const logos = [
  { src: SambaNova, alt: 'SambaNova' },
  { src: AWS, alt: 'AWS' },
  { src: Microsoft, alt: 'Microsoft' },
  { src: Google, alt: 'Google' },
  { src: Oracle, alt: 'Oracle' },
  { src: IBM, alt: 'IBM' },
  { src: SambaNova, alt: 'SambaNova' },
  { src: AWS, alt: 'AWS' },
  { src: Microsoft, alt: 'Microsoft' },
  { src: Google, alt: 'Google' },
  { src: Oracle, alt: 'Oracle' },
  { src: IBM, alt: 'IBM' },
 
];

const experts = [
  { name: 'Abdullah Abu Sheikh', company: 'Chief Executive Officer at Botim',Linkedinurl:'https://www.linkedin.com/in/abdallahabusheikh/', imageUrl: img1 },
  { name: 'Anuj Gupta', company: 'Founder & CEO of Gradient Advisors',Linkedinurl:'https://www.linkedin.com/in/anujgupta-82/', imageUrl: img3},
  { name: 'Chris Yeh', company: 'Founding Partner at Blitzscaling Ventures',Linkedinurl:'https://www.linkedin.com/in/chrisyeh/', imageUrl: img4},
  { name: 'Debdulal Dey', company: 'Chief Digital & Analytics Officer (CDAO) at Hyperthink Systems',Linkedinurl:'https://www.linkedin.com/in/debdulal-dey-5801a11/', imageUrl: img5},
  // { name: 'Michael James', company: 'Space X',Linkedinurl:'', imageUrl: img6},
  { name: 'Dr. Arpit Yadav', company: 'Senior Scientist at CCE',Linkedinurl:'https://www.linkedin.com/in/dr-arpit-yadav-78687936/', imageUrl: img8},
  // { name: 'Dr. Fatmah Baothman', company: 'Chairwoman at Global Genie Ai',Linkedinurl:'https://www.linkedin.com/in/dr-fatmah-baothman-b7680b16b/?originalSubdomain=sa', imageUrl: img9},
  // { name: 'Michael James', company: 'Space X',Linkedinurl:'', imageUrl: img10},
  // { name: 'Dr. Najwa', company: 'Chief Executive Officer at Technology Innovation Institute',Linkedinurl:'https://www.linkedin.com/in/drnajwaaaraj/', imageUrl: img12},
  // { name: 'Fatima Tayeb', company: 'Data & AI Cloud Solution Architect at Microsoft',Linkedinurl:'https://www.linkedin.com/in/fatimataayeb/', imageUrl: img14},
  { name: 'Hussain Sajad Ali Al Lawati', company: 'Head of IT Applications & Innovation at National Bank of Oman',Linkedinurl:'https://www.linkedin.com/in/hussain-sajjad-ali-al-lawati-75328946/', imageUrl: img15},
  // { name: 'Michael James', company: 'Space X', imageUrl: img17},
  { name: 'Thuraya Al-Harthi', company: 'Director at Ministry of Transport, Communications and Information Technology',Linkedinurl:'https://www.linkedin.com/in/thuraya-al-harthi/?originalSubdomain=om', imageUrl: img18},
  { name: 'Abdullah Abu Sheikh', company: 'Chief Executive Officer at Botim',Linkedinurl:'https://www.linkedin.com/in/abdallahabusheikh/', imageUrl: img1 },
  { name: 'Anuj Gupta', company: 'Founder & CEO of Gradient Advisors',Linkedinurl:'https://www.linkedin.com/in/anujgupta-82/', imageUrl: img3},
  { name: 'Chris Yeh', company: 'Founding Partner at Blitzscaling Ventures',Linkedinurl:'https://www.linkedin.com/in/chrisyeh/', imageUrl: img4},
  { name: 'Debdulal Dey', company: 'Chief Digital & Analytics Officer (CDAO) at Hyperthink Systems',Linkedinurl:'https://www.linkedin.com/in/debdulal-dey-5801a11/', imageUrl: img5},
  // { name: 'Michael James', company: 'Space X',Linkedinurl:'', imageUrl: img6},
  { name: 'Dr. Arpit Yadav', company: 'Senior Scientist at CCE',Linkedinurl:'https://www.linkedin.com/in/dr-arpit-yadav-78687936/', imageUrl: img8},
  // { name: 'Dr. Fatmah Baothman', company: 'Chairwoman at Global Genie Ai',Linkedinurl:'https://www.linkedin.com/in/dr-fatmah-baothman-b7680b16b/?originalSubdomain=sa', imageUrl: img9},
  // { name: 'Michael James', company: 'Space X',Linkedinurl:'', imageUrl: img10},
  // { name: 'Dr. Najwa', company: 'Chief Executive Officer at Technology Innovation Institute',Linkedinurl:'https://www.linkedin.com/in/drnajwaaaraj/', imageUrl: img12},
  // { name: 'Fatima Tayeb', company: 'Data & AI Cloud Solution Architect at Microsoft',Linkedinurl:'https://www.linkedin.com/in/fatimataayeb/', imageUrl: img14},
  { name: 'Hussain Sajad Ali Al Lawati', company: 'Head of IT Applications & Innovation at National Bank of Oman',Linkedinurl:'https://www.linkedin.com/in/hussain-sajjad-ali-al-lawati-75328946/', imageUrl: img15},
  // { name: 'Michael James', company: 'Space X', imageUrl: img17},
  { name: 'Thuraya Al-Harthi', company: 'Director at Ministry of Transport, Communications and Information Technology',Linkedinurl:'https://www.linkedin.com/in/thuraya-al-harthi/?originalSubdomain=om', imageUrl: img18},

  
];
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <About/>
   <AiSpotlight/>
   <WhoCanParticipate/>
   <ExpertLineUp experts={experts} />
   <StrategicCollaborators logos={logos}/>
   <Faq/>
   <JoinPoster/>
   <Footer/>
   <BackToTopButton/>
   </>
  )
}

export default Home
