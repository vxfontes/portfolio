"use client";

import Link from "next/link";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { HiArrowDown, HiArrowRight, HiMail } from "react-icons/hi";
import { social } from "@/data/links";
import HeroSignal from "@/components/HeroSignal";
import { track } from "@/lib/analytics";

const Intro = () => (
    <section
        id="intro"
        className="editorial-grid relative isolate flex min-h-[94svh] items-start overflow-hidden border-b border-stone-900/15 px-5 pb-14 pt-36 sm:px-8 sm:pt-40 lg:min-h-screen"
    >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div className="intro-copy">
                <p className="eyebrow mb-6 flex items-center gap-2">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange-700" />
                    Engenheira de software · Brasil
                </p>
                <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[5.6rem]">
                    Vanessa<br />Fontes<span className="text-orange-700">.</span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-7 text-stone-900/60 sm:text-lg sm:leading-8">
                    Construo produtos full-stack e mobile, sistemas backend confiáveis e soluções de IA aplicadas a problemas reais.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                    <Link href="#experience" onClick={() => track("navigation_clicked", { destination: "experience", placement: "hero" })} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-700 px-5 py-3 text-sm font-semibold text-white transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-orange-800 active:scale-[0.98]">
                        Ver experiências <HiArrowDown aria-hidden="true" />
                    </Link>
                </div>

                <div className="mt-8 flex items-center gap-2">
                    <span className="mr-2 text-xs uppercase tracking-[0.16em] text-stone-900/35">Conecte-se</span>
                    <a className="contact-icon" href={`mailto:${social.email}`} onClick={() => track("contact_clicked", { channel: "email", placement: "hero" })} aria-label="Enviar e-mail"><HiMail size={18} /></a>
                    <a className="contact-icon" href={social.github} onClick={() => track("contact_clicked", { channel: "github", placement: "hero" })} aria-label="GitHub" target="_blank" rel="noreferrer"><AiOutlineGithub size={18} /></a>
                    <a className="contact-icon" href={social.linkedin} onClick={() => track("contact_clicked", { channel: "linkedin", placement: "hero" })} aria-label="LinkedIn" target="_blank" rel="noreferrer"><AiOutlineLinkedin size={18} /></a>
                    <a className="contact-icon" href={social.instagram} onClick={() => track("contact_clicked", { channel: "instagram", placement: "hero" })} aria-label="Instagram" target="_blank" rel="noreferrer"><AiOutlineInstagram size={18} /></a>
                </div>
            </div>

            <aside className="intro-aside relative mx-auto hidden w-full max-w-[30rem] lg:block lg:justify-self-end" aria-label="Visão de sistemas conectados">
                <HeroSignal />
                <Link href="#projects" onClick={() => track("navigation_clicked", { destination: "projects", placement: "hero" })} className="mt-4 flex items-center justify-between border-b border-stone-900/20 py-3 text-sm text-stone-900/65 transition-[color,transform] duration-150 hover:translate-x-1 hover:text-orange-700 active:scale-[0.99]">
                    Explorar projetos <HiArrowRight aria-hidden="true" className="-rotate-45" />
                </Link>
            </aside>
        </div>
    </section>
);

export default Intro;
