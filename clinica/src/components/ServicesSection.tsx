import ressonancia from "../assets/exams/ressonancia.jpeg";
import hemograma from "../assets/exams/hemograma.jpg";
import colesterol from "../assets/exams/colesterol.jpg";
import fezes from "../assets/exams/fezes.jpg";
import glicemia from "../assets/exams/glicemia.jpg";
import citologia from "../assets/exams/citologia.jpg";
import InfoCard from "./InfoCard";
import backgroundService from "../assets/background-service.png";
import { useNavigate } from "react-router-dom";
import ScrollRevealComponent from "./scroll-components/ScrollRevealComponent";

export default function ServicesSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  return (
    <section id="services">
    <div
      className="py-24 bg-blue-100 border-t-2 border-sky-50"
      style={{
        backgroundImage: `url(${backgroundService})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-screen-lg p-8 rounded-lg">
        <ScrollRevealComponent
          origin="top"
          distance="100px"
          duration={1000}
          reset={false}
        >
          <h1 className="relative text-[#1F2B6C] items-center w-full h-20 text-5xl md:text-6xl font-bold mb-4 text-center">
            Nossos <span className="text-[#159EEC]">serviços</span>
            <div className="flex justify-center mt-4 space-x-4">
              <div className="w-3 h-3 bg-[#2A5ECB] rounded-full hover:scale-150 transition-all"></div>
              <div className="w-3 h-3 bg-[#2A5ECB] rounded-full hover:scale-150 transition-all"></div>
              <div className="w-3 h-3 bg-[#2A5ECB] rounded-full hover:scale-150 transition-all"></div>
            </div>
          </h1>
        </ScrollRevealComponent>
        <ScrollRevealComponent
          origin="top"
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
                imageSrc={hemograma}
                title="Hemograma Completo"
                description="O hemograma é um exame de sangue que fornece informações sobre os principais componentes do sangue, como glóbulos vermelhos, glóbulos brancos e plaquetas. "
              />
            </ScrollRevealComponent>

            <ScrollRevealComponent
              origin="left"
              distance="100px"
              duration={3000}
              reset={false}
            >
              <InfoCard
                imageSrc={fezes}
                title="Parasitológico de fezes"
                description="O exame parasitológico de fezes é um procedimento que identifica a presença de parasitas nas fezes, por meio de diversos métodos de análise. "
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
                imageSrc={glicemia}
                title="Glicemia "
                description="O exame de glicemia, também conhecido como exame de glicose, é um teste laboratorial que mede o nível de glicose no sangue. "
              />
            </ScrollRevealComponent>

            <ScrollRevealComponent
              origin="right"
              distance="100px"
              duration={2000}
              reset={false}
            >
              <InfoCard
                imageSrc={colesterol}
                title="Colesterol Total"
                description="No exame de colesterol total, uma amostra de sangue do paciente é retirada e posteriormente levada ao laboratório para que seja analisada."
              />
            </ScrollRevealComponent>

            <ScrollRevealComponent
              origin="right"
              distance="100px"
              duration={3000}
              reset={false}
            >
              <InfoCard
                imageSrc={citologia}
                title="Hemograma"
                description="Também conhecida como exame de Papanicolau, é um exame ginecológico preventivo que analisa células do colo do útero e da 
              vagina para detectar alterações e lesões que possam indicar a presença de câncer."
              />
            </ScrollRevealComponent>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            className="
        group
        p-5
        cursor-pointer 
        relative  
        text-xl 
        font-normal 
        border-0 
        flex 
        items-center 
        justify-center
        bg-transparent
         text-white 
         h-auto  
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100"
            onClick={handleClick}
          >
            <span
              className="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
         border-white
           transition-all
         duration-500"
            ></span>

            <p
              className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200"
            >
              Clique aqui!
            </p>

            <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
              E saiba mais!
            </span>

            <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-white transition-all duration-500"></span>
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}
