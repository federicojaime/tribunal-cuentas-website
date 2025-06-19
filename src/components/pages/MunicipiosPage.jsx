// src/components/pages/MunicipiosPage.jsx
import React from 'react';
import { Building, FileText, Users, Calendar, ExternalLink, GraduationCap, CheckCircle } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { GradientButton } from '../ui/Button';

// Importación de imagen de capacitación
import capacitacionImg from '../../assets/g4189.png';

// Datos de la página de municipios
const MUNICIPIOS_INFO = {
  descripcion: 'En esta sección podrán encontrar toda información relacionada a los Municipios como ser fechas de presentación de los Balances Trimestrales, vencimientos, publicaciones y todo tipos de avisos vinculados a los mismos.',
  encuestaUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdNU5OSBK1QeLiot-7mUjZI3uPn8aDTp6JSC7Rumd54UNYjKA/viewform?usp=send_form'
};

const CAPACITACIONES_RECIENTES = [
  {
    id: 1,
    titulo: 'Capacitación sobre Tramix y Rendición de Cuenta Digital',
    fecha: '12/05/2025',
    descripcion: 'El día 12/05 se realizó una jornada de Capacitación para...',
    imagen: capacitacionImg,
    tipo: 'Capacitación'
  }
];

const CALENDARIO_EVENTOS = [
  {
    fecha: '9 JUN, VIE',
    evento: 'Vencimiento Presentación Balance',
    tipo: 'vencimiento'
  },
  {
    fecha: '31 AGO, DOM',
    evento: 'Vencimiento Presentación Balance',
    tipo: 'vencimiento'
  },
  {
    fecha: '30 NOV, DOM',
    evento: 'Vencimiento Presentación Balance',
    tipo: 'vencimiento'
  },
  {
    fecha: '28 FEB, SÁB',
    evento: 'Vencimiento Presentación Balance - Eventos - Tribunal de Cuentas',
    tipo: 'evento'
  }
];

const SERVICIOS_MUNICIPIOS = [
  {
    titulo: 'Balances Trimestrales',
    descripcion: 'Presentación y seguimiento de balances trimestrales municipales',
    icono: FileText,
    color: 'from-blue-500 to-blue-700'
  },
  {
    titulo: 'Capacitaciones',
    descripcion: 'Programas de formación en sistemas digitales y rendición de cuentas',
    icono: GraduationCap,
    color: 'from-emerald-500 to-emerald-700'
  },
  {
    titulo: 'Asesoramiento',
    descripcion: 'Consultas y asistencia técnica para municipios',
    icono: Users,
    color: 'from-purple-500 to-purple-700'
  },
  {
    titulo: 'Calendario de Vencimientos',
    descripcion: 'Fechas importantes y plazos de presentación',
    icono: Calendar,
    color: 'from-orange-500 to-orange-700'
  }
];

export const MunicipiosPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <Section padding="py-12">
      {/* Header principal */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 rounded-3xl p-10 text-white relative overflow-hidden">
          {/* Patrón decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 right-8 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 border-2 border-blue-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-purple-300 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mr-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Municipios</h1>
                <p className="text-blue-200 text-lg">Control y Asistencia Municipal</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <p className="text-lg leading-relaxed text-blue-100">
                {MUNICIPIOS_INFO.descripcion}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Sección principal */}
        <div className="lg:col-span-2 space-y-8">
          {/* Encuesta de Satisfacción */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              Encuesta de Satisfacción
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Su opinión es importante para nosotros. Complete nuestra encuesta de satisfacción
              para ayudarnos a mejorar nuestros servicios municipales.
            </p>
            <a
              href={MUNICIPIOS_INFO.encuestaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <GradientButton
                variant="primary"
                size="lg"
                className="flex items-center"
              >
                Completar Encuesta
                <ExternalLink className="w-5 h-5 ml-2" />
              </GradientButton>
            </a>
          </Card>

          {/* Últimas Capacitaciones */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Últimas Capacitaciones</h2>
            <div className="space-y-6">
              {CAPACITACIONES_RECIENTES.map((capacitacion) => (
                <CapacitacionCard key={capacitacion.id} capacitacion={capacitacion} />
              ))}
            </div>
          </Card>


        </div>

        {/* Sidebar - Calendario */}
        <div>
          <Card className="p-6 sticky top-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Calendar className="w-6 h-6 text-blue-600 mr-2" />
              Calendario
            </h3>
            <div className="mb-4 text-center">
              <p className="text-lg font-semibold text-gray-700">Jun de 2025 – jun de 2026</p>
            </div>

            <div className="space-y-4">
              {CALENDARIO_EVENTOS.map((evento, index) => (
                <EventoCard key={index} evento={evento} />
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Información adicional */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Building className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Apoyo Integral a Municipios</h3>
            <p className="text-emerald-100 leading-relaxed">
              El Tribunal de Cuentas brinda asistencia continua a los municipios de la provincia
              a través de capacitaciones, asesoramiento técnico y herramientas digitales para
              facilitar la gestión transparente y eficiente de los recursos públicos municipales.
            </p>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const CapacitacionCard = ({ capacitacion }) => (
  <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
    <div className="md:w-1/3">
      <img
        src={capacitacion.imagen}
        alt={capacitacion.titulo}
        className="w-full h-48 object-cover rounded-lg"
        onError={(e) => {
          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTQ5NEFBIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkNBUEFDSVRBQ0nDk048L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNiI+VHJhbWl4IHkgUmVuZGljacOzbjwvdGV4dD4KPHN2ZyB4PSIxNzAiIHk9IjE4MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Ik0yMCAxMGgxMHYxMEgyMFYxMHptMTUgMGgxMHYxMEgzNVYxMHptLTE1IDE1aDEwdjEwSDIwVjI1em0xNSAwaDEwdjEwSDM1VjI1eiIvPgo8L3N2Zz4KPC9zdmc+';
        }}
      />
    </div>
    <div className="md:w-2/3">
      <div className="mb-3">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          {capacitacion.tipo}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{capacitacion.titulo}</h3>
      <p className="text-gray-600 mb-4">{capacitacion.descripcion}</p>
      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{capacitacion.fecha}</span>
      </div>
    </div>
  </div>
);

const ServicioCard = ({ servicio }) => (
  <div className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-start space-x-4">
      <div className={`w-12 h-12 bg-gradient-to-br ${servicio.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
        <servicio.icono className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{servicio.titulo}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{servicio.descripcion}</p>
      </div>
    </div>
  </div>
);

const EventoCard = ({ evento }) => (
  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
    <div className="text-center flex-shrink-0">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold text-white ${evento.tipo === 'vencimiento' ? 'bg-red-500' : 'bg-blue-500'
        }`}>
        <span>{evento.fecha.split(' ')[0]}</span>
      </div>
      <p className="text-xs text-gray-500 mt-1">{evento.fecha.split(' ')[1]}</p>
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-800 leading-tight">{evento.evento}</p>
      {evento.tipo === 'vencimiento' && (
        <div className="flex items-center mt-2">
          <CheckCircle className="w-4 h-4 text-red-500 mr-1" />
          <span className="text-xs text-red-600 font-medium">Vencimiento</span>
        </div>
      )}
    </div>
  </div>
);