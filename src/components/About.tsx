import { motion } from "framer-motion";
import { ptBR as locale } from '../data/infos';
import Title from "./Title";

const About = () => {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center bg-[#242424]">
            <Title>
                {locale.about.title}
            </Title>

            <motion.img
                className="-mb-24 md:mb-0 mt-10 md:mt-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="https://firebasestorage.googleapis.com/v0/b/vxfontes.appspot.com/o/pics%20projects%2Feu%2Feu2resize.jpg?alt=media&token=44daa2de-2f1f-4a4f-91bc-1a0a60639c24" />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    {" "}<span className="underline decoration-[#F7AB0A]/50">{locale.about.span}</span>{" "}
                    {locale.about.frase}
                </h4>
            </div>

            <p className="text-base">{locale.about.sobremim}</p>
        </div>
    );
}

export default About;