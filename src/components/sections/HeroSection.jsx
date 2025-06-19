// src/components/sections/HeroSection.jsx
import React from 'react';
import { Shield, ArrowRight, ChevronDown } from 'lucide-react';
import { IconWrapper } from '../ui/IconWrapper';
import { GradientButton } from '../ui/Button';
import { SITE_CONFIG } from '../../constants/siteConfig';
import Hero from '../../assets/hero.jpg';

export const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>

        {/* Imagen de fondo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <img
                src={Hero}
                alt="Auditoría y Control"
                className="w-full h-full object-cover" />
        </div>

        {/* Overlay para mejor legibilidad */}
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>

        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-indigo-200 rounded-full opacity-35 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <div className="transform animate-fade-in-up">
                <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-xl">
                        <Shield className="w-10 h-10 text-white" />
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                    {SITE_CONFIG.title}
                </h1>

                <h2 className="text-2xl md:text-3xl mb-8 text-blue-700 font-semibold">
                    {SITE_CONFIG.subtitle}
                </h2>

               
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <GradientButton size="lg" className="shadow-xl">
                        Conocer Más
                        <ArrowRight className="inline ml-2 w-5 h-5" />
                    </GradientButton>
                    <button className="px-8 py-4 text-lg font-semibold text-blue-700 border-2 border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                        Ver Novedades
                    </button>
                </div>
            </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-600" />
        </div>
    </section>
);