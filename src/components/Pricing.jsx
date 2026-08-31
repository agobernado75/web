const PLANS = [
    {
        name: "Webs para Pymes",
        price: "€250",
        period: "pago único",
        features: [
            "Diseño a medida y responsive",
            "Optimización SEO básica",
            "Formulario de contacto",
            "Entrega en 1–2 semanas",
            "1 ronda de revisiones",
        ],
        popular: true,
        btnText: "Elegir Plan",
        btnClass: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white",
    },
    {
        name: "Aplicaciones Digitales",
        price: "€350",
        period: "a medida",
        features: [
            "Aplicación digital a medida",
            "Diseño UX/UI personalizado",
            "Integraciones con APIs",
            "Panel de administración",
            "Soporte inicial tras el lanzamiento",
        ],
        popular: false,
        btnText: "Elegir Plan",
        btnClass: "bg-indigo-600 text-white hover:bg-indigo-700",
    },
];

function Pricing() {
    return (
        <div id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <div className="h-0.5 w-8 bg-indigo-600 mr-3"></div>
                        <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">
                            Invierte en tu Negocio
                        </span>
                        <div className="h-0.5 w-8 bg-indigo-600 ml-3"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Planes y Precios Transparentes
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Elige el plan que mejor se adapte a tu proyecto. Sin sorpresas: presupuesto
                        cerrado antes de empezar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {PLANS.map((plan) => (
                        <div
                            key={plan.name}
                            className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                                plan.popular ? "border-2 border-indigo-600 relative" : ""
                            }`}>
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-indigo-600 text-white py-1 px-4 rounded-bl-lg font-medium">
                                    Más Popular
                                </div>
                            )}

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                                <div className="flex items-end mb-6">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-600 ml-2">{plan.period}</span>
                                </div>

                                <ul className="mb-8 space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="#contact"
                                className={`w-full block text-center px-6 py-3 rounded-md font-medium transition duration-300 ${plan.btnClass}`}>
                                {plan.btnText}
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-white rounded-lg shadow-sm text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                        ¿Necesitas algo diferente?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Cuéntame tu idea y te enviaré una propuesta personalizada sin compromiso.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-md font-medium transition-all duration-300">
                        Solicitar Presupuesto
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
