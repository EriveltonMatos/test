import { useState } from "react";
import footerBackground from "../assets/footer-background.jpg";
import logoClinica from "../assets/logo-clinica.png";

export default function Schedule() {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [dataNas, setDataNas] = useState("");
  const [telefone, setTelefone] = useState(""); // Novo estado para telefone
  const [especialidade, setEspecialidade] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const handleCpfSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const cpfRegex = /^\d{11}$/; // Regex para CPF (11 dígitos)
    if (!cpfRegex.test(cpf)) {
      setError("Por favor, insira um CPF válido com 11 dígitos.");
    } else {
      setError("");
      setStep(2); // Avança para o próximo passo
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!nome || !dataNas || !telefone || !especialidade) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    alert(
      `Agendamento realizado com sucesso!\nCPF: ${cpf}\nNome: ${nome}\nData: ${dataNas}\nTelefone: ${telefone}\nEspecialidade: ${especialidade}`
    );
  };

  return (
    <>
      <div
        className="relative bg-blue-100 border-t-2 border-sky-50"
        style={{
          backgroundImage: `url(${footerBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay escuro com mais opacidade para deixar o texto legível */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="">
          <div className="relative flex items-center justify-center min-h-screen ">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
              <img src={logoClinica} alt="" />
              <h1 className="text-2xl font-bold text-center text-[#2B3E70] mb-4">
                Agendamento de Consulta
              </h1>
              {error && <p className="text-red-500 mb-4">{error}</p>}

              {step === 1 && (
                <form onSubmit={handleCpfSubmit}>
                  <p className="block text-gray-600 mb-2 text-sm">
                    Por favor, insira o seu CPF no campo abaixo para verificarmos se já existe um cadastro em nosso sistema. Caso não haja registro, 
                    você será redirecionado automaticamente para criar um novo cadastro e concluir a sua consulta de exames.
                  </p>
                  <label className="block text-gray-600 mb-2" htmlFor="cpf">
                    CPF:
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                    maxLength={11}
                    placeholder="Digite seu CPF"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 transition duration-200"
                  >
                    Próximo
                  </button>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={() => setStep(3)}>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2" htmlFor="nome">
                      Nome:
                    </label>
                    <input
                      type="text"
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring focus:ring-blue-400"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2" htmlFor="data">
                      Data de Nascimento:
                    </label>
                    <input
                      type="date"
                      id="data"
                      value={dataNas}
                      onChange={(e) => setDataNas(e.target.value)}
                      className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2" htmlFor="telefone">
                      Telefone:
                    </label>
                    <input
                      type="text"
                      id="telefone"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring focus:ring-blue-400"
                      placeholder="Digite seu telefone"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-300"
                  >
                    Próximo
                  </button>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="especialidade"
                    >
                      Especialidade:
                    </label>
                    <select
                      id="especialidade"
                      value={especialidade}
                      onChange={(e) => setEspecialidade(e.target.value)}
                      className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring focus:ring-blue-400"
                    >
                      <option value="">Selecione uma especialidade</option>
                      <option value="Cardiologia">Cardiologia</option>
                      <option value="Dermatologia">Dermatologia</option>
                      <option value="Ortopedia">Ortopedia</option>
                      <option value="Pediatria">Pediatria</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white p-3 rounded-lg w-full hover:bg-green-600 transition duration-300"
                  >
                    Confirmar Agendamento
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}