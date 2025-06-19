// src/components/sections/QuickAccessSection.jsx - ACTUALIZADO
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
    Phone,
    Mail,
    Scale,
    Award
} from 'lucide-react';
import { Section } from '../ui/Section';

// Configuración actualizada para navegación directa a páginas específicas
const QUICK_ACCESS_CONFIG = [
    {
        id: 'autoridades',
        title: 'Autoridades',
        icon: Users,
        description: 'Estructura directiva',
        gradient: 'from-blue-600 via-blue-700 to-blue-800',
        category: 'autoridades'
    },
    {
        id: 'historia',
        title: 'Historia',
        icon: Clock,
        description: 'Trayectoria institucional',
        gradient: 'from-amber-600 via-amber-700 to-amber-800',
        category: 'historia'  // CAMBIADO: navegación directa a historia
    },
    {
        id: 'ley-organica',
        title: 'Ley Orgánica',
        icon: Scale,
        description: 'Marco jurídico',
        gradient: 'from-emerald-600 via-emerald-700 to-emerald-800',
        category: 'ley-organica'
    },
    {
        id: 'municipios',
        title: 'Municipios',
        icon: Building,
        description: 'Control municipal',
        gradient: 'from-purple-600 via-purple-700 to-purple-800',
        category: 'municipios'
    }
];

// Servicios institucionales actualizados
const INSTITUTIONAL_SERVICES = [
    {
        id: 'normas',
        title: 'Normas',
        icon: Shield,
        description: 'Normativas y reglamentaciones vigentes',
        color: 'from-blue-500 to-cyan-500',
        category: 'normas'
    },
    {
        id: 'constitucion',
        title: 'Constitución Provincial',
        icon: Building2,
        description: 'Marco constitucional de San Luis',
        color: 'from-emerald-500 to-teal-500',
        category: 'constitucion'
    },
    {
        id: 'nivel-operativo',
        title: 'Nivel Operativo',
        icon: Target,
        description: 'Gestión operativa institucional',
        color: 'from-orange-500 to-amber-500',
        category: 'nivel-operativo'  // NAVEGACIÓN DIRECTA AL LOGIN
    },
    {
        id: 'gestion-calidad',
        title: 'Gestión de Calidad',
        icon: Star,
        description: 'Sistemas de calidad y mejora continua',
        color: 'from-violet-500 to-purple-500',
        category: 'gestion-calidad'  // NAVEGACIÓN DIRECTA A GESTIÓN DE CALIDAD
    },
    {
        id: 'novedades',
        title: 'Novedades',
        icon: Bell,
        description: 'Últimas noticias y actualizaciones',
        color: 'from-rose-500 to-pink-500',
        category: 'novedades'
    },
    {
        id: 'contacto',
        title: 'Contacto',
        icon: Phone,
        description: 'Información de contacto y ubicación',
        color: 'from-indigo-500 to-blue-500',
        category: 'contacto'
    }
];

// Información de contacto rápido
const CONTACT_INFO = [
    {
        id: 'vocalias',
        title: 'Vocalías y Secretaría Legal',
        subtitle: 'Ayacucho 1076 - San Luis',
        icon: Building2,
        color: 'from-blue-500 to-blue-600'
    },
    {
        id: 'contaduria',
        title: 'Contaduría Fiscal General',
        subtitle: 'Ayacucho 945 - 4° Piso',
        icon: FileText,
        color: 'from-green-500 to-green-600'
    },
    {
        id: 'mesa-entradas',
        title: 'Mesa de Entradas',
        subtitle: 'Ayacucho 945 - 4° Piso',
        icon: Mail,
        color: 'from-purple-500 to-purple-600'
    }
];

export const QuickAccessSection = ({ onSectionChange }) => (
    <Section background="bg-gradient-to-br from-gray-50 to-blue-50" padding="py-16">
        {/* Sección de Acceso Frecuente */}
        <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 mb-8 relative overflow-hidden">
                {/* Patrón de fondo decorativo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 border border-white rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-2 relative z-10">
                    Acceso Frecuente
                </h2>
                <p className="text-blue-100 relative z-10">
                    Navegación rápida a las secciones principales
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 relative z-10">
                    {QUICK_ACCESS_CONFIG.map((item) => (
                        <QuickAccessButton
                            key={item.id}
                            item={item}
                            onClick={() => onSectionChange && onSectionChange(item.category)}
                        />
                    ))}
                </div>
            </div>
        </div>

        {/* Sección de Servicios Institucionales */}
        <div className="mb-16">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Servicios Institucionales
                </h2>
                <p className="text-xl text-gray-600">
                    Herramientas y recursos del Tribunal de Cuentas
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {INSTITUTIONAL_SERVICES.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        onClick={() => onSectionChange && onSectionChange(service.category)}
                    />
                ))}
            </div>
        </div>

        {/* Sección de Información de Contacto Rápido */}
        <div>
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Información de Contacto
                </h2>
                <p className="text-lg text-gray-600">
                    Ubicaciones y dependencias principales
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CONTACT_INFO.map((contact) => (
                    <ContactCard
                        key={contact.id}
                        contact={contact}
                        onClick={() => onSectionChange && onSectionChange('contacto')}
                    />
                ))}
            </div>

            {/* Información adicional de contacto */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <Phone className="w-5 h-5 text-blue-600 mr-2" />
                            Teléfonos de Contacto
                        </h3>
                        <div className="space-y-1 text-gray-600">
                            <p className="font-medium">0266-4423791</p>
                            <p className="font-medium">0266-4425454</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <Mail className="w-5 h-5 text-green-600 mr-2" />
                            Correo Electrónico
                        </h3>
                        <p className="text-gray-600 break-all">
                            tribunaldecuentassl@htc.sanluis.gov.ar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const QuickAccessButton = ({ item, onClick }) => (
    <button
        onClick={onClick}
        className="group bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20"
    >
        <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                <item.icon className="w-8 h-8 text-white" />
            </div>
            <div>
                <h3 className="text-white font-semibold text-sm leading-tight">
                    {item.title}
                </h3>
                <p className="text-blue-100 text-xs mt-1 opacity-80">
                    {item.description}
                </p>
            </div>
        </div>
    </button>
);

const ServiceCard = ({ service, onClick }) => (
    <button
        onClick={onClick}
        className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 text-left w-full"
    >
        <div className="flex items-start space-x-4">
            <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <service.icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                </p>
            </div>
        </div>

        {/* Indicador de hover */}
        <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    </button>
);

const ContactCard = ({ contact, onClick }) => (
    <button
        onClick={onClick}
        className="group bg-white rounded-xl p-5 shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 text-left w-full"
    >
        <div className="flex items-center space-x-3 mb-3">
            <div className={`w-10 h-10 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {contact.title}
                </h3>
            </div>
        </div>
        <p className="text-gray-600 text-sm">
            {contact.subtitle}
        </p>
    </button>
);