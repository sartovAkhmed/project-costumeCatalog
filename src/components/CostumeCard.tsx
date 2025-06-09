import React from 'react';
import { Costume } from '../types/costume';
import { MapPin, Calendar, Palette } from 'lucide-react';

interface CostumeCardProps {
  costume: Costume;
  onClick: (costume: Costume) => void;
}

export function CostumeCard({ costume, onClick }: CostumeCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden group"
      onClick={() => onClick(costume)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={costume.imageUrl} 
          alt={costume.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-800">
          {costume.region}
        </div>
        {costume.price && (
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
            {costume.price.toLocaleString()} ₽
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-gray-600 font-medium">{costume.country}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {costume.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {costume.description}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Palette className="w-3 h-3" />
            <span>{costume.colors.length} цвета</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{costume.occasions.length} случая</span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {costume.materials.slice(0, 2).map((material, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
            >
              {material}
            </span>
          ))}
          {costume.materials.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{costume.materials.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}