import { Clock, Building, FileText, Eye, Shield, CheckCircle } from 'lucide-react';

export const STATS_DATA = [
    { number: "25+", label: "Años de Experiencia", icon: Clock, color: "from-blue-500 to-indigo-600" },
    { number: "150+", label: "Municipios Auditados", icon: Building, color: "from-green-500 to-emerald-600" },
    { number: "500+", label: "Informes Realizados", icon: FileText, color: "from-purple-500 to-violet-600" },
    { number: "100%", label: "Transparencia", icon: Eye, color: "from-orange-500 to-red-600" }
];

export const NEWS_DATA = [
    {
        id: 1,
        title: "El Dr. Sergio Oste fue reconocido en Brasil",
        date: "Mayo 2025",
        category: "Reconocimientos",
        excerpt: "Destacado reconocimiento internacional por su labor en el control público.",
        image: "/api/placeholder/400/250"
    },
    {
        id: 2,
        title: "Otra visión del control del Estado Nacional",
        date: "Mayo 2025",
        category: "Conferencias",
        excerpt: "Análisis sobre nuevos enfoques en el control estatal.",
        image: "/api/placeholder/400/250"
    },
    {
        id: 3,
        title: "El Dr. Sergio Oste disertó en la Reunión Especial",
        date: "Abril 2025",
        category: "Eventos",
        excerpt: "Participación en importante encuentro de tribunales de cuentas.",
        image: "/api/placeholder/400/250"
    }
];

export const SERVICES_DATA = [
    {
        title: "Control de Gastos Públicos",
        description: "Auditoría exhaustiva de la utilización de recursos del Estado Provincial",
        icon: Shield,
        color: "from-blue-500 to-indigo-600"
    },
    {
        title: "Auditoría Municipal",
        description: "Revisión y control de las administraciones municipales",
        icon: Building,
        color: "from-green-500 to-emerald-600"
    },
    {
        title: "Revisión de Fondos",
        description: "Control específico de fondos públicos y su correcta aplicación",
        icon: FileText,
        color: "from-purple-500 to-violet-600"
    },
    {
        title: "Transparencia",
        description: "Garantía de acceso a la información pública y rendición de cuentas",
        icon: Eye,
        color: "from-orange-500 to-red-600"
    }
];

export const MUNICIPAL_SERVICES = [
    "Auditoría de cuentas municipales",
    "Control de presupuestos",
    "Revisión de procesos licitatorios",
    "Evaluación de programas sociales"
];