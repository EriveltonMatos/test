import mainTeste from "../assets/main-teste.png";

export default function LandingPage() {
  return (
    <div className="w-full animate-fade-right">
      <img src={mainTeste} alt="Logo da clínica" className="w-full h-auto " />
      <div className="absolute inset-0 flex flex-col items-start pl-72 justify-center tracking-widest ">
        <div className="flex justify-center items-center drop-shadow-md">
        </div>
      </div>
    </div>
  );
}