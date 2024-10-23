import scheduleImage from "@/assets/schedule-image.jpg";
import scheduleImage2 from "@/assets/schedule-image-2.jpg";
import scheduleImage3 from "@/assets/schedule-image-3.jpg";
import ScrollRevealComponent from "../scroll-components/ScrollRevealComponent";
import { Link } from "react-router-dom";

export default function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="relative flex justify-center items-center bg-gradient-to-r bg-slate-100 text-white overflow-hidden md:p-10 p-5 h-[30rem] md:h-[35em]"
    >
      <div className="flex justify-end container md:mx-auto bg-[#F0F9FF] relative p-12 md:p-16 h-[25rem] md:h-[30rem] md:p-30 md:w-[80rem] border rounded-2xl shadow-2xl overflow-hidden transition-transform duration-700 ease-in-out ">
        <div className="w-4/4 relative z-20 bg-[#1A2A6C] md:p-14 p-8  rounded-lg md:w-full my-auto md:h-auto h-[auto] shadow-neon-left max-w-lg max-lg:text-center transition-transform transform hover:scale-110 duration-500 ease-in-out border border-[#00FFFF]">
          <h2 className="flex justify-center items-center md:text-6xl text-2xl font-extrabold mb-4 bg-white bg-clip-text text-transparent animate-pulse">
            AGENDE SUA CONSULTA
          </h2>
          <p className="mb-6 md:text-lg text-gray-300 max-lg:text-sm">
            Acesse nossa página de agendamento e marque sua consulta de forma
            rápida e fácil.
          </p>
          <Link
            to="/schedule"
            className="bg-[#2745E9] text-white px-5 md:py-3 py-2 text-sm md:text-sm md:px-4 rounded-full hover:bg-[#00FFFF] hover:text-black hover:shadow-neon transition-all duration-300 ease-in-out transform hover:translate-y-1"
          >
            Marcar Consulta
          </Link>
        </div>

        <div className="absolute z-10 left-1 md:top-9 md:ml-6 top-1 shadow-xl transition-transform hover:rotate-3 hover:scale-110 duration-500 ease-in-out  ">
          <ScrollRevealComponent
            origin="left"
            distance="100px"
            duration={2000}
            reset={false}
          >
            <img
              src={scheduleImage}
              alt="Consulta"
              className="object-cover md:h-80 md:w-80 h-40 w-40 rounded-lg border border-[#00FFFF]"
            />
          </ScrollRevealComponent>
        </div>

        <div className="absolute z-10 md:left-96 right-1 md:top-9 md:ml-6 top-1 shadow-xl transition-transform hover:rotate-3 hover:scale-110 duration-500 ease-in-out  ">
          <ScrollRevealComponent
            origin="left"
            distance="100px"
            duration={3000}
            reset={false}
          >
            <img
              src={scheduleImage2}
              alt="Consulta"
              className="object-cover md:h-80 md:w-80 h-40 w-40 rounded-lg border border-[#00FFFF]"
            />
          </ScrollRevealComponent>
        </div>

        <div className="absolute z-10 md:left-44 left-28 md:bottom-9 bottom-1 md:mx-auto md:ml-6 shadow-xl transition-transform hover:rotate-3 hover:scale-110 duration-500 ease-in-out">
          <ScrollRevealComponent
            origin="left"
            distance="100px"
            duration={2000}
            reset={false}
          >
            <img
              src={scheduleImage3}
              alt="Consulta"
              className="object-cover md:h-80 md:w-80 h-40 w-40 rounded-lg border border-[#00FFFF]"
            />
          </ScrollRevealComponent>
        </div>
      </div>
    </section>
  );
}
