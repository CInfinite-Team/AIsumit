
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

function Home() {
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <About/>
   <AiSpotlight/>
   <WhoCanParticipate/>
   <ExpertLineUp/>
   <StrategicCollaborators/>
   <Faq/>
   <JoinPoster/>
   <Footer/>
   </>
  )
}

export default Home
