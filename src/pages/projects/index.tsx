import React, { useState } from 'react';
import { Box, Chip, Grid, Link, Typography } from "@material-ui/core";
import { LanguageProps } from "../../interfaces/languageProps";
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import styles from "./styles";
import data from '../../data/projects.json';

interface ProjectProps {
    title: string,
    descriptionPT: string,
    tecnologies: string[],
    finish: boolean
}

const principalData = [
    {
        "title": "JM System",
        "id": 1,
        "descriptionPT": "Sistema que gera recibos e possui dashboard completo.",
        "tecnologies": ["React JS", "Firebase", "Yup", "Formik", "Material UI", "React Router Dom"],
        "finish": true
    },
    {
        "title": "Clone Netflix",
        "id": 2,
        "descriptionPT": "Imitação da interface principal da netflix utilizando ReactJS.",
        "tecnologies": ["React JS", "Axios", "React Router Dom", "Cors", "Bootstrap", "..."],
        "finish": true
    },
]

const Projects = (get: LanguageProps) => {
    const language = get.language;
    const classes = styles();

    const preventDefault = (event: React.SyntheticEvent) => { event.preventDefault(); alert("I'm a button.") };


    function getProgress(progress: boolean) {
        if (progress === true) {
            if (language === "portuguese") {
                return "Finalizado";
            } else {
                return "Done";
            }
        } else {
            if (language === "portuguese") {
                return "Em progresso";
            } else {
                return "In Progress";
            }
        }
    }

    function Thumbnail(project: any) {
        const projeto = project.project;

        return (
            <Grid className={classes.page} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                <Grid className={classes.progressBar} container xl={11} lg={11} md={11} sm={11} xs={11}>
                    <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                        <DeveloperModeIcon style={{ fontSize: 30, paddingTop: 2 }} />
                    </Grid>
                    <Grid style={{ display: 'flex' }} item xl={10} lg={10} md={10} sm={10} xs={10}>
                        <Typography className={classes.progressText} variant="h6" align="right">{getProgress(projeto.finish)}</Typography>
                    </Grid>
                </Grid>
                <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                    <Typography variant="h4" color='secondary'>{projeto.title}</Typography>
                    <Typography variant="body1" color='secondary'>{projeto.descriptionPT}</Typography>
                </Grid>

                <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                    {projeto.tecnologies.map((tec: string[]) =>
                        <Chip className={classes.chip} label={tec} variant='outlined' color='secondary' />
                    )}
                </Grid>
            </Grid>
        )
    }

    return (
        <>

            <Grid className={classes.paper} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                <Grid className={classes.inside} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        {language === 'english' ? (
                            <Typography style={{ paddingTop: '5vh' }} variant='h2' color='secondary'>
                                <span className={classes.colorProj}>Proj</span>
                                <span style={{ borderBottom: "5px solid #ffffffec", paddingRight: '0.26em' }}>ects</span>
                            </Typography>
                        ) : (
                            <Typography style={{ paddingTop: '5vh' }} variant='h2' color='secondary'>
                                <span className={classes.colorProj}>Proj</span>
                                <span style={{ borderBottom: "5px solid #ffffffec", paddingRight: '0.26em' }}>etos</span>
                            </Typography>
                        )}
                    </Grid>
                    {principalData.map((project) =>
                        <Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
                            <Link href="#" underline="none" onClick={preventDefault}>
                                <Thumbnail project={project} />
                            </Link>
                        </Grid>
                    )}
                    <Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
                        <Grid className={classes.pageBox} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                            <Grid className={classes.box}>
                                <Link href="#" underline="none" onClick={preventDefault}>
                                    <span className={classes.span}>+</span>
                                    {language === 'english' ? (
                                        <Typography variant='body1' color='secondary'>More</Typography>
                                    ) : (
                                        <Typography variant='body1' color='secondary'>Ver mais</Typography>
                                    )}
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Projects;