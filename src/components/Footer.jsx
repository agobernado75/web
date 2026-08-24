const SERVICE_LINKS = [
    { name: "Landing Pages", href: "#pricing" },
    { name: "Webs Corporativas", href: "#pricing" },
    { name: "E-commerce", href: "#pricing" },
    { name: "Apps Móviles", href: "#pricing" },
];

const COMPANY_LINKS = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Proceso", href: "#process" },
    { name: "Contacto", href: "#contact" },
];

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            GOBER<span className="text-indigo-500">STUDIO</span>
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Antonio Gobernado: diseño y desarrollo páginas web y apps a medida. Tu
                            proyecto, de la idea al lanzamiento, con trato directo.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Servicios</h3>
                        <ul className="space-y-2">
                            {SERVICE_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Empresa</h3>
                        <ul className="space-y-2">
                            {COMPANY_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="mailto:hola@goberstudio.dev"
                                    className="hover:text-white transition duration-300">
                                    hola@goberstudio.dev
                                </a>
                            </li>
                            <li>Respuesta en menos de 24 horas</li>
                        </ul>
                    </div>
                </div>

                <div className="py-6 border-t border-gray-800 text-center text-gray-500 text-sm">
                    © 2026 GoberStudio · Antonio Gobernado. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
