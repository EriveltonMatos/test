import logoClinica from "../assets/logo-clinica.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Importa o Link do react-scroll

interface Link {
  href: string;
  label: string;
}

interface MobileNavProps {
  links: Link[];
}

export default function MobileNav({ links }: MobileNavProps) {
  // Recebe os links via props
  return (
    <div className="max-lg:fixed top-0 right-0 w-full flex justify-end items-center z-50 p-3 h-16 bg-white shadow-lg lg:hidden">
      <Sheet>
        <img
          src={logoClinica}
          alt="Logo da clínica"
          className="object-cover w-44 mt-4 mr-auto"
        />
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-blue-600 cursor-pointer hover:text-blue-800 transition-all duration-300" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center bg-gray-50 shadow-lg rounded-lg p-6">
          <div className="mt-3 mb-5 text-center text-2xl">
            <ScrollLink to="home" smooth={true} duration={500}>
              <img
                src={logoClinica}
                alt="Logo da clínica"
                className="object-cover"
              />
            </ScrollLink>
          </div>
          <nav className="flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg capitalize text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
