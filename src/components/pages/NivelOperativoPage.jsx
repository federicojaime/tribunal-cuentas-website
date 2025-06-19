// src/components/pages/NivelOperativoPage.jsx
import React, { useState } from 'react';
import { Shield, User, Lock, Eye, EyeOff, AlertTriangle, CheckCircle } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { GradientButton } from '../ui/Button';

export const NivelOperativoPage = ({ onSectionChange }) => {
    const [formData, setFormData] = useState({
        usuario: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Limpiar error al escribir
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulación de autenticación
        setTimeout(() => {
            setIsLoading(false);
            // Simular login exitoso - navegar al panel
            if (formData.usuario && formData.password) {
                // En una app real, aquí se validarían las credenciales
                if (onSectionChange) {
                    onSectionChange('panel-administrativo');
                }
            } else {
                setError('Credenciales incorrectas. Verifique sus datos e intente nuevamente.');
            }
        }, 2000);
    };

    return (
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
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold mb-2">Sistema de Gestión de Calidad</h1>
                                    <p className="text-blue-200 text-lg">Nivel Operativo - Acceso Restringido</p>
                                </div>
                            </div>

                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                                <p className="text-lg leading-relaxed text-blue-100">
                                    Sección disponible para usuarios autorizados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formulario de Login */}
                <div className="max-w-md mx-auto">
                    <Card className="p-8 shadow-2xl border-2 border-gray-200">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <User className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Acceso al Sistema</h2>
                            <p className="text-gray-600">Ingrese sus credenciales para continuar</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Campo Usuario */}
                            <div>
                                <label htmlFor="usuario" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Usuario
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="usuario"
                                        name="usuario"
                                        value={formData.usuario}
                                        onChange={handleInputChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                        placeholder="Ingrese su usuario"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Campo Contraseña */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Contraseña
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                        placeholder="Ingrese su contraseña"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                    <div className="flex items-center">
                                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                                        <p className="text-red-700 text-sm">{error}</p>
                                    </div>
                                </div>
                            )}

                            {/* Botón Submit */}
                            <div>
                                <GradientButton
                                    type="submit"
                                    size="lg"
                                    className="w-full flex items-center justify-center"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Verificando...
                                        </>
                                    ) : (
                                        <>
                                            <Shield className="w-5 h-5 mr-2" />
                                            Iniciar Sesión
                                        </>
                                    )}
                                </GradientButton>
                            </div>
                        </form>

                        {/* Información adicional */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="bg-blue-50 rounded-xl p-4">
                                <div className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-blue-800 text-sm font-medium mb-1">Acceso Seguro</p>
                                        <p className="text-blue-700 text-xs">
                                            Este sistema utiliza protocolos de seguridad avanzados para proteger 
                                            la información del Tribunal de Cuentas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Información de contacto para soporte */}
                    <div className="mt-8 text-center">
                        <Card className="p-6 bg-gradient-to-br from-gray-50 to-blue-50">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Necesita Ayuda?</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Si tiene problemas para acceder al sistema, contacte al administrador.
                            </p>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p><strong>Email:</strong> tribunaldecuentassl@htc.sanluis.gov.ar</p>
                                <p><strong>Teléfono:</strong> 0266-4423791</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
};