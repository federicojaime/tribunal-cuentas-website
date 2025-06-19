import React from 'react';

export const IconWrapper = ({ 
  icon: Icon, 
  size = 'md', 
  color = 'from-blue-500 to-purple-600',
  className = '' 
}) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };
  
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };
  
  return (
    <div className={`${sizes[size]} bg-gradient-to-br ${color} rounded-full flex items-center justify-center group-hover:scale-110 transform transition-transform duration-300 ${className}`}>
      <Icon className={`${iconSizes[size]} text-white`} />
    </div>
  );
};