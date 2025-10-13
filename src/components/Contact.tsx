import { useState } from "react";

const Contact = () => {
    const [sent, setSent] = useState(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        setSent(true);
        e.currentTarget.reset();
        setTimeout(() => setSent(false), 3500);
    };

    return (
        <section
            id="contact"
            className="w-full mx-auto px-6 py-24 content-overlay border-t-2 border-gradient"
        >
            <header className="text-center mb-14">
                <h2 className="text-5xl font-bold mb-3">
                    <span className="text-header">Kontakt</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
            </header>

            <form
                onSubmit={onSubmit}
                className="mx-auto max-w-3xl grid gap-6 text-content"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col text-sm">
                        <span className="mb-2 text-[color:var(--text-muted)]">Name *</span>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder=""
                            className="h-11 px-4 rounded-lg bg-[color:var(--dark-purple)]/70 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[color:var(--accent-purple)]/40 glow-hover"
                        />
                    </label>

                    <label className="flex flex-col text-sm">
                        <span className="mb-2 text-[color:var(--text-muted)]">E-Mail *</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder=""
                            className="h-11 px-4 rounded-lg bg-[color:var(--dark-purple)]/70 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[color:var(--accent-purple)]/40 glow-hover"
                        />
                    </label>
                </div>

                <label className="flex flex-col text-sm">
                    <span className="mb-2 text-[color:var(--text-muted)]">Betreff *</span>
                    <input
                        type="text"
                        name="subject"
                        required
                        placeholder=""
                        className="h-11 px-4 rounded-lg bg-[color:var(--dark-purple)]/70 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[color:var(--accent-purple)]/40 glow-hover"
                    />
                </label>
                <label className="flex flex-col text-sm">
                    <span className="mb-2 text-[color:var(--text-muted)]">Nachricht *</span>
                    <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder=""
                        className="min-h-32 p-4 rounded-lg bg-[color:var(--dark-purple)]/70 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[color:var(--accent-purple)]/40 glow-hover"
                    />
                </label>

                <label className="flex items-start gap-3 text-sm text-gray-300">
                    <input
                        type="checkbox"
                        required
                        className="mt-1 [accent-color:var(--accent-purple)]"
                    />
                    <span>
                        Ich stimme zu, dass meine Angaben zur Kontaktaufnahme
                        gespeichert werden.
                    </span>
                </label>

                <div className="mt-2 flex flex-wrap items-center gap-4">
                    <button
                        type="submit"
                        className="px-6 h-11 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 transition-all glow-hover focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                    >
                        Nachricht senden
                    </button>

                    <a
                        href="mailto:niklasbeck18@gmail.com"
                        className="text-sm text-[color:var(--text-muted)] hover:text-white transition"
                    >
                        oder direkt per E-Mail
                    </a>
                </div>

                {sent && (
                    <div className="mt-4 rounded-lg border border-white/10 bg-[color:var(--dark-purple)]/70 p-4 text-sm text-gray-200">
                        Danke! Deine Nachricht wurde gesendet. Ich melde mich bald zurück.
                    </div>
                )}
            </form>
        </section>
    );
};

export default Contact;
