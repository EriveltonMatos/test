import scheduleImage from "../assets/schedule-image.jpg";
import scheduleImage2 from "../assets/schedule-image-2.jpg";
import scheduleImage3 from "../assets/schedule-image-3.jpg";
import ScrollRevealComponent from "./scroll-components/ScrollRevealComponent";
import { Link } from "react-router-dom";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative flex justify-center items-center bg-gradient-to-r bg-[#F0F9FF] text-white overflow-hidden  p-20 ">
      <div className="flex justify-end container mx-auto relative p-20 w-[80rem] bg-gradient-to-r from-[#1a2a6c] to-[#2846f0] via-[#1a2a6c] border border-[#00FFFF] rounded-2xl shadow-2xl overflow-hidden transition-transform duration-700 ease-in-out">
        {/* Caixa de texto */}
       
        <div className="relative z-30 bg-[#1A2A6C] p-14 rounded-lg shadow-neon-left w-full max-w-lg  transition-transform transform hover:scale-110 duration-500 ease-in-out border border-[#00FFFF]">
          <h2 className="flex justify-center items-center text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#00FFFF] to-[#00FFFF] bg-clip-text text-transparent animate-pulse">
            AGENDE SUA CONSULTA
          </h2>
          <p className="mb-6 text-lg text-gray-300">
            Acesse nossa página de agendamento e marque sua consulta de forma
            rápida e fácil.
          </p>
          <Link to="/schedule" className="bg-[#2745E9] text-white px-8 py-3 rounded-full hover:bg-[#00FFFF] hover:text-black hover:shadow-neon transition-all duration-300 ease-in-out transform hover:translate-y-1">
            Marcar Consulta
          </Link>
        </div>

        <div className="absolute z-10 left-0 ml-6 top-9 shadow-xl transition-transform hover:rotate-3 hover:scale-110 duration-500 ease-in-out  ">
          <ScrollRevealComponent
            origin="left"
            distance="100px"
            duration={2000}
            reset={false}
          >
            <img
              src={scheduleImage}
              alt="Consulta"
              className="object-cover h-80 w-80 rounded-lg border border-[#00FFFF]"
            />
          </ScrollRevealComponent>
        </div>

        <div className="absolute z-10 left-96 top-9 ml-6 shadow-xl transition-transform hover:rotate-3 hover:scale-110 duration-500 ease-in-out">
          <ScrollRevealComponent
            origin="left"
            distance="100px"
            duration={3000}
            reset={false}
          >
            <img
              src={scheduleImage2}
              alt="Consulta"
              className="object-cover h-80 w-80 rounded-lg border border-[#00FFFF]"
            />
          </ScrollRevealComponent>
        </div>

        <div className="absolute z-10 left-44 bottom-9 ml-6 shadow-xl transition-transform hover:rotate-3 hover:scale-110 duration-500 ease-in-out">
          <ScrollRevealComponent
            origin="left"
            distance="100px"
            duration={2000}
            reset={false}
          >
            <img
              src={scheduleImage3}
              alt="Consulta"
              className="object-cover h-80 w-80 rounded-lg border border-[#00FFFF]"
            />
          </ScrollRevealComponent>
        </div>
      </div>
    </section>
  );
}
