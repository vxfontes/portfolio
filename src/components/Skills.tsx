import Skill from "./Skill";
import { skillsData } from "@/data/skillts";
import { ptBR as locale } from "@/data/infos";
import Title from "./Title";


const Skills = () => {
    return (
        <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mt-4 mx-auto items-center">
            <Title>
                {locale.skill.title}
            </Title>

            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">{locale.skill.sub}</h3>

            <div className="mt-36 grid grid-cols-4 md:grid-cols-7 gap-5">
                {skillsData.map(skill => (
                    <Skill key={skill.name} icon={skill.icon} name={skill.name} percentage={skill.percentage} />
                ))}
            </div>
        </div>
    );
}

export default Skills;