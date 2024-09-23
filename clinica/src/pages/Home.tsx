import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import IconPhone from "../components/IconPhone";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import ExamSection from "../components/ExamSection";
import UnitsSection from "../components/UnitsSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
      <>
        <Navbar />
        <IconPhone />
        <LandingPage />
        <AboutSection />
        <ExamSection />
        <ServicesSection />
        <UnitsSection />
        <FooterSection />
      </>
  );
}
