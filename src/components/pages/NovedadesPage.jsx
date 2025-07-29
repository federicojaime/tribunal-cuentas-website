import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { GradientButton } from '../ui/Button';
import { NEWS_DATA } from '../../constants/data';

export const NovedadesPage = () => (
  <Section>
    <SectionHeader 
      title="Novedades y Eventos" 
      subtitle="Mantente al día con nuestras actividades" 
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {NEWS_DATA.map((item) => (
        <Card key={item.id} className="overflow-hidden group h-full flex flex-col">
          <div className="relative overflow-hidden">
            <div className="w-full h-56 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <Bell className="w-20 h-20 text-white opacity-50" />
            </div>
            <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-semibold text-gray-700">
              {item.category}
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <div className="text-sm text-gray-500 mb-3">{item.date}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {item.title}
            </h3>
            {item.excerpt && (
              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                {item.excerpt}
              </p>
            )}
            <div className="mt-auto">
              <GradientButton className="flex items-center">
                Leer Completo
                <ArrowRight className="w-4 h-4 ml-2" />
              </GradientButton>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);