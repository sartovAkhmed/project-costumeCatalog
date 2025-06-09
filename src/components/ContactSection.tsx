import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      details: ['ул. Чуй, 123', 'Бишкек, Кыргызстан', '720000']
    },
    {
      icon: Phone,
      title: 'Телефоны',
      details: ['+996 555 123 456', '+996 777 987 654', '+996 312 456 789']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@costumes.kg', 'orders@costumes.kg', 'support@costumes.kg']
    },
    {
      icon: Clock,
      title: 'Режим работы',
      details: ['Пн-Пт: 9:00 - 19:00', 'Сб: 10:00 - 17:00', 'Вс: 11:00 - 16:00']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Контакты</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full flex-shrink-0">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Социальные сети
                  </h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/costumes_bishkek" 
                      className="text-pink-600 hover:text-pink-700 transition-colors"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://facebook.com/costumes.bishkek" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Facebook
                    </a>
                    <a 
                      href="https://wa.me/996555123456" 
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Наш магазин</h3>
                <p className="text-gray-600">ул. Чуй, 123, Бишкек</p>
                <p className="text-sm text-gray-500 mt-2">
                  Интерактивная карта будет добавлена
                </p>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Как нас найти:</h4>
              <p className="text-gray-600 text-sm">
                Мы находимся в центре Бишкека, рядом с площадью Ала-Тоо. 
                Ближайшая остановка общественного транспорта - "Центральная площадь".
                Есть парковка для автомобилей.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Быстрая связь</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+996555123456"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Позвонить
            </a>
            <a 
              href="https://wa.me/996555123456"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a 
              href="mailto:info@costumes.kg"
              className="bg-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}