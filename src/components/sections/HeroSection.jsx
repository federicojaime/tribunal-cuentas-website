// src/components/sections/HeroSection.jsx - TRANSICIONES MEJORADAS Y SINCRONIZADAS
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
        subtitle: 'Certificada ISO 9001:2015',
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
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [animationPhase, setAnimationPhase] = useState('idle'); // idle, exit, enter

    // Auto-play del slider
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            changeSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5500); // Aumentado ligeramente para dar más tiempo a las animaciones

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Función para cambio sincronizado de slides
    const changeSlide = (newSlide) => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setAnimationPhase('exit');
        
        // Fase de salida - elementos se desvanecen
        setTimeout(() => {
            setCurrentSlide(newSlide);
            setAnimationPhase('enter');
        }, 400); // Tiempo para que salgan los elementos
        
        // Fase de entrada - elementos aparecen
        setTimeout(() => {
            setAnimationPhase('idle');
            setIsTransitioning(false);
        }, 800); // Tiempo total de transición
    };

    const goToSlide = (index) => {
        if (index !== currentSlide && !isTransitioning) {
            changeSlide(index);
        }
    };

    const nextSlide = () => {
        if (!isTransitioning) {
            changeSlide((currentSlide + 1) % HERO_SLIDES.length);
        }
    };

    const prevSlide = () => {
        if (!isTransitioning) {
            changeSlide((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
        }
    };

    const handleButtonClick = (action) => {
        console.log('Navegando a:', action);
        // Pausa el autoplay cuando el usuario interactúa
        setIsAutoPlaying(false);
        
        if (onSectionChange) {
            onSectionChange(action);
        } else {
            console.warn('onSectionChange no está definido');
        }
    };

    const currentSlideData = HERO_SLIDES[currentSlide];

    // Clases de animación basadas en la fase
    const getTextAnimationClass = () => {
        switch (animationPhase) {
            case 'exit':
                return 'opacity-0 -translate-y-8 scale-95';
            case 'enter':
                return 'opacity-0 translate-y-8 scale-95';
            case 'idle':
            default:
                return 'opacity-100 translate-y-0 scale-100';
        }
    };

    const getImageAnimationClass = () => {
        switch (animationPhase) {
            case 'exit':
                return 'opacity-0 translate-x-8 scale-90 rotate-3';
            case 'enter':
                return 'opacity-0 -translate-x-8 scale-90 -rotate-3';
            case 'idle':
            default:
                return 'opacity-100 translate-x-0 scale-100 rotate-0 hover:scale-105';
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Fondo con gradiente dinámico - transición más suave */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} transition-all duration-1000 ease-in-out`}></div>

            {/* Overlay para mejor legibilidad */}
            <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-1000"></div>

            {/* Elementos decorativos flotantes para todo el hero - Solo en desktop */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-20 h-20 bg-white bg-opacity-10 rounded-full backdrop-blur-sm animate-float"></div>
                <div className="absolute bottom-32 left-16 w-16 h-16 bg-white bg-opacity-15 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 right-32 w-12 h-12 bg-white bg-opacity-20 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-8 w-14 h-14 bg-white bg-opacity-10 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-20 right-1/4 w-10 h-10 bg-white bg-opacity-25 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-16 left-1/3 w-8 h-8 bg-white bg-opacity-15 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '2.5s' }}></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-screen py-12 sm:py-16 lg:py-20">
                    
                    {/* Contenido textual - Con animaciones sincronizadas */}
                    <div className="lg:col-span-2 text-white space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                        
                        {/* Título principal con animación escalonada */}
                        <div className={`space-y-3 sm:space-y-4 lg:space-y-6 transform transition-all duration-700 ease-out ${getTextAnimationClass()}`}>
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                                {currentSlideData.title}
                            </h1>
                            <h2 className={`text-lg sm:text-xl lg:text-3xl font-semibold text-white text-opacity-90 transform transition-all duration-700 ease-out delay-100 ${getTextAnimationClass()}`}>
                                {currentSlideData.subtitle}
                            </h2>
                        </div>

                        {/* Descripción con delay adicional */}
                        <p className={`hidden sm:block text-base lg:text-lg text-white text-opacity-85 leading-relaxed transform transition-all duration-700 ease-out delay-200 ${getTextAnimationClass()}`}>
                            {currentSlideData.description}
                        </p>

                        {/* Botones con animación escalonada */}
                        <div className={`flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 sm:pt-4 transform transition-all duration-700 ease-out delay-300 ${getTextAnimationClass()}`}>
                            <button
                                onClick={() => handleButtonClick(currentSlideData.buttonAction)}
                                className="group bg-white text-indigo-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center hover:bg-indigo-50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                type="button"
                                disabled={isTransitioning}
                            >
                                {currentSlideData.buttonText}
                                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            
                            <button 
                                onClick={() => handleButtonClick('contacto')}
                                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white border-2 border-white border-opacity-70 rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300 hover:border-opacity-100 backdrop-blur-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                type="button"
                                disabled={isTransitioning}
                            >
                                Contactar
                            </button>
                        </div>
                    </div>

                    {/* Imagen con animación sincronizada */}
                    <div className="lg:col-span-3 order-1 lg:order-2">
                        <div className="relative max-w-sm sm:max-w-md lg:max-w-none mx-auto">
                            {/* Contenedor con dimensiones fijas - SIN FONDO */}
                            <div 
                                className="relative"
                                style={{ 
                                    height: window.innerWidth < 640 ? '300px' : window.innerWidth < 1024 ? '400px' : '600px'
                                }}
                            >
                                {/* Imagen principal con animación sincronizada */}
                                <img
                                    src={currentSlideData.image}
                                    alt={currentSlideData.title}
                                    className={`w-full h-full object-contain transform transition-all duration-700 ease-out filter drop-shadow-2xl ${getImageAnimationClass()}`}
                                    onError={(e) => {
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
                                
                                {/* Efecto de brillo durante la transición */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform -skew-x-12 transition-all duration-700 ${
                                    animationPhase === 'enter' ? 'opacity-20 translate-x-full' : '-translate-x-full'
                                }`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controles del slider mejorados */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center space-x-2 sm:space-x-4 bg-black bg-opacity-30 backdrop-blur-md rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-white border-opacity-20 shadow-lg">
                    
                    {/* Botón anterior */}
                    <button
                        onClick={prevSlide}
                        disabled={isTransitioning}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-opacity-40 disabled:bg-opacity-10 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </button>

                    {/* Indicadores de slides con animación */}
                    <div className="flex space-x-1 sm:space-x-2">
                        {HERO_SLIDES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                disabled={isTransitioning}
                                className={`rounded-full transition-all duration-500 hover:scale-125 disabled:cursor-not-allowed ${
                                    index === currentSlide 
                                        ? 'w-6 h-2 sm:w-8 sm:h-3 bg-white shadow-lg' 
                                        : 'w-2 h-2 sm:w-3 sm:h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                                aria-label={`Ir al slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Botón siguiente */}
                    <button
                        onClick={nextSlide}
                        disabled={isTransitioning}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-opacity-40 disabled:bg-opacity-10 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                        aria-label="Slide siguiente"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </button>
                </div>
                
                {/* Indicador de auto-play mejorado */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
                        isAutoPlaying ? 'bg-green-400 animate-pulse shadow-green-400 shadow-lg' : 'bg-gray-400'
                    }`}></div>
                </div>
            </div>

            {/* Estilos CSS adicionales */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                /* Mejoras para transiciones suaves */
                .transition-all {
                    transition-property: all;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                /* Prevenir flash durante transiciones */
                .transform {
                    transform-style: preserve-3d;
                    backface-visibility: hidden;
                }
            `}</style>
        </section>
    );
};