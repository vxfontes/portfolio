import { experiencesData } from "@/data/experiences";
import { ptBR as locale } from "@/data/infos";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";


const Experience = () => {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center bg-[#242424]">
            <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl">
                {locale.experience.title}
            </h3>


            <VerticalTimeline>
                {experiencesData.map((item, index) => {
                    return (
                        <VerticalTimelineElement key={index}
                            contentStyle={{
                                background: "#444444",
                                boxShadow: "30px solid #000",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                visibility: "visible",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #444444",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "#444444",
                                fontSize: "1.5rem",
                                visibility: 'visible',
                            }}
                        >
                            <h3 className="font-semibold capitalize vertical-timeline-element-title">{item.title}</h3>
                            <p className="font-normal !mt-0 vertical-timeline-element-subtitle">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>


        </div>
    );
}

export default Experience;