// src/components/PageRouter.jsx - CORREGIDO
import React from 'react';

// Páginas principales
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { StatsSection } from './sections/StatsSection';
import { QuickAccessSection } from './sections/QuickAccessSection';
import { NewsSection } from './sections/NewsSection';
import { ContactSection } from './sections/ContactSection';

// Páginas específicas
import { AutoridadesPage } from './pages/AutoridadesPage';
import { HistoriaPage } from './pages/HistoriaPage';
import { NormasPage } from './pages/NormasPage';
import { GestionCalidadPage } from './pages/GestionCalidadPage';
import { NivelOperativoPage } from './pages/NivelOperativoPage';
import { PanelAdministrativoPage } from './pages/PanelAdministrativoPage';
import { InstitucionalPage } from './pages/InstitucionalPage';
import { CalidadPage } from './pages/CalidadPage';
import { MunicipiosPage } from './pages/MunicipiosPage';
import { NovedadesPage } from './pages/NovedadesPage';

export const PageRouter = ({ activeSection, onSectionChange }) => {
    const renderPage = () => {
        switch (activeSection) {
            case 'inicio':
                return (
                    <>
                        <HeroSection onSectionChange={onSectionChange} />
                        <AboutSection />
                        <QuickAccessSection onSectionChange={onSectionChange} />
                        <NewsSection />
                        <ContactSection />
                    </>
                );
            
            case 'autoridades':
                return <AutoridadesPage />;
            
            case 'historia':
                return <HistoriaPage />;
            
            case 'normas':
                return <NormasPage />;
            
            case 'gestion-calidad':
                return <GestionCalidadPage />;
            
            case 'nivel-operativo':
                return <NivelOperativoPage onSectionChange={onSectionChange} />;
            
            case 'panel-administrativo':
                return <PanelAdministrativoPage onSectionChange={onSectionChange} />;
            
            case 'institucional':
                return <InstitucionalPage />;
            
            case 'calidad':
                return <CalidadPage />;
            
            case 'municipios':
                return <MunicipiosPage />;
            
            case 'novedades':
                return <NovedadesPage />;
            
            case 'contacto':
                return <ContactSection />;

            // Rutas adicionales para submenús específicos
            case 'ley-organica':
                return (
                    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
                        <div className="max-w-6xl mx-auto px-6">
                            <div className="bg-white rounded-3xl p-12 shadow-xl">
                                <h1 className="text-4xl font-bold text-gray-800 mb-6">Ley Orgánica</h1>
                                <p className="text-lg text-gray-600 mb-8">
                                    Marco jurídico que regula el funcionamiento del Honorable Tribunal de Cuentas 
                                    de la Provincia de San Luis.
                                </p>
                                <div className="bg-blue-50 rounded-2xl p-6">
                                    <p className="text-gray-700">
                                        Aquí se encontrará la información completa sobre la Ley Orgánica 
                                        del Tribunal de Cuentas, sus artículos y reglamentaciones vigentes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'constitucion':
                return (
                    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
                        <div className="max-w-6xl mx-auto px-6">
                            <div className="bg-white rounded-3xl p-12 shadow-xl">
                                <h1 className="text-4xl font-bold text-gray-800 mb-6">Constitución Provincial</h1>
                                <p className="text-lg text-gray-600 mb-8">
                                    Marco constitucional de la Provincia de San Luis relacionado con 
                                    el Tribunal de Cuentas.
                                </p>
                                <div className="bg-purple-50 rounded-2xl p-6">
                                    <p className="text-gray-700">
                                        Artículos de la Constitución Provincial que establecen las 
                                        competencias y atribuciones del Tribunal de Cuentas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            
            default:
                return (
                    <>
                        <HeroSection onSectionChange={onSectionChange} />
                        <AboutSection />
                        <StatsSection />
                        <QuickAccessSection onSectionChange={onSectionChange} />
                        <NewsSection />
                        <ContactSection />
                    </>
                );
        }
    };

    return <main>{renderPage()}</main>;
};