"use client";

import EventHeader from "./components/EventHeader";
import EventLocation from "./components/EventLocation";
import ProgramSchedule from "./components/ProgramSchedule";
import SpeakerCard from "./components/SpeakerCard";

export default function Taguatinga() {
  // Program schedule data for Saturday
  const saturdayItems = [
    {
      time: "10:00",
      title: "Abertura",
      speaker: "",
      description: "Início oficial do evento.",
      category: "Abertura",
    },
    {
      time: "10:00 - 22:00",
      title: "Praça Curicaca",
      speaker: "",
      description: "Feira, arena gamer, pista de just dance, domo planetário.",
      category: "Atividade",
    },
    {
      time: "10:00 - 18:00",
      title: "Espaço kids com oficinas",
      speaker: "",
      description: "Atividades e oficinas para crianças.",
      category: "Atividade",
    },
    {
      time: "13:00",
      title: "Show: grupo Baque Folha",
      speaker: "Grupo Baque Folha",
      description: "Apresentação musical.",
      category: "Show",
    },
    {
      time: "14:00",
      title:
        "Palestra: Inovar é Coisa Nossa - Quando a cidade inteligente nasce da vivência e vira solução coletiva",
      speaker: "",
      description:
        "Palestrantes: Justo Magalhães (Presidente da ACIT), Ramona Jucá (Mercado Sul), Lucas Apostoli (Moda e Lifestyle).",
      category: "Palestra",
    },
    {
      time: "15:30",
      title: "Entrevista: Cidade Inteligente",
      speaker: "Maria Paula e Convidados",
      description:
        "Entrevista com Ricardo Cappelli (presidente da ABDI) e Rainer Cadete (ator) sobre cidades inteligentes.",
      category: "Entrevista",
    },
    {
      time: "16:30",
      title:
        "Palestra: Conecta, Mas Não Desconecta - A tecnologia que cria cidades mais humanas",
      speaker: "Mediador: Paulo Foina (Instituto Multiplicidade)",
      description:
        "Palestrantes: Alexandre Kieling (Universidade Católica de Brasília), Antonio Temóteo (Revista Exame), Júlia Rosa (Projeto Diálogos Digitais - GIZ) e Lucila Simão (Instituto ContraCultura e Conselheira de Inovação e Governança).",
      category: "Palestra",
    },
    {
      time: "18:00",
      title: "Show: DJ Itin do Brasil",
      speaker: "DJ Itin do Brasil",
      description: "Apresentação musical.",
      category: "Show",
    },
    {
      time: "19:00",
      title: "Show: Pratanes",
      speaker: "Pratanes",
      description: "Apresentação musical.",
      category: "Show",
    },
    {
      time: "20:00",
      title: "Show: Tássia Reis",
      speaker: "Tássia Reis",
      description: "Apresentação musical.",
      category: "Show",
    },
  ];

  // Program schedule data for Sunday
  const sundayItems = [
    {
      time: "10:00",
      title: "Abertura",
      speaker: "",
      description: "Início do segundo dia de evento.",
      category: "Abertura",
    },
    {
      time: "10:00 - 18:00",
      title: "Praça Curicaca",
      speaker: "",
      description:
        "Feira, arena gamer, pista de just dance, domo planetário e espaço kids com oficinas.",
      category: "Atividade",
    },
    {
      time: "10:00 - 13:00",
      title: "Workshop: Tecnologia Simples para Problemas Reais",
      speaker: "Facilitadora: Anelise Witt (Professora do IDP)",
      description:
        "Aprenda a usar ferramentas digitais de forma prática para melhorar o serviço que você oferece.",
      category: "Workshop",
    },
    {
      time: "14:00 - 17:00",
      title: "Campeonato de Cosplay",
      speaker: "",
      description: "Competição de cosplay com diversas categorias.",
      category: "Competição",
    },
  ];

  // Speakers data
  const speakers = [
    {
      name: "Justo Magalhães",
      role: "Presidente",
      organization: "ACIT",
      bio: "Palestrante com experiência em desenvolvimento econômico local.",
    },
    {
      name: "Ramona Jucá",
      role: "Palestrante",
      organization: "Mercado Sul",
      bio: "Palestrante com foco em economia solidária e desenvolvimento comunitário.",
    },
    {
      name: "Lucas Apostoli",
      role: "Palestrante",
      organization: "Moda e Lifestyle",
      bio: "Palestrante com experiência em moda e estilo de vida sustentável.",
    },
    {
      name: "Ricardo Cappelli",
      role: "Presidente ABDI",
      organization: "ABDI - Agência Brasileira de Desenvolvimento Industrial",
      bio: "Convidado para entrevista sobre cidades inteligentes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <EventHeader
        title="Festival Internacional Curicaca de Inovação e Sustentabilidade na Indústria em Taguatinga"
        date="24 e 25 de maio de 2025"
      />
      <main>
        {/* Introdução */}
        <section className="py-16 bg-gradient-to-r from-gray-100 to-blue-50">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-black font-poppins-bold">
              Você já ouviu falar em "Cidades Inteligentes"?
            </h2>
            <p className="text-xl text-black font-medium mb-8 font-poppins-regular">
              É a tecnologia como motor de desenvolvimento, de geração de
              oportunidades, emprego e renda!
            </p>
            <p className="text-lg text-gray-700 mb-6 font-poppins-regular">
              Nos dias 24 e 25 de maio, o Festival Curicaca terá sua primeira
              edição na Região Administrativa de Taguatinga, com o tema "Cidade
              Inteligente". O assunto está alinhado à Missão 6 da Nova Indústria
              Brasil, sobre uso de tecnologias para a soberania nacional.
            </p>
            <p className="text-lg text-gray-700 font-poppins-regular">
              Em Taguatinga, trazemos exemplos de empresas e influencers locais
              de sucesso em diferentes áreas para pensar coletivamente como a
              inovação é capaz de impulsionar novos modelos, estilos de vida e
              formas de fazer trocas comerciais. Em destaque, está a capacidade
              de empreendedores se reinventarem em uma sociedade em constante
              transformação. São palestras, entrevistas e um workshop mão na
              massa nos dois dias de evento.
            </p>
          </div>
        </section>
        {/* Programação Sábado */}
        <div className="pt-16 bg-gray-50">
          <div className="container mx-auto px-4 bg-gray-50">
            <h1 className="text-3xl font-bold text-center pb-8 text-curicaca-red font-kinetic-bold xl:text-[3rem]">
              Programação do Festival
            </h1>
          </div>
        </div>
        <ProgramSchedule
          date="SÁBADO - 24 de maio - 10h às 22h"
          items={saturdayItems}
          evento="1"
        />
        {/* Programação Domingo */}
        <ProgramSchedule
          date="DOMINGO - 25 de maio - 10h às 18h"
          items={sundayItems}
          evento="2"
        />
        {/* Palestrantes */}
        <section className="py-16 bg-gray-100" id="palestrantes">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 font-poppins-bold">
              Palestrantes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <SpeakerCard key={index} {...speaker} />
              ))}
            </div>
          </div>
        </section>
        {/* Local */}
        <EventLocation
          address="Associação Comercial e Industrial de Taguatinga (ACIT)"
          city="QI 25, Área Especial, Setor Industrial - Taguatinga (área da Facita)"
          date="24 e 25 de maio"
          time="Sábado: 10h às 22h / Domingo: 10h às 18h"
        />
      </main>
    </div>
  );
}
