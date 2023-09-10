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
        name: locale.skill.title,
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const social = {
    instagram: 'https://www.instagram.com/vxfontes',
    github: 'https://github.com/vxfontes',
    linkedin: 'https://www.linkedin.com/in/vxfontes',
    curriculo: 'https://firebasestorage.googleapis.com/v0/b/vxfontes.appspot.com/o/curriculo%2FRusselcurriculoPT.pdf?alt=media&token=d73fb973-fc61-4c17-a32d-5d060d09146d'
}