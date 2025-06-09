import React from 'react';
import { ShoppingBag, Scissors, Calendar, Truck, RefreshCw, Headphones } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Продажа костюмов',
      description: 'Широкий выбор готовых традиционных костюмов из разных стран мира',
      features: ['Более 200 моделей в наличии', 'Все размеры', 'Сертификаты качества']
    },
    {
      icon: Calendar,
      title: 'Аренда костюмов',
      description: 'Краткосрочная аренда для мероприятий, фотосессий и театральных постановок',
      features: ['От 1 дня', 'Гибкие тарифы', 'Профессиональная чистка']
    },
    {
      icon: Scissors,
      title: 'Индивидуальный пошив',
      description: 'Изготовление костюмов по индивидуальным меркам и пожеланиям',
      features: ['Точные размеры', 'Выбор материалов', 'Срок 2-4 недели']
    },
    {
      icon: Truck,
      title: 'Доставка',
      description: 'Быстрая и надежная доставка по всему Кыргызстану',
      features: ['По Бишкеку - 24 часа', 'По стране - 2-3 дня', 'Бесплатно от 5000 сом']
    },
    {
      icon: RefreshCw,
      title: 'Обмен и возврат',
      description: 'Гибкая политика обмена и возврата товаров',
      features: ['14 дней на возврат', 'Бесплатный обмен размера', '100% возврат средств']
    },
    {
      icon: Headphones,
      title: 'Консультации',
      description: 'Профессиональные консультации по выбору и уходу за костюмами',
      features: ['Бесплатные консультации', 'Помощь в выборе', 'Советы по уходу']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг для всех ваших потребностей в традиционных костюмах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Нужна помощь в выборе?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши эксперты помогут вам найти идеальный костюм для любого случая
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+996555123456" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Позвонить сейчас
            </a>
            <a 
              href="https://wa.me/996555123456" 
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}