const AboutText = () => {
    return (
        <div className="max-w-4xl mx-auto text-center py-10 sm:py-16 lg:py-20 text-content px-4 sm:px-6">
            <div className="mb-10 sm:mb-14 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                    <span className="text-header">Über mich</span>
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                    Hey, ich bin <span className="text-white font-semibold">Niklas</span> – Student und Frontend-Entwickler
                    mit besonderem Fokus auf <span className="text-purple-400 font-medium">React</span>.
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Am meisten Spaß macht mir das Coden selbst: Ideen schnell umzusetzen,
                    Dinge auszuprobieren und Designs zum Leben zu erwecken.
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Neben dem Frontend lerne ich im Studium auch Backend-Technologien kennen und baue gelegentlich kleinere
                    <span className="text-purple-300 font-medium"> Fullstack-Projekte</span>,
                    um meinen Horizont zu erweitern.
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Für die Zukunft freue ich mich auf spannende
                    <span className="text-white font-semibold"> Praktika oder Jobs</span>,
                    bei denen ich mein Wissen vertiefen und in echten Projekten einsetzen kann.
                </p>
            </div>
        </div>
    );
};

export default AboutText;