import Link from "next/link";
import Title, { SubTitle } from "../Title";

interface Props {
    title: string,
    videos: string[],
}

const Page4 = ({ title, videos }: Props) => {
    return (
        <div className="justify-evenly w-screen h-96 items-center text-center z-10 mx-auto my-20">
            <h3 className="text-center justify-center uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl my-6 mt-44">{title}</h3>
            {videos.length === 1 ? (

                <div className={`grid grid-cols-1 gap-4`}>
                    {videos.map((vid, i) => (
                        <iframe
                            key={i}
                            className="w-screen z-20"
                            src={vid}
                            title="Video demonstração"
                        />
                    ))}
                </div>
            ) : (
                <>
                    {videos.map((vid, index) => (
                        <Link href={vid} key={index}>
                            <button className="px-3 mx-2 py-2 border border-gray-400 rounded-xl uppercase text-sm tracking-widest text-gray-400 transition-all 
                                    hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 hover:scale-110 active:scale-105 w-auto">
                                Video {index+1}
                            </button>
                        </Link>
                    ))}
                </>
            )}
        </div>
    )
}

export default Page4;
