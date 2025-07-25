
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

function Home() {
  const logos = [
  { src: SambaNova, alt: 'SambaNova' },
  { src: AWS, alt: 'AWS' },
  { src: Microsoft, alt: 'Microsoft' },
  { src: Google, alt: 'Google' },
  { src: Oracle, alt: 'Oracle' },
  { src: IBM, alt: 'IBM' },
 
];
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <About/>
   <AiSpotlight/>
   <WhoCanParticipate/>
   <ExpertLineUp/>
   <StrategicCollaborators logos={logos}/>
   <Faq/>
   <JoinPoster/>
   <Footer/>
   <BackToTopButton/>
   </>
  )
}

export default Home
