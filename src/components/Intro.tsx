import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

const Intro = () => {
    const [text, count] = useTypewriter({
        words: ['teste1', 'teste2asda', 'askdald'],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <img className="relative rounded-fill h-32 w-32 mx-auto object-cover" />

            <div className="z-20">
                <div>
                    <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Teste asdadasd</h2>

                    <h1 className="text-5xl lg:6xl font-semibold px-10">
                        <span className="mr-3">{text}</span>
                        <Cursor cursorColor='#fff' />
                    </h1>
                </div>

                <div>
                    <Link href='#' className="pt-5">
                        <button className="introButton">but 1</button>
                    </Link>
                    <Link href='#' className="pt-5">
                        <button className="introButton">but 1</button>
                    </Link>
                    <Link href='#' className="pt-5">
                        <button className="introButton">but 1</button>
                    </Link>
                    <Link href='#' className="pt-5">
                        <button className="introButton">but 1</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Intro;