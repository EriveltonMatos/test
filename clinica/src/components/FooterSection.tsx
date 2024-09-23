import footerBackground from '../assets/footer-background.jpg';
import logoUnichristus from '../assets/logo-unichristus.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <div
      className="relative py-24 bg-blue-100 border-t-2 border-sky-50"
      style={{
        backgroundImage: `url(${footerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay escuro com mais opacidade para deixar o texto legível */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <footer className="relative container mx-auto text-white p-12 h-auto rounded-lg z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="flex flex-col items-start">
            <img 
              src={logoUnichristus}
              alt="Logo da clínica"
              className="w-64 mb-4 object-cover"
            />
            <p className="text-sm opacity-80">
              Unichristus © 2024. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-cyan-300 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-cyan-300 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-cyan-300 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-cyan-300 transition"><FaLinkedin /></a>
            </div>
          </div>

          {/* Cursos */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Cursos</h3>
            <ul className="space-y-2 text-lg">
              <li className="hover:text-cyan-300 transition cursor-pointer">Graduação</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Pós-graduação</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Mestrado</li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-lg">
              <li className="hover:text-cyan-300 transition cursor-pointer">Aluno Online</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Docente Online</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Validação de Diploma</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Autenticação</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-lg">
              <li className="hover:text-cyan-300 transition cursor-pointer">Fale conosco</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Trabalhe conosco</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Ouvidoria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-12 pt-4 text-center">
          <p className="text-sm opacity-75">Desenvolvido por LIT - Laboratório de Inovações Tecnologicas</p>
        </div>
      </footer>
    </div>
  );
}