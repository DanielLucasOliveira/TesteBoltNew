
import React from 'react';

import { MapPin, Calendar } from 'lucide-react';
import { Card } from '../../components/ui/card';

interface EventLocationProps {
  address: string;
  city: string;
  date: string;
  time: string;
}

const EventLocation: React.FC<EventLocationProps> = ({ address, city, date, time }) => {
  return (
    <div className="py-16 bg-white" id="local">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 text-gray-900 font-poppins-bold`}>Local do Evento</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 bg-white shadow-md border-0">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-700 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Endereço</h3>
                <p className="text-gray-700 mb-1">{address}</p>
                <p className="text-gray-700">{city}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-white shadow-md border-0">
            <div className="flex items-start space-x-4">
              <Calendar className="h-6 w-6 text-blue-700 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data e Horário</h3>
                <p className="text-gray-700 mb-1">{date}</p>
                <p className="text-gray-700">{time}</p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* <div className="mt-12 h-96 bg-gray-200 max-w-5xl mx-auto rounded-lg overflow-hidden">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(address + ', ' + city)}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
            Mapa do Local do Evento
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EventLocation;
