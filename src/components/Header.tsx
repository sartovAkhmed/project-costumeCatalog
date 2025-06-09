import React from 'react';
import { Shirt, MapPin } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Shirt className="w-10 h-10 text-blue-200" />
            <h1 className="text-4xl lg:text-5xl font-bold">Костюмы Народов Мира</h1>
          </div>
          <div className="flex justify-center items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-blue-300" />
            <p className="text-xl text-blue-100">Бишкек • Традиционная одежда со всего света</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-blue-100 leading-relaxed">
              Погрузитесь в мир традиционной моды и откройте для себя богатое культурное наследие 
              народов всех континентов. От элегантных японских кимоно до ярких африканских боубу - 
              каждый костюм рассказывает свою уникальную историю.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}