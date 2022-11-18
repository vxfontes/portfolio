import { useParams } from "react-router-dom";
import data from '../../data/projects.json';
import { ProjectProps } from '../../interface/ProjectProps';


const Infos = () => {
    const params = useParams();
    const language = params.language;
    const id = Number(params.project);

    return (
        <>
            {data.map((proj: ProjectProps) => {
                if (proj.id === id) {

                    return (
                        <>
                            <h1>{language}</h1>
                            <p>{proj.title}</p>
                        </>
                    )
                }
            })}
        </>
    );
}

export default Infos;