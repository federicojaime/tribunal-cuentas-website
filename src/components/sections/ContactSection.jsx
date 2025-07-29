import React, { useState } from 'react';
import { Building2, FileText, Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { GradientButton } from '../ui/Button';

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
        console.log('Formulario enviado:', formData);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <Section background="bg-white" padding="py-16 lg:py-24">
            <div className="max-w-6xl mx-auto">
                {/* Header minimalista */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Contacto
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Canales oficiales de comunicación del Tribunal de Cuentas
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Información de contacto */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Información Institucional
                        </h3>

                        {/* Dependencias */}
                        <div className="space-y-6">
                            <ContactItem
                                title="Vocalías y Secretaría Legal"
                                address="Ayacucho 1076 - San Luis"
                                icon={Building2}
                                color="bg-blue-600"
                            />

                            <ContactItem
                                title="Contaduría Fiscal General"
                                address="Ayacucho 945 - 4º Piso"
                                icon={FileText}
                                color="bg-emerald-600"
                            />

                            <ContactItem
                                title="Mesa de Entradas"
                                address="Ayacucho 945 - 4º Piso"
                                icon={Mail}
                                color="bg-purple-600"
                            />
                        </div>

                        {/* Contacto directo */}
                        <div className="pt-8 border-t border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-900 mb-6">
                                Contacto Directo
                            </h4>
                            
                            <div className="space-y-4">
                                {/* Teléfonos */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-2">Teléfonos</p>
                                        <div className="space-y-1">
                                            <a 
                                                href="tel:2664423791" 
                                                className="block text-gray-700 hover:text-blue-600 transition-colors"
                                            >
                                                266 - 4423791
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-2">Correo Electrónico</p>
                                        <a 
                                            href="mailto:tribunaldecuentassl@htc.sanluis.gov.ar"
                                            className="text-gray-700 hover:text-green-600 transition-colors break-all"
                                        >
                                            tribunaldecuentassl@htc.sanluis.gov.ar
                                        </a>
                                    </div>
                                </div>

                                {/* Ubicación */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-2">Ubicación</p>
                                        <p className="text-gray-700">
                                            Centro de San Luis, Argentina
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div>
                        <Card className="p-8 shadow-lg border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Enviar Consulta
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nombre y Apellido
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Su nombre completo"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Correo Electrónico
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="su@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Asunto
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    >
                                        <option value="">Seleccione un motivo</option>
                                        <option value="consulta-general">Consulta General</option>
                                        <option value="rendicion-cuentas">Rendición de Cuentas</option>
                                        <option value="auditoria">Auditoría</option>
                                        <option value="normativa">Normativa</option>
                                        <option value="tramites">Trámites</option>
                                        <option value="otros">Otros</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                                        placeholder="Describa su consulta o solicitud..."
                                    />
                                </div>

                                <GradientButton
                                    type="submit"
                                    size="lg"
                                    className="w-full flex items-center justify-center"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Enviar Consulta
                                </GradientButton>
                            </form>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <p className="text-blue-800 text-sm">
                                    <strong>Tiempo de respuesta:</strong> Las consultas recibidas serán respondidas 
                                    en un plazo de 48 a 72 horas hábiles.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Información adicional */}
                <div className="mt-16 pt-12 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <InfoCard
                            icon={Phone}
                            title="Atención Telefónica"
                            description="Lunes a Viernes de 8:00 a 14:00 hs"
                            color="bg-blue-600"
                        />
                        <InfoCard
                            icon={Mail}
                            title="Mesa de Entradas"
                            description="Recepción de documentos hasta las 13:00 hs"
                            color="bg-green-600"
                        />
                        <InfoCard
                            icon={User}
                            title="Atención Presencial"
                            description="Se recomienda solicitar turno previo"
                            color="bg-purple-600"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

// Componente ContactItem
const ContactItem = ({ title, address, icon: Icon, color }) => (
    <div className="flex items-start space-x-4 group">
        <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
            <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900 mb-1">
                {title}
            </h4>
            <p className="text-gray-600 text-sm">
                {address}
            </p>
        </div>
    </div>
);

// Componente InfoCard
const InfoCard = ({ icon: Icon, title, description, color }) => (
    <div className="text-center group">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
            <Icon className="w-6 h-6 text-white" />
        </div>
        <h4 className="font-semibold text-gray-900 mb-2">
            {title}
        </h4>
        <p className="text-gray-600 text-sm">
            {description}
        </p>
    </div>
);