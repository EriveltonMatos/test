import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Clinics from './pages/Clinics';
import ScrollToTop from './components/ScrollToTop';
import Schedule from './pages/Schedule';

export default function App() {
  return (
    <div>
        <Router>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/clinics" element={<Clinics />} />
                <Route path="/schedule" element={<Schedule />} />

            </Routes>
        </Router>
    </div>
  );
}