import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import { useEffect, useState } from 'react';
import Loader from './assets/Loading Page GIF.gif';
import TermsAndConditions from './components/Legal/TermsAndConditions'
import PrivacyPolicy from './components/Legal/PrivacyPolicy'
import ComingSoon from './components/ComingSoon'
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show full animation for 2.5 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen [background:linear-gradient(180deg,#2B204C_0%,#160C35_50%)] w-full flex justify-center items-center">
        <img src={Loader} alt="Loading..." className="w-1/2 md:w-[20%] object-contain" />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qatar" element={<EventDetail />} />
        <Route path="/oman" element={<ComingSoon />} />
        <Route path="/ksa" element={<ComingSoon />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
