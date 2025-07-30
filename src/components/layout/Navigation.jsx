import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NAVIGATION_CONFIG } from '../../constants/navigation';
import logoTribunal from '../../assets/logo-tribunal.png';

export const MinimalNavigation = ({
  activeSection,
  onSectionChange,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const scrollY = useScrollPosition();
  const topBarRef = useRef(null);
  const navRef = useRef(null);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const isScrolled = scrollY > 10;

  // Detecta tamaño de pantalla confiable
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const handleSubmenuClick = (submenuId) => {
    const map = {
      autoridades: 'autoridades',
      historia: 'historia',
      'ley-organica': 'ley-organica',
      normas: 'normas',
      constitucion: 'constitucion',
      'gestion-calidad': 'gestion-calidad',
      'nivel-operativo': 'nivel-operativo',
    };

    onSectionChange(map[submenuId] || 'institucional');
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (openDropdown && !e.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', closeOnClickOutside);
    return () => document.removeEventListener('mousedown', closeOnClickOutside);
  }, [openDropdown]);

  useEffect(() => {
    const calcHeight = () => {
      const gov = topBarRef.current?.offsetHeight || 0;
      const nav = navRef.current?.offsetHeight || 0;
      setHeaderHeight(gov + nav);
    };
    calcHeight();
    window.addEventListener('resize', calcHeight);
    return () => window.removeEventListener('resize', calcHeight);
  }, [isMobile, isScrolled]);

  return (
    <>
      {/* Barra Superior */}
      <div ref={topBarRef} className="bg-slate-900 text-white py-1.5 px-4 select-none">
        <div className="mx-auto max-w-7xl flex items-center justify-between text-xs">
          <span className="text-gray-300">Gobierno de San Luis</span>
          <a
            href="https://argentina.gob.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 transition-colors hover:text-blue-300"
          >
            <span>argentina.gob.ar</span>
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>

      {/* Navegación */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200'
          : 'bg-white border-gray-100'
          }`}
      >
        <div className="mx-auto px-4">
          <div className="flex h-18 sm:h-20 lg:h-24 xl:h-28 items-center justify-between">
            {/* Logo - MEJORADO PARA RESPONSIVE CON TAMAÑOS GRANDES EN TODAS LAS PANTALLAS */}
            <button
              onClick={() => onSectionChange('inicio')}
              className="group flex items-center py-2 transition-all hover:opacity-80 flex-shrink-0"
              aria-label="Ir al inicio"
            >
              <img
                src={logoTribunal}
                alt="Logo Tribunal de Cuentas"
                className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                  // Tamaños responsivos mejorados - TODOS MÁS GRANDES
                  isMobile 
                    ? (isScrolled ? 'h-16' : 'h-20') // Móvil: MÁS GRANDE también
                    : (isScrolled ? 'h-18 sm:h-20 lg:h-24' : 'h-20 sm:h-24 lg:h-28 xl:h-32') // PC: MUCHO MÁS GRANDE
                }`}
                style={{
                  // Asegurar que mantenga proporción y no se deforme
                  objectFit: 'contain',
                  maxWidth: isMobile ? '240px' : '320px' // Móvil también con más ancho
                }}
                onError={(e) => {
                  e.currentTarget.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSIyMiIgZmlsbD0iIzFlNDBhZiIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMTUgMTZIMTJWMTJIMTVWMTZaTTIxIDE2SDE4VjEySDIxVjE2Wk0yNyAxNkgyNFYxMkgxN1YxNlptNiAxNkgzMFYxMkgzM1YxNlptMyAxNkgzNlYxMkgzOVYxNlptLTMgMTdIMzZWMjRIMzNWMjNaTTE4IDI0SDIxVjI3SDE4VjI0WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=';
                }}
              />
            </button>

            {/* Navegación Desktop */}
            {!isMobile && (
              <div className="flex items-center space-x-1 lg:space-x-2">
                {NAVIGATION_CONFIG.map((item) => (
                  <DesktopItem
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

            {/* Botón Burger - MEJORADO */}
            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                className="rounded-lg p-2.5 text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 flex-shrink-0"
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'top-2.5 rotate-45' : 'top-1'
                      }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-5 bg-current top-2.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'top-2.5 -rotate-45' : 'top-4'
                      }`}
                  />
                </div>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay Mobile */}
      {isMobile && mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          style={{ top: headerHeight }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Menú Mobile */}
      {isMobile && (
        <div
          className={`fixed left-0 right-0 z-50 transition-transform duration-300 bg-white shadow-lg border-b ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
            }`}
          style={{ top: headerHeight }}
        >
          <div className="px-4 py-4 max-h-[60vh] overflow-y-auto">
            {NAVIGATION_CONFIG.map((item) => (
              <MobileItem
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setMobileMenuOpen(false);
                }}
                onSubmenuClick={(subId) => {
                  handleSubmenuClick(subId);
                  setMobileMenuOpen(false);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// Desktop Navigation Item
const DesktopItem = ({ item, isActive, onClick, openDropdown, setOpenDropdown, onSubmenuClick }) => {
  const hasSubmenu = Array.isArray(item.submenu) && item.submenu.length > 0;
  const isOpen = openDropdown === item.id;

  const handleClick = (e) => {
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
        onClick={handleClick}
        className={`flex items-center space-x-2 px-3 py-2 lg:px-4 rounded-xl text-sm lg:text-base font-medium transition-all ${isActive
          ? 'text-blue-700 bg-blue-50 border-2 border-blue-200 shadow'
          : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
          }`}
      >
        <item.icon className="w-4 h-4" />
        <span>{item.label}</span>
        {hasSubmenu && (
          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>

      {hasSubmenu && isOpen && (
        <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white border border-gray-200 shadow-lg z-50 py-2">
          {item.submenu.map((sub) => (
            <button
              key={sub.id}
              onClick={(e) => {
                e.stopPropagation();
                onSubmenuClick(sub.id);
              }}
              className="flex w-full items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50"
            >
              <sub.icon className="w-4 h-4" />
              <span>{sub.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Mobile Item
const MobileItem = ({ item, isActive, onClick, onSubmenuClick }) => {
  const [expanded, setExpanded] = useState(false);
  const hasSubmenu = Array.isArray(item.submenu) && item.submenu.length > 0;

  return (
    <div className="mb-1">
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (hasSubmenu) {
            setExpanded(!expanded);
          } else {
            onClick();
          }
        }}
        className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${isActive
          ? 'bg-blue-50 text-blue-700'
          : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
          }`}
      >
        <div className="flex items-center space-x-2.5">
          <item.icon className="w-4 h-4" />
          <span>{item.label}</span>
        </div>
        {hasSubmenu && (
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        )}
      </button>

      {hasSubmenu && expanded && (
        <div className="ml-4 mt-1">
          {item.submenu.map((sub) => (
            <button
              key={sub.id}
              onClick={(e) => {
                e.stopPropagation();
                onSubmenuClick(sub.id);
              }}
              className="flex w-full items-center space-x-2.5 px-3 py-2 text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-md"
            >
              <sub.icon className="w-3 h-3" />
              <span>{sub.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};