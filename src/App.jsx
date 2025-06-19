// src/App.jsx - CORREGIDO
import React, { useState, useCallback, useEffect } from 'react';
import { MinimalNavigation as Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { PageRouter } from './components/PageRouter';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función mejorada para cambiar de sección
  const handleSectionChange = useCallback((section) => {
    console.log('Cambiando a sección:', section); // Para debug
    setActiveSection(section);
    setMobileMenuOpen(false);
    
    // Scroll suave al top cuando cambia la sección
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Cerrar menú móvil al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <PageRouter 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange}
      />
      
      <Footer />
      
      {/* Overlay para menú móvil */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;