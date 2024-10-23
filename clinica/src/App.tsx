import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Clinics from "./pages/Clinics";
import Schedule from "./pages/Schedule";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from './components/api/AuthContext';
import { PrivateRoute } from "./components/api/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clinics" element={<Clinics />} />
            <Route path="report" element={<Report />} />

            {/* Rota protegida */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            {/* Outra rota protegida */}
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}
