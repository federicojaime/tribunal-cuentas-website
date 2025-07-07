// src/components/sections/HeroSection.jsx - SLIDER SIMPLIFICADO
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/siteConfig';

// Importación de imágenes PNG
import heroImg1 from '../../assets/hero-1.png';
import heroImg2 from '../../assets/hero-2.png';
import heroImg3 from '../../assets/hero-3.png';

// Configuración de slides corregida
const HERO_SLIDES = [
    {
        id: 1,
        title: 'Control y Transparencia',
        subtitle: 'Provincial',
        description: 'Garantizamos el uso eficiente y transparente de los recursos públicos a través del control externo y la auditoría permanente.',
        image: heroImg1,
        gradient: 'from-blue-600 via-indigo-700 to-purple-800',
        buttonText: 'Conocer Más',
        buttonAction: 'about'
    },
    {
        id: 2,
        title: 'Auditoría Municipal',
        subtitle: 'Especializada',
        description: 'Supervisamos la gestión de recursos en municipalidades y organismos públicos, promoviendo la rendición de cuentas.',
        image: heroImg2,
        gradient: 'from-indigo-600 via-purple-700 to-blue-800',
        buttonText: 'Ver Municipios',
        buttonAction: 'municipios'
    },
    {
        id: 3,
        title: 'Innovación Digital',
        subtitle: 'Certificada ISO 9001',
        description: 'Pioneros en digitalización con sistemas modernos de gestión, firma digital y expediente electrónico.',
        image: heroImg3,
        gradient: 'from-purple-600 via-blue-700 to-indigo-800',
        buttonText: 'Ver Tecnología',
        buttonAction: 'gestion-calidad'
    }
];

export const HeroSection = ({ onSectionChange }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play del slider
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    };

    const handleButtonClick = (action) => {
        console.log('Navegando a:', action); // Para debug
        if (onSectionChange) {
            onSectionChange(action);
        } else {
            console.warn('onSectionChange no está definido');
        }
    };

    const currentSlideData = HERO_SLIDES[currentSlide];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Fondo con gradiente dinámico */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} transition-all duration-1000`}></div>

            {/* Contenido principal */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center min-h-screen py-20">
                    
                    {/* Contenido textual - 2 columnas */}
                    <div className="lg:col-span-2 text-white space-y-8 order-2 lg:order-1">
                        {/* Título principal directo */}
                        <div className="space-y-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                                {currentSlideData.title}
                            </h1>
                            <h2 className="text-2xl sm:text-3xl font-semibold text-white text-opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                {currentSlideData.subtitle}
                            </h2>
                        </div>

                        {/* Descripción */}
                        <p className="text-lg text-white text-opacity-85 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            {currentSlideData.description}
                        </p>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <button
                                onClick={() => {
                                    console.log('Click en botón principal:', currentSlideData.buttonAction);
                                    handleButtonClick(currentSlideData.buttonAction);
                                }}
                                className="group bg-white text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center hover:bg-indigo-50"
                                type="button"
                            >
                                {currentSlideData.buttonText}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <button 
                                onClick={() => {
                                    console.log('Click en botón contacto');
                                    handleButtonClick('contacto');
                                }}
                                className="px-8 py-4 text-lg font-semibold text-white border-2 border-white border-opacity-70 rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300 hover:border-opacity-100 backdrop-blur-sm"
                                type="button"
                            >
                                Contactar
                            </button>
                        </div>
                    </div>

                    {/* Imagen ilustrativa - 3 columnas */}
                    <div className="lg:col-span-3 order-1 lg:order-2">
                        <div className="relative transform transition-all duration-1000 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            {/* Elementos decorativos flotantes */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white bg-opacity-10 rounded-full backdrop-blur-sm animate-float"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white bg-opacity-15 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white bg-opacity-20 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
                            
                            <img
                                src={currentSlideData.image}
                                alt={currentSlideData.title}
                                className="w-full h-auto mx-auto transition-all duration-1000 filter drop-shadow-2xl relative z-10"
                                style={{ maxHeight: '600px' }}
                                onError={(e) => {
                                    // Fallback SVG simplificado
                                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                                        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.2" />
                                                    <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.3" />
                                                </linearGradient>
                                            </defs>
                                            <rect width="600" height="400" fill="url(#grad)" rx="20"/>
                                            <circle cx="300" cy="150" r="60" fill="rgba(255,255,255,0.3)"/>
                                            <rect x="200" y="250" width="200" height="80" rx="10" fill="rgba(255,255,255,0.2)"/>
                                            <circle cx="250" cy="180" r="15" fill="rgba(255,255,255,0.4)"/>
                                            <circle cx="350" cy="180" r="15" fill="rgba(255,255,255,0.4)"/>
                                            <text x="300" y="370" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="18" font-family="Arial, sans-serif">
                                                ${currentSlideData.title}
                                            </text>
                                        </svg>
                                    `)}`;
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Controles del slider simplificados */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center space-x-4 bg-black bg-opacity-30 backdrop-blur-md rounded-full px-6 py-3">
                    
                    {/* Botón anterior */}
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-300"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>

                    {/* Indicadores de slides */}
                    <div className="flex space-x-2">
                        {HERO_SLIDES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-white scale-125' 
                                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                                aria-label={`Ir al slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Botón siguiente */}
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-300"
                        aria-label="Slide siguiente"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
};