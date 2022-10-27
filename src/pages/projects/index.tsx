import { LanguageProps } from "../../interfaces/languageProps";
import styles from "./styles";

const Projects = (get: LanguageProps) => {
    const language = get.language;
    const classes = styles();

    return (
        <>
            {language === 'english' ? (
                <h1>ok</h1>
            ) : (
                <h1>ok</h1>
            )};
        </>
    )
}

export default Projects;