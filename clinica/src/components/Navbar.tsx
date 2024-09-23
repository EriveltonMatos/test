import logoClinica from "../assets/logo-clinica.png";
import unichristusNavbar from "../assets/u-unichristus.png";
import { FaPhoneVolume } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 95) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Primeiro Navbar */}
      <nav className="bg-sky-50 h-16 flex items-center ">
        <div className="flex items-center w-96 h-48 bg-sky-50 rounded-e-full relative z-50">
          <img
            src={logoClinica}
            alt="Logo da clínica"
            className="w-80 ml-5 mt-20 object-cover relative z-50 animate-fade-right"
          />
        </div>
        <div className="relative z-10 mx-auto flex">
          <div className="flex space-x-10 ml-96 animate-fade-right">
            <div className="flex items-center space-x-2">
              <FaPhoneVolume className="text-[#004AAD] hover:text-gray-300 text-3xl" />
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-black hover:text-gray-300 text-sm"
                >
                  Contato
                </a>
                <a
                  href="#"
                  className="text-[#159EEC] hover:text-gray-300 text-sm font-semibold"
                >
                  (85) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-[#40C351] hover:text-gray-300 text-3xl" />
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-black hover:text-gray-300 text-sm"
                  >
                    Whatsapp
                  </a>
                  <a
                    href="#"
                    className="text-[#159EEC] hover:text-gray-300 text-sm font-semibold"
                  >
                    (85) 99999-9999
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <MdOutlineEmail className="text-black hover:text-gray-300 text-3xl" />
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-black hover:text-gray-300 text-sm "
                  >
                    E-mail
                  </a>
                  <a
                    href="#"
                    className="text-[#159EEC] hover:text-gray-300 text-sm font-semibold"
                  >
                    lit.unichristus.edu@br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Segundo Navbar */}
      <nav
      className={`${
        isScrolled ? "top-0 shadow-md" : "top-[4rem]"
      } bg-[#142960] w-full flex justify-end items-center h-16 fixed z-20 transition-all duration-300 ease-in-out bg-opacity-90`}>
        <div className="mr-auto mx-72">
        <a href="https://www.unichristus.edu.br/" target="_blank" rel="noopener noreferrer">
         <img 
            src={unichristusNavbar}
            alt="U em cor branca"
            className="w-11 h-11 hover:animate-jump"
          />
          </a>
          </div>
        <div className="flex justify-center items-center space-x-20 text-lg mr-20">
          <div className="flex gap-8">
            <a
              href="#"
              className="relative text-white hover:text-gray-300 font-semibold cursor-pointer transition group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-white hover:text-gray-300 font-semibold cursor-pointer transition group"
            >
              Sobre Nós
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-white hover:text-gray-300 font-semibold cursor-pointer transition group"
            >
              Consultar Exame
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-white hover:text-gray-300 font-semibold cursor-pointer transition group"
            >
              Nossos Serviços
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-white hover:text-gray-300 font-semibold cursor-pointer transition group"
            >
              Unidades
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-white hover:text-gray-300 font-semibold cursor-pointer transition group"
            >
              Contato
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-300 transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
