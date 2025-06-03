import React from "react";
import { useNavigate } from "react-router-dom";
interface EventHeaderProps {
  title: string;
  date: string;
  subtitle?: string;
  backgroundImage?: string;
}

const EventHeader: React.FC<EventHeaderProps> = ({ date, backgroundImage }) => {
  const [showSabado, setShowSabado] = React.useState(false);
  const [showDomingo, setShowDomingo] = React.useState(false);
  const navigate = useNavigate();
  // Função para scroll suave até a seção

  // Data for the navigation items
  const navItems = [{ id: 1, title: "Voltar", href: "/" }];

  return (
    <div className="relative bg-[url('images/background.png')]">
      <div className="relative h-[150px] z-10">
        <div className="absolute w-[1660px] h-[89px] top-[75px] left-[130px] bg-[#00000026] rounded-[75px] backdrop-blur-[11.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.6px)_brightness(100%)] flex items-center justify-between px-24">
          <img className="w-32 h-[39px]" alt="Logo abdi" src="/logo-abdi.svg" />
          <div className="flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.href)}
                className="[font-family:'Raleway',Helvetica] font-semibold text-3xl tracking-[1.50px] leading-[normal] whitespace-nowrap hover:text-[#bdd425] text-white bg-transparent border-none cursor-pointer"
                style={{ outline: "none" }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        className=" h-[600px] md:h-[600px] pt-6 flex items-center justify-center"
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-0 h-full">
            <img
              src="images/curicaca.png"
              alt="Logo Curicaca"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xl md:text-2xl text-white mb-8 mt-8">
            Taguatinga, {date}
          </p>
        </div>
      </div>
      {/* <div className="bg-black py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-medium">← Voltar</Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default EventHeader;
