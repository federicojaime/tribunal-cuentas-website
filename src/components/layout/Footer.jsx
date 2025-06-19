import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { IconWrapper } from '../ui/IconWrapper';
import { SITE_CONFIG } from '../../constants/siteConfig';
import { NAVIGATION_CONFIG } from '../../constants/navigation';

export const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo y descripción */}
                <div className="md:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                        <IconWrapper
                            icon={Shield}
                            size="sm"
                            color="from-blue-400 to-purple-500"
                            className="group-hover:scale-100"
                        />
                        <div>
                            <h3 className="text-xl font-bold">{SITE_CONFIG.title}</h3>
                            <p className="text-gray-400 text-sm">{SITE_CONFIG.subtitle}</p>
                        </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        {SITE_CONFIG.tagline}
                    </p>
                    <p className="text-gray-400 text-sm">
                        Garantizando transparencia y eficiencia en la gestión pública provincial.
                    </p>
                </div>

                {/* Enlaces rápidos */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                    <ul className="space-y-2">
                        {NAVIGATION_CONFIG.slice(0, 4).map((item) => (
                            <li key={item.id}>
                                <button className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                                    <item.icon className="w-4 h-4" />
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300 text-sm">{SITE_CONFIG.contact.phones[0]}</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Mail className="w-4 h-4 text-blue-400 mt-1" />
                            <span className="text-gray-300 text-sm break-all">
                                {SITE_CONFIG.contact.email}
                            </span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                            <span className="text-gray-300 text-sm">
                                {SITE_CONFIG.contact.addresses.vocalias}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-400 text-sm">
                    © 2025 Tribunal de Cuentas - Provincia de San Luis. Todos los derechos reservados.
                </p>
            </div>
        </div>
    </footer>
);