import React from 'react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { IconWrapper } from '../ui/IconWrapper';
import { GradientButton } from '../ui/Button';
import { NAVIGATION_CONFIG } from '../../constants/navigation';

export const CalidadPage = () => (
  <Section>
    <SectionHeader 
      title="Gestión de Calidad" 
      subtitle="Compromiso con la excelencia en nuestros procesos" 
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {NAVIGATION_CONFIG.find(item => item.id === 'calidad')?.submenu?.map((item, index) => (
        <Card key={index} className="group text-center">
          <div className="mb-6 flex justify-center">
            <IconWrapper icon={item.icon} size="lg" color="from-green-500 to-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.label}</h3>
          <GradientButton variant="success" size="lg" className="w-full">
            Conocer Más
          </GradientButton>
        </Card>
      ))}
    </div>
  </Section>
);