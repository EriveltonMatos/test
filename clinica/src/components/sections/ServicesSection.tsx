import ressonancia from "@/assets/exams/resonance/ressonancia.jpeg";
import hemograma from "@/assets/exams/blood/hemograma.jpg";
import colesterol from "@/assets/exams/blood/colesterol.jpg";
import fezes from "@/assets/exams/blood/fezes.jpg";
import glicemia from "@/assets/exams/blood/glicemia.jpg";
import citologia from "@/assets/exams/woman/citologia.jpg";
import backgroundService from "@/assets/background-service.png";
import { useNavigate } from "react-router-dom";
import ScrollRevealComponent from "../scroll-components/ScrollRevealComponent";
import InfoCardWithButton from "../InfoCardWithButton";
import ImagingClinicCard from "../services-cards/ImagingClinicCard";
import HealthClinicCard from "../services-cards/HealthClinicCard";

export default function ServicesSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  return (
    <section id="services" className="-mt-20 md:-mt-0">
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
            <h1 className="relative text-[#1F2B6C] w-full h-20 text-5xl md:text-6xl font-bold md:mb-4 -mt-14 md:-mt-0 mb-20 text-center ">
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
            <p className=" text-[#1F2B6C] items-center w-full md:mt-10 h-20 text-5xl md:text-xl font-normal text-center max-lg:text-sm max-lg:mt-0">
              Uma equipe completa e multidisciplinar para cuidar da sua saúde.
            </p>
          </ScrollRevealComponent>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[16rem] max-lg:h-[50rem] max-lg:w-auto">
              <ScrollRevealComponent
                origin="left"
                distance="100px"
                duration={1000}
                reset={false}
              >
                <InfoCardWithButton
                  imageSrc={ressonancia}
                  title="Ressonância Magnética"
                  titleCard="Ressonância Magnética:"
                  description="A ressonância magnética (RM) é uma técnica de imagem médica que utiliza campos magnéticos e ondas de rádio para gerar imagens detalhadas dos órgãos e 
              tecidos internos do corpo. Diferentemente de raios-X ou tomografias, a RM não usa radiação ionizante, o que a torna uma opção mais segura para muitos pacientes."
                  imageCard={ressonancia}
                  additionalContent={<ImagingClinicCard />}
                />
              </ScrollRevealComponent>

              <ScrollRevealComponent
                origin="left"
                distance="100px"
                duration={1000}
                reset={false}
              >
                <InfoCardWithButton
                  imageSrc={hemograma}
                  title="Hemograma Completo"
                  titleCard="Hemograma Completo"
                  description="O hemograma é um exame de sangue que fornece informações sobre os principais componentes do sangue, como glóbulos vermelhos, glóbulos brancos e plaquetas. 
              Ele é útil para diagnosticar e monitorar diversas condições médicas."
                  imageCard={hemograma}
                  additionalContent={<ImagingClinicCard />}
                />
              </ScrollRevealComponent>

              <ScrollRevealComponent
                origin="left"
                distance="100px"
                duration={1000}
                reset={false}
              >
                 <InfoCardWithButton
              imageSrc={fezes}
              title="Parasitológico de fezes"
              titleCard="Parasitológico de fezes"
              description="O exame parasitológico de fezes é um procedimento que identifica a presença de parasitas nas fezes, por meio de diversos métodos de análise. 
              O exame é indicado para diagnosticar alterações gastrointestinais, causadas por protozoários e helmintos. "
              imageCard={fezes}
              additionalContent={<HealthClinicCard />}
            />
              </ScrollRevealComponent>
            </div>
          </div>

          <div className="container mx-auto">
            <h1 className="text-[#1F2B6C] text-5xl md:text-5xl font-bold mb-8 font-yeseva tracking-wider text-center"></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[16rem] min-h-[16rem] max-lg:h-[50rem] max-lg:w-auto">
              <ScrollRevealComponent
                origin="right"
                distance="100px"
                duration={1000}
                reset={false}
              >
                <InfoCardWithButton
              imageSrc={glicemia}
              title="Glicemia"
              titleCard="Glicemia"
              description="O exame de glicemia, também conhecido como exame de glicose, é um teste laboratorial que mede o nível de glicose no sangue. 
              É um exame importante para o diagnóstico e monitoramento de diversas condições de saúde, principalmente diabetes."
              imageCard={glicemia}
              additionalContent={<HealthClinicCard />}
            />
              </ScrollRevealComponent>

              <ScrollRevealComponent
                origin="right"
                distance="100px"
                duration={1000}
                reset={false}
              >
                <InfoCardWithButton
              imageSrc={colesterol}
              title="Colesterol Total"
              titleCard="Colesterol Total"
              description="No exame de colesterol total, uma amostra de sangue do paciente é retirada e posteriormente levada ao laboratório para que seja analisada. O técnico então 
              irá avaliar a quantidade de colesterol LDL, HDL e VLDL que está presente na amostra de sangue e somar os valores, chegando ao valor do colesterol total."
              imageCard={colesterol}
              additionalContent={<HealthClinicCard />}
            />
              </ScrollRevealComponent>

              <ScrollRevealComponent
                origin="right"
                distance="100px"
                duration={1000}
                reset={false}
              >
                <InfoCardWithButton
              imageSrc={citologia}
              title="Citologia Convencional"
              titleCard="Citologia convencional"
              description="A citologia convencional, também conhecida como exame de Papanicolau, é um exame ginecológico preventivo que analisa células do colo do útero e da 
              vagina para detectar alterações e lesões que possam indicar a presença de câncer"
              imageCard={citologia}
              additionalContent={<HealthClinicCard />}
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
