// src/constants/navigation.js - CORREGIDO
import { 
  Home, Info, Award, Building, Bell, MessageCircle,
  Users, Clock, FileText, Shield, Building2, Target, Star
} from 'lucide-react';

export const NAVIGATION_CONFIG = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { 
    id: 'institucional', 
    label: 'Institucional', 
    icon: Info,
    submenu: [
      { id: 'autoridades', label: 'Autoridades', icon: Users },
      { id: 'historia', label: 'Historia', icon: Clock },
      { id: 'ley-organica', label: 'Ley Orgánica', icon: FileText },
      { id: 'normas', label: 'Normas', icon: Shield },
      { id: 'constitucion', label: 'Constitución Provincial', icon: Building2 }
    ]
  },
  { 
    id: 'calidad', 
    label: 'Calidad', 
    icon: Award,
    submenu: [
      { id: 'nivel-operativo', label: 'Nivel Operativo', icon: Target },
      { id: 'gestion-calidad', label: 'Gestión de Calidad', icon: Star }
    ]
  },
  { id: 'municipios', label: 'Municipios', icon: Building },
  { id: 'novedades', label: 'Novedades', icon: Bell },
  { id: 'contacto', label: 'Contacto', icon: MessageCircle }
];

// SECCIONES VÁLIDAS - AGREGAMOS 'autoridades'
export const VALID_SECTIONS = [
  'inicio',
  'institucional', 
  'autoridades',  // NUEVA SECCIÓN
  'historia',
  'ley-organica', 
  'normas',
  'constitucion',
  'calidad',
  'nivel-operativo',
  'gestion-calidad', 
  'municipios',
  'novedades',
  'contacto'
];

// Mapeo de secciones para navegación desde botones - CORREGIDO
export const SECTION_MAPPING = {
  'inicio': 'inicio',
  'autoridades': 'autoridades',  // MAPEO DIRECTO
  'historia': 'institucional', 
  'ley-organica': 'institucional',
  'normas': 'institucional',
  'constitucion': 'institucional',
  'institucional': 'institucional',
  'calidad': 'calidad',
  'nivel-operativo': 'calidad',
  'gestion-calidad': 'calidad',
  'municipios': 'municipios',
  'novedades': 'novedades',
  'contacto': 'contacto'
};