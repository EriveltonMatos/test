import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import clinicaOdonto from "@/assets/unidades/clinica-odonto.jpg";
import clinicaSaude from "@/assets/unidades/ces.jpeg";
import clinicaPsicologia from "@/assets/unidades/clinica-psicologia.jpg";
import clinicaFisioterapia from "@/assets/unidades/clinica-fisio.jpg";
import unitsBackground from "@/assets/units-background.png";
import clinicaCesiu from "@/assets/unidades/cesiu.jpeg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ScrollFromBottom } from "../ScrollComponent";

export default function UnitsSection() {
  const images = [
    {
      src: clinicaOdonto,
      alt: "Clínica Escola de Odontologia",
      description:
        "Rua Vereador Paulo Mamede, 130 - Cocó, Fortaleza - CE, 60192-350",
      url: "https://www.google.com/maps/dir/?api=1&destination=Rua+Vereador+Paulo+Mamede,+130+-+Cocó,+Fortaleza+-+CE,+60192-350",
    },
    {
      src: clinicaSaude,
      alt: "Clínica Escola de Saúde",
      description:
        "Av. Padre Antônio Tomás, 3404 - Cocó, Fortaleza - CE, 60192-120",
      url: "https://www.google.com/maps/dir/?api=1&destination=Av.+Padre+Antônio+Tomás,+3404+-+Cocó,+Fortaleza+-+CE,+60192-120",
    },
    {
      src: clinicaPsicologia,
      alt: "Serviço Escola de Psicologia Aplicada (SEPA)",
      description:
        "Av. Des. Moreira, 2120 - Aldeota, Fortaleza - CE, 60170-002",
      url: "https://www.google.com/maps/dir/?api=1&destination=Av.+Des.+Moreira,+2120+-+Aldeota,+Fortaleza+-+CE,+60170-002",
    },
    {
      src: clinicaFisioterapia,
      alt: "Clínica Escola de Fisioterapia",
      description: "Rua Vereador Paulo Mamede - Cocó, Fortaleza - CE,60192-350",
      url: "https://www.google.com/maps/dir/?api=1&destination=Rua+Vereador+Paulo+Mamede+-+Cocó,+Fortaleza+-+CE,+60192-350",
    },
    {
      src: clinicaCesiu,
      alt: "Clínica Escola de Saúde e Imagem (CESIU)",
      description:
        "R. Vicente Linhares, 308 - Aldeota, Fortaleza - CE, 60135-270",
      url: "https://www.google.com/maps/dir/?api=1&destination=R.+Vicente+Linhares,+308+-+Aldeota,+Fortaleza+-+CE,+60135-270",
    },
    {
      src: clinicaFisioterapia,
      alt: "Clínica Escola de Atenção Primária (CEAP)",
      description:
        "R. Luís de Miranda, 536 - Benfica, Fortaleza - CE, 60015-330",
      url: "https://www.google.com/maps/dir/?api=1&destination=R.+Lúis+de+Miranda,+536+-+Benfica,+Fortaleza+-+CE,+60015-330",
    },
  ];

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1200px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1000px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const imageTemplate = (image: {
    src: string;
    alt: string;
    description: string;
    url: string;
  }) => {
    return (
      <div className="rounded-xl h-auto m-7 text-center border border-gray-300 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <div className="shadow-xl overflow-hidden inline-block rounded-t-xl">
          <img
            src={image.src}
            alt={image.alt}
            className="w-auto h-64 md:h-96 shadow-lg rounded-t-xl transition-transform brightness-105 hover:brightness-90 duration-300 transform hover:scale-110 object-cover"
          />
        </div>
        <div className="rounded-lg md:h-14 mt-3 flex justify-center items-center">
          <a
            href={image.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto p-2 px-4 flex justify-center items-center gap-2 bg-slate-200 text-slate-950 rounded-lg hover:bg-[#193378] hover:text-white transition-all duration-300 shadow-lg"
          >
            <FaMapMarkerAlt className="rounded-full bg-neutral-400 shadow-lg flex justify-center items-center p-2 text-3xl" />
            Como Chegar
          </a>
        </div>
        <h4 className="text-lg font-bold mt-4">{image.alt}</h4>
        <p className="text-medium p-5 whitespace-pre-line text-gray-700">
          {image.description}
        </p>
      </div>
    );
  };

  return (
    <>
      <section id="units">
        <div
          className="py-24 bg-blue-100 border-t-2 border-sky-50"
          style={{
            backgroundImage: `url(${unitsBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative container mx-auto ">
            <div>
              <ScrollFromBottom>
                <h1 className="text-[#1F2B6C] text-5xl md:text-6xl font-bold mb-8 md:mt-16 text-center">
                  Nossas <span className="text-[#159EEC]">Unidades</span>
                  <div className="flex justify-center mt-4 space-x-4">
                    <div className="w-3 h-3 bg-[#3575FE] rounded-full hover:scale-150 transition-all"></div>
                    <div className="w-3 h-3 bg-[#3575FE] rounded-full hover:scale-150 transition-all"></div>
                    <div className="w-3 h-3 bg-[#3575FE] rounded-full hover:scale-150 transition-all"></div>
                  </div>
                </h1>
              </ScrollFromBottom>
            </div>
            <ScrollFromBottom>
              <div className="mx-auto ">
                <Carousel
                  value={images}
                  numVisible={3}
                  numScroll={3}
                  responsiveOptions={responsiveOptions}
                  circular
                  autoplayInterval={5000}
                  itemTemplate={imageTemplate}
                />
              </div>
            </ScrollFromBottom>
          </div>
        </div>
      </section>
    </>
  );
}
