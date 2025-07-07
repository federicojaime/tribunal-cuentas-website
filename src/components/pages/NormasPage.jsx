// src/components/pages/NormasPage.jsx
import React from 'react';
import { Shield, Search, ExternalLink, FileText, Scale, Building2, BookOpen } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { GradientButton } from '../ui/Button';

// Datos de las secciones normativas
const NORMAS_SECTIONS = [
    {
        id: 'marco-normativo',
        titulo: 'MARCO NORMATIVO',
        descripcion: 'Desde aquí podrán consultarse todos los Acuerdos y Marco Normativo publicados por el Honorable Tribunal de Cuentas de la Provincia.',
        url: 'https://tribunaldecuentas.sanluis.gov.ar/buscador-Acuerdos-Normativos',
        icono: Shield,
        color: 'from-blue-600 to-blue-800',
        buttonText: 'Buscar',
        external: true
    },
    {
        id: 'leyes-provinciales',
        titulo: 'LEYES PROVINCIALES',
        descripcion: 'Desde aquí será redirigido al sitio web de la Cámara de Diputados de la Provincia de San Luis al apartado especial denominado Digesto, donde se encuentra almacenada toda la información sobre las normas legislativas, allí se presenta un formulario de búsqueda que le permite al usuario recuperar las leyes por diferentes criterios, entre ellos: por fecha de sanción o publicación, por tema, por número, ingresando palabras claves, etc.',
        url: 'https://diputados.sanluis.gob.ar/',
        icono: Building2,
        color: 'from-emerald-600 to-emerald-800',
        buttonText: 'Buscar',
        external: true
    },
    {
        id: 'leyes-nacionales',
        titulo: 'LEYES NACIONALES',
        descripcion: 'Desde aquí será redirigido al sitio Gubernamental Infoleg (Información Legislativa y Documental), la cual es una base de datos legislativos del Ministerio de Justicia y Derechos Humanos de la Nación, la misma está conformada por documentos digitales tales como leyes, decretos, decisiones administrativas, resoluciones, disposiciones y todo acto que en sí mismo establezca su publicación obligatoria en la primera sección del Boletín Oficial de la República Argentina.',
        url: 'https://www.infoleg.gob.ar/',
        icono: Scale,
        color: 'from-purple-600 to-purple-800',
        buttonText: 'Buscar',
        external: true
    }
];

const RECURSOS_ADICIONALES = [
    {
        titulo: 'Acuerdos del Tribunal',
        descripcion: 'Consulte los acuerdos más recientes del Honorable Tribunal de Cuentas',
        icono: FileText,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        titulo: 'Resoluciones',
        descripcion: 'Acceda a las resoluciones y disposiciones administrativas vigentes',
        icono: BookOpen,
        color: 'from-indigo-500 to-purple-500'
    },
    {
        titulo: 'Normativa Interna',
        descripcion: 'Reglamentos y normativas de funcionamiento interno del Tribunal',
        icono: Shield,
        color: 'from-emerald-500 to-teal-500'
    },
    {
        titulo: 'Marco Jurídico',
        descripcion: 'Base legal y constitucional que sustenta las funciones del Tribunal',
        icono: Scale,
        color: 'from-orange-500 to-amber-500'
    }
];

export const NormasPage = () => (
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
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold mb-2">Marco Normativo</h1>
                                <p className="text-blue-200 text-lg">Tribunal de Cuentas de la Provincia de San Luis</p>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                            <p className="text-lg leading-relaxed text-blue-100">
                                Acceda a la normativa completa que rige el funcionamiento del Tribunal de Cuentas,
                                incluyendo leyes provinciales, nacionales y acuerdos institucionales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secciones normativas principales */}
            <div className="mb-16">
                <div className="space-y-8">
                    {NORMAS_SECTIONS.map((seccion, index) => (
                        <NormaCard key={seccion.id} seccion={seccion} index={index} />
                    ))}
                </div>
            </div>

            {/* Recursos adicionales 
            <div className="mb-16">
                <SectionHeader
                    title="Recursos Adicionales"
                    subtitle="Herramientas complementarias para consulta normativa"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {RECURSOS_ADICIONALES.map((recurso, index) => (
                        <RecursoCard key={index} recurso={recurso} />
                    ))}
                </div>
            </div>

            {/* Información adicional
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white">
                <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-3">Información Importante</h3>
                        <p className="text-emerald-100 leading-relaxed mb-4">
                            Todas las consultas normativas lo redirigirán a los sitios oficiales correspondientes. 
                            Para consultas específicas sobre la aplicación de normativas en el ámbito del 
                            Tribunal de Cuentas, puede contactarse directamente con nuestras oficinas.
                        </p>
                        <p className="text-emerald-200 text-sm">
                            Los enlaces externos son responsabilidad de las instituciones que los mantienen.
                        </p>
                    </div>
                </div>
            </div> */}
        </Section>
    </div>
);

const NormaCard = ({ seccion, index }) => (
    <div className="group">
        <Card className="p-0 overflow-hidden bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 group-hover:border-blue-300 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Icono y título */}
                <div className="relative">
                    <div className={`h-full bg-gradient-to-br ${seccion.color} p-8 flex flex-col justify-center items-center text-white relative overflow-hidden`}>
                        {/* Patrón de fondo */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-4 right-4 w-20 h-20 border border-white rounded-full"></div>
                            <div className="absolute bottom-4 left-4 w-16 h-16 border border-white rounded-full"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <seccion.icono className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-xl font-bold leading-tight">
                                {seccion.titulo}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Contenido */}
                <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                    <div className="mb-6">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {seccion.descripcion}
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                            {seccion.external && (
                                <span className="flex items-center">
                                    <ExternalLink className="w-4 h-4 mr-1" />
                                    Enlace externo
                                </span>
                            )}
                        </div>

                        <a
                            href={seccion.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <GradientButton
                                variant="primary"
                                size="lg"
                                className="flex items-center group-hover:scale-105 transition-transform duration-300"
                            >
                                <Search className="w-5 h-5 mr-2" />
                                {seccion.buttonText}
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </GradientButton>
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    </div>
);

const RecursoCard = ({ recurso }) => (
    <Card className="p-6 group hover:shadow-xl transition-all duration-300">
        <div className="flex items-start space-x-4">
            <div className={`w-14 h-14 bg-gradient-to-br ${recurso.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <recurso.icono className="w-7 h-7 text-white" />
            </div>
            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {recurso.titulo}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                    {recurso.descripcion}
                </p>
            </div>
        </div>
    </Card>
);