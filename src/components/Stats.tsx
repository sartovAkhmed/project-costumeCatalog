import React from 'react';
import { Globe, Users, Calendar, Award } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Globe,
      value: '12',
      label: 'Стран',
      description: 'представлено'
    },
    {
      icon: Users,
      value: '100+',
      label: 'Довольных',
      description: 'клиентов'
    },
    {
      icon: Calendar,
      value: '5+',
      label: 'Лет',
      description: 'опыта'
    },
    {
      icon: Award,
      value: '100%',
      label: 'Качество',
      description: 'гарантировано'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12 mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-200" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-blue-200">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}