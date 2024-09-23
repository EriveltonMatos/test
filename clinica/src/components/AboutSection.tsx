import aboutTeste from "../assets/test-about.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import unichristus from "../assets/unichristus.jpg";
import { Link } from "react-router-dom";
import ScrollRevealComponent from "./scroll-components/ScrollRevealComponent";

export default function AboutSection() {
  return (
    <div
      className="relative py-24 bg-blue-100 border-t-2 border-sky-50"
      style={{
        backgroundImage: `url(${unichristus})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-700 opacity-90 brightness-50"></div>
      <div className="relative mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="w-1/2 text-center">
            <div>
              <ScrollRevealComponent
                origin="bottom"
                distance="100px"
                duration={1000}
                reset={false}
              >
                <h2 className="text-white tracking-widest text-7xl font-bold mb-5 ">
                  CLÍNICAS ESCOLA UNICHRISTUS
                </h2>
              </ScrollRevealComponent>
            </div>
            <div>
              <ScrollRevealComponent
                origin="bottom"
                distance="100px"
                duration={2000}
                reset={false}
              >
                <h1 className="text-[#71CFD5] text-4xl font-sans font-semibold tracking-wider mb-10 ">
                  Um ótimo lugar para receber atendimento
                </h1>
              </ScrollRevealComponent>
            </div>
            <div>
              <ScrollRevealComponent
                origin="bottom"
                distance="100px"
                duration={2000}
                reset={false}
              >
                <h1 className="text-white text-xl mb-8 ">
                  A Unichristus Clínicas são clínicas de atendimento médico que
                  oferece diversos serviços de saúde para a população de
                  Fortaleza. Contamos com uma equipe de profissionais altamente
                  qualificados e prontos para atender você e sua família.
                </h1>
              </ScrollRevealComponent>
            </div>
          </div>

          <ScrollRevealComponent
            origin="left"
            distance="100px"
            duration={2000}
            reset={false}
          >
            <div
              className="
          mb-10
          relative 
          rounded-[10px] 
          shadow-[16px_16px_20px_#0000008c] 
          group
        "
            >
              <div
                className="
          absolute inset-1
          rounded-[10px] px-4 bg-[#71CFD2]
          shadow-[20px_20px_20px_#0000008c_inset]
        "
              ></div>
              <Link
                to="/clinics"
                className="flex items-center rounded-xl text-white bg-blue-800 opacity-80  font-medium px-6 py-3 text-2xl transition duration-1000 ease-in-out tracking-tight cursor-pointer hover:text-cyan-200 group hover:scale-105 "
              >
                Conheça todas as clínicas
                <FaLongArrowAltRight className="ml-4" />
              </Link>
            </div>
          </ScrollRevealComponent>
          <div className="w-1/2">
            <ScrollRevealComponent
              origin="right"
              distance="100px"
              duration={2000}
              reset={false}
            >
              <img
                src={aboutTeste}
                alt="Imagem Sobre Nós"
                className="w-full h-auto"
              />
            </ScrollRevealComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
