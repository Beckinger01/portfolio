const DatenschutzPage = () => {
    return (
        <div className="max-w-4xl mx-auto text-center py-20 text-content">
            <div className="mb-16">
                <h2 className="text-5xl font-bold mb-4">
                    <span className="text-header">Datenschutzerklärung</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8 text-lg text-gray-300 leading-relaxed text-left">
                <section>
                    <h3 className="text-2xl font-semibold text-white mb-2">1. Verantwortlich</h3>
                    <p>
                        Verantwortlich für die Datenverarbeitung auf dieser Website ist: <br />
                        Niklas Beck <br />
                        Dorfstraße 140a <br />
                        25569 Kremperheide <br />
                        E-Mail: niklasbeck18@gmail.com
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-white mb-2">2. Allgemeines zur Datenerhebung</h3>
                    <p>
                        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden auf
                        dieser Website nur erhoben, soweit dies technisch notwendig ist. Eine Weitergabe an Dritte
                        erfolgt nicht, außer es besteht eine gesetzliche Verpflichtung oder Sie haben ausdrücklich
                        eingewilligt.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-white mb-2">3. Zugriffsdaten</h3>
                    <p>
                        Beim Besuch dieser Website werden automatisch Daten wie IP-Adresse, Browsertyp,
                        Betriebssystem und Uhrzeit des Zugriffs gespeichert. Diese Daten dienen ausschließlich der
                        Sicherstellung eines störungsfreien Betriebs der Seite und werden nicht zur Identifizierung
                        des Besuchers genutzt.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-white mb-2">4. Cookies</h3>
                    <p>
                        Diese Website verwendet keine Cookies zur Nachverfolgung. Sollten Cookies für bestimmte
                        Funktionen erforderlich sein, werden Sie gesondert darauf hingewiesen.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-white mb-2">5. Externe Dienste</h3>
                    <p>
                        Falls externe Dienste (z. B. Google Fonts, Google Analytics, GitHub-Repos, Kontaktformular)
                        eingebunden werden, weisen wir an dieser Stelle auf deren Nutzung und deren
                        Datenschutzerklärungen hin.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-white mb-2">6. Ihre Rechte</h3>
                    <p>
                        Sie haben jederzeit das Recht auf Auskunft über die bei uns gespeicherten personenbezogenen
                        Daten sowie auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Bitte wenden Sie
                        sich dazu an die oben angegebene Kontaktadresse.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DatenschutzPage;
