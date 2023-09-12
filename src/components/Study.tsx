import { studyData } from "@/data/experiences";
import { ptBR as locale } from "@/data/infos";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import Title from "./Title";


const Study = () => {
    return (
        <div className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-screen-xl px-10 justify-evenly mx-auto items-end 2xl:items-center md:pb-12 xl:pb-32 2xl:pb-0 bg-[#242424]">
            <Title>
                {locale.study.title}
            </Title>

            <VerticalTimeline>
                {studyData.map((item, index) => {
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
                            <p className="!mt-1 !font-normal hidden 2xl:block text-gray-700 dark:text-white/75">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>

        </div>
    );
}

export default Study;