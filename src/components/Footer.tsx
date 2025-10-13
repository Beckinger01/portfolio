import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            id="footer"
            className="mt-24 border-t border-white/10  backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-6 py-8 content-overlay">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold">
                            <span className="text-header">Niklas</span>
                            <span className="text-white ms-2">Portfolio</span>
                        </h3>
                        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                            Frontend Developer - React · TypeScript · Tailwind.
                        </p>

                        <div className="mt-4 flex items-center gap-4 text-sm">
                            <a href="mailto:niklasbeck18@gmail.com" className="text-gray-300 hover:text-white glow-hover">
                                E-Mail
                            </a>
                            <a href="https://github.com/Beckinger01" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white glow-hover">
                                GitHub
                            </a>
                        </div>
                    </div>

                    <nav aria-label="Sitemap" className="grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-sm uppercase tracking-wide text-[color:var(--text-muted)]">
                                Seiten
                            </h4>
                            <ul className="mt-3 space-y-2 text-gray-300">
                                <li><a href="/#home" className="hover:text-white">Home</a></li>
                                <li><a href="/#about" className="hover:text-white">Über mich</a></li>
                                <li><a href="/#projects" className="hover:text-white">Projekte</a></li>
                                <li><a href="/#contact" className="hover:text-white">Kontakt</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm uppercase tracking-wide text-[color:var(--text-muted)]">
                                Rechtliches
                            </h4>
                            <ul className="mt-3 space-y-2 text-gray-300">
                                <li><a href="/impressum" className="hover:text-white">Impressum</a></li>
                                <li><Link to="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
                            </ul>
                        </div>
                    </nav>

                    <address className="not-italic text-gray-300">
                        <h4 className="text-sm uppercase tracking-wide text-[color:var(--text-muted)]">
                            Kontakt & Anbieter
                        </h4>
                        <p className="mt-3">
                            <span className="block">Diensteanbieter gem. § 5 TMG</span>
                            <span className="block">Niklas Beck</span>
                            <span className="block">Dorfstr. 140a</span>
                            <span className="block">25569 Kremperheide, Deutschland</span>
                        </p>
                        <p className="mt-3">
                            E-Mail:{" "}
                            <a href="mailto:niklasbeck18@gmail.com" className="hover:text-white">
                                niklasbeck18@gmail.com
                            </a>
                        </p>
                    </address>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
                    <p>© {year} Niklas. Alle Rechte vorbehalten.</p>
                    <p className="opacity-75">Made with React & Tailwind</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
