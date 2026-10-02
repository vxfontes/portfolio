"use client";

import { experiencesData } from "@/data/experiences";
import { ptBR as locale } from "@/data/infos";
import { track } from "@/lib/analytics";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

const Experience = () => (
    <section id="experience" className="section-shell scroll-mt-24">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className="eyebrow">04 · Experiências</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{locale.experience.title}</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-stone-900/50 sm:text-right">
                Experiências em produto financeiro, inteligência artificial, SaaS e tecnologia assistiva.
            </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
            {experiencesData.map((item, index) => {
                const current = item.date.toLowerCase().includes("atual");

                return (
                    <details
                        key={item.location}
                        className="group rounded-2xl border border-stone-900/[0.09] bg-stone-900/[0.025] transition-colors open:border-orange-700/25 open:bg-stone-900/[0.04]"
                        onToggle={(event) => {
                            if (event.currentTarget.open) track("experience_expanded", { company: item.location, role: item.title });
                        }}
                    >
                        <summary className="flex cursor-pointer list-none items-start gap-4 rounded-2xl p-5 focus-visible:outline-offset-[-3px] sm:p-6 [&::-webkit-details-marker]:hidden">
                            <span aria-hidden="true" className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-900/10 font-mono text-xs text-orange-700">
                                0{index + 1}
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                    <span className="text-lg font-semibold tracking-tight text-stone-900 sm:text-xl">{item.title}</span>
                                    {current && <span className="rounded-full border border-orange-700/20 bg-orange-700/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-700">Atual</span>}
                                </span>
                                <span className="mt-1 block text-sm text-stone-900/55">{item.location}</span>
                                <span className="mt-3 block text-xs uppercase tracking-[0.13em] text-stone-900/35">{item.date}</span>
                                <span className="mt-3 block text-xs font-medium text-orange-700">
                                    <span className="group-open:hidden">Saiba mais</span>
                                    <span className="hidden group-open:inline">Mostrar menos</span>
                                </span>
                            </span>
                            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-900/10 text-stone-900/60 transition-colors group-hover:border-orange-700/40 group-hover:text-orange-700" aria-hidden="true">
                                <HiArrowDown className="group-open:hidden" />
                                <HiArrowUp className="hidden group-open:block" />
                            </span>
                            <span className="sr-only group-open:hidden">{item.title}: ver mais informações</span>
                            <span className="sr-only hidden group-open:inline">{item.title}: ocultar detalhes</span>
                        </summary>

                        <div className="border-t border-stone-900/[0.08] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                            <p className="text-sm leading-6 text-stone-900/65">{item.description}</p>
                            <ul className="mt-4 space-y-2">
                                {item.highlights.map((highlight) => (
                                    <li key={highlight} className="flex gap-2.5 text-sm leading-6 text-stone-900/55">
                                        <span aria-hidden="true" className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-orange-700" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                            <ul aria-label="Tecnologias e áreas" className="mt-5 flex flex-wrap gap-2">
                                {item.technologies.map((technology) => (
                                    <li key={technology} className="rounded-full border border-stone-900/10 px-2.5 py-1 text-xs text-stone-900/55">{technology}</li>
                                ))}
                            </ul>
                        </div>
                    </details>
                );
            })}
        </div>
        <p className="mt-4 text-xs text-stone-900/35">Selecione uma experiência para ver detalhes.</p>
    </section>
);

export default Experience;
