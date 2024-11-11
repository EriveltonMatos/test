import { useEffect, useState } from "react";

interface Link {
  href: string;
  label: string;
}

interface SecondNavbarProps {
  links: Link[];
  logoSrc: string;
}

export default function SecondNavbar({ links, logoSrc }: SecondNavbarProps) {
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
    <nav
      className={`${
        isScrolled ? "top-0 shadow-md" : "top-[4rem]"
      } bg-[#142960] w-full flex justify-end items-center h-16 fixed z-30 transition-all duration-300 ease-in-out bg-opacity-90 max-lg:hidden`}
    >
      <div className="mr-auto mx-72">
        <a
          href="https://www.unichristus.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={logoSrc}
            alt="U em cor branca"
            className="w-11 h-11 hover:animate-jump"
          />
        </a>
      </div>
      <div className="flex justify-center items-center space-x-20 text-lg max-xl:text-xs mr-20">
        <div className="flex gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-white hover:text-gray-300 font-semibold cursor-pointer transition group "
            >
              <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[#159EEC]">
                {link.label}
              </span>
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#159EEC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
