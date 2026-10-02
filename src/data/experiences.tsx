import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
    {
        title: "Engenheira de Software Pleno",
        location: "ITFácil",
        description: "Construo e opero um SaaS B2B multi-tenant para gestão de serviços de TI e segurança de aplicações.",
        highlights: ["Mais de 60 correções de produção distribuídas em seis releases", "Atuação transversal em backend, frontend e infraestrutura", "Foco em isolamento de dados, confiabilidade e processamento assíncrono"],
        technologies: ["Go", "Python", "FastAPI", "React", "PostgreSQL", "Redis", "AWS"],
        icon: <CgWorkAlt />,
        date: "Abr 2026 - atual",
    },
    {
        title: "Pesquisadora e Desenvolvedora de IA",
        location: "Positivo Tecnologia",
        description: "Pesquisa e desenvolvimento de soluções com LLMs e RAG para suporte técnico, avaliação e processamento de documentos.",
        highlights: ["Acurácia de benchmark evoluiu de 95,60% para 96,49%", "Latência média caiu de 7,8 s para 4,2 s"],
        technologies: ["Python", "RAG", "LangGraph", "LLMs", "Pipelines de documentos"],
        icon: <CgWorkAlt />,
        date: "Mar 2024 - Mar 2025",
    },
    {
        title: "Desenvolvedora Mobile Júnior",
        location: "VerdeCard / Quero-Quero",
        description: "Evolução de aplicativo financeiro com Flutter e serviços NestJS em jornadas de pagamento e produtos financeiros.",
        highlights: ["Desenvolvimento de jornadas Pix, contas, cartões e autenticação", "Exportação de relatórios com mais de 200 mil registros", "Integração entre aplicativo mobile e serviços backend"],
        technologies: ["Flutter", "Dart", "NestJS", "TypeScript", "Oracle"],
        icon: <CgWorkAlt />,
        date: "Dez 2023 - Abr 2026",
    },
    {
        title: "Desenvolvedora Full-Stack",
        location: "Inpatics",
        description: "Desenvolvimento de plataforma de acessibilidade urbana e experiências com mapas geoespaciais.",
        highlights: ["Plataforma digital com foco em acessibilidade urbana", "Experiências com mapas e dados geoespaciais"],
        technologies: ["Desenvolvimento web", "Mapas geoespaciais", "Acessibilidade"],
        icon: <CgWorkAlt />,
        date: "Set 2022 - Out 2023",
    },
] as const;

export const studyData = [
    {
        title: "Especialização em Engenharia da Computação",
        location: "UNINTER",
        description: "Pós-graduação em Engenharia da Computação.",
        icon: <LuGraduationCap />,
        date: "2026 - atual",
    },
    {
        title: "Bacharelado em Ciências Exatas e Tecnológicas",
        location: "Universidade Federal do Recôncavo da Bahia",
        description: "Formação com ênfase em Engenharia da Computação.",
        icon: <BsFillJournalBookmarkFill />,
        date: "2021 - 2025",
    },
] as const;
