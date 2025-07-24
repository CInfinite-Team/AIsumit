
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

function EventDetail() {
  return (
   <>
    <Navbar/>
    <HeroSection/>
    <CountdownTimer/>
    <EventsPlanned/>
    <StrategicCollaborators/>
    <OurSpeakers/>
    <WhoCanParticipate/>
    <ExpertLineUp/>
    <PricingSection/>
    <JoinPoster/>
    <Footer/>
   </>
  )
}

export default EventDetail
