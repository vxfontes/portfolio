"use client";

import { social } from "@/data/links";
import { track } from "@/lib/analytics";

export default function Footer() {
    const openPrivacySettings = () => window.dispatchEvent(new Event("portfolio:open-privacy-settings"));

    return (
        <footer className="border-t border-stone-900/[0.06] px-5 py-8 sm:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-stone-900/40 sm:flex-row sm:items-center sm:justify-between">
                <p>Vanessa Fontes <span className="text-stone-900/20">·</span> Engenheira de Software</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a href={`mailto:${social.email}`} onClick={() => track("contact_clicked", { channel: "email", placement: "footer" })} className="transition-colors hover:text-orange-700">E-mail</a>
                    <a href={social.github} onClick={() => track("contact_clicked", { channel: "github", placement: "footer" })} target="_blank" rel="noreferrer" className="transition-colors hover:text-orange-700">GitHub</a>
                    <a href={social.linkedin} onClick={() => track("contact_clicked", { channel: "linkedin", placement: "footer" })} target="_blank" rel="noreferrer" className="transition-colors hover:text-orange-700">LinkedIn</a>
                    <button type="button" onClick={openPrivacySettings} className="transition-colors hover:text-orange-700">Privacidade</button>
                </div>
            </div>
        </footer>
    );
}
