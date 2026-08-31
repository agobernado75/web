import antonio from '../assets/antonio.jpeg'

function About() {
  const highlights = [
    "Desarrollo web y móvil de principio a fin: diseño, código y despliegue",
    "Trato directo conmigo, sin intermediarios ni equipos comerciales",
    "Formación continua en tecnologías modernas para cada nuevo proyecto",
  ];

  return (
    <div id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-4">
              <div className="h-0.5 w-8 bg-indigo-600 mr-3"></div>
              <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">
                Sobre Mí
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hola, Soy <span className="text-indigo-600">Antonio Gobernado</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Soy desarrollador web y móvil y creo que las pequeñas y medianas empresas merecen
              productos digitales del mismo nivel que las grandes corporaciones. Por eso creé
              GoberAutomate: mi proyecto personal donde diseño, programo y lanzo webs y apps de
              principio a fin.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Mi filosofía es simple: tecnología cercana. Te acompaño en cada paso, traduzco lo
              técnico a lenguaje claro y entrego productos que generan resultados medibles para tu
              negocio. Desde la web de un entrenador personal hasta una app de control de jornadas
              laborales: si lo imaginas, lo construimos.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>

            <a
              href="#projects"
              className="inline-flex bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
              Conoce Mis Proyectos
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={antonio}
                alt="Antonio Gobernado, desarrollador web y móvil"
                className="w-full rounded-lg shadow-xl h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
