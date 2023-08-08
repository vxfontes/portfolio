import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

const Intro = () => {
    const [text, count] = useTypewriter({
        words: ['teste1', 'teste2asda', 'askdald'],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="https://firebasestorage.googleapis.com/v0/b/vxfontes.appspot.com/o/pics%20projects%2Feu%2Feu.JPG?alt=media&token=21cc3d8d-1f79-4890-9f71-df3c31f7ac5a"/>

            <div className="z-20">
                <div>
                    <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">vanessa fontes</h2>

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