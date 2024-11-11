import AboutSection from "../components/home-sections/AboutSection";
import ServicesSection from "../components/home-sections/ServicesSection";
import IconPhone from "../components/IconPhone";
import LandingPage from "../components/home-sections/LandingPage";
import Navbar from "../components/Navbar";
import ExamSection from "../components/home-sections/ExamSection";
import UnitsSection from "../components/home-sections/UnitsSection";
import FooterSection from "../components/home-sections/FooterSection";
import SecondNavbar from "../components/SecondNavbar";
import unichristusNavbar from "../assets/u-unichristus.png";
import ScheduleSection from "../components/home-sections/ScheduleSection";
import MobileNav from "@/components/MobileNav";
import { FaHome, FaInfoCircle, FaCalendarCheck, FaVial, FaMapMarkerAlt, FaHospital } from "react-icons/fa";



export default function Home() {
  const links = [
    { href: "#", label: "Home" },
    { href: "#about", label: "Sobre Nós" },
    { href: "#schedule", label: "Marcar Consulta" },
    { href: "#exam", label: "Consultar Exame" },
    { href: "#services", label: "Nossos Serviços" },
    { href: "#units", label: "Unidades" },
  ];

  const mobLinks = [
    { href: "#", label: "Home", icon: <FaHome /> },
    { href: "#about", label: "Sobre Nós", icon: <FaInfoCircle /> },
    { href: "#schedule", label: "Marcar Consulta", icon: <FaCalendarCheck /> },
    { href: "#exam", label: "Consultar Exame", icon: <FaVial /> },
    { href: "#services", label: "Nossos Serviços", icon: <FaHospital /> },
    { href: "#units", label: "Unidades", icon: <FaMapMarkerAlt /> },
  ];

  return (
      <>
        <Navbar />
        <SecondNavbar links={links} logoSrc={unichristusNavbar} />
        <MobileNav links={mobLinks} />
        <IconPhone />
        <LandingPage />
        <AboutSection />
        <ScheduleSection />
        <ExamSection />
        <ServicesSection />
        <UnitsSection />
        <FooterSection />
      </>
  );
}
