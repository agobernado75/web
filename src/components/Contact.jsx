import { useState, useEffect } from 'react';

const INITIAL_FORM = {
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
};

function Contact() {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        setIsSubmitted(true);
        setFormData(INITIAL_FORM);
    };

    useEffect(() => {
        if (!isSubmitted) return undefined;
        const timer = setTimeout(() => setIsSubmitted(false), 5000);
        return () => clearTimeout(timer);
    }, [isSubmitted]);

    return (
        <div id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <div className="h-0.5 w-8 bg-indigo-600 mr-3"></div>
                        <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">
                            Contacto
                        </span>
                        <div className="h-0.5 w-8 bg-indigo-600 ml-3"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Cotiza Tu <span className="text-indigo-600">Proyecto</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        ¿Tienes una idea? Cuéntamela y te enviaré una propuesta detallada en menos
                        de 24 horas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <div className="bg-gray-50 rounded-xl shadow-md p-8 h-full">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-indigo-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                        <p className="mt-1 text-gray-600">Respuesta en menos de 24 horas</p>
                                        <a
                                            href="mailto:hola@goberstudio.dev"
                                            className="mt-2 inline-block text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                                            hola@goberstudio.dev
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-indigo-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Disponibilidad</h3>
                                        <p className="mt-1 text-gray-600">
                                            Abierto a nuevos proyectos web y móviles. Trato directo conmigo,
                                            sin intermediarios.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Solicita Información
                            </h3>

                            {isSubmitted ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                                    <div className="flex items-start">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>¡Mensaje enviado con éxito! Te responderé en menos de 24 horas con una propuesta.</span>
                                    </div>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Nombre Completo
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="projectType"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Tipo de Proyecto
                                            </label>
                                            <select
                                                id="projectType"
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            >
                                                <option value="">Selecciona un tipo</option>
                                                <option value="landing">Landing Page</option>
                                                <option value="corporativa">Web Corporativa</option>
                                                <option value="ecommerce">E-commerce</option>
                                                <option value="app">App Móvil</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="budget"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Presupuesto Estimado
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="">Selecciona un rango</option>
                                            <option value="<1000">Menos de 1.000 €</option>
                                            <option value="1000-3000">1.000 € - 3.000 €</option>
                                            <option value="3000-10000">3.000 € - 10.000 €</option>
                                            <option value=">10000">Más de 10.000 €</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Tu Proyecto
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            placeholder="Cuéntanos tu idea: ¿qué quieres construir y para cuándo lo necesitas?"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]">
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
