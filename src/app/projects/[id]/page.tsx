import { projects } from "@/data/projects";
import { ProjectProps } from "@/interface/ProjectProps";
import { ptBR as locale } from "@/data/infos";
import Page1 from "@/components/project/page1";
import Page2 from "@/components/project/page2";
import Page3 from "@/components/project/page3";
import Page4 from "@/components/project/page4";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function Project({ params }: { params: { id: string } }) {
    const project: ProjectProps | undefined = projects.find((item) => item.id === Number(params.id));

    if (!project) {
        return (
            <main className="grid min-h-screen place-items-center bg-[#f6f3eb] px-5 text-stone-900">
                <div className="text-center">
                    <p className="eyebrow">404</p>
                    <h1 className="mt-3 text-3xl font-semibold">{locale.projects[404]}</h1>
                    <Link href="/#projects" className="introButton mt-6">Voltar aos projetos</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#f6f3eb] text-stone-900">
            <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
                <nav className="mx-auto flex max-w-6xl">
                    <Link href="/#projects" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-stone-900/10 bg-[#fffdf7]/90 px-4 text-sm text-stone-900/75 shadow-lg backdrop-blur transition-colors hover:border-orange-700/30 hover:text-orange-700">
                        <HiArrowLeft aria-hidden="true" /> Portfólio
                    </Link>
                </nav>
            </header>
            <Page1 project={project} />
            {project.imgDesktop.length > 0 && (
                <Page2 title="Visão geral" imgs={project.imgDesktop} key="desktop" mobile={false} />
            )}
            {project.imgMobile.length > 0 && (
                <Page2 title="Outras telas" imgs={project.imgMobile} key="mobile" mobile />
            )}
            {project.another.length > 0 && (
                <Page3 title={project.anotherDescription[0]} imgs={project.another} />
            )}
            {project.videos.length > 0 && (
                <Page4 title={locale.projects.video} videos={project.videos} />
            )}
            <footer className="border-t border-stone-900/[0.06] px-5 py-8 text-center text-xs text-stone-900/35">
                Vanessa Fontes · Portfólio
            </footer>
        </main>
    );
}
