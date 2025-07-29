// src/components/pages/AutoridadesPage.jsx - VERSIÓN PROFESIONAL 2025 - ESTÉTICA MEJORADA
import React, { useState } from 'react';
import { Users, Shield, Building2, Scale, ChevronRight, X, User, Crown } from 'lucide-react';

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
        imagen: presidentaImg
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
            <header className="bg-slate-900 text-white py-12 md:py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                            Autoridades del Tribunal
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                            Honorable Tribunal de Cuentas de la Provincia de San Luis
                        </p>
                    </div>
                </div>
            </header>

            {/* Información Institucional */}
            <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Integración del Tribunal
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
                            <div className="flex items-start mb-6">
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                    <Scale className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                                        Composición y Estructura Institucional
                                    </h3>
                                </div>
                            </div>

                            <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-4">
                                <p>
                                    El Honorable Tribunal de Cuentas de la Provincia de San Luis está integrado por cinco miembros;
                                    el Presidente y cuatro Vocales. El Presidente tiene la representación del Tribunal y posee a su
                                    cargo el Gobierno Interino del mismo, con las atribuciones legales y reglamentarias que le corresponden.
                                </p>

                                <p>
                                    Su estructura orgánica se compone de un Secretario Legal, un Contador Fiscal General y un Asesor
                                    Jurídico y ejercerá el control externo de la Gestión Económica Financiera de la Hacienda Pública
                                    Provincial, a través de las Contadurías Fiscales.
                                </p>

                                <p>
                                    El Honorable Tribunal de Cuentas es la única autoridad con imperium exclusivo en el orden administrativo,
                                    para aprobar o desechar las cuentas rendidas en la Administración Provincial, reparticiones autárquicas,
                                    entes centralizados, descentralizados, desconcentrados y municipalidades.
                                </p>

                                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                                    <p className="text-sm text-blue-800 font-medium">
                                        <strong>Artículo 3º de la Ley Orgánica del Tribunal de Cuentas de la Provincia de San Luis</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Organigrama de Autoridades */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12 lg:mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Organigrama de Autoridades</h2>
                        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">Estructura jerárquica del Tribunal</p>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    {/* Presidenta - Nivel Superior */}
                    <div className="flex justify-center mb-12 md:mb-16">
                        <PresidentaCard autoridad={AUTORIDADES_DATA.presidenta} />
                    </div>

                    {/* Línea conectora vertical */}
                    <div className="flex justify-center mb-8">
                        <div className="w-px h-12 bg-gray-300"></div>
                    </div>

                    {/* Línea horizontal para conectar vocales */}
                    <div className="flex justify-center mb-8">
                        <div className="relative w-full max-w-4xl">
                            <div className="absolute top-0 left-0 right-0 h-px bg-gray-300"></div>
                            <div className="grid grid-cols-4 gap-0">
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="flex justify-center">
                                        <div className="w-px h-8 bg-gray-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Vocales - Nivel Inferior */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
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
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12 lg:mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Marco Institucional</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {MARCO_INSTITUCIONAL.map((item, index) => (
                            <MarcoCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Base Legal */}
            <section className="py-12 md:py-16 lg:py-20 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center mb-6 md:mb-8">
                            <Scale className="w-10 h-10 md:w-12 md:h-12 text-blue-300" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Fundamento Legal</h2>
                        <p className="text-base md:text-lg text-blue-100 leading-relaxed">
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

// Componente Presidenta rediseñado para organigrama
const PresidentaCard = ({ autoridad }) => (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden relative max-w-sm w-full">
        {/* Badge de presidenta 
        <div className="absolute -top-2 -right-2 z-10">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Crown className="w-4 h-4 text-white" />
            </div>
        </div>*/}
        
        <div className="p-6 text-center">
            {/* Imagen más pequeña */}
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-gray-100 ring-4 ring-blue-500 mb-4">
                <img
                    src={autoridad.imagen}
                    alt={autoridad.nombre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI0MCIgZmlsbD0iI0Y5RkFGQiIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iMzAiIHI9IjEyIiBmaWxsPSIjRTVFN0VCIi8+PHBhdGggZD0iTTIwIDYwQzIwIDUwIDI4IDQ0IDQwIDQ0UzYwIDUwIDYwIDYwSDIwWiIgZmlsbD0iI0U1RTdFQiIvPjwvc3ZnPg==';
                    }}
                />
            </div>

            {/* Información */}
            <div>
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {autoridad.cargo}
                </span>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {autoridad.nombre}
                </h3>
            </div>
        </div>
    </div>
);

// Componente Vocal rediseñado para organigrama
const VocalCard = ({ vocal, onClick }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200">
        <div className="p-4 text-center">
            {/* Imagen más pequeña */}
            <div className="w-16 h-16 mx-auto rounded-full overflow-hidden bg-gray-100 ring-2 ring-gray-300 group-hover:ring-blue-400 transition-all duration-300 mb-3">
                <img
                    src={vocal.imagen}
                    alt={vocal.nombre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIzMiIgZmlsbD0iI0Y5RkFGQiIvPjxjaXJjbGUgY3g9IjMyIiBjeT0iMjQiIHI9IjEwIiBmaWxsPSIjRTVFN0VCIi8+PHBhdGggZD0iTTE2IDQ4QzE2IDQwIDIyIDM2IDMyIDM2UzQ4IDQwIDQ4IDQ4SDE2WiIgZmlsbD0iI0U1RTdFQiIvPjwvc3ZnPg==';
                    }}
                />
            </div>

            {/* Info compacta */}
            <div className="mb-3">
                <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium mb-2">
                    {vocal.cargo}
                </span>
                <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {vocal.nombre}
                </h3>
            </div>

            {/* Especialidad opcional */}
            {vocal.especialidad && (
                <p className="text-xs text-gray-500 mb-2">
                    {vocal.especialidad}
                </p>
            )}

            {/* Botón de acción sutil
            <button 
                onClick={() => onClick(vocal)}
                className="text-blue-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            >
                Ver detalles
            </button> */}
        </div>
    </div>
);

const MarcoCard = ({ item }) => (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6">
            <item.icono className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>

        <div className="mb-3 md:mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {item.valor}
            </span>
        </div>

        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
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