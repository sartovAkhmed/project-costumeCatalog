import React, { useState } from 'react';
import { Costume } from '../types/costume';
import { 
  ArrowLeft, MapPin, Calendar, Palette, Shirt, 
  Star, Clock, CheckCircle, XCircle, MessageSquare 
} from 'lucide-react';
import { ContactForm } from './ContactForm';

interface CostumeDetailProps {
  costume: Costume;
  onBack: () => void;
}

export function CostumeDetail({ costume, onBack }: CostumeDetailProps) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад к каталогу
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={costume.imageUrl} 
                alt={costume.name}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold text-blue-800">{costume.region}</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-lg text-gray-600 font-medium">{costume.country}</span>
                <div className="flex items-center gap-1">
                  {costume.available ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className={`text-sm font-medium ${costume.available ? 'text-green-600' : 'text-red-600'}`}>
                    {costume.available ? 'В наличии' : 'Нет в наличии'}
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{costume.name}</h1>
              
              {costume.price && (
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  {costume.price.toLocaleString()} ₽
                </div>
              )}
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {costume.description}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Цвета</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {costume.colors.map((color, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shirt className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Материалы</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {costume.materials.map((material, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full font-medium"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Occasions */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Подходящие случаи</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {costume.occasions.map((occasion, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-lg font-medium"
                  >
                    {occasion}
                  </span>
                ))}
              </div>
            </div>

            {/* History */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">История и традиции</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {costume.history}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Связаться с продавцом
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:+996555123456"
                  className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center"
                >
                  Позвонить
                </a>
                <a 
                  href="https://wa.me/996555123456"
                  className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        costumeName={costume.name}
      />
    </div>
  );
}