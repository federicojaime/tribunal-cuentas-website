// src/components/pages/HistoriaPage.jsx
import React from 'react';
import { Clock, Calendar, Award, Landmark, FileText, CheckCircle, Star, Building2 } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';

// Importación de imagen histórica
import historiaImg from '../../assets/historia-tribunal.jpg'; // Asegúrate de que la ruta sea correcta

// Datos históricos del Tribunal
const HISTORIA_DATA = {
    fechaCreacion: '1946',
    descripcionPrincipal: 'El Honorable Tribunal de Cuentas de la Provincia de San Luis fue creado en 1946, siendo el primer Tribunal en implementar la Firma Digital y el Expediente Electrónico en la República Argentina.',
    mision: 'Se han dado pasos transcendentales para lograr la eficiencia en el Control Público.',
    hitos: [
        {
            id: 'creacion',
            año: '1946',
            titulo: 'Creación del Tribunal',
            descripcion: 'Se crea el Honorable Tribunal de Cuentas de la Provincia de San Luis.',
            icono: Landmark,
            color: 'from-blue-600 to-blue-800'
        },
        {
            id: 'constitucional',
            año: '1987',
            titulo: 'Rango Constitucional',
            descripcion: 'El Organismo adquiere rango Constitucional.',
            icono: FileText,
            color: 'from-emerald-600 to-emerald-800'
        },
        {
            id: 'expediente-electronico',
            año: '2009',
            titulo: 'Expediente Electrónico',
            descripcion: 'El HTC implementa el uso del expediente y documento electrónico. En ese mismo año el Tribunal de Cuentas certifica Normas de Calidad ISO 9001:2008.',
            icono: Award,
            color: 'from-purple-600 to-purple-800'
        },
        {
            id: 'firma-digital',
            año: '2010',
            titulo: 'Firma Digital',
            descripcion: 'Todos los expedientes electrónicos empiezan a ser firmados digitalmente.',
            icono: CheckCircle,
            color: 'from-orange-600 to-orange-800'
        },
        {
            id: 'certificacion-calidad',
            año: '2016',
            titulo: 'Certificación ISO 9001:2015',
            descripcion: 'El Tribunal de Cuentas certifica Normas de Calidad ISO 9001:2015 convirtiéndose en el primer Organismo Público de la Provincia en certificar bajo esta nueva versión de la Norma.',
            icono: Star,
            color: 'from-amber-600 to-amber-800'
        }
    ]
};

const LOGROS_DESTACADOS = [
    {
        titulo: 'Primer Tribunal Digital',
        descripcion: 'Primer Tribunal de Cuentas en Argentina en implementar completamente la digitalización de procesos',
        icono: Award
    },
    {
        titulo: 'Innovación Tecnológica',
        descripcion: 'Pioneros en el uso de firma digital y expediente electrónico en el control público',
        icono: Star
    },
    {
        titulo: 'Calidad Certificada',
        descripcion: 'Certificación ISO 9001 que garantiza la excelencia en nuestros procesos de control',
        icono: CheckCircle
    },
    {
        titulo: 'Transparencia Digital',
        descripcion: 'Implementación de herramientas digitales para mayor transparencia en la gestión pública',
        icono: Building2
    }
];

export const HistoriaPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Section padding="py-12">
            {/* Header principal */}
            <div className="mb-16">
                <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 rounded-3xl p-10 text-white relative overflow-hidden">
                    {/* Patrón decorativo */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-8 right-8 w-32 h-32 border-2 border-white rounded-full"></div>
                        <div className="absolute bottom-8 left-8 w-24 h-24 border-2 border-blue-300 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-purple-300 rounded-full"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mr-4">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-2">Historia Institucional</h1>
                                <p className="text-blue-200 text-lg">Tribunal de Cuentas de la Provincia de San Luis</p>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                            <p className="text-lg leading-relaxed text-blue-100 mb-4">
                                {HISTORIA_DATA.descripcionPrincipal}
                            </p>
                            <p className="text-blue-200 font-medium">
                                {HISTORIA_DATA.mision}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección de imagen histórica */}
            <div className="mb-16">
                <Card className="p-0 overflow-hidden bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Imagen */}
                        <div className="relative h-96 lg:h-auto">
                            <img
                                src={historiaImg}
                                alt="Historia del Tribunal de Cuentas"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwSDE1MFYzMDBIMjAwVjEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTI3NSAxMDBIMjI1VjMwMEgyNzVWMTAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMzUwIDEwMEgzMDBWMzAwSDM1MFYxMDBaIiBmaWxsPSIjOUNBM0FGIi8+CjxyZWN0IHg9IjEyNSIgeT0iNzUiIHdpZHRoPSIyNTAiIGhlaWdodD0iNTAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-xl p-4 text-white">
                                    <h2 className="text-2xl font-bold mb-1">Desde {HISTORIA_DATA.fechaCreacion}</h2>
                                    <p className="text-gray-200 text-lg">Al servicio de la transparencia pública</p>
                                </div>
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-8 flex flex-col justify-center">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-2xl flex items-center justify-center mb-4">
                                    <Calendar className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">Legado de Transparencia</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Más de {new Date().getFullYear() - parseInt(HISTORIA_DATA.fechaCreacion)} años de trayectoria
                                    institucional dedicados al control y la auditoría de los recursos públicos de la Provincia de San Luis.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Nuestro compromiso constante con la innovación nos ha convertido en referente nacional
                                    en modernización y digitalización de procesos de control público.
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Línea de tiempo de hitos */}
            <div className="mb-16">
                <SectionHeader
                    title="Hitos Históricos"
                    subtitle="Momentos clave en nuestra evolución institucional"
                />

                <div className="space-y-8">
                    {HISTORIA_DATA.hitos.map((hito, index) => (
                        <HitoCard key={hito.id} hito={hito} index={index} />
                    ))}
                </div>
            </div>

            {/* Logros destacados */}
            <div className="mb-16">
                <SectionHeader
                    title="Logros Destacados"
                    subtitle="Reconocimientos y avances institucionales"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {LOGROS_DESTACADOS.map((logro, index) => (
                        <LogroCard key={index} logro={logro} />
                    ))}
                </div>
            </div>

            {/* Mensaje institucional destacado */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-3">Compromiso con la Excelencia</h3>
                        <p className="text-blue-100 leading-relaxed">
                            A lo largo de nuestra historia, hemos mantenido un firme compromiso con la excelencia,
                            la transparencia y la innovación. Continuamos trabajando para ser un modelo de
                            eficiencia y modernización en el control de la gestión pública, siempre al servicio
                            de los ciudadanos de San Luis.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    </div>
);

const HitoCard = ({ hito, index }) => (
    <div className="flex items-start space-x-6 group">
        {/* Línea de tiempo visual */}
        <div className="flex flex-col items-center">
            <div className={`w-16 h-16 bg-gradient-to-br ${hito.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <hito.icono className="w-8 h-8 text-white" />
            </div>
            {index < HISTORIA_DATA.hitos.length - 1 && (
                <div className="w-1 h-16 bg-gradient-to-b from-gray-300 to-transparent mt-4"></div>
            )}
        </div>

        {/* Contenido del hito */}
        <Card className="flex-1 p-6 group-hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-blue-600 mr-3">{hito.año}</span>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    {hito.titulo}
                </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
                {hito.descripcion}
            </p>
        </Card>
    </div>
);

const LogroCard = ({ logro }) => (
    <Card className="p-6 group hover:shadow-xl transition-all duration-300">
        <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <logro.icono className="w-6 h-6 text-white" />
            </div>
            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {logro.titulo}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                    {logro.descripcion}
                </p>
            </div>
        </div>
    </Card>
);