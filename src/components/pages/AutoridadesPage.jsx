// src/components/pages/AutoridadesPage.jsx
import React from 'react';
import { Users, Award, Shield, Building2, Scale, Crown } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';

// Importación de imágenes de autoridades
import presidentaImg from '../../assets/images/autoridades/presidenta-natalia-hasea.jpg';
import vocalOsteImg from '../../assets/images/autoridades/vocal-sergio-oste.jpg';
import vocalCatallamoImg from '../../assets/images/autoridades/vocal-guillermo-catallamo.jpg';
import vocalBadaloniImg from '../../assets/images/autoridades/vocal-cecilia-badaloni.jpg';
import vocalFerraroImg from '../../assets/images/autoridades/vocal-alberto-ferraro.jpg';

// Datos de las autoridades
const AUTORIDADES_DATA = {
    presidenta: {
        id: 'presidenta',
        nombre: 'Lic. Natalia Hasea',
        cargo: 'Presidenta',
        imagen: presidentaImg,
        descripcion: 'Presidenta del Honorable Tribunal de Cuentas de la Provincia de San Luis',
        destacado: true
    },
    vocales: [
        {
            id: 'vocal-oste',
            nombre: 'Dr. Sergio Tomás Oste',
            cargo: 'Vocal',
            imagen: vocalOsteImg,
            descripcion: 'Vocal del Honorable Tribunal de Cuentas'
        },
        {
            id: 'vocal-catallamo',
            nombre: 'Dr. Guillermo Catallamo',
            cargo: 'Vocal',
            imagen: vocalCatallamoImg,
            descripcion: 'Vocal del Honorable Tribunal de Cuentas'
        },
        {
            id: 'vocal-badaloni',
            nombre: 'C.P.N. Cecilia Badaloni',
            cargo: 'Vocal',
            imagen: vocalBadaloniImg,
            descripcion: 'Vocal del Honorable Tribunal de Cuentas'
        },
        {
            id: 'vocal-ferraro',
            nombre: 'C.P.N. Alberto Ferraro',
            cargo: 'Vocal',
            imagen: vocalFerraroImg,
            descripcion: 'Vocal del Honorable Tribunal de Cuentas'
        }
    ]
};

const ESTRUCTURA_INFO = [
    {
        titulo: 'Composición Institucional',
        descripcion: 'El Honorable Tribunal de Cuentas de la Provincia de San Luis está integrado por cinco miembros: el Presidente y cuatro Vocales.',
        icono: Users
    },
    {
        titulo: 'Representación del Tribunal',
        descripcion: 'El Presidente tiene la representación del Tribunal y posee a su cargo el Gobierno Interno del mismo, con las atribuciones legales y reglamentarias que le corresponden.',
        icono: Crown
    },
    {
        titulo: 'Estructura Orgánica',
        descripción: 'Su estructura orgánica se compone de un Secretario Legal, un Contador Fiscal General y un Asesor Jurídico y ejercen el control externo de la Gestión Económica Financiera.',
        icono: Building2
    },
    {
        titulo: 'Autoridad Exclusiva',
        descripcion: 'El Honorable Tribunal de Cuentas es la única autoridad con imperium exclusivo en el orden administrativo para aprobar o desaprobar las cuentas rendidas.',
        icono: Scale
    }
];

export const AutoridadesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Section padding="py-12">
            {/* Header con información institucional */}
            <div className="mb-16">
                <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-10 text-white relative overflow-hidden">
                    {/* Patrón decorativo */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-8 right-8 w-32 h-32 border-2 border-white rounded-full"></div>
                        <div className="absolute bottom-8 left-8 w-24 h-24 border-2 border-blue-300 rounded-full"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mr-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-2">Autoridades</h1>
                                <p className="text-blue-200 text-lg">Tribunal de Cuentas de la Provincia de San Luis</p>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                            <p className="text-lg leading-relaxed text-blue-100">
                                El Honorable Tribunal de Cuentas de la Provincia de San Luis está integrado por cinco miembros: el Presidente y cuatro Vocales. El Presidente tiene la representación del Tribunal y posee a su cargo el Gobierno Interno del mismo, con las atribuciones legales y reglamentarias que le corresponden.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Presidenta destacada */}
            <div className="mb-16">
                <PresidentaCard autoridad={AUTORIDADES_DATA.presidenta} />
            </div>

            {/* Vocales */}
            <div className="mb-16">
                <SectionHeader
                    title="Vocales del Tribunal"
                    subtitle="Miembros integrantes del Honorable Tribunal de Cuentas"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {AUTORIDADES_DATA.vocales.map((vocal) => (
                        <VocalCard key={vocal.id} vocal={vocal} />
                    ))}
                </div>
            </div>

            {/* Información institucional */}
            <div>
                <SectionHeader
                    title="Estructura Institucional"
                    subtitle="Organización y funcionamiento del Tribunal de Cuentas"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ESTRUCTURA_INFO.map((info, index) => (
                        <EstructuraCard key={index} info={info} />
                    ))}
                </div>

                {/* Marco legal destacado */}
                <div className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Scale className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">Marco Legal</h3>
                            <p className="text-emerald-100 leading-relaxed">
                                El Honorable Tribunal de Cuentas es la única autoridad con imperium exclusivo en el orden administrativo,
                                para aprobar o desaprobar las cuentas rendidas en la Administración Provincial, reparticiones autárquicas,
                                entes centralizados, descentralizados, desconcentrados y municipalidades conforme al{' '}
                                <span className="font-semibold text-white">Art. 3° de la Ley Orgánica del Tribunal de Cuentas de la Provincia de San Luis</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    </div>
);

const PresidentaCard = ({ autoridad }) => (
    <div className="relative">
        <Card className="p-0 overflow-hidden bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Imagen */}
                <div className="relative h-96 lg:h-auto">
                    <img
                        src={autoridad.imagen}
                        alt={autoridad.nombre}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE2MCIgcj0iNjAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEwMCAzMDBDMTAwIDI1NiAxNDQgMjIwIDIwMCAyMjBTMzAwIDI1NiAzMDAgMzAwSDEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-blue-900 bg-opacity-90 backdrop-blur-sm rounded-xl p-4 text-white">
                            <h2 className="text-2xl font-bold mb-1">{autoridad.nombre}</h2>
                            <p className="text-blue-200 text-lg font-semibold">{autoridad.cargo}</p>
                        </div>
                    </div>
                </div>

                {/* Contenido */}
                <div className="p-8 flex flex-col justify-center">
                    <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-4">
                            <Scale className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3">Presidencia del Tribunal</h3>
                        <p className="text-slate-600 leading-relaxed">
                            {autoridad.descripcion}. Tiene la representación institucional y ejerce el gobierno interno
                            con las atribuciones legales y reglamentarias correspondientes.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-slate-700">
                            <Shield className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">Representación Institucional</span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-700">
                            <Building2 className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">Gobierno Interno</span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-700">
                            <Scale className="w-5 h-5 text-blue-600" />
                            <span className="font-medium">Atribuciones Legales</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </div>
);

const VocalCard = ({ vocal }) => (
    <Card className="p-0 overflow-hidden group hover:shadow-2xl transition-all duration-500">
        <div className="relative h-80">
            <img
                src={vocal.imagen}
                alt={vocal.nombre}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDUiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTc1IDIyNUM3NSAxOTIgMTA4IDE2NSAxNTAgMTY1UzIyNSAxOTIgMjI1IDIyNUg3NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-slate-900 bg-opacity-90 backdrop-blur-sm rounded-xl p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{vocal.nombre}</h3>
                    <p className="text-slate-300 font-semibold">{vocal.cargo}</p>
                </div>
            </div>
        </div>
    </Card>
);

const EstructuraCard = ({ info }) => (
    <Card className="p-6 group hover:shadow-xl transition-all duration-300">
        <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <info.icono className="w-6 h-6 text-white" />
            </div>
            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {info.titulo}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                    {info.descripcion}
                </p>
            </div>
        </div>
    </Card>
);