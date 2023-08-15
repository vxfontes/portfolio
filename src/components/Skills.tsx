import { motion } from "framer-motion";
import Skill from "./Skill";
import { skillsData } from "@/data/skillts";
import { ptBR as locale } from "@/data/infos";


const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mt-4 mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                {locale.skill.title}
            </h3>

            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">{locale.skill.sub}</h3>

            <div className="grid grid-cols-4 md:grid-cols-5 gap-5">
                {skillsData.map(skill => (
                    <Skill key={skill.name} icon={skill.icon} name={skill.name} percentage={skill.percentage} />
                ))}
            </div>
        </motion.div>
    );
}

export default Skills;