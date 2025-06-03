
import React from 'react';
import { Card } from "../../components/ui/card";

interface ProgramItem {
  time: string;
  title: string;
  speaker: string;
  description: string;
  category?: string;
}

interface ProgramScheduleProps {
  date: string;
  items: ProgramItem[];
  evento: string;
}

const ProgramSchedule: React.FC<ProgramScheduleProps> = ({ date, items, evento }) => {
  // const url = evento === "1" ? 
  //   [
  //     "https://app.4.events/c/SlN4RE1GZ3NRelJnQ21BSw==/plugin/inscricao/1/c81e728d9d4c2f636f067f89cc14862c?direct=true&autoopen=true",
  //     "https://app.4.events/c/SlN4RE1GZ3NRelJnQ21BSw==/plugin/inscricao/1/eccbc87e4b5ce2fe28308fd9f2a7baf3?direct=true&autoopen=true"
  //   ]
  //   :
  //   [
  //     "https://app.4.events/c/SlN4RE1GZ3NRelJnQ21BSw==/plugin/inscricao/2/1679091c5a880faf6fb5e6087eb1b2dc?direct=true&autoopen=true",
  //     "https://app.4.events/c/SlN4RE1GZ3NRelJnQ21BSw==/plugin/inscricao/2/8f14e45fceea167a5a36dedd4bea2543?direct=true&autoopen=true"
  //   ]

  return (
    <div className="py-12 bg-gray-50" id="programa">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className={`text-3xl font-bold text-center mb-8 text-gray-900 font-poppins-bold`}>{date}</h2>
        <p className={`text-xl text-center mb-12 text-gray-600 font-poppins-regular`}>
        ⬇️ Retire aqui o seu ingresso: ⬇️
        </p>

        {/* <div className="flex flex-col justify-center gap-12 mb-10 lg:flex-row items-center">
          <Link 
            href={url[0]}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-curicaca-blue-2 text-white text-center hover:bg-indigo-600 px-6 py-3 rounded-full text-lg font-medium md:w-[50%] lg:w-[20%] 3xl:w-[20%]"
          >
            Cidadão
          </Link>
          <Link 
            href={url[1]}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-curicaca-blue-2 text-white text-center hover:bg-indigo-600 px-6 py-3 rounded-full text-lg font-medium md:w-[50%] lg:w-[20%] 3xl:w-[20%]"
          >
            Empreendedor
          </Link>
        </div> */}

        <div className="grid gap-6">
          {items.map((item, index) => (
            <Card key={index} className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className={`flex-shrink-0 font-mono text-blue-900 text-lg md:text-xl font-bold w-24 font-poppins-regular`}>
                  {item.time}
                </div>
                <div className="flex-grow">

                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-blue-700 font-medium mb-2">
                  { item.time === "14:00" || item.time === "16:30" ? item.description : item.speaker }
                </p>

                <p className="text-gray-600">
                  { item.time === "14:00" || item.time === "16:30" ? item.speaker : item.description }
                </p>
                  {item.category && (
                    <div className="mt-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramSchedule;
