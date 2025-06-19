import React from 'react';

export const Card = ({
    children,
    className = '',
    hover = true,
    padding = 'p-6',
    ...props
}) => (
    <div
        className={`bg-white rounded-2xl shadow-xl ${hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''} transition-all duration-300 ${padding} ${className}`}
        {...props}
    >
        {children}
    </div>
);