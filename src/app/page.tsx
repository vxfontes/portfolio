'use client'

import About from "@/components/About";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Home() {
    return (
        <main className="text-white h-screen bg-[#242424] snap-y snap-mandatory z-0">

            <Header />

            <section id="home" className="snap-start">
                <Intro />
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>
        </main>
    )
}
