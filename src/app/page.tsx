import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Study from "@/components/Study";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

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
            <Footer />
        </main>
    );
}
