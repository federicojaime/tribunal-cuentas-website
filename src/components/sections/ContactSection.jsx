import React from 'react';
import { Building2, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { SITE_CONFIG } from '../../constants/siteConfig';

export const ContactSection = () => (
    <Section>
        <SectionHeader title="Contacto" subtitle="Estamos aquí para atenderte" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
                <ContactInfo
                    title="Vocalías y Secretaría Legal - HTC"
                    address={SITE_CONFIG.contact.addresses.vocalias}
                    icon={Building2}
                />

                <ContactInfo
                    title="Contaduría Fiscal General y Contadurías Fiscales"
                    address={SITE_CONFIG.contact.addresses.contaduria}
                    icon={FileText}
                />

                <ContactInfo
                    title="Mesa de Entradas - HTC"
                    address={SITE_CONFIG.contact.addresses.mesa}
                    icon={Mail}
                />

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <Phone className="w-6 h-6 text-blue-600 mr-3" />
                        Teléfonos
                    </h3>
                    <div className="space-y-2">
                        {SITE_CONFIG.contact.phones.map((phone, index) => (
                            <p key={index} className="text-gray-700 font-medium">{phone}</p>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <Mail className="w-6 h-6 text-green-600 mr-3" />
                        Email
                    </h3>
                    <p className="text-gray-700 font-medium break-all">
                        {SITE_CONFIG.contact.email}
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ubicación</h3>
                <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm">
                    <MapPin className="w-12 h-12 text-white mb-4" />
                    <p className="text-lg leading-relaxed">
                        Nos encontramos en el centro de San Luis, sobre la calle Ayacucho,
                        facilitando el acceso a ciudadanos y funcionarios públicos.
                    </p>
                </div>
            </div>
        </div>
    </Section>
);

const ContactInfo = ({ title, address, icon: Icon }) => (
    <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
            <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600">{address}</p>
        </div>
    </div>
);