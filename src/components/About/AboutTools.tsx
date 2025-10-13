
const AboutTools = () => {

    const categories = [
        {
            title: "Frontend",
            items: [
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            ],
        },
        {
            title: "Backend",
            items: [
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            ],
        },
        {
            title: "Database",
            items: [
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            ],
        },
        {
            title: "Tools",
            items: [
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
            ],
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-12 sm:mb-16 lg:mb-20">
                <span className="text-header">Mein</span> <span className="text-white">Stack</span>
            </h2>
            <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 w-full max-w-5xl">
                {categories.map((cat) => (
                    <div
                        key={cat.title}
                        className="flex flex-col md:flex-row md:items-start gap-6 sm:gap-8 lg:gap-20"
                    >
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400 w-full md:w-32 lg:w-40 uppercase text-center md:text-left">
                            {cat.title}
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 lg:gap-10 flex-1">
                            {cat.items.map(({ name, icon }) => (
                                <div
                                    key={name}
                                    className="flex flex-row items-center text-center gap-2 sm:gap-3 transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(25deg)]"
                                >
                                    <img
                                        src={icon}
                                        alt={`${name} logo`}
                                        className="w-10 h-10 sm:w-12 sm:h-12"
                                        loading="lazy"
                                    />
                                    <span className="text-base sm:text-lg lg:text-xl text-gray-300">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutTools