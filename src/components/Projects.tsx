import { projects } from "@/data/projects";
import { ptBR as locale } from "@/data/infos";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const Projects = () => (
    <section id="projects" className="section-shell scroll-mt-24 border-t border-stone-900/[0.06]">
        <div className="mb-10 flex flex-col gap-3 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className="eyebrow">06 · Projetos</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{locale.projects.title}</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-stone-900/45 sm:text-right">Produtos autorais com foco em resolver problemas reais — do desenho à implementação.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
                <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="project-card group overflow-hidden rounded-2xl border border-stone-900/[0.14] bg-[#fffdf7] hover:border-orange-700/45 hover:bg-white"
                >
                    <div className="p-5 sm:p-6">
                        <span className="inline-flex rounded-full border border-stone-900/10 bg-[#f6f3eb] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-stone-900/70">
                            {project.status}
                        </span>
                        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-700/80">{project.category}</p>
                        <div className="mt-2 flex items-center justify-between gap-3">
                            <span className="flex min-w-0 items-center gap-2.5">
                                {project.icon && (
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-stone-900/10 bg-[#eee8dc] p-0.5">
                                        <Image src={project.icon} alt="" aria-hidden="true" width={44} height={44} className="h-full w-full rounded-[10px] object-contain" />
                                    </span>
                                )}
                                <h3 className="truncate text-xl font-semibold tracking-tight">{project.title}</h3>
                            </span>
                            <HiArrowRight aria-hidden="true" className="-rotate-45 shrink-0 text-stone-900/40 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-700" />
                        </div>
                        <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-stone-900/55">{project.descriptionPT}</p>
                        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tecnologias">
                            {project.tecnologies.slice(0, 4).map((technology) => (
                                <li key={technology} className="rounded-md border border-stone-900/[0.08] px-2 py-1 text-[10px] text-stone-900/45">{technology}</li>
                            ))}
                        </ul>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-orange-700">
                            Ver case <span className="sr-only">{project.title}</span>
                        </span>
                        {project.repoAvailability && <p className="mt-2 text-[10px] text-stone-900/40">Repositório privado · {project.repoAvailability}</p>}
                    </div>
                </Link>
            ))}
        </div>
    </section>
);

export default Projects;
