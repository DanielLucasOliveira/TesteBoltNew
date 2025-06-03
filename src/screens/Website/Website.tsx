import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";
import { useState } from "react";

// Data for the knowledge tracks
const knowledgeTracks = [
  {
    id: 1,
    title: "Energia renovável e sustentabilidade energética",
    imageSrc: "/images/Card1.png",
    className:
      "bottom-[20px] right-[10px] w-auto h-auto max-w-[300px] max-h-[300px]",
    backgroundImage: "Card1.svg",
  },
  {
    id: 2,
    title: "Inovação em saúde e biotecnologia",
    imageSrc: "/images/Card2.png",
    className:
      "bottom-[30px] right-[50px] w-auto h-auto max-w-[300px] max-h-[300px]",
    backgroundImage: "Card2.svg",
  },
  {
    id: 3,
    title: "Transformação digital e Indústria 4.0",
    imageSrc: "/images/Card3.png",
    className:
      "bottom-[-10px] right-[30px] w-auto h-auto max-w-[350px] max-h-[350px]",
    backgroundImage: "Card3.svg",
  },
  {
    id: 4,
    title: "Segurança e defesa tecnológica",
    imageSrc: "/images/Card4.png",
    className:
      "bottom-[33px] right-[60px] w-auto h-auto max-w-[350px] max-h-[350px]",
    backgroundImage: "Card4.svg",
  },
  {
    id: 5,
    title: "Indústria verde e economia circular",
    imageSrc: "/images/Card5.png",
    className:
      "bottom-[-20px] right-[30px] w-auto h-auto max-w-[450px] max-h-[450px]",
    backgroundImage: "Card1.svg",
  },
  {
    id: 6,
    title: "Agroindústria sustentável e agricultura familiar",
    imageSrc: "/images/Card6.png",
    className:
      "bottom-[-10px] right-[30px] w-auto h-auto max-w-[400px] max-h-[400px]",
    backgroundImage: "Card2.svg",
  },
  {
    id: 7,
    title: "Inovação social\ne desenvolvimento regional",
    imageSrc: "/images/Card7.png",
    className:
      "bottom-[33px] right-[-80px] w-auto h-auto max-w-[450px] max-h-[450px]",
    backgroundImage: "Card3.svg",
  },
  {
    id: 8,
    title: "Políticas e regulação",
    imageSrc: "/bedaibdovhvdf.png",
    backgroundImage: "Card4.svg",
  },
  {
    id: 9,
    title: "Infraestrutura sustentável e mobilidade verde",
    imageSrc: "/element-3.png",
    backgroundImage: "Card2.svg",
  },
  {
    id: 10,
    title: "Tecnologia criativa e inclusão digital",
    imageSrc: "/headset.png",
    backgroundImage: "Card1.svg",
  },
];

const redesSociais = [
  {
    id: 0,
    imageSrc: "/x.svg",
    link: "https://x.com/abdi_brasil",
  },
  {
    id: 1,
    imageSrc: "/insta.svg",
    link: "https://www.instagram.com/abdi_brasil/",
  },
  {
    id: 2,
    imageSrc: "/tiktok.svg",
    link: "https://www.tiktok.com/@abdi_brasil",
  },
  {
    id: 3,
    imageSrc: "/cam.svg",
    link: "https://www.youtube.com/@abdi_brasil",
  },
  {
    id: 4,
    imageSrc: "/yt.svg",
    link: "https://www.youtube.com/@abdi_brasil",
  },
];

const parceiros = [
  {
    id: 0,
    imageSrc: "/parceiros/logo-petrobras.svg",
  },
  {
    id: 1,
    imageSrc: "/parceiros/logo-globo.svg",
  },
  {
    id: 2,
    imageSrc: "/parceiros/logo-bndes.svg",
  },
  {
    id: 3,
    imageSrc: "/parceiros/logo-abimde.svg",
  },
  {
    id: 4,
    imageSrc: "/parceiros/logo-cni.svg",
  },
  {
    id: 5,
    imageSrc: "/parceiros/logo-senai.svg",
  },
  {
    id: 6,
    imageSrc: "/parceiros/logo-finep.svg",
  },
  {
    id: 7,
    imageSrc: "/parceiros/logo-sebrae.svg",
  },
  {
    id: 8,
    imageSrc: "/parceiros/logo-ifb.svg",
  },
  {
    id: 9,
    imageSrc: "/parceiros/logo-unb.svg",
  },
  {
    id: 10,
    imageSrc: "/parceiros/logo-p&d.svg",
  },
  {
    id: 11,
    imageSrc: "/parceiros/logo-ucb.svg",
  },
  {
    id: 12,
    imageSrc: "/parceiros/logo-oficina.svg",
  },
];
// Data for the event locations
const eventLocations = [
  {
    id: 0,
    //title: "ARENA BRB",
    //subtitle: "EM BREVE",
    backgroundImage: "Programacao1.svg",
  },

  {
    id: 2,
    //title: "SÃO SEBASTIÃO",
    //subtitle: "",
    backgroundImage: "Programacao3.svg",
  },
  {
    id: 1,
    //title: "TAGUATINGA",
    //subtitle: "24 e 25 de Maio",
    backgroundImage: "Programacao2.svg",
    style: "ended",
    url: "/taguatinga",
  },
  {
    id: 3,
    title: "EM BREVE",
    subtitle: "",
    backgroundImage: "ProgramacaoEmBreve.svg",
  },
];

// // Data for the gallery items
// const galleryItems = [
//   { id: 1, size: "w-[327px] h-[327px]" },
//   { id: 2, size: "w-[327px] h-[254px]" },
//   { id: 3, size: "w-[327px] h-[254px]" },
//   { id: 4, size: "w-[327px] h-[254px]" },
//   { id: 5, size: "w-[327px] h-[591px]" },
//   { id: 6, size: "w-[667px] h-[327px]" },
// ];

// Data for the objectives
const objectives = [
  {
    id: 1,
    title: "Consolidar a NIB para o desenvolvimento industrial do Brasil",
    iconSrc: "/vector-7.svg",
  },
  {
    id: 2,
    title: "Promover o compartilhamento de práticas inovadoras e sustentáveis",
    iconSrc: "/vector-4.svg",
  },
  {
    id: 3,
    title: "Descarbonizar a indústria Brasileira",
    iconSrc: "/vector.svg",
  },
  {
    id: 4,
    title:
      "Ampliar a colaboração entre empresas, universidades e escolas técnicas",
    iconSrc: "/vector-2.svg",
  },
  {
    id: 5,
    title: "Elevar o nível de maturidade tecnológica da indústria nacional",
    iconSrc: "/vector-5.svg",
  },
  {
    id: 6,
    title:
      "Fomentar soluções tecnológicas para desafios produtivos, sociais e ambientais",
    iconSrc: "/vector-3.svg",
  },
];

// Data for the navigation items
const navItems = [
  { id: 1, title: "SOBRE", href: "#sobre" },
  { id: 2, title: "OBJETIVOS", href: "#objetivos" },
  { id: 3, title: "IMPRENSA", href: "#imprensa" },
  { id: 4, title: "INGRESSOS", href: "#ingressos" },
];

export const Website = (): JSX.Element => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [showYoutubeIframe, setShowYoutubeIframe] = useState(false);
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  // Função para scroll suave até a seção
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1920px] h-[13150px]">
        <div className="relative w-[4420px] h-[14808px] top-[-414px] left-[-805px]">
          {/* Background elements */}
          <div className="absolute w-[1920px] h-[13068px] top-[414px] left-[805px] bg-[#bb3b18]" />
          <div className="absolute w-[3068px] h-[6636px] top-[11000px] left-[156px] bg-[#090706] rounded-[1534px/1318px]" />
          <div className="absolute w-[844px] h-[845px] top-0 left-[2042px] bg-[#f2c725] rounded-[422px/422.5px]" />
          <div className="absolute w-[3068px] h-[2263px] top-[3580px] left-[231px] bg-[#305fe9cc] rounded-[1534px/1131.5px]" />
          <div className="absolute w-[3068px] h-[2263px] top-[6092px] left-[1352px] bg-[#e05aeb99] rounded-[1534px/1131.5px]" />
          <div className="absolute w-[2319px] h-[1711px] top-[8663px] left-[2076px] bg-[#b3db0299] rounded-[1159.5px/855.5px]" />
          <div className="absolute w-[988px] h-[2479px] top-[4466px] left-[2531px] bg-[#e05aeb] rounded-[494px/1239.5px]" />
          <div className="absolute w-[988px] h-[2479px] top-[6774px] left-0 bg-[#ffcb00] rounded-[494px/1239.5px]" />
          <div className="absolute w-[1920px] h-[13068px] top-[414px] left-[805px] bg-[#ffffff03] backdrop-blur-[300px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(300px)_brightness(100%)]" />
          {/* Images */}
          <img
            className="absolute w-[876px] h-[1080px] top-[5289px] left-[1849px] object-cover"
            alt="Mulher vr"
            src="/mulher-vr.svg"
            style={{ filter: "grayscale(100%)" }}
          />
          <img
            className="absolute w-[1041px] h-[805px] top-[5435px] right-[2840px] object-cover"
            alt="Homem vr"
            src="/homem-vr.svg"
            style={{ transform: "scaleX(-1)", filter: "grayscale(100%)" }}
          />

          <video
            className="absolute w-[1920px] h-[1077px] top-[414px] left-[805px] object-cover"
            src="/videos/section1.mp4"
            loop
            autoPlay
            muted
          />
          <img
            className="top-[3433px] left-[718px] absolute w-[444px] h-[222px]"
            alt="Ellipse"
            src="/ellipse-12.svg"
          />
          <img
            className="top-[9460px] left-[714px] absolute w-[444px] h-[222px]"
            alt="Ellipse"
            src="/ellipse-13.svg"
          />
          <img
            className="top-[6289px] left-[2341px] absolute w-[444px] h-[222px]"
            alt="Ellipse"
            src="/ellipse-13.svg"
          />
          <img
            className="top-[414px] left-[808px] absolute w-[1917px] h-[1182px]"
            alt="Mosaico"
            src="/mosaico.svg"
          />
          <img
            className="top-[2722px] left-[806px] absolute w-[1917px] h-[1182px]"
            alt="Mosaico"
            src="/mosaico.svg"
          />
          <img
            className="top-[11440px] left-[805px] absolute w-[1917px] h-[1182px]"
            alt="Mosaico"
            src="/mosaico.svg"
            style={{ filter: "grayscale(100%)", opacity: 0.3 }}
          />
          <img
            className="top-[5592px] left-[806px] absolute w-[1917px] h-[1182px]"
            alt="Mosaico"
            src="/mosaico.svg"
          />
          <img
            className="top-[8767px] left-[806px] absolute w-[1917px] h-[1182px]"
            alt="Mosaico"
            src="/mosaico.svg"
          />
          <video
            className="w-[1919px] h-[1044px] top-[7481px] left-[806px] absolute object-cover"
            src="/videos/section6.mp4"
            loop
            autoPlay
            muted
          />

          <video
            className="w-[1271px] h-[834px] top-[9772px] left-[1130px] absolute object-cover"
            src="https://www.youtube.com/embed/yskVwIi9Of8?autoplay=1"
            title="tvCuricaca"
            muted
            loop
            autoPlay
          />
          <img
            className="absolute w-[1150px] h-[1093px] top-[4197px] left-[1190px]"
            alt="Curicaca linhas"
            src="/curicaca-linhas.svg"
          />
          <img
            className="absolute w-[1014px] h-[1357px] top-[2561px] left-[805px] object-cover"
            alt="Braco robo"
            src="/braco-robo.svg"
          />
          <img
            className="top-[5930px] left-[2373px] absolute w-[444px] h-[222px]"
            alt="Ellipse"
            src="/ellipse-12.svg"
          />
          <img
            className="absolute w-[776px] h-[615px] top-[8845px] left-[805px] object-cover"
            alt="Img robo"
            src="/robo.svg"
          />
          <img
            className="absolute w-[808px] h-[881px] top-[8731px] left-[1950px] object-cover"
            alt="Carro voador"
            src="/carroVoador.svg"
          />

          <div className="absolute w-[514px] h-[694px] top-[11100px] left-[700px] object-cover">
            <img
              className="absolute top-[150px]"
              alt="Foodtruck"
              src="/orador.svg"
              style={{
                filter: "grayscale(100%)",
                opacity: 0.5,
                transform: "scaleX(-1)",
              }}
            />
            <img
              className="absolute top-[550px]"
              alt="Foodtruck"
              src="/foodTruck.svg"
              style={{ filter: "grayscale(100%)", opacity: 0.5 }}
            />
          </div>

          <img
            className="absolute w-[499px] h-[861px] top-[11220px] left-[2196px] object-cover"
            alt="Cantor banda"
            src="/cantor.svg"
            style={{ filter: "grayscale(100%)", opacity: 0.5 }}
          />
          {/* Navigation bar */}
          <div className="absolute w-[1660px] h-[89px] top-[475px] left-[935px] bg-[#00000026] rounded-[75px] backdrop-blur-[11.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.6px)_brightness(100%)] flex items-center justify-between px-24">
            <img
              className="w-32 h-[39px]"
              alt="Logo abdi"
              src="/logo-abdi.svg"
            />
            <div className="flex space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href.replace("#", ""))}
                  className="[font-family:'Raleway',Helvetica] font-semibold text-3xl tracking-[1.50px] leading-[normal] whitespace-nowrap hover:text-[#bdd425] text-white bg-transparent border-none cursor-pointer"
                  style={{ outline: "none" }}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          {/* White card with event info */}
          <section id="ingressos" className="absolute w-[1660px] top-[1398px]">
            <Card className="absolute w-[1660px] left-[935px] rounded-[70px] border-none bg-white">
            <CardContent className="p-0 h-full">
              <div className="flex h-full items-center">
                  <div className="w-[629px] h-[212px] mt-[30px] ml-[127px]">
                    <div className="relative w-[623px] h-[212px]">
                      <div className="absolute top-0 left-0 [font-family:'Space_Grotesk',Helvetica] font-light text-[#959595] text-[63px] tracking-[0] leading-[normal]">
                        Brasília
                      </div>
                      <div className="top-[132px] left-[462px] font-light text-[#959595] text-[63px] leading-[normal] absolute [font-family:'Space_Grotesk',Helvetica] tracking-[0]">
                        2025
                      </div>
                      <div className="absolute top-14 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#0665ef] text-[76.4px] tracking-[0] leading-[normal]">
                        MAIO A OUTUBRO
                      </div>
                    </div>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-[276px] mx-10 my-1 bg-gray-300"
                  />
                  <div className="w-[650px] h-[215px] mt-[30px]">
                    <div className="relative w-[744px] h-[215px]">
                      <div className="absolute top-0 left-0 [font-family:'Raleway',Helvetica] font-bold text-black text-[35.4px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Próximo evento
                      </div>
                      <div className="top-9 left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-[#535353] text-[85.2px] absolute tracking-[0] leading-[normal]">
                        27 e 28 de Junho
                      </div>
                      <div className="absolute w-[592px] top-[125px] left-0 [font-family:'Raleway',Helvetica] font-light text-black text-[38px] tracking-[0] leading-[normal]">
                        São Sebastião
                      </div>
                      {/* <Button className="absolute top-[229px] left-0 bg-[#ed2900] rounded-[10px] px-[35px] py-2.5 hover:bg-[#c92400]">
                      <span className="text-white text-2xl tracking-[0] [font-family:'Raleway',Helvetica] font-extrabold leading-[normal] whitespace-nowrap">
                        INGRESSOS
                      </span>
                    </Button> */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* About section */}
          <section
            id="sobre"
            className="absolute w-[1199px] h-[746px] top-[3060px] left-[1162px]"
          >
            <div className="absolute w-[410px] top-0 left-[397px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[130px] tracking-[0] leading-[109.9px]">
              SOBRE
            </div>
            <div className="absolute w-[1195px] top-[179px] left-0 [font-family:'Raleway',Helvetica] font-light text-white text-[40px] text-justify tracking-[0] leading-10">
              A curicaca é uma ave típica do Cerrado brasileiro, conhecida por
              seu dom especial: canta para anunciar mudanças. Com sua melodia,
              ela canta a chegada de um tempo novo.
              <br />
              <br />O novo tempo será marcado pelo maior e mais completo
              festival de inovação, sustentabilidade, cultura e desenvolvimento
              tecnológico do país. Promovido pela Agência Brasileira de
              Desenvolvimento Industrial (ABDI) em sintonia com diversos
              parceiros nacionais e internacionais, Curicaca vai conectar
              Brasília e suas Regiões Administrativas em torno do que há de mais
              moderno no mundo para a indústria.
              <br />
              <br />É a capital federal impulsionando o fortalecimento da
              indústria nacional e se consolidando como referência no calendário
              de grandes eventos nacionais e internacionais.
            </div>
          </section>
          {/* Programming section */}
          <div className="absolute top-[1817px] left-[1415px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-8xl tracking-[0] leading-[normal]">
            PROGRAMAÇÃO
          </div>
          <div className="absolute top-[1928px] left-[1549px] [font-family:'Raleway',Helvetica] font-light text-white text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            RETIRE SEU INGRESSO:
          </div>
          {/* Event locations carousel paginado */}

          <div className="absolute w-[1660px] h-[562px] top-[2023px] left-[935px]">
            <div className="flex w-full justify-center items-center space-x-8">
              {currentEventIndex === 0 ? (
                // Página 1: destaque único
                <Card
                  key={eventLocations[0].id}
                  className="w-[1660px] h-[562px] flex-shrink-0 bg-transparent border-none shadow-none"
                  style={{
                    backgroundImage: `url("/${eventLocations[0].backgroundImage}")`,
                    ...(eventLocations[0].style === "ended" && {
                      filter: "grayscale(100%)",
                    }),
                  }}
                >
                  <CardContent className="p-0 h-full relative">
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-5xl md:text-6xl drop-shadow">
                        {eventLocations[0].title}
                      </div>
                      {eventLocations[0].subtitle && (
                        <div className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-2xl md:text-3xl mt-2 drop-shadow">
                          {eventLocations[0].subtitle}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                // Demais páginas: trios
                eventLocations
                  .slice(currentEventIndex, currentEventIndex + 2)
                  .map((location) => (
                    <Card
                      key={location.id}
                      className={`w-[805px] h-[562px] flex-shrink-0 bg-transparent border-none transition-all duration-300 shadow-none ${
                        location.url ? "cursor-pointer" : ""
                      }`}
                      style={{
                        backgroundImage: location.backgroundImage
                          ? `url("/${location.backgroundImage}")`
                          : undefined,
                        ...(location.style === "ended" && {
                          filter: "grayscale(100%)",
                        }),
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      onClick={() => {
                        if (location.url) {
                          window.open(location.url, "_blank");
                        }
                      }}
                    >
                      <CardContent className="p-0 h-full relative">
                        <div className="absolute bottom-16 right-[-50px] transform -translate-x-1/2 text-center">
                          <div className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-3xl md:text-4xl drop-shadow">
                            {location.title}
                          </div>
                        </div>
                        <div className="absolute bottom-[125px] right-[-50px] transform -translate-x-1/2 text-center">
                          {location.subtitle && (
                            <div className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-xl md:text-2xl mt-2 drop-shadow">
                              {location.subtitle}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
              )}
            </div>
            {/* Botão Esquerda */}
            <div className="flex justify-center items-center mt-5">
              <button
                onClick={() =>
                  setCurrentEventIndex((prev) => (prev - 2 >= 0 ? prev - 2 : 0))
                }
                className=""
                disabled={currentEventIndex === 0}
                aria-label="Anterior"
              >
                <i className="fa-solid fa-angle-left text-4xl text-[#D9D9D9]"></i>
              </button>
              <div className="w-20 h-10"></div>
              {/* Botão Direita */}
              <button
                onClick={() =>
                  setCurrentEventIndex((prev) =>
                    prev === 0
                      ? 1 // Vai para a primeira página de trios
                      : prev + 2 < eventLocations.length
                      ? prev + 2
                      : prev
                  )
                }
                className=""
                disabled={
                  currentEventIndex === 0
                    ? eventLocations.length <= 1
                    : currentEventIndex + 2 >= eventLocations.length
                }
                aria-label="Próximo"
              >
                <i className="fa-solid fa-angle-right text-4xl text-[#D9D9D9]"></i>
              </button>
            </div>
          </div>

          {/* Objectives section */}
          <section
            id="objetivos"
            className="absolute w-[1660px] h-[1502px] top-[3971px] left-[935px] bg-[#0000004c] rounded-[80px]"
          >
            <div className="absolute w-[1516px] h-[1143px] top-[175px] left-[73px]">
              <div className="absolute w-[700px] top-0 left-[406px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[130px] text-right tracking-[0] leading-[109.9px]">
                OBJETIVOS
              </div>
              <div className="grid grid-cols-3 gap-x-8 gap-y-16 mt-[287px]">
                {objectives.map((objective) => (
                  <div
                    key={objective.id}
                    className="flex flex-col items-center"
                  >
                    <img
                      className="w-[120px] h-[134px] mb-8"
                      alt={`Objective ${objective.id}`}
                      src={objective.iconSrc}
                    />
                    <div className="[font-family:'Raleway',Helvetica] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal]">
                      {objective.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Knowledge tracks section */}
          <div className="absolute w-[979px] h-[186px] top-[5827px] left-[1288px]">
            <div className="top-0 left-[278px] [font-family:'Raleway',Helvetica] font-light text-white text-[70.8px] whitespace-nowrap absolute tracking-[0] leading-[normal]">
              10 Trilhas de
            </div>
            <div className="absolute w-[975px] top-[86px] left-0 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[130px] tracking-[0] leading-[99.9px]">
              CONHECIMENTO
            </div>
          </div>
          <ScrollArea className="absolute w-[1692px] h-[1000px] top-[6200px] left-[1019px]">
            <div className="flex space-x-6">
              {knowledgeTracks.map((track) => (
                <Card
                  key={track.id}
                  className="w-[750px] h-[957px] flex-shrink-0 bg-transparent border-none shadow-none"
                >
                  <CardContent className="p-0 h-full relative border-none">
                    <div
                      className="absolute w-[690px] h-[924px] top-0 left-0  rounded-3xl"
                      style={{
                        backgroundImage: `url("/${track.backgroundImage}")`,
                        backgroundSize: "cover", // ou 'contain', dependendo do efeito desejado
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div className="absolute w-[547px] h-[715px] top-[126px] left-[74px]">
                      <div className="top-0 left-0 font-medium text-white text-[351.4px] leading-[351.4px] whitespace-nowrap absolute [font-family:'Space_Grotesk',Helvetica] tracking-[0] opacity-70">
                        {track.id}
                      </div>
                      <div className="absolute w-[543px] top-[405px] left-0 [font-family:'Raleway',Helvetica] font-semibold text-white text-[68.1px] tracking-[0] leading-[68.1px] z-10">
                        {track.title}
                      </div>
                    </div>
                    {track.imageSrc && (
                      <img
                        className={`absolute ${track.className} object-cover`}
                        alt={`Track ${track.id}`}
                        src={track.imageSrc}
                      />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {/* Press section */}
          <section
            id="imprensa"
            className="absolute w-[676px] h-[326px] top-[8711px] left-[1429px]"
          >
            <div className="top-0 left-[21px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[130px] tracking-[0] leading-[99.9px] absolute whitespace-nowrap">
              IMPRENSA
            </div>
            <div className="absolute top-[110px] left-[21px] [font-family:'Raleway',Helvetica] font-light text-white text-[40px] tracking-[0.80px] leading-10 whitespace-nowrap">
              Mande-nos um e-mail através do
            </div>
            <div className="absolute w-[674px] h-10 top-[286px] left-0">
              <div className="absolute top-0 left-0 [font-family:'Raleway',Helvetica] font-bold text-white text-[40px] tracking-[0.80px] leading-10 whitespace-nowrap">
                imprensacuricaca@abdi.com.br
              </div>
              <img
                className="absolute w-8 h-[38px] top-0.5 left-[640px] cursor-pointer"
                alt="Vector"
                src="/vector-1.svg"
                onClick={() => {
                  navigator.clipboard.writeText("imprensacuricaca@abdi.com.br");
                  setShowCopyAlert(true);
                  setTimeout(() => setShowCopyAlert(false), 2000);
                }}
              />
              {showCopyAlert && (
                <div
                  style={{
                    position: "absolute",
                    top: "-45px",
                    left: "100%",
                    transform: "translateX(-70%)",
                    background: "#ccc",
                    color: "#222",
                    padding: "4px 12px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    zIndex: 10,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  Copiado
                </div>
              )}
            </div>
          </section>
          {/* TV Curicaca section */}
          <div className="absolute top-[9572px] left-[1362px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[130px] tracking-[0] leading-[99.9px] whitespace-nowrap">
            TV CURICACA
          </div>
          {/* YouTube Preview/Player */}
          <div
            className="w-[1271px] h-[834px] top-[9772px] left-[1130px] absolute object-cover cursor-pointer"
            onClick={() => !showYoutubeIframe && setShowYoutubeIframe(true)}
            style={{ zIndex: 10 }}
          >
            {!showYoutubeIframe ? (
              <>
                <img
                  src="/images/thumb-youtube-portal.jpg"
                  alt="Prévia do vídeo"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.5)" />
                    <polygon points="32,25 60,40 32,55" fill="#fff" />
                  </svg>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full object-cover rounded-lg"
                src="https://www.youtube.com/embed/yskVwIi9Of8?autoplay=1"
                title="tvCuricaca"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          {/* Gallery section */}
          <div className="absolute top-[10724px] left-[1551px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[normal]">
            GALERIA CURICACA
          </div>
          <img
            className="absolute w-[1345px] h-[591px] top-[10822px] left-[1094px]"
            alt="Galeria"
            src="/galeria.svg"
          />
          {/* <div className="absolute w-[1345px] h-[591px] top-[10822px] left-[1094px] grid grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <Card
                key={item.id}
                className={`${
                  item.size
                } bg-[#d9d9d9] rounded-[30px] border-none ${
                  index === 4 ? "row-span-2" : ""
                } ${index === 5 ? "col-span-2" : ""}`}
              >
                <CardContent className="p-0 h-full"></CardContent>
              </Card>
            ))}
          </div> */}
          {/* Partners section */}
          <div className="absolute w-[1199px] h-[948px] top-[11995px] left-[1166px]">
            <div className="absolute w-[616px] h-[503px] top-0 left-[294px]">
              <img
                className="absolute w-[612px] h-[121px] top-[382px] left-0"
                alt="Assinatura gov"
                src="/assinatura-gov-1.svg"
              />
              <img
                className="absolute w-[245px] h-[125px] top-[86px] left-[183px]"
                alt="Assinatura gov"
                src="/assinatura-gov.svg"
              />
              <div className="absolute top-0 left-52 [font-family:'Raleway',Helvetica] font-light text-white text-3xl tracking-[1.50px] leading-[normal] whitespace-nowrap">
                REALIZAÇÃO
              </div>
              <div className="absolute top-[307px] left-[218px] [font-family:'Raleway',Helvetica] font-light text-white text-3xl tracking-[1.50px] leading-[normal] whitespace-nowrap">
                PARCEIROS
              </div>
              <div className="absolute w-[1199px] h-[503px] top-[632px] right-[-250px] flex flex-wrap gap-14 items-center justify-center">
                {parceiros.map((parceiro) => (
                  <img
                    key={parceiro.id}
                    src={parceiro.imageSrc}
                    alt={`Parceiro ${parceiro.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="absolute w-[1924px] h-[356px] top-[13226px] left-[805px]">
            <div className="relative w-[1920px] h-[356px] bg-white rounded-[80px_80px_0px_0px]">
              <div className="absolute w-[190px] h-[218px] top-[86px] left-[853px]">
                <div className="absolute top-[61px] left-0 [font-family:'Raleway',Helvetica] font-semibold text-[#4e4e4e] text-3xl tracking-[1.50px] leading-[normal] whitespace-nowrap">
                  OBJETIVOS
                </div>
                <div className="absolute top-0 left-0 [font-family:'Raleway',Helvetica] font-semibold text-[#4e4e4e] text-3xl tracking-[1.50px] leading-[normal] whitespace-nowrap">
                  SOBRE
                </div>
                <div className="top-[122px] left-0 [font-family:'Raleway',Helvetica] font-semibold text-[#4e4e4e] text-3xl tracking-[1.50px] leading-[normal] absolute whitespace-nowrap">
                  IMPRENSA
                </div>
                <div className="absolute top-[183px] left-0 text-[#4e4e4e] text-3xl tracking-[1.50px] [font-family:'Raleway',Helvetica] font-extrabold leading-[normal] whitespace-nowrap">
                  INGRESSOS
                </div>
              </div>
              <div className="absolute top-[86px] left-[1294px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#0665ef] text-[40px] tracking-[0] leading-[normal]">
                FALE CONOSCO
              </div>
              <div className="absolute w-[351px] h-[30px] top-[142px] left-[1294px]">
                <div className="absolute top-0 left-0 [font-family:'Raleway',Helvetica] font-normal text-[#4e4e4e] text-3xl tracking-[0.60px] leading-[30px] whitespace-nowrap">
                  curicaca@abdi.com.br
                </div>
                <div style={{ position: "relative" }}>
                  {showCopyAlert && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-45px",
                        left: "100%",
                        transform: "translateX(-70%)",
                        background: "#ccc",
                        color: "#222",
                        padding: "4px 12px",
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        zIndex: 10,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      Copiado
                    </div>
                  )}
                  <img
                    className="absolute w-6 h-[29px] top-px left-[325px] cursor-pointer"
                    alt="Vector"
                    src="/vector-6.svg"
                    onClick={() => {
                      navigator.clipboard.writeText("curicaca@abdi.com.br");
                      setShowCopyAlert(true);
                      setTimeout(() => setShowCopyAlert(false), 2000);
                    }}
                  />
                </div>
              </div>
              <div className="absolute top-[200px] left-[1294px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#4e4e4e] text-[40px] tracking-[0] leading-[normal]">
                NOSSAS REDES
              </div>
              <div className="absolute w-[210px] h-[31px] top-[261px] left-[1294px] flex gap-2">
                {redesSociais.map((rede) => (
                  <img
                    key={rede.id}
                    src={rede.imageSrc}
                    alt={`Rede ${rede.id}`}
                    className="me-2 cursor-pointer"
                    onClick={() => {
                      window.open(rede.link, "_blank");
                    }}
                  />
                ))}
              </div>
              <div className="absolute w-[444px] h-[102px] top-[143px] left-[186px]">
                <img
                  className="absolute w-[442px] h-[102px] top-0 left-0"
                  alt="Group"
                  src="/curicaca.svg"
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
