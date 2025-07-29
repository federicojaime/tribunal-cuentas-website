import React from 'react';
import { Building2, CheckCircle } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

// Servicios principales del tribunal
const SERVICES_DATA = [
    {
        title: 'Control de Gastos Públicos',
        description: 'Auditoría exhaustiva de la utilización de recursos del Estado Provincial'
    },
    {
        title: 'Auditoría Municipal',
        description: 'Revisión y control de las administraciones municipales'
    },
    {
        title: 'Revisión de Fondos',
        description: 'Control específico de fondos públicos y su correcta aplicación'
    },
    {
        title: 'Transparencia Institucional',
        description: 'Garantía de acceso a la información pública y rendición de cuentas'
    }
];

export const AboutSection = () => (
    <Section background="bg-slate-100" padding="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Contenido textual */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Control y Transparencia Provincial
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        El Honorable Tribunal de Cuentas de la Provincia de San Luis es el
                        organismo constitucional encargado del control externo de la gestión
                        económica financiera del sector público.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Ejercemos auditorías de los fondos públicos y supervisamos su correcta
                        aplicación, garantizando transparencia, eficiencia y legalidad en la
                        gestión gubernamental provincial y municipal.
                    </p>

                    {/* Lista de servicios */}
                    <div className="space-y-4">
                        {SERVICES_DATA.map((service, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <span className="font-semibold text-gray-800 block">{service.title}</span>
                                    {/** <span className="text-gray-600 text-sm">{service.description}</span>*/}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Panel de misión */}
                <div className="relative">
                    <Card className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-xl">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Building2 className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                            <p className="text-blue-100 leading-relaxed mb-8">
                                Garantizar el uso eficiente y transparente de los recursos públicos
                                a través del control externo, la auditoría permanente y la promoción
                                de la rendición de cuentas.
                            </p>

                            {/* Datos destacados simplificados */}
                            <div className="space-y-4">
                                <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                                    <div className="text-2xl font-bold text-white mb-1">79</div>
                                    <div className="text-blue-200 text-sm">Años de Trayectoria</div>
                                    <div className="text-blue-100 text-xs">Desde 1946 al servicio de San Luis</div>
                                </div>

                                <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                                    <div className="text-blue-200 text-sm">Digital</div>
                                    <div className="text-blue-100 text-xs">Procesos completamente digitalizados</div>
                                </div>

                                <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                                    <div className="text-2xl font-bold text-white mb-1">ISO 9001:2015</div>
                                    <div className="text-blue-200 text-sm">Certificación</div>
                                    <div className="text-blue-100 text-xs">Calidad internacional garantizada</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </Section>
);