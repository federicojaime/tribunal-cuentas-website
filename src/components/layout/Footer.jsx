import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/siteConfig';
import { NAVIGATION_CONFIG } from '../../constants/navigation';

// Importación de logos
import logoTribunal from '../../assets/logo-tribunal-blanco.png';
import logoCodeo from '../../assets/logo-codeo.png';

export const Footer = () => (
    <footer className="bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white" role="contentinfo">
        {/* Sección principal del footer */}
        <div className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Logo y descripción institucional */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                            <div className="flex-shrink-0 mx-auto sm:mx-0">
                                <img
                                    src={logoTribunal}
                                    alt="Logo Honorable Tribunal de Cuentas de San Luis"
                                    className="h-20 sm:h-24 w-auto filter drop-shadow-lg"
                                    loading="lazy"
                                    onError={(e) => {
                                        // Fallback SVG optimizado
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWxhYmVsPSJMb2dvIFRyaWJ1bmFsIGRlIEN1ZW50YXMiPjxjaXJjbGUgY3g9IjQ4IiBjeT0iNDgiIHI9IjQ1IiBmaWxsPSIjMWU0MGFmIiBzdHJva2U9IiMzYjgyZjYiIHN0cm9rZS13aWR0aD0iNiIvPjxwYXRoIGQ9Ik0zMCAzM0gyNFYyNEgzMFYzM1pNNDIgMzNIMzZWMjRINDJWMzNaTTU0IDMzSDQ4VjI0SDU0VjMzWk02NiAzM0g2MFYyNEg2NlYzM1pNNzIgMzNINzhWNjZINzJWMzNaTTYwIDY2SDY2VjM5SDYwVjY2Wk00OCA2Nkg1NFYzOUg0OFY2NlpNMzYgNjZINDJWMzlIMzZWNjZaTTI0IDY2SDMwVjM5SDI0VjY2Wk0xOCA2NkgyNFY3MkgxOFY2NlpNNzggNjZINzJWNzJINzhWNjZaTTE4IDcySDI0Vjc4SDE4Vjc2Wk03OCA3Mkg3MlY3OEg3OFY3MlpNMjQgNzJINzJWNjZIMjRWNzJaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==';
                                    }}
                                />
                            </div>
                            {/*<div className="flex-1 text-center sm:text-left">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                                    {SITE_CONFIG.title}
                                </h3>
                                <p className="text-blue-300 font-semibold text-lg sm:text-xl mb-1">
                                    {SITE_CONFIG.subtitle}
                                </p>
                                <p className="text-gray-300 text-sm font-medium mb-3">
                                    Organismo de Control Constitucional
                                </p>
                                <div className="inline-flex items-center px-3 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                                    <span className="text-blue-200 text-sm font-medium">
                                        🏛️ Desde 1946 al servicio de San Luis
                                    </span>
                                </div>
                            </div>*/}
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-800/20 backdrop-blur-sm">
                            <h4 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                                Nuestra Misión
                            </h4>
                            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                                Ejercer el control externo de la gestión económica financiera del sector público provincial y municipal,
                                garantizando transparencia, eficiencia y legalidad en el uso de los recursos públicos.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-800/50 text-blue-200 text-xs rounded-full border border-blue-700 transition-colors hover:bg-blue-700/50">
                                    Transparencia
                                </span>
                                <span className="px-3 py-1 bg-green-800/50 text-green-200 text-xs rounded-full border border-green-700 transition-colors hover:bg-green-700/50">
                                    Eficiencia
                                </span>
                                <span className="px-3 py-1 bg-purple-800/50 text-purple-200 text-xs rounded-full border border-purple-700 transition-colors hover:bg-purple-700/50">
                                    Legalidad
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Enlaces institucionales */}
                    <div className="sm:col-span-1">
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                            <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
                            Navegación
                        </h4>
                        <nav aria-label="Enlaces del footer">
                            <ul className="space-y-3">
                                {NAVIGATION_CONFIG.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            className="group flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 p-2 rounded-lg hover:bg-white/5"
                                            aria-label={`Navegar a ${item.label}`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <item.icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                                <span className="font-medium text-sm">{item.label}</span>
                                            </div>
                                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Enlaces externos */}
                        <div className="mt-8 pt-6 border-t border-gray-700">
                            <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                                Enlaces Oficiales
                            </h5>
                            <div className="space-y-2">
                                <a
                                    href="https://sanluis.gov.ar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-300 transition-colors text-sm p-2 rounded-lg hover:bg-white/5"
                                    aria-label="Visitar sitio del Gobierno de San Luis (se abre en nueva ventana)"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    <span>Gobierno de San Luis</span>
                                </a>
                                <a
                                    href="https://argentina.gob.ar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-300 transition-colors text-sm p-2 rounded-lg hover:bg-white/5"
                                    aria-label="Visitar portal nacional Argentina.gob.ar (se abre en nueva ventana)"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    <span>Argentina.gob.ar</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Información de contacto */}
                    <div className="sm:col-span-1">
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                            <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
                            Contacto
                        </h4>

                        <div className="space-y-4">
                            {/* Teléfonos */}
                            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-600/30 transition-all hover:border-gray-500/30 hover:bg-gray-700/30">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Teléfonos</h5>
                                        {SITE_CONFIG.contact.phones.map((phone, index) => (
                                            <a
                                                key={index}
                                                href={`tel:${phone.replace(/\s/g, '')}`}
                                                className="block text-white font-medium text-sm hover:text-blue-300 transition-colors"
                                                aria-label={`Llamar al ${phone}`}
                                            >
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-600/30 transition-all hover:border-gray-500/30 hover:bg-gray-700/30">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Correo Electrónico</h5>
                                        <a
                                            href={`mailto:${SITE_CONFIG.contact.email}`}
                                            className="text-white font-medium text-sm break-all hover:text-green-300 transition-colors"
                                            aria-label={`Enviar correo a ${SITE_CONFIG.contact.email}`}
                                        >
                                            {SITE_CONFIG.contact.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Dirección */}
                            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-4 border border-gray-600/30 transition-all hover:border-gray-500/30 hover:bg-gray-700/30">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Sede Principal</h5>
                                        <address className="text-white font-medium text-sm not-italic">
                                            {SITE_CONFIG.contact.addresses.vocalias}
                                        </address>
                                        <p className="text-gray-400 text-xs mt-1">
                                            San Luis, Argentina
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Redes sociales */}
                        <div className="mt-6 pt-4 border-t border-gray-700">
                            <h5 className="text-sm font-semibold text-gray-400 mb-3">Redes Sociales</h5>
                            <div className="flex space-x-3">
                                <button
                                    className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    aria-label="Seguir en Facebook"
                                >
                                    <Facebook className="w-4 h-4 text-white" />
                                </button>
                                <button
                                    className="w-8 h-8 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    aria-label="Seguir en Twitter"
                                >
                                    <Twitter className="w-4 h-4 text-white" />
                                </button>
                                <button
                                    className="w-8 h-8 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    aria-label="Seguir en Instagram"
                                >
                                    <Instagram className="w-4 h-4 text-white" />
                                </button>
                                <button
                                    className="w-8 h-8 bg-blue-800 hover:bg-blue-900 rounded-lg flex items-center justify-center transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    aria-label="Seguir en LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Barra inferior */}
        <div className="bg-black/50 border-t border-gray-800 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                        <p className="text-gray-400 text-sm">
                            © 2025 Honorable Tribunal de Cuentas - Provincia de San Luis
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start space-x-4 text-xs">
                            <button className="text-gray-500 hover:text-gray-300 transition-colors underline-offset-4 hover:underline focus:outline-none focus:underline">
                                Términos de Uso
                            </button>
                            <span className="text-gray-600 hidden sm:inline">•</span>
                            <button className="text-gray-500 hover:text-gray-300 transition-colors underline-offset-4 hover:underline focus:outline-none focus:underline">
                                Política de Privacidad
                            </button>
                            <span className="text-gray-600 hidden sm:inline">•</span>
                            <button className="text-gray-500 hover:text-gray-300 transition-colors underline-offset-4 hover:underline focus:outline-none focus:underline">
                                Accesibilidad
                            </button>
                        </div>
                    </div>

                    {/* Créditos de desarrollo */}
                    <div className="flex items-center space-x-3">
                        <span className="text-gray-500 text-xs">Desarrollado por</span>
                        <a
                            href="https://codeo.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 transition-all group focus:outline-none focus:ring-2 focus:ring-white/20"
                            aria-label="Visitar sitio de Codeo.ar (se abre en nueva ventana)"
                        >
                            <img
                                src={logoCodeo}
                                alt="Logo Codeo.ar"
                                className="h-4 w-auto"
                                loading="lazy"
                                onError={(e) => {
                                    // Fallback text si no se encuentra el logo
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'inline';
                                }}
                            />
                            <span
                                className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors hidden"
                            >
                                Codeo.ar
                            </span>
                            <span className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">
                                Codeo.ar
                            </span>
                            <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-300 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);