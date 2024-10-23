import about1 from "@/assets/about/about1.jpg";
import about2 from "@/assets/about/about2.jpg";
import about3 from "@/assets/about/about3.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import unichristus from "@/assets/unichristus.jpg";
import { Link } from "react-router-dom";
import ScrollRevealComponent from "../scroll-components/ScrollRevealComponent";

export default function AboutSection() {
  return (
    <section id="about">
      <div
        className="relative py-24 bg-blue-100 border-t-2 border-sky-50"
        style={{
          backgroundImage: `url(${unichristus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-700 opacity-90 brightness-50 mx-auto"></div>
        <div className="relative mx-auto md:py-10 w-3/4 sm:w-3/4">
          <div className="flex flex-col justify-center items-center">
            <div className="sm:w-2/2 md:w-3/4 text-center">
              <div>
                <ScrollRevealComponent
                  origin="bottom"
                  distance="100px"
                  duration={1000}
                  reset={false}
                >
                  <h2
                    className="text-white md:tracking-widest tracking-widest md:text-7xl font-bold mb-5 text-4xl w-full text-center
                "
                  >
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
                  <h1 className="text-[#71CFD5] md:text-4xl text-2xl font-sans font-semibold tracking-wider mb-10 ">
                    Onde o cuidado com sua saúde encontra excelência e
                    dedicação.
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
                  <h1 className="text-white md:text-2xl mb-8 text-base leading-relaxed  md:w-full text-justify">
                    As Clínicas Unichristus representam a excelência em
                    atendimento médico em Fortaleza, oferecendo uma ampla gama
                    de serviços de saúde de alta qualidade. Nossa rede de
                    clínicas é um centro de referência que combina atendimento
                    humanizado, tecnologia de ponta e expertise profissional.
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
                  className="flex items-center rounded-xl text-white bg-blue-800 opacity-80 font-medium px-6 py-3 text-2xl transition duration-1000 ease-in-out tracking-tight cursor-pointer hover:text-cyan-200 group hover:scale-105 
                max-lg:text-base
                "
                >
                  Conheça todas as clínicas
                  <FaLongArrowAltRight className="ml-4" />
                </Link>
              </div>
            </ScrollRevealComponent>
            <div className="relative w-1/2 flex justify-center items-center space-x-4">
              {/* Imagem frontal */}
              
              <img
                src={about1}
                alt="Imagem Sobre Nós"
                className="md:w-96 h-auto relative z-10 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              />

              {/* Imagem atrás esquerda */}
              <img
                src={about2}
                alt="Imagem Sobre Nós"
                className="absolute top-10 md:-left-40 -left-28 md:w-80 h-auto z-0 rounded-xl shadow-md opacity-75 hover:opacity-90 hover:scale-105 transform transition-all duration-300 ease-in-out"
              />

              {/* Imagem atrás direita */}
              <img
                src={about3}
                alt="Imagem Sobre Nós"
                className="absolute top-10 md:-right-36 -right-24 md:w-80 h-auto z-0 rounded-xl shadow-md opacity-75 hover:opacity-90 hover:scale-105 transform transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
