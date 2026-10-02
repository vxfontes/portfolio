"use client";

import { ProjectProps } from "@/interface/ProjectProps";
import { ptBR as locale } from "@/data/infos";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import { track } from "@/lib/analytics";

interface Props {
    project: ProjectProps
}

const Page1 = ({ project }: Props) => (
    <section className="mx-auto grid min-h-[82svh] max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-stone-900/10 bg-[#eee8dc] p-5 sm:p-8">
            <Image
                src={project.imgPrincipal}
                alt={`${project.title} — imagem do projeto`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`h-full w-full ${project.imageContain ? "object-contain" : "object-cover"}`}
            />
            {project.icon && (
                <span className="absolute bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/40 bg-[#fffdf7]/90 p-2.5 shadow-xl backdrop-blur sm:h-20 sm:w-20">
                    <Image src={project.icon} alt="" aria-hidden="true" width={60} height={60} className="h-full w-full rounded-xl object-contain" />
                </span>
            )}
        </div>

        <div>
            <p className="eyebrow">{project.category}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3">
                    {project.icon && <Image src={project.icon} alt="" aria-hidden="true" width={44} height={44} className="h-11 w-11 rounded-xl object-contain" />}
                    <h1 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{project.title}</h1>
                </div>
                <span className="rounded-full border border-stone-900/10 px-3 py-1 text-xs text-stone-900/55">{project.status}</span>
            </div>
            <div className="mt-6 space-y-4 text-base leading-7 text-stone-900/65">
                {project.details[0].split(/\n\s*\n/).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="mt-7">
                <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-stone-900/40">Stack</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tecnologies.map((tag) => (
                        <li className="rounded-full border border-stone-900/10 bg-stone-900/[0.025] px-3 py-1.5 text-xs text-stone-900/60" key={tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>

            {(project.appLink || project.link) && (
                <div className="mt-8 flex flex-wrap gap-3">
                    {project.appLink && <a href={project.appLink} onClick={() => track("project_link_clicked", { project_id: project.id, project_name: project.title, destination: "app_store" })} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-orange-700 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]">Baixar na App Store <HiArrowRight aria-hidden="true" className="-rotate-45" /></a>}
                    {project.link && <a href={project.link} onClick={() => track("project_link_clicked", { project_id: project.id, project_name: project.title, destination: "source" })} target="_blank" rel="noreferrer" className="introButton min-h-11">Código-fonte <HiArrowRight aria-hidden="true" className="-rotate-45" /></a>}
                </div>
            )}
            {!project.link && project.repoAvailability && (
                <p className="mt-8 inline-flex min-h-11 items-center rounded-full border border-orange-700/20 bg-orange-700/[0.06] px-5 py-3 text-sm font-medium text-orange-800">
                    Repositório privado · {project.repoAvailability}
                </p>
            )}
        </div>
    </section>
);

export default Page1;
