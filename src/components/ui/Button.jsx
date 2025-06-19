import React from 'react';

export const GradientButton = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    ...props
}) => {
    const variants = {
        primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white',
        secondary: 'border-2 border-white border-opacity-50 hover:bg-white hover:text-gray-900 text-white backdrop-blur-sm',
        success: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            className={`${variants[variant]} ${sizes[size]} rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};