import hemograma from "../assets/exams/hemograma.jpg";
import glicemia from "../assets/exams/glicemia.jpg";
import ressonancia from "../assets/exams/ressonancia.jpeg";
import InfoCard from "../components/InfoCard";
import NavBar from "../components/Navbar";
import ScrollRevealComponent from "../components/scroll-components/ScrollRevealComponent";

export default function Services() {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="container mx-auto max-w-screen-lg p-8 rounded-lg">
        <ScrollRevealComponent
          origin="bottom"
          distance="100px"
          duration={1000}
          reset={false}
        >
          <h1 className="relative text-[#1F2B6C] items-center w-full h-20 text-5xl mt-28 md:text-6xl font-bold mb-4 text-center">
            Nossos <span className="text-[#159EEC]">serviços</span>
            <div className="flex justify-center mt-4 space-x-4">
              <div className="w-3 h-3 bg-[#2A5ECB] rounded-full hover:scale-150 transition-all"></div>
              <div className="w-3 h-3 bg-[#2A5ECB] rounded-full hover:scale-150 transition-all"></div>
              <div className="w-3 h-3 bg-[#2A5ECB] rounded-full hover:scale-150 transition-all"></div>
            </div>
          </h1>
        </ScrollRevealComponent>
        <ScrollRevealComponent
          origin="left"
          distance="100px"
          duration={1000}
          reset={false}
        >
          <p className="relative text-[#1F2B6C] items-center w-full mt-10 h-20 text-5xl md:text-xl font-normal text-center">
            Uma equipe completa e multidisciplinar para cuidar da sua saúde.
          </p>
        </ScrollRevealComponent>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-8 h-[16rem]">
            <ScrollRevealComponent
              origin="left"
              distance="100px"
              duration={1000}
              reset={false}
            >
              <InfoCard
                imageSrc={ressonancia}
                title="Ressonância Magnética"
                description="A ressonância magnética é uma técnica de imagem médica usada em radiologia para formar imagens da anatomia e dos processos fisiológicos do corpo, tanto na saúde como na doença."
              />
            </ScrollRevealComponent>

            <ScrollRevealComponent
              origin="left"
              distance="100px"
              duration={2000}
              reset={false}
            >
              <InfoCard
                imageSrc={glicemia}
                title="Glicemia"
                description="O hemograma é um exame que avalia as células sanguíneas de um paciente, como hemácias, leucócitos e plaquetas."
              />
            </ScrollRevealComponent>

            <ScrollRevealComponent
              origin="left"
              distance="100px"
              duration={3000}
              reset={false}
            >
              <InfoCard
                imageSrc={hemograma}
                title="Hemograma"
                description="O hemograma é um exame que avalia as células sanguíneas de um paciente, como hemácias, leucócitos e plaquetas."
              />
            </ScrollRevealComponent>
          </div>
        </div>

        <div className="container mx-auto">
          <h1 className="text-[#1F2B6C] text-5xl md:text-5xl font-bold mb-8 font-yeseva tracking-wider text-center"></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[16rem]">
            <ScrollRevealComponent
              origin="right"
              distance="100px"
              duration={1000}
              reset={false}
            >
              <InfoCard
                imageSrc={hemograma}
                title="ressonância "
                description="O hemograma é um exame que avalia as células sanguíneas de um paciente, como hemácias, leucócitos e plaquetas."
              />
            </ScrollRevealComponent>

            <ScrollRevealComponent
              origin="right"
              distance="100px"
              duration={2000}
              reset={false}
            >
              <InfoCard
                imageSrc={hemograma}
                title="Hemograma"
                description="O hemograma é um exame que avalia as células sanguíneas de um paciente, como hemácias, leucócitos e plaquetas."
              />
            </ScrollRevealComponent>

            <ScrollRevealComponent
              origin="right"
              distance="100px"
              duration={3000}
              reset={false}
            >
              <InfoCard
                imageSrc={hemograma}
                title="Hemograma"
                description="O hemograma é um exame que avalia as células sanguíneas de um paciente, como hemácias, leucócitos e plaquetas."
              />
            </ScrollRevealComponent>
          </div>
        </div>

        <div className="container mx-auto">
          <h1 className="text-[#1F2B6C] text-5xl md:text-5xl font-bold mb-8 font-yeseva tracking-wider text-center"></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[16rem]">
            <ScrollRevealComponent
              origin="right"
              distance="100px"
              duration={1000}
              reset={false}
            >
              <InfoCard
                imageSrc={hemograma}
                title="ressonância "
                description="O hemograma é um exame que avalia as células sanguíneas de um paciente, como hemácias, leucócitos e plaquetas."
              />
            </ScrollRevealComponent>

            <ScrollRevealComponent
              origin="right"
              distance="100px"
              duration={2000}
              reset={false}
            >
              <InfoCard
                imageSrc={hemograma}
                title="Hemograma"
                description="O hemograma é um exame que avalia as células sanguíneas de um paciente, como hemácias, leucócitos e plaquetas."
              />
            </ScrollRevealComponent>

            <ScrollRevealComponent
              origin="right"
              distance="100px"
              duration={3000}
              reset={false}
            >
              <InfoCard
                imageSrc={hemograma}
                title="Hemograma"
                description="O hemograma é um exame que avalia as células sanguíneas de um paciente, como hemácias, leucócitos e plaquetas."
              />
            </ScrollRevealComponent>
          </div>
        </div>
      </div>
    </>
  );
}
