// src/App.jsx
import React, { useState, useCallback, useEffect } from 'react';
import { MinimalNavigation as Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { PageRouter } from './components/PageRouter';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cambia la sección activa y cierra el menú móvil
  const handleSectionChange = useCallback((section) => {
    console.log('Cambiando a sección:', section);
    setActiveSection(section);
    setMobileMenuOpen(false);

    // Desplazamiento suave al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Cierra el menú móvil al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navegación principal */}
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Contenido según la ruta */}
      <PageRouter
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Pie de página */}
      <Footer />

      {/* Overlay oscuro cuando el menú móvil está abierto */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
