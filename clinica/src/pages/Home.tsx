import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import IconPhone from "../components/IconPhone";
import LandingPage from "../components/sections/LandingPage";
import Navbar from "../components/Navbar";
import ExamSection from "../components/sections/ExamSection";
import UnitsSection from "../components/sections/UnitsSection";
import FooterSection from "../components/sections/FooterSection";
import SecondNavbar from "../components/SecondNavbar";
import unichristusNavbar from "../assets/u-unichristus.png";
import ScheduleSection from "../components/sections/ScheduleSection";
import MobileNav from "@/components/MobileNav";


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
