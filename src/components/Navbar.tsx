const Navbar = () => {
    return (
        <nav className="w-full sticky top-0 z-50 backdrop-blur-xl">
            <div className="relative py-2 sm:py-3">
                <ul className="flex justify-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-xl text-white px-4">
                    <li><a href="/#home" className="hover:opacity-90">Home</a></li>
                    <li><a href="/#about" className="hover:opacity-90">Über mich</a></li>
                    <li><a href="/#projects" className="hover:opacity-90">Projekte</a></li>
                    <li><a href="/#contact" className="hover:opacity-90">Kontakt</a></li>
                </ul>
                <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-[linear-gradient(90deg,transparent,var(--primary-purple),var(--accent-purple),transparent)]
                               [background-size:200%_100%] animate-[x-shimmer_5s_linear_infinite]"/>
            </div>
        </nav>
    );
};

export default Navbar;