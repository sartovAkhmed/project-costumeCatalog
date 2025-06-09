import React from 'react';
import { Heart, Award, Users, Globe, Clock, Shield } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: 'Страсть к культуре',
      description: 'Мы влюблены в традиционную одежду и культурное наследие народов мира'
    },
    {
      icon: Award,
      title: 'Высокое качество',
      description: 'Только аутентичные материалы и традиционные техники изготовления'
    },
    {
      icon: Users,
      title: 'Опытная команда',
      description: 'Наши мастера имеют многолетний опыт работы с традиционными костюмами'
    },
    {
      icon: Globe,
      title: 'Мировое наследие',
      description: 'Представляем костюмы из более чем 50 стран и регионов мира'
    },
    {
      icon: Clock,
      title: 'Быстрая доставка',
      description: 'Доставка по Бишкеку в течение 24 часов, по Кыргызстану - 2-3 дня'
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: '100% гарантия возврата средств в течение 14 дней'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">О нашей компании</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Мы - ведущий поставщик традиционных костюмов народов мира в Бишкеке. 
              Наша миссия - сохранить и популяризировать культурное наследие через 
              аутентичную традиционную одежду.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              За более чем 5 лет работы мы помогли сотням клиентов найти идеальные 
              костюмы для театральных постановок, культурных мероприятий, свадеб и 
              других особых случаев.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Компания была основана в 2019 году группой энтузиастов, увлеченных 
                  традиционной культурой и ремеслами. Мы начали с небольшой коллекции 
                  азиатских костюмов и постепенно расширили ассортимент.
                </p>
                <p>
                  Сегодня мы сотрудничаем с мастерами из разных стран, обеспечивая 
                  аутентичность и высокое качество каждого изделия. Наши костюмы 
                  используются в театрах, на культурных фестивалях и в частных коллекциях.
                </p>
                <p>
                  Мы гордимся тем, что помогаем сохранять культурные традиции и 
                  делаем их доступными для жителей Кыргызстана.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6962439/pexels-photo-6962439.jpeg" 
                alt="Наша мастерская"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}