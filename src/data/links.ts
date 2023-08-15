import { ptBR as locale } from '../data/infos'

export const links = [
    {
        name: "Intro",
        hash: "#intro",
    },
    {
        name: locale.about.title,
        hash: "#about",
    },
    {
        name: locale.experience.title,
        hash: "#experience",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;