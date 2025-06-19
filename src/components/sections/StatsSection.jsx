import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { IconWrapper } from '../ui/IconWrapper';
import { STATS_DATA } from '../../constants/data';

export const StatsSection = () => (
  <Section background="bg-gradient-to-r from-gray-50 to-blue-50">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {STATS_DATA.map((stat, index) => (
        <div key={index} className="text-center group">
          <Card>
            <div className="mb-4 flex justify-center">
              <IconWrapper icon={stat.icon} color={stat.color} />
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </Card>
        </div>
      ))}
    </div>
  </Section>
);