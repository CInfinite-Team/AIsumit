import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';

function App() {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 5);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-detail" element={<EventDetail  />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
