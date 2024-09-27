export default function ImagingClinicCard() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-950 p-8 max-w-3xl mx-auto mt-8 rounded-xl shadow-2xl ">
      <p className="text-lg font-semibold text-blue-300 mb-2 flex justify-center items-center tracking-wide animate-pulse">
        Você encontra esse serviço na:
      </p>

      <h1 className="text-2xl font-extrabold text-white mb-6 flex justify-center items-center tracking-wider uppercase">
        Clínica Escola de Imagem da Unichristus (CESIU)
      </h1>

      <p className="text-white text-lg leading-relaxed bg-black bg-opacity-30 p-4 rounded-lg shadow-md">
        A Clínica Escola de Imagem (CESIU) da Unichristus é um complexo
        acadêmico equipado para os alunos e professores da área de Radiologia
        desenvolverem e executarem as atividades de prevenção da saúde além de
        procedimentos radiológicos em vários níveis de complexidade.
        O espaço conta com mais de 100 equipes radiológicas, permitindo, em média, o atendimento de 140 pacientes/dia e mais de 2.800/mês. A CEI é utilizada tanto nos cursos da graduação 
        como de pós-graduação e dispõe de atendimento clínico gratuito e aberto à comunidade.
      </p>
    </div>
  );
}