import ressonancia from "../assets/exams/ressonancia.jpeg";
import hemograma from "../assets/exams/hemograma.jpg";
import colesterol from "../assets/exams/colesterol.jpg";
import fezes from "../assets/exams/fezes.jpg";
import glicemia from "../assets/exams/glicemia.jpg";
import citologia from "../assets/exams/citologia.jpg";
import InfoCardWithButton from "../components/InfoCardWithButton";
import NavBar from "../components/Navbar";
import ImagingClinicCard from "../components/services-cards/ImagingClinicCard";
import HealthClinicCard from "../components/services-cards/HealthClinicCard";
import SecondNavbar from "../components/SecondNavbar";
import unichristusNavbar from "../assets/u-unichristus.png";


export default function Services() {
  const links = [
    { href: "/", label: "Voltar" },
  ];
  
  return (
    <>
      <div>
        <NavBar />
        <SecondNavbar links={links} logoSrc={unichristusNavbar} />
      </div>

      <div className="container mx-auto max-w-screen-lg p-8 rounded-lg">
        <h1 className="relative text-[#1F2B6C] items-center w-full h-20 text-5xl mt-24 md:text-6xl font-bold mb-4 text-center">
          Nossos <span className="text-[#159EEC]">serviços</span>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="w-3 h-3 bg-[#2A5ECB] rounded-full hover:scale-150 transition-all"></div>
            <div className="w-3 h-3 bg-[#2A5ECB] rounded-full hover:scale-150 transition-all"></div>
            <div className="w-3 h-3 bg-[#2A5ECB] rounded-full hover:scale-150 transition-all"></div>
          </div>
        </h1>

        <p className="relative text-[#1F2B6C] items-center w-full mt-10 h-20 text-5xl md:text-xl font-normal text-center">
          Clique em um serviço para mais informações
        </p>

        <div className="container mx-auto ">
          <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center min-h-[16rem] ">
            <InfoCardWithButton
              imageSrc={ressonancia}
              title="Ressonância Magnética"
              titleCard="Ressonância Magnética:"
              description="A ressonância magnética (RM) é uma técnica de imagem médica que utiliza campos magnéticos e ondas de rádio para gerar imagens detalhadas dos órgãos e 
              tecidos internos do corpo. Diferentemente de raios-X ou tomografias, a RM não usa radiação ionizante, o que a torna uma opção mais segura para muitos pacientes."
              imageCard={ressonancia}
              additionalContent={<ImagingClinicCard />}
            />

            <InfoCardWithButton
              imageSrc={hemograma}
              title="Hemograma Completo"
              titleCard="Hemograma Completo"
              description="O hemograma é um exame de sangue que fornece informações sobre os principais componentes do sangue, como glóbulos vermelhos, glóbulos brancos e plaquetas. 
              Ele é útil para diagnosticar e monitorar diversas condições médicas."
              imageCard={hemograma}
              additionalContent={<ImagingClinicCard />}
            />

            <InfoCardWithButton
              imageSrc={fezes}
              title="Parasitológico de fezes"
              titleCard="Parasitológico de fezes"
              description="O exame parasitológico de fezes é um procedimento que identifica a presença de parasitas nas fezes, por meio de diversos métodos de análise. 
              O exame é indicado para diagnosticar alterações gastrointestinais, causadas por protozoários e helmintos. "
              imageCard={fezes}
              additionalContent={<HealthClinicCard />}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <h1 className="text-[#1F2B6C] text-5xl md:text-5xl font-bold mb-8 font-yeseva tracking-wider text-center"></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center min-h-[16rem]">
            <InfoCardWithButton
              imageSrc={glicemia}
              title="Glicemia"
              titleCard="Glicemia"
              description="O exame de glicemia, também conhecido como exame de glicose, é um teste laboratorial que mede o nível de glicose no sangue. 
              É um exame importante para o diagnóstico e monitoramento de diversas condições de saúde, principalmente diabetes."
              imageCard={glicemia}
              additionalContent={<HealthClinicCard />}
            />

            <InfoCardWithButton
              imageSrc={colesterol}
              title="Colesterol Total"
              titleCard="Colesterol Total"
              description="No exame de colesterol total, uma amostra de sangue do paciente é retirada e posteriormente levada ao laboratório para que seja analisada. O técnico então 
              irá avaliar a quantidade de colesterol LDL, HDL e VLDL que está presente na amostra de sangue e somar os valores, chegando ao valor do colesterol total."
              imageCard={colesterol}
              additionalContent={<HealthClinicCard />}
            />

            <InfoCardWithButton
              imageSrc={citologia}
              title="Citologia Convencional"
              titleCard="Citologia convencional"
              description="A citologia convencional, também conhecida como exame de Papanicolau, é um exame ginecológico preventivo que analisa células do colo do útero e da 
              vagina para detectar alterações e lesões que possam indicar a presença de câncer"
              imageCard={citologia}
              additionalContent={<HealthClinicCard />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
