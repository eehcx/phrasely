import { Twitter, Instagram, Youtube } from "lucide-react";

const columns = [
    {
        heading: "Producto",
        links: [
            { label: "Características", href: "#" },
            { label: "Juegos", href: "#" },
            { label: "Precios", href: "#" },
        ],
    },
    {
        heading: "Recursos",
        links: [
            { label: "Documentación", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Soporte", href: "#" },
        ],
    },
    {
        heading: "Empresa",
        links: [
            { label: "Sobre nosotros", href: "#" },
            { label: "Contacto", href: "#" },
        ],
    },
    {
        heading: "Legal",
        links: [
            { label: "Privacidad", href: "#" },
            { label: "Términos", href: "#" },
        ],
    },
];

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#3A2B47]">
            <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                    {columns.map((col) => (
                        <div key={col.heading}>
                            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                                {col.heading}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-gray-400 text-sm">
                        © 2024 Phrasely Game. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-200">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-200">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors duration-200">
                            <Youtube className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
