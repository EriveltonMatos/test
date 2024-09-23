import examImage from "../assets/exame.png";
import ScrollRevealComponent from "./scroll-components/ScrollRevealComponent";

export default function ExamSection() {
  // Função que será chamada quando o botão for clicado

  return (
    <div className="bg-sky-50 ">
      <div className="container mx-auto py-5">
        <div className="flex justify-center items-center p-20 gap-20">
          <div className="w-1/2 ml-20">
          <ScrollRevealComponent
                origin="right"
                distance="100px"
                duration={1000}
                reset={false}
              >
            <div className="w-32 h-2 bg-[#1F2B6C] mb-8"></div>
            <div>
              <h2 className="text-[#1F2B6C] tracking-widest text-6xl font-bold mb-12">
                RESULTADO DE <span className="text-[#159EEC]">EXAMES</span>
              </h2>
            </div>
            </ScrollRevealComponent>
            <div>
            <ScrollRevealComponent
                origin="bottom"
                distance="100px"
                duration={1200}
                reset={false}
              >
              <h1 className="text-[#212124] text-xl mb-8">
                A Unichristus Clínicas oferece diversos exames laboratoriais e
                de imagem para você e sua família. Contamos com uma equipe de
                profissionais altamente qualificados e prontos para atender
                você.
              </h1>
              </ScrollRevealComponent>
            </div>
            <ScrollRevealComponent
                origin="bottom"
                distance="100px"
                duration={1300}
                reset={false}
              >
            <a href="/">
              <button className="rgb-button text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
                Visualizar Resultado
              </button>
            </a>
            </ScrollRevealComponent>
          </div>
          <div className="w-1/2">
          <ScrollRevealComponent
                origin="right"
                distance="100px"
                duration={1400}
                reset={false}
              >
            <img
              src={examImage}
              alt="Imagem de exame"
              className="w-full h-auto"
            />
            </ScrollRevealComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
