'use client'
import { useParams } from "next/navigation";

const Project = () => {

    const router = useParams().id;
    console.log(router);
    

    return (
        <h1>
            teste id
        </h1>
    );
}

export default Project;