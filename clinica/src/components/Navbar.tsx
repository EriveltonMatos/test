import logoClinica from "../assets/logo-clinica.png";
import { FaPhoneVolume } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function NavBar() {
  return (
    <div>
      <nav className="bg-sky-50 h-16 flex items-center max-lg:hidden">
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
              <FaPhoneVolume className="text-[#26396B] hover:text-gray-300 text-3xl" />
              <div className="flex flex-col">
                <a href="#" className="text-black hover:text-gray-300 text-sm max-xl:text-xs">
                  Contato
                </a>
                <a
                  href="#"
                  className="text-[#26396B] hover:text-gray-300 text-sm font-semibold max-xl:text-xs"
                >
                  (85) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-[#40C351] hover:text-gray-300 text-3xl " />
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-black hover:text-gray-300 text-sm max-xl:text-xs"
                  >
                    Whatsapp
                  </a>
                  <a
                    href="#"
                    className="text-[#26396B] hover:text-gray-300 text-sm font-semibold max-xl:text-xs"
                  >
                    (85) 99999-9999
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <MdOutlineEmail className="text-black hover:text-gray-300 text-3xl max-xl:text-xs" />
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-black hover:text-gray-300 text-sm"
                  >
                    E-mail
                  </a>
                  <a
                    href="#"
                    className="text-[#26396B] hover:text-gray-300 text-sm font-semibold max-xl:text-xs"
                  >
                    lit.unichristus.edu@br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
