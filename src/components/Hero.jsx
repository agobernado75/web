import { useState, useEffect } from "react";

const HERO_BACKGROUNDS = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1920&q=80",
];

const HERO_STATS = [
  { value: "+40", label: "Proyectos entregados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "24/7", label: "Soporte dedicado" },
];

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % HERO_BACKGROUNDS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative h-screen overflow-hidden md:h-screen">
      {/* Background Image Slider with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/40 z-10"></div>

        {/* Image Slider with fade effect */}
        {HERO_BACKGROUNDS.map((bg, index) => (
          <div
            key={bg}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentBgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-48 pb-20">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              {/* Left Content */}
              <div className={`max-w-2xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  <span className="block">Diseño Webs y Apps</span>
                  <span className="block">
                    Que Hacen{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                      Crecer Tu Negocio
                    </span>
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
                  Soy <span className="text-indigo-400 font-semibold">Antonio Gobernado</span>, y diseño y
                  desarrollo páginas web y aplicaciones a medida. Diseño premium, código limpio y
                  resultados medibles para tu empresa.
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <a
                    href="#projects"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 px-8 py-4 text-white font-medium text-lg inline-flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/40"
                  >
                    <span className="relative z-10">Ver Mis Proyectos</span>
                  </a>

                  <a
                    href="#pricing"
                    className="group relative overflow-hidden rounded-full border-2 border-white px-8 py-4 text-white font-medium text-lg inline-flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg"
                  >
                    <span className="relative z-10">Ver Precios</span>
                  </a>
                </div>

                <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
                  {HERO_STATS.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Card - Desktop only */}
              <div className={`w-full max-w-md transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden hidden lg:block">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/20 rounded-full blur-2xl transform translate-x-20 -translate-y-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-white">¿Por Qué Trabajar Conmigo?</h3>
                      <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-indigo-400' : 'bg-white/50'}`}
                          ></span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-8">
                      {/* Benefit 1 */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">Entrega Rápida</h3>
                          <p className="text-gray-300 text-sm mt-1">
                            Lanzo tu proyecto en semanas, no meses, sin sacrificar calidad.
                          </p>
                        </div>
                      </div>

                      {/* Benefit 2 */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">Tecnología Moderna</h3>
                          <p className="text-gray-300 text-sm mt-1">
                            Programo con React, apps nativas y arquitecturas escalables pensadas para crecer contigo.
                          </p>
                        </div>
                      </div>

                      {/* Benefit 3 */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">Resultados Medibles</h3>
                          <p className="text-gray-300 text-sm mt-1">
                            SEO técnico y analítica desde el día uno para medir tu retorno de inversión.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <a href="#process" className="inline-flex items-center text-indigo-400 font-medium group">
                        Descubre cómo trabajo
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
