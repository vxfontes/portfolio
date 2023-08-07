'use client'

import Intro from "@/components/Intro";

export default function Home() {
    return (
        <main className=" text-white h-screen bg-[#242424] snap-y snap-mandatory overflow-scroll z-0">

            {/* <section className="snap-center"> */}
                <Intro />
            {/* </section> */}
        </main>
    )
}
