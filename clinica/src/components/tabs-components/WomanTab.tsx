import InfoCardWithButton from "../InfoCardWithButton";
import HealthClinicCard from "../services-cards/HealthClinicCard";
import citologia from "/src/assets/exams/woman/citologia.jpg";
import bacterioscopia from "/src/assets/exams/woman/bacterioscopia.jpg";
import ginecologia from "/src/assets/exams/treatment/ginecologia.jpg";


export default function WomanTab() {
    return (
        <div className="container mx-auto animate-delay-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:min-h-[18rem] max-lg:h-[50rem] animate-fade">
              <InfoCardWithButton
                imageSrc={bacterioscopia}
                title="Bacterioscopia cervico vaginal"
                titleCard=" Bacterioscopia cervico vaginal"
                description="A bacterioscopia cervicovaginal é um exame que analisa a presença de micro-organismos no colo do útero e na vagina. Ele é utilizado para detectar
                infecções, como vaginose bacteriana e candidíase. Durante o exame, uma amostra é coletada e analisada em laboratório para identificar bactérias, fungos ou parasitas, ajudando no diagnóstico e tratamento adequado."
                imageCard={bacterioscopia}
                additionalContent={<HealthClinicCard />}
              />

              <InfoCardWithButton
                imageSrc={citologia}
                title="Citologia convencional"
                titleCard="Citologia convencional"
                description="A citologia convencional é um exame laboratorial utilizado para analisar células coletadas do colo do útero, geralmente durante o exame Papanicolau. O objetivo é detectar alterações celulares que podem 
                indicar infecções, inflamações ou lesões precoces, como o câncer do colo do útero. As amostras são analisadas ao microscópio, permitindo a identificação de células anormais e o planejamento de tratamentos necessários."
                imageCard={citologia}
                additionalContent={<HealthClinicCard />}
              />

              <InfoCardWithButton
                imageSrc={ginecologia}
                title="Exame a fresco/conteúdo vaginal"
                titleCard="Exame a fresco/conteúdo vaginal"
                description="O exame a fresco, também conhecido como exame de conteúdo vaginal, é um procedimento que analisa secreções vaginais para identificar a presença de micro-organismos, como bactérias, 
                fungos e parasitas. Durante o exame, uma amostra é coletada e observada imediatamente ao microscópio, permitindo a detecção rápida de infecções, como candidíase e vaginose bacteriana. Esse exame 
                é importante para orientar o diagnóstico e o tratamento de condições que afetam a saúde vaginal."
                imageCard={ginecologia}
                additionalContent={<HealthClinicCard />}
              />
            </div>
          </div>
    )
}