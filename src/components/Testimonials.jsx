import { useState, useEffect } from 'react';

const TESTIMONIALS = [
    {
        quote: "Antonio diseñó y lanzó mi web de calistenia de principio a fin. Trato directo, entregas rápidas y una página que convierte visitas en alumnos.",
        author: "Eduardo C.",
        role: "Entrenador Personal",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80",
        rating: 5,
        achievement: "Web publicada",
    },
    {
        quote: "El nuevo sistema de fichaje está eliminando hojas de cálculo y dolores de cabeza. Controlar las entradas y salidas del equipo ahora lleva segundos.",
        author: "Marta G.",
        role: "Directora Administrativa",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=687&q=80",
        rating: 5,
        achievement: "Piloto en marcha",
    },
];

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    // Auto-rotación cada 7 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`h-5 w-5 ${
                    index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div id="testimonials" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <div className="h-0.5 w-8 bg-indigo-600 mr-3"></div>
                        <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">
                            Testimonios
                        </span>
                        <div className="h-0.5 w-8 bg-indigo-600 ml-3"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Lo Que Dicen Mis <span className="text-indigo-600">Clientes</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Personas y negocios que han confiado en mí para sus proyectos digitales
                    </p>
                </div>

                <div className="relative">
                    <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Author Section */}
                        <div className="w-full md:w-1/3 p-8 bg-gradient-to-b from-indigo-50 to-white">
                            <div className="aspect-square rounded-full overflow-hidden w-40 h-40 mx-auto mb-6 border-4 border-indigo-100">
                                <img
                                    src={TESTIMONIALS[activeIndex].image}
                                    alt={TESTIMONIALS[activeIndex].author}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-3">
                                    {renderStars(TESTIMONIALS[activeIndex].rating)}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-1">
                                    {TESTIMONIALS[activeIndex].author}
                                </h4>
                                <p className="text-indigo-600 font-medium">{TESTIMONIALS[activeIndex].role}</p>
                                <div className="mt-3 inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                    {TESTIMONIALS[activeIndex].achievement}
                                </div>
                            </div>
                        </div>

                        {/* Quote Section */}
                        <div className="w-full md:w-2/3 bg-gradient-to-r from-indigo-50 to-gray-50 p-8 md:p-12 relative">
                            {/* Quote icon */}
                            <svg
                                className="h-16 w-16 text-indigo-200 absolute -top-4 -left-4 opacity-70"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                            </svg>

                            <p className="text-xl md:text-2xl text-gray-800 italic relative z-10 leading-relaxed">
                                "{TESTIMONIALS[activeIndex].quote}"
                            </p>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center mt-10 space-x-4">
                        <button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                            aria-label="Testimonio anterior"
                        >
                            <svg
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <div className="flex space-x-2">
                            {TESTIMONIALS.map((testimonial, index) => (
                                <button
                                    key={testimonial.author}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === activeIndex
                                            ? "bg-indigo-600 w-6"
                                            : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                    aria-label={`Ir al testimonio ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                            aria-label="Testimonio siguiente"
                        >
                            <svg
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
