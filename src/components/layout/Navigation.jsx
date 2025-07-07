// src/components/layout/Navigation.jsx - MEJORADA UX/UI 2025
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useResponsive } from '../../hooks/useResponsive';
import { NAVIGATION_CONFIG } from '../../constants/navigation';

// Importación del logo
import logoTribunal from '../../assets/logo-tribunal.png';

export const MinimalNavigation = ({ activeSection, onSectionChange, mobileMenuOpen, setMobileMenuOpen }) => {
    const scrollY = useScrollPosition();
    const { isMobile } = useResponsive();
    const [openDropdown, setOpenDropdown] = useState(null);

    const isScrolled = scrollY > 10;

    const handleSubmenuClick = (submenuId) => {
        console.log('Navegando a submenu:', submenuId);
        
        const submenuPageMap = {
            'autoridades': 'autoridades',
            'historia': 'historia',
            'ley-organica': 'ley-organica',
            'normas': 'normas',
            'constitucion': 'constitucion',
            'gestion-calidad': 'gestion-calidad',
            'nivel-operativo': 'nivel-operativo'
        };

        if (submenuPageMap[submenuId]) {
            onSectionChange(submenuPageMap[submenuId]);
        } else {
            onSectionChange('institucional');
        }
        
        setOpenDropdown(null);
        setMobileMenuOpen(false);
    };

    // Cerrar dropdown cuando se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openDropdown && !event.target.closest('.dropdown-container')) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdown]);

    return (
        <>
            {/* Barra superior gubernamental - Móvil optimizada */}
            <div className="bg-slate-900 text-white py-1.5 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
                    <span className="text-gray-300">Gobierno de San Luis</span>
                    <div className="flex items-center space-x-2">
                        <a 
                            href="https://argentina.gob.ar" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition-colors flex items-center space-x-1"
                        >
                            <span>argentina.gob.ar</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Navegación principal */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
                    : 'bg-white border-b border-gray-100'
                }`}>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">

                        {/* Logo institucional - Móvil optimizado */}
                        <div className="flex items-center">
                            <button 
                                onClick={() => onSectionChange('inicio')}
                                className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-all duration-300 group py-2"
                                aria-label="Ir al inicio"
                            >
                                <div className="relative">
                                    <img
                                        src={logoTribunal}
                                        alt="Logo Tribunal de Cuentas"
                                        className="h-8 sm:h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjIiIGZpbGw9IiMxZTQwYWYiIHN0cm9rZT0iIzNiODJmNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik0xNSAxNkgxMlYxMkgxNVYxNlpNMjEgMTZIMThWMTJIMjFWMTZaTTI3IDE2SDI0VjEySDI3VjE2Wk0zMyAxNkgzMFYxMkgzM1YxNlpNMzYgMTZIMzlWMzNIMzZWMTZaTTMwIDMzSDMzVjE5SDMwVjMzWk0yNCAzM0gyN1YxOUgyNFYzM1pNMTggMzNIMjFWMTlIMThWMzNaTTEyIDMzSDE1VjE5SDEyVjMzWk05IDMzSDEyVjM2SDlWMzNaTTM5IDMzSDM2VjM2SDM5VjMzWk05IDM2SDEyVjM5SDlWMzZaTTM5IDM2SDM2VjM5SDM5VjM2Wk0xMiAzNkgzNlYzM0gxMlYzNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==';
                                        }}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight truncate">
                                        Tribunal de Cuentas
                                    </h1>
                                    <p className="text-xs lg:text-sm text-gray-600 -mt-0.5 sm:-mt-1 hidden sm:block">
                                        Provincia de San Luis
                                    </p>
                                </div>
                            </button>
                        </div>

                        {/* Navegación desktop */}
                        {!isMobile && (
                            <div className="flex items-center space-x-1 lg:space-x-2">
                                {NAVIGATION_CONFIG.map((item) => (
                                    <SimpleNavItem
                                        key={item.id}
                                        item={item}
                                        isActive={activeSection === item.id}
                                        onClick={() => onSectionChange(item.id)}
                                        openDropdown={openDropdown}
                                        setOpenDropdown={setOpenDropdown}
                                        onSubmenuClick={handleSubmenuClick}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Botón menú móvil - Mejorado */}
                        {isMobile && (
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                            >
                                <div className="relative w-5 h-5">
                                    <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                                        mobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                                    }`}></span>
                                    <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 top-2.5 ${
                                        mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}></span>
                                    <span className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                                        mobileMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
                                    }`}></span>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Overlay móvil - Corregido */}
            {isMobile && mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-30"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ top: '97px' }}
                />
            )}

            {/* Menú móvil optimizado */}
            {isMobile && (
                <div className={`fixed top-[97px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 transform transition-all duration-300 ${
                    mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                }`}>
                    <div className="max-h-[calc(100vh-97px)] overflow-y-auto">
                        <div className="px-4 py-4 space-y-1">
                            {NAVIGATION_CONFIG.map((item) => (
                                <SimpleMobileItem
                                    key={item.id}
                                    item={item}
                                    isActive={activeSection === item.id}
                                    onClick={() => {
                                        console.log('Click en móvil:', item.id);
                                        onSectionChange(item.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    onSubmenuClick={(submenuId) => {
                                        console.log('Click en submenu móvil:', submenuId);
                                        handleSubmenuClick(submenuId);
                                        setMobileMenuOpen(false);
                                    }}
                                />
                            ))}
                        </div>

                        {/* Enlaces adicionales en móvil - Compactos */}
                        <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
                            <div className="flex justify-center space-x-6 text-xs">
                                <a 
                                    href="https://sanluis.gob.ar" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    <span>San Luis</span>
                                </a>
                                <span className="text-gray-300">|</span>
                                <a 
                                    href="https://argentina.gob.ar" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    <span>Argentina</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const SimpleNavItem = ({ item, isActive, onClick, openDropdown, setOpenDropdown, onSubmenuClick }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isOpen = openDropdown === item.id;

    const handleButtonClick = (e) => {
        e.stopPropagation();
        if (hasSubmenu) {
            setOpenDropdown(isOpen ? null : item.id);
        } else {
            onClick();
        }
    };

    return (
        <div className="relative dropdown-container">
            <button
                onClick={handleButtonClick}
                className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 ${
                    isActive
                        ? 'text-blue-700 bg-blue-50 shadow-md border-2 border-blue-200'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
                aria-label={hasSubmenu ? `Menú ${item.label}` : `Ir a ${item.label}`}
            >
                <item.icon className="w-4 h-4" />
                <span className="whitespace-nowrap">{item.label}</span>
                {hasSubmenu && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`} />
                )}
            </button>

            {/* Dropdown mejorado */}
            {hasSubmenu && isOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-fade-in-up">
                    {item.submenu.map((subItem) => (
                        <button
                            key={subItem.id}
                            onClick={(e) => {
                                e.stopPropagation();
                                onSubmenuClick(subItem.id);
                            }}
                            className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 flex items-center space-x-3 group"
                        >
                            <div className="w-8 h-8 bg-gray-100 group-hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
                                <subItem.icon className="w-4 h-4" />
                            </div>
                            <span className="font-medium">{subItem.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const SimpleMobileItem = ({ item, isActive, onClick, onSubmenuClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (hasSubmenu) {
            setIsExpanded(!isExpanded);
        } else {
            console.log('Ejecutando onClick para:', item.label);
            onClick();
        }
    };

    const handleSubmenuItemClick = (e, submenuId) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Ejecutando onSubmenuClick para:', submenuId);
        onSubmenuClick(submenuId);
    };

    return (
        <div className="space-y-1">
            <button
                onClick={handleClick}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 touch-manipulation ${
                    isActive
                        ? 'text-blue-700 bg-blue-50 shadow-sm'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50 active:bg-gray-100'
                }`}
                type="button"
            >
                <div className="flex items-center space-x-2.5">
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                        isActive ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                        <item.icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{item.label}</span>
                </div>
                {hasSubmenu && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                    }`} />
                )}
            </button>

            {hasSubmenu && isExpanded && (
                <div className="ml-3 space-y-0.5">
                    {item.submenu.map((subItem) => (
                        <button
                            key={subItem.id}
                            onClick={(e) => handleSubmenuItemClick(e, subItem.id)}
                            className="w-full flex items-center space-x-2.5 px-3 py-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 rounded-md transition-all duration-200 touch-manipulation"
                            type="button"
                        >
                            <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                                <subItem.icon className="w-2.5 h-2.5" />
                            </div>
                            <span>{subItem.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};