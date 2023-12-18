import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BsCodeSlash, BsFillJournalBookmarkFill } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
    {
        title: "Desenvolvedora FrontEnd",
        location: "Recode Jr.",
        description:
            "Desenvolvimento de frontend em empresa júnior universitária",
        icon: <BsCodeSlash />,
        date: "Set 2021 - Mai 2023",
    },
    {
        title: "Desenvolvedora FullStack",
        location: "Izzistrit",
        description:
            "Iniciação científica de desenvolvimento de plataforma voltada para acessibilidade de pessoas deficientes nas cidades Foz do Iguaçu e Salvador.",
        icon: <BsCodeSlash />,
        date: "Set 2022 - Set 2023",
    },
    {
        title: "Estagiária  e Mobile",
        location: "QQTech",
        description:
            "Estágio utilizando tecnologias como: HTML, CSS, Node.js, Javascript, Typescript, NestJS, ReactJS, Python, SQL, Postgres e Flutter",
        icon: <CgWorkAlt />,
        date: "Ago 2022 - atual",
    },
] as const;

export const studyData = [
    {
        title: "Ensino médio",
        location: "Escola SESI José Carvalho",
        description:
            "Conclusão do ensino médio",
        icon: <LuGraduationCap />,
        date: "Fev 2017 - Nov 2019",
    },
    {
        title: "Engenharia da computação",
        location: "Universidade Federal do Recôncavo da Bahia",
        description:
            "Bacharelado em Ciências Exatas e Tecnológicas com terminalidade em Engenharia da Computação",
        icon: <BsFillJournalBookmarkFill />,
        date: "Jul 2021 - Não concluído",
    },
    {
        title: "Tecnólogo em ciências de dados",
        location: "Universidade unopar",
        description:
            "Análise de dados, machine learning, inteligência artificial e manipulação de dados com python",
        icon: <BsFillJournalBookmarkFill />,
        date: "Fev 2023 - Não concluído",
    },
] as const;