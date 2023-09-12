'use client'
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ProjectProps } from "@/interface/ProjectProps";
import { ptBR as locale } from "@/data/infos";
import { useParams } from "next/navigation";
import Page1 from "@/components/project/page1";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import Title from "@/components/Title";
import Page2 from "@/components/project/page2";

const Project = () => {

    const router = Number(useParams().id);
    const project: ProjectProps | undefined = projects.find(item => item.id === router);
    console.log(project);



    return (
        <div className="text-white h-screen bg-[#242424] overflow-scroll -z-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

            {project ? (
                <>
                    <header className="z-[999] relative">
                        <nav className="flex fixed top-[0.15rem] py-1 ">
                            <ul className="flex flex-wrap items-center justify-center gap-y-1 text-2xl font-medium text-[#F7AB0A]/40">
                                <motion.li
                                    className="flex items-center justify-center relative"
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}>
                                    <Link href={'/#projects'} className="flex w-full items-center justify-center px-6 py-6 hover:text-gray-500 transition"><BsFillArrowLeftCircleFill /></Link>
                                </motion.li>
                            </ul>
                        </nav>
                    </header>

                    {/* paginas */}
                    <Page1 project={project} />
                    {project.imgDesktop.length !== 0 && (
                        <Page2 title={locale.projects.imgs.imgsDesktop} imgs={project.imgDesktop} key={1} mobile={false} />
                    )}
                    {project.imgMobile.length !== 0 && (
                        <Page2 title={locale.projects.imgs.imgsMobile} imgs={project.imgMobile} key={2} mobile />
                    )}

                </>
            ) : (
                <div className="w-screen h-screen items-center flex">
                    <p className="mt-2 leading-relaxed w-screen text-2xl text-center text-white/70">
                        404 - {locale.projects[404]}
                    </p>
                </div>
            )}

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12 z-0" />
        </div>
    );
}

export default Project;