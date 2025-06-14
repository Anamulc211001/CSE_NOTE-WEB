import React from 'react';
import { Play, Clock, Users } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  students: string;
  videoUrl: string;
  thumbnailUrl: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  title,
  description,
  icon,
  duration,
  students,
  videoUrl,
  thumbnailUrl,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={thumbnailUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <button
          onClick={() => window.open(videoUrl, '_blank')}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
            <Play className="h-8 w-8 text-white" />
          </div>
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 font-poppins text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{students}</span>
          </div>
        </div>
        
        <button
          onClick={() => window.open(videoUrl, '_blank')}
          className="w-full bg-sky-blue hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
        >
          <Play className="h-5 w-5" />
          <span>Watch Now</span>
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;