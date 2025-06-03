import React from 'react';
import { Card } from '../../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

interface SpeakerProps {
  name: string;
  role: string;
  organization: string;
  bio: string;
  image?: string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({ name, role, organization, bio, image }) => {
  return (
    <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-0 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-curicaca-red-2 to-curicaca-blue-2"></div>
      <div className="flex flex-col items-center text-center pl-2">
        <Avatar className="h-32 w-32 mb-4 border-4 border-purple-100">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-gradient-to-br from-purple-100 to-blue-100 text-purple-700 text-2xl">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-purple-700 font-medium mb-1">{role}</p>
        <p className="text-gray-600 mb-4">{organization}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </Card>
  );
};

export default SpeakerCard;
