import { ptBR as locale } from '../data/infos'

export const links = [
    {
        name: locale.about.title,
        mobileName: "Sobre",
        hash: "#about",
    },
    {
        name: "Impacto",
        mobileName: "Impacto",
        hash: "#impact",
    },
    {
        name: "Construído",
        mobileName: "Produto",
        hash: "#built",
    },
    {
        name: locale.experience.title,
        mobileName: "Carreira",
        hash: "#experience",
    },
    {
        name: locale.skill.title,
        mobileName: "Stack",
        hash: "#skills",
    },
    {
        name: locale.projects.title,
        mobileName: "Cases",
        hash: "#projects",
    },
    {
        name: locale.study.title,
        mobileName: "Formação",
        hash: "#study",
    }
] as const;

export const social = {
    email: 'vanessaramosfontes@gmail.com',
    instagram: 'https://www.instagram.com/vxfontes',
    github: 'https://github.com/vxfontes',
    linkedin: 'https://www.linkedin.com/in/vxfontes'
}
