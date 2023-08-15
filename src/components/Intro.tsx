import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { ptBR as locale } from '../data/infos'

const Intro = () => {
    const [text, count] = useTypewriter({
        words: locale.intro.frases,
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <img className="relative rounded-full h-32 w-32 shadow-xl mx-auto object-cover" src="https://firebasestorage.googleapis.com/v0/b/vxfontes.appspot.com/o/pics%20projects%2Feu%2Feu600.JPG?alt=media&token=fd233d13-3edf-4b63-b2f6-5a27a8345150" />

            <div className="z-20">
                <div>
                    <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">vanessa fontes</h2>

                    <h1 className="text-5xl lg:6xl font-semibold px-10">
                        <span className="mr-3">{text}</span>
                        <Cursor cursorColor='#fff' />
                    </h1>
                </div>

                <motion.div
                    className="pt-5"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <Link href='#'>
                        <button className="introButton">but</button>
                    </Link>
                    <Link href='#'>
                        <button className="introButton">but</button>
                    </Link>
                    <Link href='#'>
                        <button className="introButton">but</button>
                    </Link>
                    <Link href='#'>
                        <button className="introButton group gap-1 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer">
                            <div className="flex">
                                {locale.intro.baixar} {" "}
                                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                            </div>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Intro;