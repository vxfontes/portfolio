import { SubTitle } from "../Title";
import React from "react";

interface Props {
    title: string,
    imgs: string[],
}

const Page3 = ({ title, imgs }: Props) => {
    return (
        <div className="flex h-screen items-center z-10 relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto">
            <SubTitle>{title}</SubTitle>

            <div className="relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {imgs.map((img, index) => (
                    <div className="w-[70%] md:w-[70%] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <img src={img} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page3