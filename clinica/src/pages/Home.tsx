import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import IconPhone from "../components/IconPhone";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import ExamSection from "../components/ExamSection";
import UnitsSection from "../components/UnitsSection";
import FooterSection from "../components/FooterSection";
import SecondNavbar from "../components/SecondNavbar";
import unichristusNavbar from "../assets/u-unichristus.png";
import ScheduleSection from "../components/ScheduleSection";


export default function Home() {
  const links = [
    { href: "#", label: "Home" },
    { href: "#about", label: "Sobre Nós" },
    { href: "#schedule", label: "Marcar Consulta" },
    { href: "#exam", label: "Consultar Exame" },
    { href: "#services", label: "Nossos Serviços" },
    { href: "#units", label: "Unidades" },
  ];
  return (
      <>
        <Navbar />
        <SecondNavbar links={links} logoSrc={unichristusNavbar} />
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
