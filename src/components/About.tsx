import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center bg-[#242424]">
            <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl">
                about
            </h3>

            <motion.img className="img">

            </motion.img>
        </div>
    );
}

export default About;