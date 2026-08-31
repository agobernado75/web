import { useState, useEffect } from 'react';

const INITIAL_FORM = {
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
};

function Contact() {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const payload = new URLSearchParams({
            "form-name": "contact",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            projectType: formData.projectType,
            message: formData.message,
        });
        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: payload.toString(),
            });
            if (!response.ok) {
                throw new Error("No se pudo enviar el mensaje");
            }
            setIsSubmitted(true);
            setFormData(INITIAL_FORM);
        } catch (err) {
            setError("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
        }
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
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Ubicación</h3>
                                        <p className="mt-1 text-gray-600">
                                            Valladolid (España). Soy de Valladolid y puedo trabajar con clientes
                                            en toda España.
                                        </p>
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
                                            Abierto a nuevos proyectos de webs y aplicaciones digitales. Trato
                                            directo, sin intermediarios.
                                        </p>
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
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Entrega Rápida</h3>
                                        <p className="mt-1 text-gray-600">
                                            Tu proyecto listo en 1–2 semanas, sin sacrificar calidad.
                                        </p>
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
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Respuesta Ágil</h3>
                                        <p className="mt-1 text-gray-600">
                                            Te respondo en menos de 24 horas con una propuesta clara y cerrada.
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
                                <>
                                    {error && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
                                            {error}
                                        </div>
                                    )}
                                    <form
                                    className="space-y-6"
                                    name="contact"
                                    method="POST"
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                    onSubmit={handleSubmit}>
                                    <input type="hidden" name="form-name" value="contact" />
                                    <p className="hidden">
                                        <label>
                                            No rellenes este campo: <input name="bot-field" />
                                        </label>
                                    </p>
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
                                                <option value="web-pymes">Web para Pymes (250 €)</option>
                                                <option value="app-digital">Aplicación Digital a medida (350 €)</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>
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
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
