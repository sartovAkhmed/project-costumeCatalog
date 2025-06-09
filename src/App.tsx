import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchAndFilter } from './components/SearchAndFilter';
import { CostumeCard } from './components/CostumeCard';
import { CostumeDetail } from './components/CostumeDetail';
import { Stats } from './components/Stats';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { ContactForm } from './components/ContactForm';
import { costumes } from './data/costumes';
import { Costume, FilterOptions } from './types/costume';
import { Sparkles, MessageSquare } from 'lucide-react';

function App() {
  const [selectedCostume, setSelectedCostume] = useState<Costume | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    region: 'Все регионы',
    country: 'Все страны',
    searchTerm: ''
  });

  const filteredCostumes = useMemo(() => {
    return costumes.filter(costume => {
      const matchesRegion = filters.region === 'Все регионы' || costume.region === filters.region;
      const matchesCountry = filters.country === 'Все страны' || costume.country === filters.country;
      const matchesSearch = !filters.searchTerm || 
        costume.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        costume.country.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        costume.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
      
      return matchesRegion && matchesCountry && matchesSearch;
    });
  }, [filters]);

  if (selectedCostume) {
    return (
      <CostumeDetail 
        costume={selectedCostume} 
        onBack={() => setSelectedCostume(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <Stats />
      
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <SearchAndFilter 
          filters={filters} 
          onFiltersChange={setFilters} 
        />

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <p className="text-gray-600">
              Найдено <span className="font-semibold text-blue-600">{filteredCostumes.length}</span> 
              {filteredCostumes.length === 1 ? ' костюм' : filteredCostumes.length < 5 ? ' костюма' : ' костюмов'}
            </p>
          </div>
          
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Связаться с нами
          </button>
        </div>

        {/* Costumes Grid */}
        {filteredCostumes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCostumes.map(costume => (
              <CostumeCard 
                key={costume.id} 
                costume={costume} 
                onClick={setSelectedCostume}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎭</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Костюмы не найдены
            </h3>
            <p className="text-gray-500 mb-6">
              Попробуйте изменить параметры поиска или фильтры
            </p>
            <button 
              onClick={() => setFilters({ region: 'Все регионы', country: 'Все страны', searchTerm: '' })}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </main>

      {/* Additional Sections */}
      <AboutSection />
      <ServicesSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">Костюмы Народов Мира</h3>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Ведущий поставщик традиционных костюмов в Бишкеке. 
                Мы помогаем сохранять культурное наследие через аутентичную одежду.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/costumes_bishkek" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="https://facebook.com/costumes.bishkek" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="https://wa.me/996555123456" className="text-gray-400 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Продажа костюмов</li>
                <li>Аренда костюмов</li>
                <li>Индивидуальный пошив</li>
                <li>Консультации</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+996 555 123 456</li>
                <li>info@costumes.kg</li>
                <li>ул. Чуй, 123, Бишкек</li>
                <li>Пн-Пт: 9:00-19:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Костюмы Народов Мира. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </div>
  );
}

export default App;