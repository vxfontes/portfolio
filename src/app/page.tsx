import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Study from "@/components/Study";
import Reveal from "@/components/Reveal";
import { social } from "@/data/links";

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#f6f3eb] text-stone-900">
            <Header />
            <Intro />
            <Reveal><About /></Reveal>
            <Reveal delay={40}><Experience /></Reveal>
            <Reveal delay={40}><Skills /></Reveal>
            <Reveal delay={40}><Projects /></Reveal>
            <Reveal delay={40}><Study /></Reveal>
            <footer className="border-t border-stone-900/[0.06] px-5 py-8 sm:px-8">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-stone-900/40 sm:flex-row sm:items-center sm:justify-between">
                    <p>Vanessa Fontes <span className="text-stone-900/20">·</span> Engenheira de Software</p>
                    <div className="flex items-center gap-4">
                        <a href={`mailto:${social.email}`} className="transition-colors hover:text-orange-700">E-mail</a>
                        <a href={social.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-orange-700">GitHub</a>
                        <a href={social.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-orange-700">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
