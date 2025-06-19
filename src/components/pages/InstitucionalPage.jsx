import React from 'react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { IconWrapper } from '../ui/IconWrapper';
import { GradientButton } from '../ui/Button';
import { NAVIGATION_CONFIG } from '../../constants/navigation';

export const InstitucionalPage = () => (
  <Section>
    <SectionHeader 
      title="Información Institucional" 
      subtitle="Conoce nuestra estructura y funcionamiento" 
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {NAVIGATION_CONFIG.find(item => item.id === 'institucional')?.submenu?.map((item, index) => (
        <Card key={index} className="group text-center">
          <div className="mb-6 flex justify-center">
            <IconWrapper icon={item.icon} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.label}</h3>
          <GradientButton className="w-full">
            Ver Más
          </GradientButton>
        </Card>
      ))}
    </div>
  </Section>
);