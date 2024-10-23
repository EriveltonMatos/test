import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import mainTeste from "@/assets/main-teste.png";
import SliderBtns from "../SliderBtns";


// Array com as imagens e informações dos slides
const slidesData = [
  {
    id: 1,
    image: mainTeste,
    alt: "Logo da clínica",
  },
  {
    id: 2,
    image: mainTeste,
    alt: "Logo da clínica",
  },
  {
    id: 3,
    image: mainTeste,
    alt: "Logo da clínica",
  },
];

export default function LandingPage() {
  return (
    <Swiper
      spaceBetween={50} // Espaço entre os slides
      slidesPerView={1} // Número de slides visíveis ao mesmo tempo
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      speed={2500}
      effect="fade"
      modules={[Autoplay]}
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="w-full h-auto mt-14 md:mt-0 mx-auto relative">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full "
            />
            <div className="absolute inset-0 flex flex-col items-start pl-4 sm:pl-8 md:pl-20 lg:pl-72 justify-center tracking-widest">
              <div className="flex justify-center items-center drop-shadow-md"></div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      
      <SliderBtns
        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between xl:justify-none"
        btnStyles="bg-blue-300 hover:bg-blue-400 text-primary md:text-[44px] md:w-[66px] md:h-[66px] flex justify-center items-center transition-all"
        iconsStyles={""}
      />
    </Swiper>
  );
}