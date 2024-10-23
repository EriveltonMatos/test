import { ScrollArea } from "@radix-ui/react-scroll-area";
import InfoCardWithButton from "../InfoCardWithButton";
import HealthClinicCard from "../services-cards/HealthClinicCard";
import ginecologia from "/src/assets/exams/treatment/ginecologia.jpg";
import pediatria from "/src/assets/exams/treatment/pediatria.png";
import nefrologia from "/src/assets/exams/treatment/nefrologia.jpg";
import gastroenterologia from "/src/assets/exams/treatment/gastroenterologia.jpeg";
import endocrinologia from "/src/assets/exams/treatment/endocrinologia.jpg";
import dermatologia from "/src/assets/exams/treatment/dermatologia.jpg";
import pneumologia from "/src/assets/exams/treatment/pneumologia.jpg";
import reumatologia from "/src/assets/exams/treatment/reumatologia.jpg";
import neurologia from "/src/assets/exams/treatment/neurologia.jpg";
import psiquiatria from "/src/assets/exams/treatment/psiquiatria.jpg";
import otorrinolaringologia from "/src/assets/exams/treatment/otorrinolaringologia.png";

export default function TreatmentTab() {
  return (
    <ScrollArea className="h-[80rem]">
      <div className="container mx-auto mb-7 relative animate-delay-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:min-h-[78rem] max-lg:h-[190rem] animate-fade">
          <InfoCardWithButton
            imageSrc={ginecologia}
            title="Ginecologia e obstetrícia"
            titleCard="Ginecologia e obstetrícia"
            description="Ginecologia e obstetrícia são duas áreas da medicina que se complementam. A ginecologia se concentra na saúde do sistema reprodutor feminino, incluindo útero, ovários,
             trompas de falópio e mamas, abordando desde cuidados preventivos até tratamentos de doenças. Já a obstetrícia é responsável pelo acompanhamento da gestação, do parto e do pós-parto, 
             garantindo a saúde da mãe e do bebê."
            imageCard={ginecologia}
            additionalContent={<HealthClinicCard />}
          />

          <InfoCardWithButton
            imageSrc={pediatria}
            title="Pediatria geral"
            titleCard="Pediatria geral"
            description="A pediatria geral é a especialidade médica voltada para o cuidado da saúde de crianças e adolescentes. Ela abrange desde o acompanhamento do desenvolvimento físico 
            e mental até a prevenção e tratamento de doenças típicas da infância. O pediatra é responsável por garantir que a criança cresça de maneira saudável, monitorando peso, altura, 
            nutrição e oferecendo orientações sobre vacinação, higiene e segurança."
            imageCard={pediatria}
            additionalContent={<HealthClinicCard />}
          />

          <InfoCardWithButton
            imageSrc={nefrologia}
            title="Nefrologia adulto e pediátrica"
            titleCard="Nefrologia adulto e pediátrica"
            description="A nefrologia é a especialidade médica que trata das doenças dos rins, como insuficiência renal, cálculos renais e hipertensão relacionada à função renal. O nefrologista 
            também acompanha pacientes em diálise e transplante renal, visando manter a saúde dos rins e melhorar a qualidade de vida."
            imageCard={nefrologia}
            additionalContent={<HealthClinicCard />}
          />

          <InfoCardWithButton
            imageSrc={gastroenterologia}
            title="Gastroenterologia adulto e pediátrica"
            titleCard="Gastroenterologia adulto e pediátrica"
            description="A gastroenterologia é a especialidade médica que se concentra no diagnóstico e tratamento de doenças do sistema digestivo, incluindo esôfago, estômago, intestinos, fígado e 
            pâncreas. O gastroenterologista trata condições como gastrite, refluxo, úlceras, colite e doenças hepáticas."
            imageCard={gastroenterologia}
            additionalContent={<HealthClinicCard />}
          />

          <InfoCardWithButton
            imageSrc={endocrinologia}
            title="Endocrinologia adulto e pediátrica"
            titleCard="Endocrinologia adulto e pediátrica"
            description="A endocrinologia é a especialidade médica que trata dos distúrbios hormonais e das glândulas do corpo, como a tireoide, pâncreas, hipófise e adrenais. O endocrinologista 
            cuida de condições como diabetes, problemas de crescimento, disfunções da tireoide e osteoporose."
            imageCard={endocrinologia}
            additionalContent={<HealthClinicCard />}
          />

          <InfoCardWithButton
            imageSrc={dermatologia}
            title="Dermatologia adulto e pediátrica"
            titleCard="Dermatologia adulto e pediátrica"
            description="A dermatologia é a especialidade médica que se dedica ao diagnóstico e tratamento de doenças da pele, cabelos e unhas. O dermatologista trata condições como acne, dermatites, 
            psoríase, queda de cabelo e câncer de pele, além de realizar procedimentos estéticos e preventivos."
            imageCard={dermatologia}
            additionalContent={<HealthClinicCard />}
          />

          <InfoCardWithButton
            imageSrc={pneumologia}
            title="Pneumologia adulto e pediátrica"
            titleCard="Pneumologia adulto e pediátrica"
            description="A pneumologia é a especialidade médica focada no diagnóstico e tratamento de doenças do sistema respiratório, como pulmões e vias aéreas. O pneumologista trata condições como asma, 
            bronquite, pneumonia, enfisema e doenças pulmonares crônicas, buscando melhorar a função respiratória e a qualidade de vida dos pacientes."
            imageCard={pneumologia}
            additionalContent={<HealthClinicCard />}
          />

          <InfoCardWithButton
            imageSrc={reumatologia}
            title="Reumatologia adulto e pediátrica"
            titleCard="Reumatologia adulto e pediátrica"
            description="A reumatologia é a especialidade médica que se concentra no diagnóstico e tratamento de doenças que afetam as articulações, músculos e tecidos conjuntivos. O reumatologista trata condições 
            como artrite, lupus, fibromialgia e gota, visando aliviar a dor, melhorar a mobilidade e a qualidade de vida dos pacientes."
            imageCard={reumatologia}
            additionalContent={<HealthClinicCard />}
          />

          <InfoCardWithButton
            imageSrc={neurologia}
            title="Neurologia adulto e pediátrica"
            titleCard="Neurologia adulto e pediátrica"
            description="A neurologia é a especialidade médica que se dedica ao diagnóstico e tratamento de doenças do sistema nervoso, incluindo cérebro, medula espinhal e nervos. O neurologista trata condições como AVC, 
            epilepsia, esclerose múltipla, doenças neurodegenerativas (como Alzheimer e Parkinson) e dores de cabeça, buscando melhorar a função neurológica e a qualidade de vida dos pacientes."
            imageCard={neurologia}
            additionalContent={<HealthClinicCard />}
          />

          <InfoCardWithButton
            imageSrc={psiquiatria}
            title="Psiquiatria"
            titleCard="Psiquiatria"
            description="A psiquiatria é a especialidade médica que se dedica ao diagnóstico e tratamento de transtornos mentais e emocionais. O psiquiatra avalia e trata condições como depressão, ansiedade, esquizofrenia, 
            transtorno bipolar e dependência química, utilizando abordagens que podem incluir terapia, medicamentos e intervenções psicossociais, visando promover o bem-estar e a saúde mental dos pacientes."
            imageCard={psiquiatria}
            additionalContent={<HealthClinicCard />}
          />

          <InfoCardWithButton
            imageSrc={otorrinolaringologia}
            title="Otorrinolaringologia"
            titleCard="Otorrinolaringologia"
            description="A otorrinolaringologia é a especialidade médica que se concentra no diagnóstico e tratamento de doenças dos ouvidos, nariz e garganta. O otorrinolaringologista trata condições como infecções de ouvido, sinusite, alergias, problemas 
            de audição e distúrbios da deglutição, além de realizar cirurgias e procedimentos para melhorar a saúde e a qualidade de vida dos pacientes."
            imageCard={otorrinolaringologia}
            additionalContent={<HealthClinicCard />}
          />
        </div>
      </div>
    </ScrollArea>
  );
}
