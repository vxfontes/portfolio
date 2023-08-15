import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
}

const Skill = ({ directionLeft }: Props) => {
    return (
        <div className="group relative flex cursor-pointer pb-4">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
                src="https://firebasestorage.googleapis.com/v0/b/vxfontes.appspot.com/o/pics%20projects%2Feu%2Feu2resize.jpg?alt=media&token=44daa2de-2f1f-4a4f-91bc-1a0a60639c24"
            />
            <div className="absolute transition duration-300 group-hover:opacity-50 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="opacity-0 group-hover:opacity-100 flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">100%</p>
                </div>
                <div className="opacity-100 w-full text-gray-400 text-center">
                    <p>nome</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
