const STEPS = [
    {
        number: "01",
        title: "Descubrimiento",
        description:
            "Analizo tu negocio, tus objetivos y tu competencia para definir el alcance perfecto del proyecto.",
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Diseño UX/UI",
        description:
            "Creo prototipos navegables para que veas y pruebes tu web o app antes de escribir una sola línea de código.",
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Desarrollo",
        description:
            "Programo con tecnologías modernas, código limpio y pruebas continuas de calidad en cada iteración.",
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Lanzamiento y Soporte",
        description:
            "Publico tu producto, te formo para gestionarlo y te acompaño con soporte y evolutivos.",
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

function Process() {
    return (
        <div id="process" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <div className="h-0.5 w-8 bg-indigo-600 mr-3"></div>
                        <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">
                            Cómo Trabajo
                        </span>
                        <div className="h-0.5 w-8 bg-indigo-600 ml-3"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Un Proceso <span className="text-indigo-600">Probado</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Metodología clara y transparente de principio a fin. Siempre sabrás en qué
                        punto está tu proyecto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
                    {STEPS.map((step) => (
                        <div
                            key={step.number}
                            className="relative bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-8 pt-10">
                            <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-lg">
                                {step.number}
                            </div>
                            <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="#contact"
                        className="inline-block border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md font-medium transition duration-300">
                        Empieza Tu Proyecto Hoy
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Process;
