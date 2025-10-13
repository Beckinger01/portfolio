import { Link } from "react-router-dom";
import WinPic from "../assets/YourWinChallengePrev.png"
import GroupPic from "../assets/GruppenEventPlanerPrev.png"
import BojePic from "../assets/BojentrefLogo.png"

const Projects = () => {
    const placeholder = "https://placehold.co/640x360/2D1B3D/FFFFFF?text=Preview";

    const proj = [
        {
            title: "YourWinChallenge",
            description: "Bereits öffentliche und noch NICHT fertige Seite für Challenges",
            img: WinPic,
            href: "yourwinchallenge",
        },
        {
            title: "GroupPlanner",
            description:
                "Kalender-Website zum Planen von Events in einer Freundesgruppe. Mit gemeinsamer Terminfindung, Erinnerungen und Rollen.",
            img: GroupPic,
            href: "group-planner",
        },
        {
            title: "SpVgg Bojentref",
            description:
                "Vereinswebsite eines Fantasie-Vereins",
            img: BojePic,
            href: "bojentref",
            isLogo: true,
        },
    ];

    return (
        <section id="projects" className="w-full mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 content-overlay border-t-2 border-gradient">
            <header className="text-center mb-10 sm:mb-12 lg:mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="text-header">Projekte</span>
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-content items-stretch max-w-7xl mx-auto">
                {proj.map((p) => (
                    <article
                        key={p.title}
                        className="
              group relative overflow-hidden rounded-xl sm:rounded-2xl
              bg-[color:var(--dark-purple)]/70 backdrop-blur-sm
              transition-all duration-300 hover:-translate-y-0.5 glow-hover
              flex flex-col h-full
            "
                    >
                        <div className={`relative aspect-video overflow-hidden ${p.isLogo ? ' flex items-center justify-center' : ''}`}>
                            <img
                                src={p.img || placeholder}
                                alt={`${p.title} preview`}
                                className={`${p.isLogo
                                    ? 'max-h-[70%] max-w-[70%] object-contain'
                                    : 'h-full w-full object-cover'
                                    } transition-transform duration-300 group-hover:scale-[1.03]`}
                                loading="lazy"
                            />
                            {!p.isLogo && (
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
                                    style={{
                                        background:
                                            "radial-gradient(600px 200px at 20% 0%, rgba(139,69,255,0.10), transparent 60%)",
                                    }}
                                />
                            )}
                        </div>

                        <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                                {p.title}
                            </h3>
                            <p
                                className="
                  mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 leading-relaxed overflow-hidden
                  [display:-webkit-box] [WebkitLineClamp:3] [WebkitBoxOrient:vertical]
                "
                            >
                                {p.description}
                            </p>

                            <div className="mt-auto pt-4 sm:pt-5 lg:pt-6">
                                <Link
                                    to={p.href}
                                    className="
                    inline-flex items-center justify-center w-full sm:w-auto
                    px-4 py-2 sm:py-2.5 rounded-lg text-white text-sm font-semibold
                    bg-gradient-to-r from-purple-600 to-purple-800
                    hover:from-purple-500 hover:to-purple-700
                    transition-all glow-hover focus:outline-none focus:ring-2 focus:ring-purple-500/40
                  "
                                >
                                    Mehr erfahren
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;