
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

function EventDetail() {
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
    <StrategicCollaborators/>
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
