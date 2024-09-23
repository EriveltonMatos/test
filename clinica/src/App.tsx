import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Clinics from './pages/Clinics';

export default function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/clinics" element={<Clinics />} />
            </Routes>
        </Router>
    </div>
  );
}