// src/components/pages/GestionCalidadPage.jsx
import React from 'react';
import {
  Star,
  Award,
  ExternalLink,
  CheckCircle,
  Target,
  Shield,
  Users
} from 'lucide-react';

import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { GradientButton } from '../ui/Button';

// Importaciones de certificados
import certificado1 from '../../assets/images/certificados/certificado-3.jpg';
import certificado2 from '../../assets/images/certificados/certificado-3.jpg';
import certificado3 from '../../assets/images/certificados/certificado-3.jpg';
import certificado4 from '../../assets/images/certificados/certificado-3.jpg';
import certificado5 from '../../assets/images/certificados/certificado-3.jpg';

// ==================== CONSTANTES DE DATOS ====================

const CALIDAD_INFO = {
  certificacion: {
    año: '2009',
    norma: 'ISO 9001:2008',
    descripcion: 'El Tribunal de Cuentas de la Provincia se convirtió en el año 2009 en el primer Organismo Constitucional Puntano en certificar Calidad de Procesos con las Normas ISO 9001:2008 y el cuarto a nivel nacional en lograr este objetivo de excelencia.'
  },
  proposito: 'Para tal propósito se adoptaron una serie de medidas tendientes a lograr transparencia en el manejo de los bienes y dineros públicos. Entre estas medidas, se capacitó a la totalidad de los empleados y se rediseñaron procedimientos de control. Por otra parte, y en el mismo marco, se puso en marcha la utilización de la Firma Digital, sistema del cual el Tribunal es Autoridad de Registro, lo que lo habilita a aprobar que los responsables puedan rendir sus cuentas en forma electrónica.',
  responsabilidad: 'Los poderes Ejecutivo, Legislativo y Judicial, los Organismos Descentralizados, Comisionados Municipales, Sociedades del Estado, Entidades de Bien Público, que obtienen todo o parte de sus recursos en subsidios del Estado y las Escuelas auto-gestionadas, deben responder ante el Tribunal, una de las entidades públicas, cuyos procedimientos son sinónimos de calidad.',
  secretaria: 'El Tribunal de Cuentas, a través de su Secretaría de Gestión de Calidad aspira a desarrollar todas las actividades propias de la organización con el objeto de garantizar que los fondos y demás bienes del Estado se encuentren adecuadamente controlados y promover en todos sus niveles un compromiso hacia la mejora continua.'
};

const POLITICA_CALIDAD = {
  mision: 'Ejecutar un efectivo control de los fondos públicos, de manera oportuna, imparcial y transparente.',
  vision: 'Lograr transformar al Honorable Tribunal de Cuentas en una organización reconocida por la excelencia y transparencia de su gestión, asegurando el correcto control patrimonial del erario público. Asimismo, se compromete a cumplir con los requisitos establecidos por la norma internacional ISO 9001 y a mejorar continuamente la eficacia y eficiencia del Sistema de Gestión de la Calidad.',
  valores: ['Eficacia', 'Eficiencia', 'Transparencia', 'Equidad'],
  revision: '06',
  autoridades: 'Natalia Hissa – Sergio Oste – Guillermo Catallamo – Cecilia Badaloni – Alberto Ferraro'
};

const CERTIFICADOS = [
  { id: 1, imagen: certificado1, alt: 'Certificado ISO 9001 - 1' },
  { id: 2, imagen: certificado2, alt: 'Certificado ISO 9001 - 2' },
  { id: 3, imagen: certificado3, alt: 'Certificado ISO 9001 - 3' },
  { id: 4, imagen: certificado4, alt: 'Certificado ISO 9001 - 4' },
  { id: 5, imagen: certificado5, alt: 'Certificado ISO 9001 - 5' }
];

const BENEFICIOS_CALIDAD = [
  {
    titulo: 'Control Efectivo',
    descripcion: 'Procesos optimizados para un control más eficiente de los fondos públicos',
    icono: Shield,
    color: 'from-blue-500 to-blue-700'
  },
  {
    titulo: 'Transparencia',
    descripcion: 'Mayor transparencia en todos los procedimientos y decisiones institucionales',
    icono: CheckCircle,
    color: 'from-emerald-500 to-emerald-700'
  },
  {
    titulo: 'Mejora Continua',
    descripcion: 'Compromiso permanente con la mejora de procesos y procedimientos',
    icono: Target,
    color: 'from-purple-500 to-purple-700'
  },
  {
    titulo: 'Capacitación',
    descripcion: 'Personal altamente capacitado en estándares de calidad internacional',
    icono: Users,
    color: 'from-orange-500 to-orange-700'
  }
];

const PORTAL_CALIDAD_URL = 'https://calidad.sanluis.gov.ar/HonorableTribunaldeCuentas/default.aspx';

const FALLBACK_CERTIFICATE_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDIwMCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjgwIiBmaWxsPSIjRjNGNEY2IiByeD0iOCIvPgo8cGF0aCBkPSJNMTAwIDEwMEM4Ny4zIDEwMCA3NyA4OS43IDc3IDc3UzgwLjMgNTQgMTAwIDU0UzEyMyA2NC4zIDEyMyA3N1MxMTIuNyAxMDAgMTAwIDEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN0YXIgY3g9IjEwMCIgY3k9IjE0MCIgcj0iMjAiIGZpbGw9IiM5Q0EzQUYiLz4KPHJlY3QgeD0iNDAiIHk9IjE4MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI4IiByeD0iNCIgZmlsbD0iIzlDQTNBRiIvPgo8cmVjdCB4PSI0MCIgeT0iMjAwIiB3aWR0aD0iODAiIGhlaWdodD0iNiIgcng9IjMiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';

// ==================== COMPONENTES AUXILIARES ====================

const DecorativePattern = () => (
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-32 md:h-32 border-2 border-white rounded-full animate-pulse"></div>
    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-24 md:h-24 border-2 border-emerald-300 rounded-full"></div>
    <div className="absolute top-1/2 left-1/3 w-8 h-8 md:w-16 md:h-16 border-2 border-teal-300 rounded-full"></div>
  </div>
);

const CertificadoItem = ({ certificado }) => (
  <div className="group cursor-pointer">
    <div className="bg-gray-100 rounded-xl p-3 md:p-4 hover:bg-gray-200 transition-all duration-300 hover:shadow-md">
      <img
        src={certificado.imagen}
        alt={certificado.alt}
        className="w-full h-auto rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
        onError={(e) => {
          e.target.src = FALLBACK_CERTIFICATE_IMAGE;
        }}
        loading="lazy"
      />
    </div>
  </div>
);

const PolicyCard = ({ title, content, color }) => (
  <div className={`border-2 ${color} rounded-xl p-4 md:p-6 hover:shadow-md transition-shadow duration-300`}>
    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3">{title}</h3>
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{content}</p>
  </div>
);

const BeneficioCard = ({ beneficio }) => {
  const IconComponent = beneficio.icono;

  return (
    <Card className="p-4 md:p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-3 md:space-x-4">
        <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${beneficio.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3 group-hover:text-emerald-700 transition-colors duration-300">
            {beneficio.titulo}
          </h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            {beneficio.descripcion}
          </p>
        </div>
      </div>
    </Card>
  );
};

// ==================== SECCIONES PRINCIPALES ====================

const HeroSection = () => (
  <div className="mb-8 md:mb-16">
    <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 rounded-2xl md:rounded-3xl p-6 md:p-10 text-white relative overflow-hidden">
      <DecorativePattern />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 md:mb-6">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-xl md:rounded-2xl flex items-center justify-center mr-0 sm:mr-4 mb-4 sm:mb-0">
            <Star className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">Gestión de Calidad</h1>
            <p className="text-emerald-200 text-sm md:text-lg">
              Tribunal de Cuentas de la Provincia de San Luis
            </p>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white border-opacity-20">
          <p className="text-sm md:text-lg leading-relaxed text-emerald-100 mb-3 md:mb-4">
            {CALIDAD_INFO.certificacion.descripcion}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 md:gap-4">
            <div className="bg-white bg-opacity-20 rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-2">
              <span className="font-semibold text-sm md:text-base">
                Certificación: {CALIDAD_INFO.certificacion.norma}
              </span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-2">
              <span className="font-semibold text-sm md:text-base">
                Año: {CALIDAD_INFO.certificacion.año}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MainContentAndSidebar = () => (
  <div className="mb-8 md:mb-16">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
      {/* Contenido principal - 3 columnas */}
      <div className="lg:col-span-3 space-y-8 md:space-y-16">
        {/* Información principal */}
        <div className="space-y-4 md:space-y-6">
          <Card className="p-4 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              Sistema de Gestión de Calidad
            </h2>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>{CALIDAD_INFO.proposito}</p>
              <p>{CALIDAD_INFO.responsabilidad}</p>
              <p>{CALIDAD_INFO.secretaria}</p>
            </div>
          </Card>

          <Card className="p-4 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Portal de Calidad</h2>
              <Award className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />
            </div>
            {/* } <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
              Acceda al portal oficial de gestión de calidad del Tribunal de Cuentas 
              para obtener información detallada sobre nuestros procesos certificados.
            </p>*/}
            <a
              href={PORTAL_CALIDAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <GradientButton
                variant="success"
                size="lg"
                className="flex items-center w-full sm:w-auto justify-center text-sm md:text-base"
              >
                Acceso Portal de Calidad
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </GradientButton>
            </a>
          </Card>
        </div>

        {/* Política de Calidad */}
        <div>
          <SectionHeader
            title="Política de Calidad"
            subtitle="Misión, Visión y Valores institucionales"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Panel izquierdo con logo */}
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white flex items-center justify-center min-h-[120px] md:min-h-[200px]">
              <div className="text-center">
                <h2 className="text-xl md:text-4xl font-bold">
                  Política de Calidad
                </h2>
              </div>
            </div>

            {/* Panel derecho con contenido */}
            <div className="space-y-4 md:space-y-6">
              <PolicyCard
                title="MISIÓN"
                content={POLITICA_CALIDAD.mision}
                color="border-blue-300 bg-blue-50"
              />
              <PolicyCard
                title="VISIÓN"
                content={POLITICA_CALIDAD.vision}
                color="border-emerald-300 bg-emerald-50"
              />
              <div className="border-2 border-purple-300 bg-purple-50 rounded-xl p-4 md:p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3">VALORES</h3>
                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-4">
                  {POLITICA_CALIDAD.valores.map((valor, index) => (
                    <div
                      key={index}
                      className="text-center py-2 bg-white rounded-lg font-medium text-xs md:text-sm text-gray-700 hover:shadow-sm transition-shadow duration-200"
                    >
                      {valor}
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-600 text-white text-center py-2 rounded-lg font-semibold text-xs md:text-sm">
                  {POLITICA_CALIDAD.autoridades}
                </div>
                <div className="text-center mt-2 text-xs md:text-sm text-gray-600">
                  Revisión: {POLITICA_CALIDAD.revision}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios de la Gestión de Calidad */}
        <div>
          <SectionHeader
            title="Beneficios de la Gestión de Calidad"
            subtitle="Impacto positivo en la gestión institucional"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {BENEFICIOS_CALIDAD.map((beneficio, index) => (
              <BeneficioCard key={index} beneficio={beneficio} />
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar de certificados - 1 columna */}
      <div className="lg:col-span-1 order-first lg:order-last">
        <Card className="p-4 md:p-6 lg:sticky lg:top-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 mr-2" />
            Certificaciones
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
            {CERTIFICADOS.map((certificado) => (
              <CertificadoItem key={certificado.id} certificado={certificado} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  </div>
);

const CommitmentSection = () => (
  <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white">
    <div className="flex items-start space-x-3 md:space-x-4">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
        <Star className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Compromiso con la Excelencia</h3>
        <p className="text-sm md:text-base text-emerald-100 leading-relaxed">
          Nuestro compromiso con la gestión de calidad nos permite brindar un servicio
          de control y auditoría de excelencia, garantizando la transparencia y eficiencia
          en el manejo de los recursos públicos de la Provincia de San Luis.
        </p>
      </div>
    </div>
  </div>
);

// ==================== COMPONENTE PRINCIPAL ====================

export const GestionCalidadPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <Section padding="py-6 md:py-12">
      <HeroSection />
      <MainContentAndSidebar />
      <CommitmentSection />
    </Section>
  </div>
);