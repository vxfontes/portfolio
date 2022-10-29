import { Grid, Typography } from "@material-ui/core";
import { LanguageProps } from "../../interfaces/languageProps";
import styles from "./styles";

const Projects = (get: LanguageProps) => {
    const language = get.language;
    const classes = styles();

    return (
        <>
            {/* {language === 'english' ? (
                <h1>ok</h1>
            ) : (
                <h1>ok</h1>
            )}; */}

            <Grid className={classes.paper} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                <Typography variant='h2'>Projetos</Typography>
            </Grid>
        </>
    )
}

export default Projects;