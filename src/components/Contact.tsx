import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        setError(false);
        setSent(false);

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            console.error('EmailJS Konfiguration fehlt!');
            setError(true);
            setSending(false);
            return;
        }

        emailjs.sendForm(serviceID, templateID, e.currentTarget, publicKey)
            .then(() => {
                setSent(true);
                setError(false);
                setSending(false);
                e.currentTarget.reset();
                setTimeout(() => setSent(false), 3500);
            })
            .catch((err) => {
                console.error('Fehler beim Senden:', err);
                setSent(false);
                setError(true);
                setSending(false);
            });
    };

    return (
        <section
            id="contact"
            className="w-full mx-auto px-6 py-24 content-overlay border-t-2 border-gradient"
        >
            <header className="text-center mb-10 sm:mb-12 lg:mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="text-header">Kontakt</span>
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
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
                        disabled={sending}
                        className="px-6 h-11 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 transition-all glow-hover focus:outline-none focus:ring-2 focus:ring-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {sending ? 'Wird gesendet...' : 'Nachricht senden'}
                    </button>

                    <a
                        href="mailto:niklasbeck18@gmail.com"
                        className="text-sm text-[color:var(--text-muted)] hover:text-white transition"
                    >
                        oder direkt per E-Mail
                    </a>
                </div>

                {sent && (
                    <div className="mt-4 rounded-lg border border-green-500/20 bg-green-950/30 p-4 text-sm text-green-200">
                        ✓ Danke! Deine Nachricht wurde gesendet. Ich melde mich bald zurück.
                    </div>
                )}

                {error && (
                    <div className="mt-4 rounded-lg border border-red-500/20 bg-red-950/30 p-4 text-sm text-red-200">
                        ✗ Fehler beim Senden. Bitte versuche es erneut oder nutze den direkten E-Mail-Link.
                    </div>
                )}
            </form>
        </section>
    );
};

export default Contact;