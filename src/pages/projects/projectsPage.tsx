import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";

// local
import data from '../../data/projects.json';
import styles from "./styles";
import { ProjectProps } from "../../interface/ProjectProps";
import MyAppBar from "../../components/appBar";
import ProjectCard from "../../components/projectCard/card";


const ProjectsPage = () => {
    const params = useParams();
    const language = params.language;
    const classes = styles();

    return (
        <>
            <MyAppBar />
            <Grid className={classes.paperPrinc} style={{ padding: 60 }} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                <Grid item xl={12} lg={12} md={11} sm={12} xs={12}>
                    <Typography style={{ paddingTop: '1vh', marginBottom: '5vh' }} variant='h2' color='secondary'>
                        {language === 'english' ? (
                            <>
                                <span className={classes.colorProj}>Proj</span>
                                <span style={{ borderBottom: "5px solid #ffffffec", paddingRight: '0.26em' }}>ects</span>
                            </>
                        ) : (
                            <>
                                <span className={classes.colorProj}>Proj</span>
                                <span style={{ borderBottom: "5px solid #ffffffec", paddingRight: '0.26em' }}>etos</span>
                            </>
                        )}
                    </Typography>
                </Grid>

                {data.map((project: ProjectProps) => (
                    <Grid key={project.id} item xl={4} lg={4} md={5} sm={12} xs={12}>
                        <ProjectCard language={language} project={project} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default ProjectsPage;