// src/components/pages/PanelAdministrativoPage.jsx
import React, { useState } from 'react';
import { 
    User, LogOut, Database, FileText, Building, Users, Upload, 
    Save, Plus, Edit, Trash2, Eye, Calendar, MapPin, Phone,
    Mail, CheckCircle, AlertTriangle, Settings, BarChart3
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { GradientButton } from '../ui/Button';

export const PanelAdministrativoPage = ({ onSectionChange }) => {
    const [activeModule, setActiveModule] = useState('dashboard');
    const [userData] = useState({
        nombre: 'Administrador Sistema',
        rol: 'Nivel Operativo',
        ultimoAcceso: '06/06/2025 - 14:30'
    });

    const modules = [
        {
            id: 'dashboard',
            name: 'Dashboard',
            icon: BarChart3,
            color: 'from-blue-500 to-blue-700'
        },
        {
            id: 'carga-datos',
            name: 'Carga de Datos',
            icon: Database,
            color: 'from-emerald-500 to-emerald-700'
        },
        {
            id: 'prensa',
            name: 'Gestión de Prensa',
            icon: FileText,
            color: 'from-purple-500 to-purple-700'
        },
        {
            id: 'municipios',
            name: 'Logística Municipios',
            icon: Building,
            color: 'from-orange-500 to-orange-700'
        }
    ];

    const handleLogout = () => {
        // Simular logout y regresar al login
        if (onSectionChange) {
            onSectionChange('nivel-operativo');
        }
    };

    const renderModuleContent = () => {
        switch (activeModule) {
            case 'dashboard':
                return <DashboardModule />;
            case 'carga-datos':
                return <CargaDatosModule />;
            case 'prensa':
                return <PrensaModule />;
            case 'municipios':
                return <MunicipiosModule />;
            default:
                return <DashboardModule />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Header del Panel */}
            <header className="bg-white shadow-lg border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                                <Settings className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Panel Administrativo</h1>
                                <p className="text-sm text-gray-600">Sistema de Gestión - Tribunal de Cuentas</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <p className="text-sm font-medium text-gray-900">{userData.nombre}</p>
                                <p className="text-xs text-gray-500">{userData.rol}</p>
                            </div>
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Cerrar Sesión"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar de Módulos */}
                    <div className="lg:col-span-1">
                        <Card className="p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Módulos del Sistema</h2>
                            <nav className="space-y-2">
                                {modules.map((module) => (
                                    <button
                                        key={module.id}
                                        onClick={() => setActiveModule(module.id)}
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                            activeModule === module.id
                                                ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    >
                                        <div className={`w-8 h-8 bg-gradient-to-br ${module.color} rounded-lg flex items-center justify-center`}>
                                            <module.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-medium">{module.name}</span>
                                    </button>
                                ))}
                            </nav>
                            
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <p className="text-xs text-gray-500 mb-2">Último acceso:</p>
                                <p className="text-sm font-medium text-gray-700">{userData.ultimoAcceso}</p>
                            </div>
                        </Card>
                    </div>

                    {/* Contenido Principal */}
                    <div className="lg:col-span-3">
                        {renderModuleContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Módulo Dashboard
const DashboardModule = () => {
    const stats = [
        { label: 'Documentos Procesados', value: '1,247', icon: FileText, color: 'from-blue-500 to-blue-700' },
        { label: 'Municipios Activos', value: '66', icon: Building, color: 'from-emerald-500 to-emerald-700' },
        { label: 'Notas de Prensa', value: '89', icon: FileText, color: 'from-purple-500 to-purple-700' },
        { label: 'Usuarios del Sistema', value: '23', icon: Users, color: 'from-orange-500 to-orange-700' }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Dashboard del Sistema</h2>
                <div className="text-sm text-gray-500">
                    Actualizado: {new Date().toLocaleDateString('es-AR')}
                </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Actividad Reciente */}
            <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Actividad Reciente</h3>
                <div className="space-y-4">
                    {[
                        { tipo: 'Carga', descripcion: 'Nuevos datos fiscales - Municipio Villa Mercedes', tiempo: 'Hace 2 horas', estado: 'exitoso' },
                        { tipo: 'Prensa', descripcion: 'Publicación: "Informe Trimestral de Auditorías"', tiempo: 'Hace 4 horas', estado: 'exitoso' },
                        { tipo: 'Municipio', descripcion: 'Actualización logística - San Luis Capital', tiempo: 'Hace 6 horas', estado: 'pendiente' }
                    ].map((actividad, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className={`w-2 h-2 rounded-full ${actividad.estado === 'exitoso' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900">{actividad.descripcion}</p>
                                <p className="text-sm text-gray-500">{actividad.tipo} • {actividad.tiempo}</p>
                            </div>
                            {actividad.estado === 'exitoso' ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                            )}
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

// Módulo Carga de Datos
const CargaDatosModule = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Carga de Datos del Sistema</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upload de Archivos */}
                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <Upload className="w-5 h-5 mr-2 text-blue-600" />
                        Cargar Nuevos Datos
                    </h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Arrastra archivos aquí o haz clic para seleccionar</p>
                        <p className="text-sm text-gray-500">Formatos: CSV, Excel, JSON</p>
                        <input
                            type="file"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                            className="hidden"
                            accept=".csv,.xlsx,.json"
                        />
                        <GradientButton className="mt-4" size="sm">
                            Seleccionar Archivo
                        </GradientButton>
                    </div>
                </Card>

                {/* Formulario de Datos */}
                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Entrada Manual de Datos</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Documento</label>
                            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>Informe de Auditoría</option>
                                <option>Resolución</option>
                                <option>Acuerdo</option>
                                <option>Dictamen</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Número de Expediente</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                            <textarea rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <GradientButton className="w-full">
                            <Save className="w-4 h-4 mr-2" />
                            Guardar Registro
                        </GradientButton>
                    </form>
                </Card>
            </div>
        </div>
    );
};

// Módulo Gestión de Prensa
const PrensaModule = () => {
    const [noticias] = useState([
        { id: 1, titulo: 'Informe Trimestral de Auditorías', estado: 'Publicado', fecha: '2025-06-01' },
        { id: 2, titulo: 'Nueva Certificación ISO 9001', estado: 'Borrador', fecha: '2025-06-05' },
        { id: 3, titulo: 'Implementación de Firma Digital', estado: 'Revisión', fecha: '2025-06-03' }
    ]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Gestión de Prensa</h2>
                <GradientButton>
                    <Plus className="w-4 h-4 mr-2" />
                    Nueva Publicación
                </GradientButton>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Editor de Contenido */}
                <Card className="lg:col-span-2 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Editor de Contenido</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Título de la Noticia</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                                   placeholder="Ingrese el título..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>Institucional</option>
                                <option>Auditorías</option>
                                <option>Eventos</option>
                                <option>Normativas</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Contenido</label>
                            <textarea rows={8} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                      placeholder="Escriba el contenido de la noticia..."></textarea>
                        </div>
                        <div className="flex space-x-4">
                            <GradientButton>
                                <Save className="w-4 h-4 mr-2" />
                                Guardar Borrador
                            </GradientButton>
                            <GradientButton variant="success">
                                Publicar
                            </GradientButton>
                        </div>
                    </form>
                </Card>

                {/* Lista de Publicaciones */}
                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Publicaciones Recientes</h3>
                    <div className="space-y-4">
                        {noticias.map((noticia) => (
                            <div key={noticia.id} className="border border-gray-200 rounded-lg p-4">
                                <h4 className="font-medium text-gray-900 mb-2">{noticia.titulo}</h4>
                                <div className="flex items-center justify-between">
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                        noticia.estado === 'Publicado' ? 'bg-green-100 text-green-800' :
                                        noticia.estado === 'Borrador' ? 'bg-gray-100 text-gray-800' :
                                        'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {noticia.estado}
                                    </span>
                                    <div className="flex space-x-2">
                                        <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

// Módulo Logística de Municipios
const MunicipiosModule = () => {
    const [municipios] = useState([
        { id: 1, nombre: 'San Luis Capital', estado: 'Activo', ultimaAuditoria: '2025-05-15', contacto: 'Juan Pérez' },
        { id: 2, nombre: 'Villa Mercedes', estado: 'En Revisión', ultimaAuditoria: '2025-04-22', contacto: 'María González' },
        { id: 3, nombre: 'Merlo', estado: 'Pendiente', ultimaAuditoria: '2025-03-10', contacto: 'Carlos Rodríguez' }
    ]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Logística de Municipios</h2>
                <GradientButton>
                    <Plus className="w-4 h-4 mr-2" />
                    Nuevo Municipio
                </GradientButton>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Formulario de Municipio */}
                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Datos del Municipio</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Municipio</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Responsable</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                            <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <GradientButton className="w-full">
                            <Save className="w-4 h-4 mr-2" />
                            Guardar Municipio
                        </GradientButton>
                    </form>
                </Card>

                {/* Lista de Municipios */}
                <Card className="lg:col-span-2 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Municipios Registrados</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-4 font-medium text-gray-700">Municipio</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700">Estado</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700">Última Auditoría</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700">Contacto</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {municipios.map((municipio) => (
                                    <tr key={municipio.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center">
                                                <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                                                {municipio.nombre}
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 text-xs rounded-full ${
                                                municipio.estado === 'Activo' ? 'bg-green-100 text-green-800' :
                                                municipio.estado === 'En Revisión' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                                {municipio.estado}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">{municipio.ultimaAuditoria}</td>
                                        <td className="py-3 px-4 text-gray-600">{municipio.contacto}</td>
                                        <td className="py-3 px-4">
                                            <div className="flex space-x-2">
                                                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
};