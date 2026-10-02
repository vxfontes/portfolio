import { skillsData } from "@/data/skillts";
import { ptBR as locale } from "@/data/infos";

const Skills = () => (
    <section id="skills" className="section-shell scroll-mt-24 border-t border-stone-900/[0.06]">
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className="eyebrow">05 · Habilidades</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{locale.skill.title}</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-stone-900/45 sm:text-right">Tecnologias e áreas de atuação, escolhidas pelo trabalho que quero continuar fazendo.</p>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
            {skillsData.map((group) => (
                <section key={group.category} aria-label={group.category} className="rounded-2xl border border-stone-900/[0.08] bg-stone-900/[0.025] p-5 sm:p-6">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-900/45">{group.category}</h3>
                    <ul className="mt-5 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                            <li key={item} className="rounded-full border border-stone-900/10 bg-[#fffdf7]/70 px-3 py-1.5 text-sm font-medium text-stone-900/70">{item}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    </section>
);

export default Skills;
