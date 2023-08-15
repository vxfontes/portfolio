'use client'

import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className="text-white h-screen bg-[#242424] snap-y snap-mandatory overflow-scroll z-0">

            <Header />

            <section id="intro" className="snap-start">
                <Intro />
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>

            <section id="experience" className="snap-center">
                <Experience />
            </section>

            <section id="skills" className="snap-center">
                <Skills />
            </section>
        </main>
    )
}
