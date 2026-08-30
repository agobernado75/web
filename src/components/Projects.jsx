import { useState } from 'react';

const CATEGORIES = ["Todos", "Webs", "Apps"];

const PROJECTS = [
    {
        name: "EduFIT Calistenia",
        category: "Webs",
        status: "online",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1470&q=80",
        description:
            "Web para un profesional de la calistenia: presentación de servicios, clases y contacto directo para convertir visitas en alumnos.",
        tech: ["WordPress", "Astra", "SEO"],
        url: "http://educarrasco.aunatecla.es",
    },
    {
        name: "Portfolio Profesional",
        category: "Webs",
        status: "online",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1470&q=80",
        description:
            "Diseño y desarrollo de portfolios profesionales para presentar tu trabajo en entrevistas de trabajo de forma impecable.",
        tech: ["React", "Diseño Web", "Portfolio"],
        url: "https://antoniogobernado.aunatecla.es",
    },
    {
        name: "App de Fichaje Laboral",
        category: "Apps",
        status: "development",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1470&q=80",
        description:
            "Aplicación para que los trabajadores fichen su entrada y salida al trabajo, con historial de jornadas y control sencillo para la empresa.",
        tech: ["App Móvil", "Control de Jornada", "Tiempo Real"],
        url: "",
    },
];

const STATUS_LABELS = {
    online: { text: "En línea", class: "bg-green-100 text-green-700" },
    development: { text: "En desarrollo", class: "bg-amber-100 text-amber-700" },
};

function Projects() {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredProjects = activeCategory === "Todos"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === activeCategory);

    return (
        <div id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <div className="h-0.5 w-8 bg-indigo-600 mr-3"></div>
                        <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">
                            Mi Trabajo
                        </span>
                        <div className="h-0.5 w-8 bg-indigo-600 ml-3"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Proyectos que <span className="text-indigo-600">Hablan por Mí</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Webs y apps que he diseñado y desarrollado para clientes y para mis propios proyectos.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            className={`px-6 py-2 rounded-full transition duration-300 ${
                                activeCategory === category
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                            onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {filteredProjects.map((project) => {
                        const CardWrapper = project.url ? 'a' : 'div';
                        const cardProps = project.url
                            ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
                            : {};

                        return (
                            <CardWrapper
                                key={project.name}
                                {...cardProps}
                                className={`group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 block ${
                                    project.url ? "cursor-pointer" : ""
                                }`}>
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${STATUS_LABELS[project.status].class}`}>
                                            {STATUS_LABELS[project.status].text}
                                        </span>
                                        {project.url && (
                                            <svg
                                                className="w-4 h-4 text-gray-400 ml-auto group-hover:text-indigo-600 transition-colors"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs text-gray-600 bg-white border border-gray-200 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </CardWrapper>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#contact"
                        className="inline-block border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md font-medium transition duration-300">
                        ¿Tienes un proyecto en mente? Hablemos
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
