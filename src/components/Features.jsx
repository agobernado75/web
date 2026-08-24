import { useState } from 'react';

const FEATURES = [
    {
        id: 1,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
            </svg>
        ),
        title: "Diseño 100% a Medida",
        description:
            "Nada de plantillas genéricas. Cada proyecto se diseña desde cero reflejando la identidad de tu marca y conectando con tus clientes.",
        image:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 2,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
        ),
        title: "Rendimiento y SEO",
        description:
            "Webs que cargan en menos de un segundo y posicionan en Google. Optimizo velocidad, accesibilidad y Core Web Vitals en cada entrega.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 3,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            </svg>
        ),
        title: "Acompañamiento Continuo",
        description:
            "No desaparezco tras la entrega. Mantenimiento, evolutivos y soporte para que tu producto digital crezca al ritmo de tu negocio.",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1740&q=80",
    },
];

function Features() {
    const [activeFeature, setActiveFeature] = useState(null);

    return (
        <div id="features" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <div className="h-0.5 w-8 bg-indigo-600 mr-3"></div>
                        <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">
                            Por Qué Trabajar Conmigo
                        </span>
                        <div className="h-0.5 w-8 bg-indigo-600 ml-3"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Tu Socio Tecnológico de <span className="text-indigo-600">Confianza</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Convierto tus ideas en productos digitales rápidos, atractivos y que venden.
                        Así trabajo en cada proyecto.
                    </p>
                </div>

                <div className="relative mt-20">
                    {/* Features showcase Interactive */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-4">
                                {FEATURES.map((feature) => (
                                    <div
                                        key={feature.id}
                                        className={`group relative p-5 rounded-xl transition-all duration-300 cursor-pointer ${
                                            activeFeature === feature.id
                                                ? "bg-white shadow-xl border-l-4 border-indigo-600"
                                                : "hover:bg-white/70 bg-white/50"
                                        }`}
                                        onMouseEnter={() => setActiveFeature(feature.id)}
                                        onClick={() => setActiveFeature(feature.id)}
                                    >
                                        <div className="flex items-start">
                                            <div
                                                className={`p-3 rounded-lg transition-all duration-300 ${
                                                    activeFeature === feature.id
                                                        ? "text-indigo-600 bg-indigo-50"
                                                        : "text-gray-900 bg-gray-100"
                                                }`}
                                            >
                                                {feature.icon}
                                            </div>
                                            <div className="ml-4">
                                                <h3
                                                    className={`text-lg font-semibold transition-all duration-300 ${
                                                        activeFeature === feature.id
                                                            ? "text-indigo-600"
                                                            : "text-gray-900"
                                                    }`}
                                                >
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-2 relative h-[500px] lg:h-[600px]">
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                                {FEATURES.map((feature) => (
                                    <div
                                        key={feature.id}
                                        className={`absolute inset-0 transition-all duration-700 transform ${
                                            activeFeature === feature.id
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-0 translate-x-8 pointer-events-none"
                                        }`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-full object-cover"
                                        />

                                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                            <h3 className="text-3xl font-bold text-white mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-200 text-lg max-w-2xl">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {/* Default Image If nothing is selected */}
                                {!activeFeature && (
                                    <div className="absolute inset-0">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1740&q=80"
                                            alt="Antonio Gobernado planificando un proyecto"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                            <h3 className="text-3xl font-bold text-white mb-3">
                                                Descubre Qué Hace Diferente a GoberStudio
                                            </h3>
                                            <p className="text-gray-200 text-lg max-w-2xl">
                                                Pasa el cursor sobre cada ventaja para conocer cómo
                                                trabajo en cada proyecto digital
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-20 text-center">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Explora Mis Proyectos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
