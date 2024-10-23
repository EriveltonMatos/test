import InfoCardWithButton from "../InfoCardWithButton";
import ressonancia from "/src/assets/exams/resonance/ressonancia.jpeg";
import tomografia from "/src/assets/exams/resonance/tomografia.jpg";
import raiox from "/src/assets/exams/resonance/raiox.jpg";
import ultrassonografia from "/src/assets/exams/resonance/ultrassonografia.jpeg";
import ImagingClinicCard from "../services-cards/ImagingClinicCard";

export default function ImageTab() {
  return (
    <div className="mx-auto animate-delay-700">
            <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center md:min-h-[38rem] animate-fade max-lg:h-[70rem] ">
              <InfoCardWithButton
                imageSrc={ressonancia}
                title="Ressonância Magnética"
                titleCard="Ressonância Magnética:"
                description="A ressonância magnética (RM) é um exame de imagem que utiliza um campo magnético forte e
                    ondas de rádio para criar imagens detalhadas de diversas partes internas do corpo. É uma técnica
                    não invasiva, que não causa dor e muito utilizada na medicina para diagnosticar e avaliar
                    condições de saúde."
                imageCard={ressonancia}
                additionalContent={<ImagingClinicCard />}
              />

              <InfoCardWithButton
                imageSrc={tomografia}
                title="Tomografia computadorizada"
                titleCard="Tomografia computadorizada"
                description="A tomografia computadorizada (TC) é um exame de imagem que combina raios-X e tecnologia
                    computacional para criar imagens detalhadas do corpo. Essas imagens permitem visualizar órgãos,
                    tecidos e estruturas internas com muita clareza, sendo usada para diagnosticar doenças, avaliar
                    traumas e lesões, e investigar condições internas do corpo."
                imageCard={tomografia}
                additionalContent={<ImagingClinicCard />}
              />

              <InfoCardWithButton
                imageSrc={raiox}
                title="Raio X"
                titleCard="Raio X"
                description="O Raio-X é uma forma de radiação eletromagnética que pode penetrar em materiais, incluindo
                    tecidos humanos, e é amplamente utilizada para mostrar estruturas internas do corpo, como
                    ossos e órgãos. O exame de raio-X é um procedimento rápido e geralmente não requer
                    preparação prévia especial e ajuda a diagnosticar fraturas, infecções e outras condições de saúde."
                imageCard={raiox}
                additionalContent={<ImagingClinicCard />}
              />

              <InfoCardWithButton
                imageSrc={ultrassonografia}
                title="Ultrassonografia"
                titleCard="Ultrassonografia"
                description="A Ultrassonografia, também conhecida como ultrassom, é uma técnica de exame que utiliza ondas
                    sonoras de alta frequência para criar imagens em tempo real do interior do corpo. É um exame
                    simples e seguro para diversas aplicações, como durante a gravidez, sendo amplamente utilizado
                    na medicina para avaliar diversos órgãos e estruturas, incluindo vasos sanguíneos."
                imageCard={ultrassonografia}
                additionalContent={<ImagingClinicCard />}
              />
            </div>
          </div>
  );
}