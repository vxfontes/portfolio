export interface ProjectProps {
    id: number,
    title: string,
    descriptionPT: string,
    descriptionEN: string,
    details: string[],
    tecnologies: string[],
    finish: boolean,
    link: string,
    imgPrincipal: string,
    imgMobile: string[],
    imgDesktop: string[],
    videos: string[],
    another: string [], // primeira posção é texto e resto imagens ou videos
}