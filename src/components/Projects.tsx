import { motion, useScroll, useTransform } from "framer-motion";
import Title from "./Title";
import { ptBR as locale } from '../data/infos'
import { projects } from "@/data/projects";
import Link from "next/link";

const Projects = () => {

    const { scrollYProgress } = useScroll({
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0"
        >
            <Title>{locale.projects.title}</Title>
            <h3 className="absolute top-36 uppercase tracking-[3px] mb-12 text-gray-500 text-sm">{locale.projects.sub}</h3>

            <div className="columns-1 md:columns-2 gap-2 px-16 pt-40 w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            scale: scaleProgess,
                            opacity: opacityProgess,
                        }}
                        className="group mb-3 sm:mb-8 last:mb-0"
                    >
                        <Link href={`/projects/${project.id}`}>
                            <section className="cursor-pointer max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition sm:group-even:pl-8 text-white bg-white/10 hover:bg-white/20">
                                <div className="pt-4 pb-7 px-5 sm:pl-6 sm:pr-2 sm:pt-6 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                                    <p className="mt-2 leading-relaxed text-white/70 hidden sm:block">
                                        {project.descriptionPT}
                                    </p>
                                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                                        <li className={`${project.finish ? 'bg-green-900' : 'bg-red-900'} px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white/70`} key={index}>
                                            {!project.finish ?  <>Em progresso...</>  :  <>Finalizado</>}
                                        </li>
                                    </ul>
                                </div>

                                <img
                                    src={project.imgPrincipal}
                                    alt="Project I worked on"
                                    className="sm:absolute block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                                    transition 
                                    group-hover:scale-[1.04]
                                    group-hover:-translate-x-3
                                    group-hover:translate-y-3
                                    group-hover:-rotate-2

                                    group-even:group-hover:translate-x-3
                                    group-even:group-hover:translate-y-3
                                    group-even:group-hover:rotate-2

                                    group-even:right-[initial] group-even:-left-40"
                                />
                            </section>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />

        </motion.div>
    );
}

export default Projects;