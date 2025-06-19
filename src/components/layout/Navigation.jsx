// src/components/layout/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useResponsive } from '../../hooks/useResponsive';
import { NAVIGATION_CONFIG } from '../../constants/navigation';

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
            {/* Barra superior gubernamental */}
            <div className="bg-gray-900 text-white py-1">
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-xs">
                    <span>Gobierno de San Luis</span>
                    <span>argentina.gob.ar</span>
                </div>
            </div>

            {/* Navegación principal */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-md'
                    : 'bg-white'
                } border-b border-gray-200`}>

                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">

                        {/* Logo simplificado */}
                        <div className="flex items-center space-x-3">
                            <button 
                                onClick={() => onSectionChange('inicio')}
                                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                            >
                                <div className="w-10 h-10 bg-blue-900 rounded-md flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <div className="hidden sm:block">
                                    <h1 className="text-lg font-bold text-gray-900">
                                        Tribunal de Cuentas
                                    </h1>
                                    <p className="text-xs text-gray-600 -mt-1">
                                        San Luis
                                    </p>
                                </div>
                            </button>
                        </div>

                        {/* Navegación desktop */}
                        {!isMobile && (
                            <div className="flex items-center space-x-8">
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

                        {/* Botón menú móvil */}
                        {isMobile && (
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                            >
                                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Menú móvil simplificado */}
            {isMobile && mobileMenuOpen && (
                <div className="fixed top-[73px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
                    <div className="max-w-6xl mx-auto py-4 px-6 space-y-1">
                        {NAVIGATION_CONFIG.map((item) => (
                            <SimpleMobileItem
                                key={item.id}
                                item={item}
                                isActive={activeSection === item.id}
                                onClick={() => {
                                    onSectionChange(item.id);
                                    setMobileMenuOpen(false);
                                }}
                                onSubmenuClick={(submenuId) => {
                                    handleSubmenuClick(submenuId);
                                    setMobileMenuOpen(false);
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Overlay móvil */}
            {isMobile && mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-25 z-30"
                    onClick={() => setMobileMenuOpen(false)}
                />
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
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                        ? 'text-blue-900 bg-blue-50 border-b-2 border-blue-900'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                    }`}
            >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                {hasSubmenu && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`} />
                )}
            </button>

            {/* Dropdown */}
            {hasSubmenu && isOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    {item.submenu.map((subItem) => (
                        <button
                            key={subItem.id}
                            onClick={(e) => {
                                e.stopPropagation();
                                onSubmenuClick(subItem.id);
                            }}
                            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition-colors duration-200 flex items-center space-x-2"
                        >
                            <subItem.icon className="w-4 h-4" />
                            <span>{subItem.label}</span>
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

    const handleClick = () => {
        if (hasSubmenu) {
            setIsExpanded(!isExpanded);
        } else {
            onClick();
        }
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                        ? 'text-blue-900 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                    }`}
            >
                <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                </div>
                {hasSubmenu && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                        }`} />
                )}
            </button>

            {hasSubmenu && isExpanded && (
                <div className="ml-6 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                        <button
                            key={subItem.id}
                            onClick={() => onSubmenuClick(subItem.id)}
                            className="block w-full text-left px-3 py-1 text-sm text-gray-600 hover:text-blue-900 transition-colors duration-200 flex items-center space-x-2"
                        >
                            <subItem.icon className="w-4 h-4" />
                            <span>{subItem.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};