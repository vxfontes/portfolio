import { ptBR as locale } from "@/data/infos";
import { HiChip, HiCode, HiGlobeAlt, HiShieldCheck, HiSparkles } from "react-icons/hi";

const professionalWork = [
    {
        company: "ITFácil · Defender360 Security",
        icon: HiShieldCheck,
        summary: "Segurança de aplicações SaaS multi-tenant: isolamento de dados, serviços e workers confiáveis, infraestrutura containerizada, CI/CD e operação em cloud.",
        stack: ["Go", "Python", "FastAPI", "React", "PostgreSQL", "Redis", "NATS", "Docker", "AWS", "GitHub Actions"],
    },
    {
        company: "ITFácil · Defender360 ITSM",
        icon: HiCode,
        summary: "Plataforma ITSM enterprise: mudanças, aprovações, catálogo, integrações e experiências para operações de TI.",
        stack: ["Go", "React", "TypeScript", "PostgreSQL", "Redis", "NATS"],
    },
    {
        company: "Amigoz · Pine",
        icon: HiGlobeAlt,
        summary: "CRM financeiro e originação de crédito multi-tenant, com backoffice, integrações e controles de acesso granulares.",
        stack: [".NET", "C#", "React", "Vite", "PostgreSQL", "NATS JetStream"],
    },
    {
        company: "VerdeCard · QQPag App",
        icon: HiCode,
        summary: "Jornadas financeiras mobile: Pix, conta, cartão, biometria, 2FA, atualização cadastral e relatórios assíncronos.",
        stack: ["Flutter", "Dart", "NestJS", "Oracle", "Redis", "RabbitMQ"],
    },
    {
        company: "VerdeCard · portais e automações",
        icon: HiGlobeAlt,
        summary: "Portais web e ferramentas internas, APIs REST, regras de negócio, integrações corporativas e automações auxiliares.",
        stack: ["React", "Next.js", "NestJS", "FastAPI", "Flask", "PostgreSQL"],
    },
    {
        company: "Positivo Tecnologia · TechTalk",
        icon: HiChip,
        summary: "Pesquisa e desenvolvimento de suporte técnico com LLMs, RAG, busca semântica e pipelines de documentos.",
        stack: ["Python", "LangGraph", "RAG", "LLMs", "Embeddings", "MySQL"],
    },
] as const;

const impact = [
    {
        metric: "Em segundo plano",
        title: "Atualização cadastral sem travar a jornada",
        description: "No QQPag App, a atualização passou a ser processada de forma assíncrona, com status no app e aviso quando a análise é concluída.",
    },
    {
        metric: "95,60% → 96,49%",
        title: "Acurácia de respostas com RAG",
        description: "Evolução mensurada em pesquisa aplicada de suporte técnico na Positivo Tecnologia.",
    },
    {
        metric: "7,8s → 4,2s",
        title: "Tempo de resposta",
        description: "Redução de latência no mesmo sistema de busca semântica e assistência técnica com LLMs.",
    },
    {
        metric: "200 mil+",
        title: "Registros em relatórios operacionais",
        description: "Participação em relatórios e rotinas assíncronas para uma operação financeira de grande volume.",
    },
    {
        metric: "Pix · biometria · QR",
        title: "Jornadas críticas mais confiáveis",
        description: "Investiguei e corrigi fluxos de produção do QQPag a partir de logs, incluindo home, Pix, biometria e QR code.",
    },
    {
        metric: "+240,1%",
        title: "Relevância em benchmark de RAG",
        description: "Menção honrosa do LNCC, com redução de 67,2% nas respostas irrelevantes ou alucinadas.",
    },
] as const;

const About = () => (
    <section id="about" className="section-shell scroll-mt-24 border-t border-stone-900/[0.06]">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
                <p className="eyebrow">01 · Sobre mim</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Tecnologia com<br />intenção<span className="text-orange-700">.</span></h2>
            </div>
            <div>
                <p className="text-lg leading-8 text-stone-900/65 sm:text-xl sm:leading-9">{locale.about.sobremim}</p>
                <div className="mt-8 flex items-start gap-4 rounded-2xl border border-orange-700/15 bg-orange-700/[0.045] p-5 sm:p-6">
                    <HiSparkles aria-hidden="true" className="mt-1 shrink-0 text-orange-700" size={20} />
                    <p className="text-sm leading-6 text-stone-900/65">
                        Menção honrosa do LNCC em benchmark de RAG: aumento médio de 240,1% na relevância e redução de 67,2% em respostas irrelevantes ou alucinadas.
                    </p>
                </div>
            </div>
        </div>
        <section id="impact" className="mt-16 scroll-mt-24 border-t border-stone-900/[0.08] pt-12 sm:mt-20 sm:pt-16">
            <div className="mb-9">
                <p className="eyebrow">02 · Impacto</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">O que mudou porque<br className="hidden sm:block" /> eu estava lá<span className="text-orange-700">.</span></h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-900/55">Resultados rastreáveis em produto, produção e pesquisa — a parte do currículo que mostra efeito, não só responsabilidade.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
                {impact.map((item, index) => (
                    <article key={item.title} className={`border border-stone-900/20 bg-[#eee8dc] p-5 shadow-[3px_3px_0_rgba(41,37,36,0.12)] sm:p-6 ${index % 3 === 1 ? "md:-translate-y-1" : ""}`}>
                        <p className="text-xl font-semibold tracking-[-0.04em] text-orange-800 sm:text-2xl">{item.metric}</p>
                        <h4 className="mt-1 text-lg font-semibold tracking-tight">{item.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-stone-900/65">{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
        <div id="built" className="mt-16 scroll-mt-24 border-t border-stone-900/[0.08] pt-12 sm:mt-20 sm:pt-16">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="eyebrow">03 · Construído em produto</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-4xl">Experiência que vira entrega<span className="text-orange-700">.</span></h3>
                </div>
                <p className="max-w-md text-sm leading-6 text-stone-900/50 sm:text-right">Seleção de produtos e frentes profissionais. Detalhes proprietários, clientes e dados operacionais permanecem confidenciais.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {professionalWork.map((work) => {
                    const Icon = work.icon;
                    return (
                        <article key={work.company} className="rounded-2xl border border-stone-900/[0.09] bg-stone-900/[0.025] p-5 sm:p-6">
                            <div className="flex items-start gap-3">
                                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-700/10 text-orange-700"><Icon size={20} /></span>
                                <div>
                                    <h4 className="text-base font-semibold tracking-tight text-stone-900">{work.company}</h4>
                                    <p className="mt-2 text-sm leading-6 text-stone-900/60">{work.summary}</p>
                                </div>
                            </div>
                            <ul aria-label={`Tecnologias em ${work.company}`} className="mt-5 flex flex-wrap gap-1.5">
                                {work.stack.map((technology) => <li key={technology} className="rounded-md border border-stone-900/[0.08] bg-[#fffdf7]/70 px-2 py-1 text-[10px] text-stone-900/55">{technology}</li>)}
                            </ul>
                        </article>
                    );
                })}
            </div>
        </div>
    </section>
);

export default About;
