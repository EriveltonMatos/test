import unichristusNavbar from "../assets/u-unichristus.png";
import clinicaOdonto from "../assets/unidades/clinica-odonto.jpg";
import clinicaSaude from "../assets/unidades/clinica-saude.jpg";
import clinicaPsicologia from "../assets/unidades/clinica-psicologia.jpg";
import clinicaFisioterapia from "../assets/unidades/clinica-fisio.jpg";
import ClinicComponent from "../components/ClinicComponent";
import FooterSection from "../components/sections/FooterSection";
import NavBar from "../components/Navbar";
import IconPhone from "../components/IconPhone";
import ScrollRevealComponent from "../components/scroll-components/ScrollRevealComponent";
import SecondNavbar from "../components/SecondNavbar";
import MobileNav from "@/components/MobileNav";

export default function Clinics() {
  return (
    <>
      <div>
        <NavBar />
        <SecondNavbar links={[{ href: "/", label: "Voltar"}]} logoSrc={unichristusNavbar} />
        <MobileNav links={[{href: "/", label: "Voltar"}]} />
      </div>
      <section className="py-12 bg-[#F0F9FF]">
        <h1 className="text-[#1F2B6C] text-4xl md:text-6xl font-bold mb-8 mt-20 text-center">
          Nossas <span className="text-[#159EEC]">Unidades</span>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="w-3 h-3 bg-[#3575FE] rounded-full hover:scale-150 transition-all"></div>
            <div className="w-3 h-3 bg-[#3575FE] rounded-full hover:scale-150 transition-all"></div>
            <div className="w-3 h-3 bg-[#3575FE] rounded-full hover:scale-150 transition-all"></div>
          </div>
        </h1>
        <ScrollRevealComponent
          origin="bottom"
          distance="100px"
          duration={2000}
          reset={false}
        >
          <ClinicComponent
            imageBackground={clinicaOdonto}
            imageSrc={clinicaOdonto}
            title="Clínica Escola de Odontologia"
            description="A Clínica Escola de Odontologia (CEO) da Unichristus é um complexo acadêmico equipado para os alunos e professores da área de Odontologia desenvolverem e executarem as atividades de prevenção da saúde além de procedimentos odontológicos em vários níveis de complexidade.
          O espaço conta com mais de 100 equipes odontológicos que permite, em média, o atendimento de 140 pacientes/dia e mais de 2.800/mês. É utilizado tanto nos cursos da graduação como de pós-graduação e dispõe de atendimento clínico gratuito e aberto à comunidade."
            address="Nossa unidade central está localizada no coração da cidade, oferecendo fácil acesso e um ambiente moderno."
            services={[
              "Triagem Odontológica",
              "Promoção da Saúde",
              "Dentística",
              "Periodontia",
              "Endodontia",
              "Prótese Dentária",
              "Prótese Maxilo Facial",
              "Cirurgia",
              "Radiologia",
              "Tratamento de Pacientes Com Necessidades Especiais",
              "Implantodontia",
              "Ortodontia",
              "Estética",
              "Saúde Coletiva",
              "Dor e Disfunções da ATM",
              "Odontologia Hospitalar",
              "Estomatologia",
              "Odontopediatria",
              "Ortopedia Funcional dos Maxilares",
              "Patologia Bucal",
              "Odontogeriatria",
              "Saúde e Educação Sexual",
              "Harmonização Orofacial",
            ]}
            buttonLink="https://www.google.com/maps"
            reverse={false}
          />
        </ScrollRevealComponent>

        <ScrollRevealComponent
          origin="bottom"
          distance="100px"
          duration={2000}
          reset={false}
        >
          <ClinicComponent
            imageBackground={clinicaSaude}
            imageSrc={clinicaSaude}
            title="Clínica Escola de Saúde"
            description="A Clínica Escola de Saúde (CES) da Unichristus é uma estrutura acadêmica equipada para os alunos dos cursos da área de saúde a desenvolverem e executarem as atividades práticas tendo uma melhor experiência de aprendizado.    
          A clínica também realiza atendimentos gratuitos à comunidade, em múltiplas especialidades, de forma integrada e humanizada, além de desenvolver programas como: Serviço de Atenção Especializada (SAE) em IST/AIDS, em parceria com o Sistema Único de Saúde (SUS) e Prevenção de câncer ginecológico."
            address="Nossa unidade central está localizada no coração da cidade, oferecendo fácil acesso e um ambiente moderno."
            services={[
              "Pediatria",
              "Psiquiatria",
              "Ginecologia",
              "Reumatologia",
              "Infectologia",
              "Dermatologia",
              "Neurologia",
              "Endocrinologia",
              "Gastrologia",
              "Pneumologia",
              "Clínica Médica",
              "Cardiologia",
              "Geriatria",
              "Nefrologia",
              "Atendimento Psicológico e Psicopedagógico",
              "Consulta de Enfermagem à Criança",
              "Consulta de Enfermagem ao Idoso",
              "Consulta de Enfermagem Saúde do Homem",
              "Consulta de Enfermagem Saúde Mental",
              "Consulta de Enfermagem HPV",
              "Consulta de Enfermagem em Ginecologia",
              "Consulta de Enfermagem DM / HAS / Tb / Hanseníase",
            ]}
            buttonLink="https://www.google.com/maps"
            reverse={true}
          />
        </ScrollRevealComponent>

        <ScrollRevealComponent
          origin="bottom"
          distance="100px"
          duration={2000}
          reset={false}
        >
          <ClinicComponent
            imageBackground={clinicaFisioterapia}
            imageSrc={clinicaFisioterapia}
            title="Clínica Escola de Fisioterapia"
            description="A Clínica Escola de Fisioterapia da Unichristus é um ambiente acadêmico equipado para alunos do curso de Fisioterapia desenvolverem e executarem as atividades práticas para reabilitação e assistência na atenção primária e secundária em saúde à sociedade.
          Na Clínica Escola de Fisioterapia ocorrem atendimentos nas seguintes áreas: traumatologia, ortopedia, desportiva, dermatologia, pediatria, reumatologia, cardiologia, pneumologia, ginecologia, obstetrícia, urologia, neurologia, oncologia, craniomandibular e hidroterapia. 
          No espaço também são realizadas as aulas práticas das disciplinas específicas, além de cursos, palestras, atividades, projetos de extensão e eventos de promoção de saúde."
            address="Nossa unidade central está localizada no coração da cidade, oferecendo fácil acesso e um ambiente moderno."
            services={[
              "Fisioterapia em Traumato-ortopedia",
              "Fisioterapia Esportiva",
              "Fisioterapia Neurofuncional",
              "Fisioterapia Pediátrica",
              "Fisioterapia Aquática",
              "Fisioterapia em Gerontologia",
              "Fisioterapia em Reumatologia",
              "Fisioterapia na Saúde da mulher",
              "Fisioterapia em Oncologia",
              "Fisioterapia Respiratória",
              "Fisioterapia Cardiovascular",
              "Fisioterapia em Gerontologia",
            ]}
            buttonLink="https://www.google.com/maps"
            reverse={false}
          />
        </ScrollRevealComponent>

        <ScrollRevealComponent
          origin="bottom"
          distance="100px"
          duration={2000}
          reset={false}
        >
          <ClinicComponent
            imageBackground={clinicaPsicologia}
            imageSrc={clinicaPsicologia}
            title="Serviço Escola de Psicologia Aplicada (SEPA)"
            description="O Serviço Escola de Psicologia Aplicada (SEPA) é um espaço dedicado ao curso de Psicologia da Unichristus e conta com oito salas para atendimentos psicológicos gratuitos, por meio de acolhimento individual ou em grupo, além de uma testoteca, espaço que tem como finalidade ofertar à comunidade acadêmica da área de Psicologia um conjunto de instrumentos de medida e avaliação psicológica.
          A equipe do SEPA é composta por estudantes a partir do 9º ano e oferece atendimentos de segunda à sexta-feira, das 14h às 20h. O público alvo do espaço são crianças, adolescentes e adultos."
            address="Nossa unidade central está localizada no coração da cidade, oferecendo fácil acesso e um ambiente moderno."
            services={[
              "Atendimento em grupo",
              "Psicodiagnóstico",
              "Terapia de Casal",
              "Orientação Profissional",
              "Atendimento individual de crianças, adolescentes, adultos e idosos",
            ]}
            buttonLink="https://www.google.com/maps"
            reverse={true}
          />
        </ScrollRevealComponent>

      </section>
      <div>
        <FooterSection />
        <IconPhone />
      </div>
    </>
  );
}
