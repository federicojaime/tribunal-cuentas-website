import React from 'react';
import { Building2, CheckCircle } from 'lucide-react';
import { Section } from '../ui/Section';
import { SERVICES_DATA } from '../../constants/data';

export const AboutSection = () => (
    <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Control y Transparencia Provincial
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    El Honorable Tribunal de Cuentas de la Provincia de San Luis es el encargado de realizar el Control de los gastos de los diferentes Poderes del Estado Provincial, Municipalidades y entidades públicas.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Auditamos la inversión de fondos públicos y revisamos la aplicación de recursos, garantizando transparencia y eficiencia en la gestión pública.
                </p>
                <div className="space-y-4">
                    {SERVICES_DATA.map((service, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{service.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                        <Building2 className="w-20 h-20 text-blue-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Misión</h3>
                        <p className="text-gray-600">
                            Garantizar el uso eficiente y transparente de los recursos públicos a través del control y auditoría permanente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);