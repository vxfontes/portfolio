import { ProjectProps } from "@/interface/ProjectProps";
import Link from "next/link";
import { ptBR as locale } from "@/data/infos";

interface Props {
    project: ProjectProps
}

const Page1 = ({ project }: Props) => {
    return (
        <div className="grid min-h-auto md:h-screen md:w-auto grid-cols-1 xl:grid-cols-2 md:gap-12 items-center z-10 mx-4 md:mx-32">
            {/* imagem principal */}
            <div className="z-40 py-8">
                <img
                    src={project.imgPrincipal}
                    alt="Project I worked on"
                    className="top-8 rounded-t-lg shadow-2xl"
                />
            </div>

            {/* descrição e titulo */}
            <div className="z-40">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 leading-relaxed text-white/70">
                    {project.details[0]}
                </p>

                <ul className="flex flex-wrap mt-4 gap-2">
                    {project.tecnologies.map((tag: string, index: number) => (
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white/70"
                            key={index}>
                            {tag}
                        </li>
                    ))}
                </ul>

                <div className="text-center mt-5">
                    {project.link !== "" && (
                        <Link href={project.link}>
                            <button className="px-3 mx-2 py-2 border border-gray-400 rounded-xl uppercase text-sm tracking-widest text-gray-400 transition-all 
                                        hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 hover:scale-110 active:scale-105 w-auto">
                                {locale.projects.button}
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Page1;