
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import CountdownTimer from '../components/CountdownTimer'
import EventsPlanned from '../components/EventsPlanned'
import StrategicCollaborators from '../components/StrategicCollaborators'
import WhoCanParticipate from '../components/WhoCanParticipate'
import ExpertLineUp from '../components/ExpertLineUp'
import PricingSection from '../components/PricingSection'
import JoinPoster from '../components/JoinPoster'
import Footer from '../components/Footer'
import OurSpeakers from '../components/OurSpeakers'
import BackToTopButton from '../components/BackToTopButton';
import About2 from '../components/About2'
import { useEffect } from 'react';
import Alchemist from '../assets/collab/Alchemist.png';
import HMC from '../assets/collab/HMC.png';
import Kaic from '../assets/collab/Kaic.svg';
import Meeza from '../assets/collab/Meeza.png';
import Ooredoo from '../assets/collab/Ooredoo.png';
import OoredooFintech from '../assets/collab/OoredooFintech.png';
import QMIC from '../assets/collab/QMIC.png';
import Qualetics from '../assets/collab/Qualetics.png';

import CEOE from '../assets/CEOE.svg'


function EventDetail() {

const logos = [
  
  { src: Alchemist, alt: 'AWS' },
  { src: CEOE, alt: 'CEOE' },
  { src: Kaic, alt: 'Kaic ai' },
  { src: Ooredoo, alt: 'Dataiku' },
  { src: OoredooFintech, alt: 'Saudi Water Authority' },
  { src: QMIC, alt: 'DTVC' },
  { src: Qualetics, alt: 'Saudi Water Authority' },
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
    <Navbar/>
    <HeroSection/>
    <About2 />
    <CountdownTimer/>
    <EventsPlanned/>
    <StrategicCollaborators title='STRATEGIC COLLABORATORS' logos={logos}/>
    <OurSpeakers/>
    <WhoCanParticipate/>
    <ExpertLineUp/>
    <PricingSection/>
    <JoinPoster/>
    <Footer/>
    <BackToTopButton/>
   </>
  )
}

export default EventDetail
