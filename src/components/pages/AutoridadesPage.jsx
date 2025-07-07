// src/components/pages/AutoridadesPage.jsx - VERSIÓN PROFESIONAL 2025
import React, { useState } from 'react';
import { Users, Shield, Building2, Scale, ChevronRight, X, User } from 'lucide-react';

// Importación de imágenes
import presidentaImg from '../../assets/images/autoridades/presidenta-natalia-hasea.jpg';
import vocalOsteImg from '../../assets/images/autoridades/vocal-sergio-oste.jpg';
import vocalCatallamoImg from '../../assets/images/autoridades/vocal-guillermo-catallamo.jpg';
import vocalBadaloniImg from '../../assets/images/autoridades/vocal-cecilia-badaloni.jpg';
import vocalFerraroImg from '../../assets/images/autoridades/vocal-alberto-ferraro.jpg';

const AUTORIDADES_DATA = {
    presidenta: {
        id: 'presidenta',
        nombre: 'Lic. Natalia Hissa',
        cargo: 'Presidenta',
        imagen: presidentaImg,
        funciones: [
            'Representación institucional del Tribunal',
            'Coordinación de actividades de control',
            'Gobierno interno y administración'
        ]
    },
    vocales: [
        {
            id: 'vocal-oste',
            nombre: 'Dr. Sergio Tomás Oste',
            cargo: 'Vocal',
            imagen: vocalOsteImg,
            especialidad: 'Derecho Público'
        },
        {
            id: 'vocal-catallamo',
            nombre: 'Dr. Guillermo Catallamo',
            cargo: 'Vocal',
            imagen: vocalCatallamoImg,
            especialidad: 'Derecho Administrativo'
        },
        {
            id: 'vocal-badaloni',
            nombre: 'C.P.N. Cecilia Badaloni',
            cargo: 'Vocal',
            imagen: vocalBadaloniImg,
            especialidad: 'Auditoría y Control'
        },
        {
            id: 'vocal-ferraro',
            nombre: 'C.P.N. Alberto Ferraro',
            cargo: 'Vocal',
            imagen: vocalFerraroImg,
            especialidad: 'Gestión Financiera'
        }
    ]
};

const MARCO_INSTITUCIONAL = [
    {
        titulo: 'Composición',
        descripcion: 'Cinco miembros según normativa provincial',
        icono: Users,
        valor: '5 Miembros'
    },
    {
        titulo: 'Control',
        descripcion: 'Autoridad exclusiva de fiscalización',
        icono: Shield,
        valor: 'Imperium'
    },
    {
        titulo: 'Estructura',
        descripcion: 'Apoyo técnico especializado',
        icono: Building2,
        valor: '3 Áreas'
    },
    {
        titulo: 'Marco Legal',
        descripcion: 'Ley Orgánica del Tribunal',
        icono: Scale,
        valor: 'Base Normativa'
    }
];

export const AutoridadesPage = () => {
    const [selectedAuthority, setSelectedAuthority] = useState(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-slate-900 text-white py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            Autoridades del Tribunal
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Honorable Tribunal de Cuentas de la Provincia de San Luis
                        </p>
                    </div>
                </div>
            </header>

            {/* Presidenta */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Presidenta</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    
                    <PresidentaCard autoridad={AUTORIDADES_DATA.presidenta} />
                </div>
            </section>

            {/* Vocales */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Vocales</h2>
                        <p className="text-lg text-gray-600 mb-8">Miembros del cuerpo colegiado</p>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {AUTORIDADES_DATA.vocales.map((vocal) => (
                            <VocalCard 
                                key={vocal.id} 
                                vocal={vocal}
                                onClick={() => setSelectedAuthority(vocal)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Marco Institucional */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Marco Institucional</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {MARCO_INSTITUCIONAL.map((item, index) => (
                            <MarcoCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Base Legal */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center mb-8">
                            <Scale className="w-12 h-12 text-blue-300" />
                        </div>
                        <h2 className="text-2xl font-bold mb-6">Fundamento Legal</h2>
                        <p className="text-lg text-blue-100 leading-relaxed">
                            <span className="font-semibold text-white">Artículo 3° de la Ley Orgánica del Tribunal de Cuentas:</span> 
                            {" "}El Tribunal de Cuentas es la única autoridad con imperium exclusivo en el orden administrativo, 
                            para aprobar o desechar las cuentas rendidas en la Administración Provincial, reparticiones autárquicas, 
                            entes centralizados, descentralizados, desconcentrados y municipalidades de la Provincia de San Luis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedAuthority && (
                <Modal 
                    authority={selectedAuthority} 
                    onClose={() => setSelectedAuthority(null)} 
                />
            )}
        </div>
    );
};

const PresidentaCard = ({ autoridad }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Imagen */}
            <div className="relative h-96 lg:h-auto">
                <img
                    src={autoridad.imagen}
                    alt={autoridad.nombre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNGOUZBRkIiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNjAiIHI9IjYwIiBmaWxsPSIjRTVFN0VCIi8+PHBhdGggZD0iTTEwMCAzMDBDMTAwIDI1NiAxNDQgMjIwIDIwMCAyMjBTMzAwIDI1NiAzMDAgMzAwSDEwMFoiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=';
                    }}
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {autoridad.cargo}
                    </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {autoridad.nombre}
                </h3>
                
                <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Funciones Principales
                    </h4>
                    <div className="space-y-3">
                        {autoridad.funciones.map((funcion, index) => (
                            <div key={index} className="flex items-start">
                                <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{funcion}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const VocalCard = ({ vocal, onClick }) => (
    <div 
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
        onClick={onClick}
    >
        <div className="p-8 text-center">
            {/* Imagen */}
            <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100 ring-4 ring-gray-200 group-hover:ring-blue-300 transition-all duration-300">
                    <img
                        src={vocal.imagen}
                        alt={vocal.nombre}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNjQiIGZpbGw9IiNGOUZBRkIiLz48Y2lyY2xlIGN4PSI2NCIgY3k9IjQ4IiByPSIyMCIgZmlsbD0iI0U1RTdFQiIvPjxwYXRoIGQ9Ik0zMiA5NkMzMiA4MCA0NiA2OCA2NCA2OFM5NiA4MCA5NiA5NkgzMloiIGZpbGw9IiNFNUU3RUIiLz48L3N2Zz4=';
                        }}
                    />
                </div>
            </div>

            {/* Info */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {vocal.nombre}
                </h3>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {vocal.cargo}
                </span>
                {vocal.especialidad && (
                    <p className="text-gray-600 text-sm">
                        {vocal.especialidad}
                    </p>
                )}
            </div>

            {/* Acción */}
            <button className="text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Ver más información
            </button>
        </div>
    </div>
);

const MarcoCard = ({ item }) => (
    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <item.icono className="w-8 h-8 text-white" />
        </div>
        
        <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {item.valor}
            </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-3">
            {item.titulo}
        </h3>
        
        <p className="text-gray-600 text-sm">
            {item.descripcion}
        </p>
    </div>
);

const Modal = ({ authority, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                        Información del Vocal
                    </h3>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Contenido */}
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-100 mb-4">
                        <img
                            src={authority.imagen}
                            alt={authority.nombre}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0OCIgY3k9IjQ4IiByPSI0OCIgZmlsbD0iI0Y5RkFGQiIvPjxjaXJjbGUgY3g9IjQ4IiBjeT0iMzYiIHI9IjE2IiBmaWxsPSIjRTVFN0VCIi8+PHBhdGggZD0iTTI0IDcyQzI0IDYwIDM0IDUyIDQ4IDUyUzcyIDYwIDcyIDcySDI0WiIgZmlsbD0iI0U1RTdFQiIvPjwvc3ZnPg==';
                            }}
                        />
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {authority.nombre}
                    </h4>
                    
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {authority.cargo}
                    </span>
                    
                    {authority.especialidad && (
                        <div className="bg-gray-50 rounded-lg p-4">
                            <h5 className="font-medium text-gray-900 mb-1">Especialidad</h5>
                            <p className="text-gray-600 text-sm">{authority.especialidad}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);