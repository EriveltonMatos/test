import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft, FaSearch } from "react-icons/fa";
import { useAuth } from '@/components/api/AuthContext';
import footerBackground from '@/assets/footer-background.jpg';
import logoClinica from '@/assets/logo-clinica.png';


export default function Report() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const { login, user } = useAuth();

  // Se já estiver logado, redireciona para o dashboard
  if (user) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    try {
      if (login(username, password)) {
        navigate('/dashboard');
      } else {
        setError('Credenciais inválidas');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section with Image */}
      <div 
        className="w-full md:h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${footerBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Right Section with Form */}
      <div className="md:w-[110rem] h-full flex justify-center items-center p-8 bg-zinc-100">
        <form onSubmit={handleSubmit} className="md:w-[40rem] bg-zinc-100 shadow-lg p-8 rounded-lg">
          <img src={logoClinica} className="w-40" alt="Logo" />
          <h2 className="md:text-5xl font-bold mb-6 text-center mt-6 text-[#1A2A6C]">
            Login
          </h2>
          
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          
          <div className="mb-4">
            <label htmlFor="username" className="block font-bold text-[#159EEC] mb-2">
              Usuário:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex h-[48px] rounded-md border border-[#159EEC] focus:border-blue-500 font-light bg-primary px-4 py-5 text-base placeholder:text-blue-400 outline-none w-full"
              placeholder="Digite seu usuário"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold text-[#159EEC] mb-2">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex h-[48px] rounded-md border border-[#159EEC] focus:border-blue-500 font-light bg-primary px-4 py-5 text-base placeholder:text-blue-400 outline-none w-full"
              placeholder="Digite sua senha"
            />
          </div>
          
          <div className="flex items-center flex-col gap-5 justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center gap-2"
            >
              <FaSearch /> Entrar
            </button>
            
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center gap-2"
            >
              <FaLongArrowAltLeft /> Voltar ao site
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}