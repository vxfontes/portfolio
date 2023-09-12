import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
    icon: string;
    name: string;
    percentage: string;
}

const Skill = ({ directionLeft, icon, name, percentage }: Props) => {
    return (
        <div className="group relative flex cursor-pointer pb-6">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
                src={icon}
            />
            <div className="absolute transition duration-300 group-hover:opacity-70 ease-in-out group-hover:bg-white w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="opacity-0 group-hover:opacity-100 flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">{percentage}</p>
                </div>
                <div className="opacity-100 w-full text-gray-400 text-center">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
