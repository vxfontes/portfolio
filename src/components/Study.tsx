import { studyData } from "@/data/experiences";
import { ptBR as locale } from "@/data/infos";

const Study = () => (
    <section id="study" className="section-shell scroll-mt-24 border-t border-stone-900/[0.06]">
        <div className="mb-9">
            <p className="eyebrow">07 · Formação</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{locale.study.title}</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
            {studyData.map((item) => (
                <article key={item.location} className="rounded-2xl border border-stone-900/[0.09] bg-stone-900/[0.025] p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-lg font-semibold text-stone-900">{item.title}</p>
                            <p className="mt-2 text-sm text-stone-900/55">{item.location}</p>
                        </div>
                        <span className="shrink-0 rounded-full border border-stone-900/10 px-3 py-1 text-xs text-stone-900/45">{item.date}</span>
                    </div>
                    <p className="mt-5 text-sm leading-6 text-stone-900/45">{item.description}</p>
                </article>
            ))}
        </div>
    </section>
);

export default Study;
