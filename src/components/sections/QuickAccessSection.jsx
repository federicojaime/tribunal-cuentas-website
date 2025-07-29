// src/components/sections/QuickAccessSection.jsx - DISEÑO FORMAL UX/UI 2025
import React from 'react';
import {
    Users,
    Clock,
    FileText,
    Shield,
    Building2,
    Target,
    Star,
    Building,
    Bell,
    Scale,
    ArrowRight,
    ChevronRight
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

// Configuración de acceso rápido principales
const QUICK_ACCESS_CONFIG = [
    {
        id: 'autoridades',
        title: 'Autoridades',
        icon: Users,
        description: 'Estructura directiva institucional',
        color: 'from-blue-600 to-blue-800',
        category: 'autoridades'
    },
    {
        id: 'historia',
        title: 'Historia',
        icon: Clock,
        description: 'Trayectoria y evolución',
        color: 'from-amber-600 to-amber-800',
        category: 'historia'
    },
    {
        id: 'ley-organica',
        title: 'Ley Orgánica',
        icon: Scale,
        description: 'Marco jurídico vigente',
        color: 'from-emerald-600 to-emerald-800',
        category: 'ley-organica'
    },
    {
        id: 'municipios',
        title: 'Municipios',
        icon: Building,
        description: 'Control y auditoría municipal',
        color: 'from-purple-600 to-purple-800',
        category: 'municipios'
    }
];

// Servicios digitales principales
const DIGITAL_SERVICES = [
    {
        id: 'normas',
        title: 'Marco Normativo',
        icon: Shield,
        description: 'Consulte leyes, decretos y resoluciones vigentes',
        color: 'from-blue-500 to-cyan-500',
        category: 'normas'
    },
    {
        id: 'gestion-calidad',
        title: 'Gestión de Calidad',
        icon: Star,
        description: 'Sistema ISO 9001:2015 y mejora continua',
        color: 'from-violet-500 to-purple-500',
        category: 'gestion-calidad'
    },
    {
        id: 'nivel-operativo',
        title: 'Sistema Operativo',
        icon: Target,
        description: 'Portal exclusivo para organismos públicos',
        color: 'from-orange-500 to-amber-500',
        category: 'nivel-operativo'
    },
    {
        id: 'novedades',
        title: 'Novedades',
        icon: Bell,
        description: 'Últimas noticias y comunicados oficiales',
        color: 'from-rose-500 to-pink-500',
        category: 'novedades'
    }
];

export const QuickAccessSection = ({ onSectionChange }) => (
    <Section background="bg-white" padding="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header formal */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mb-6 shadow-lg">
                    <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Servicios Institucionales
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Acceso directo a las principales secciones y herramientas digitales 
                    del Honorable Tribunal de Cuentas
                </p>
            </div>

            {/* Secciones principales */}
            <div className="mb-20">
                <div className="flex items-center justify-center mb-12">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
                    <div className="px-6">
                        <h3 className="text-2xl font-bold text-gray-900 text-center">
                            Información Institucional
                        </h3>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {QUICK_ACCESS_CONFIG.map((item) => (
                        <QuickAccessCard
                            key={item.id}
                            item={item}
                            onClick={() => onSectionChange && onSectionChange(item.category)}
                        />
                    ))}
                </div>
            </div>

            {/* Servicios digitales */}
            <div className="mb-16">
                <div className="flex items-center justify-center mb-12">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
                    <div className="px-6">
                        <h3 className="text-2xl font-bold text-gray-900 text-center">
                            Herramientas Digitales
                        </h3>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {DIGITAL_SERVICES.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onClick={() => onSectionChange && onSectionChange(service.category)}
                        />
                    ))}
                </div>
            </div>

            {/* Información adicional */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 sm:p-12 border border-gray-200">
                <div className="text-center max-w-4xl mx-auto">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        Compromiso con la Transparencia
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        El Tribunal de Cuentas facilita el acceso a la información pública 
                        a través de herramientas digitales modernas, garantizando transparencia 
                        y eficiencia en el control de la gestión gubernamental.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <div className="p-4">
                            <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                            <div className="text-sm text-gray-600">Servicios digitales disponibles</div>
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold text-emerald-600 mb-1">ISO 9001:2015</div>
                            <div className="text-sm text-gray-600">Certificación de calidad</div>
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold text-purple-600 mb-1">Digital</div>
                            <div className="text-sm text-gray-600">Procesos modernizados</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

// Componente para acceso rápido simplificado
const QuickAccessCard = ({ item, onClick }) => (
    <button
        onClick={onClick}
        className="group w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 text-center"
    >
        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-md`}>
            <item.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {item.description}
        </p>
        <div className="flex items-center justify-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Acceder</span>
            <ChevronRight className="w-4 h-4 ml-1" />
        </div>
    </button>
);

// Componente para servicios simplificado
const ServiceCard = ({ service, onClick }) => (
    <button
        onClick={onClick}
        className="group w-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 text-left"
    >
        <div className="flex items-start space-x-4">
            <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0 shadow-md`}>
                <service.icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explorar servicio</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>
        </div>
    </button>
);