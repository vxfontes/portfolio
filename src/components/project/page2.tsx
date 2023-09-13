import { ptBR as locale } from "@/data/infos";
import Title, { SubTitle } from "../Title";
import React from "react";

interface Props {
    title: string,
    imgs: string[],
    mobile: boolean
}

const Page2 = ({ title, imgs, mobile }: Props) => {
    return (
        <div className="flex h-screen items-center z-10 relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto">
            <Title>{title}</Title>
            <SubTitle>{locale.projects.arraste}</SubTitle>

            <div className="relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {imgs.map((img, index) => (
                    <React.Fragment key={index}>
                        {mobile ? (
                            <div className="flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 mt-12">
                                <img src={img} width={'200px'} />
                            </div>
                        ) : (
                            <div className="w-[550px] md:w-[870px] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                                <img src={img} />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Page2;