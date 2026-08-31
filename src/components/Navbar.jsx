import { useState, useEffect } from 'react';

const NAV_LINKS = [
    { name: "Inicio", href: "#home", id: "home" },
    { name: "Servicios", href: "#features", id: "features" },
    { name: "Nosotros", href: "#about", id: "about" },
    { name: "Proyectos", href: "#projects", id: "projects" },
    { name: "Precios", href: "#pricing", id: "pricing" },
    { name: "Proceso", href: "#process", id: "process" },
    { name: "Testimonios", href: "#testimonials", id: "testimonials" },
    { name: "Contacto", href: "#contact", id: "contact" },
];

function Navbar({ activeSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <svg
                                className={`w-12 h-5 mb-1 ${scrolled ? "text-indigo-600" : "text-indigo-400"}`}
                                fill="none"
                                viewBox="0 0 64 20"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M4 18V10a28 28 0 0056 0v8" />
                                <path d="M14 18l2-7 6 5 6-7 6 7 6-5 2 7" />
                            </svg>
                            <span className={`text-2xl font-extrabold leading-none ${scrolled ? "text-gray-900" : "text-white"}`}>
                                GOBER<span className="text-indigo-500">AUTOMATE</span>
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                href={link.href}
                                key={link.id}
                                className={`px-3 py-2 mx-1 text-sm font-medium
                                transition-all duration-300 relative group ${
                                    activeSection === link.id
                                        ? scrolled ? "text-indigo-600" : "text-white"
                                        : scrolled ? "text-gray-700 hover:text-indigo-600" : "text-gray-200 hover:text-white"
                                }`}
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-3 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:-translate-y-0.5 bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg">
                            Cotiza tu Proyecto
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ${scrolled ? "text-gray-900" : "text-white"}`}
                            onClick={toggleMenu}
                            aria-expanded={isOpen}
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out">
                    <div className="px-3 pt-2 pb-3 space-y-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                href={link.href}
                                key={link.id}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 mx-1 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300">
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-2 pb-1 px-3">
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full px-4 py-3 bg-indigo-600 text-white text-center font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                                Cotiza tu Proyecto
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
