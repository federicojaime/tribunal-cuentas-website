import React from 'react';

export const Section = ({ 
  children, 
  className = '', 
  background = 'bg-white',
  padding = 'py-20' 
}) => (
  <section className={`${background} ${padding} ${className}`}>
    <div className="max-w-6xl mx-auto px-6">
      {children}
    </div>
  </section>
);

export const SectionHeader = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
    {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
  </div>
);