import React, { useState } from 'react';
import { Box, Chip, Grid, Typography, useMediaQuery } from "@material-ui/core";
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import styles from "./styles";
import { useParams, Link } from 'react-router-dom';
import theme from '../../theme';
import data from '../../data/projects.json';
import { ProjectProps } from "../../interface/ProjectProps";
import ProjectCard from '../../components/projectCard/card';

const Projects = () => {
    const params = useParams();
    const language = params.language;
    const classes = styles();
    const showMore = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Grid className={classes.paperPrinc} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                <Grid className={classes.inside} container direction='row' justifyContent='center' alignItems="center" spacing={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography style={{ paddingTop: '5vh', marginBottom: '5vh' }} variant='h2' color='secondary'>
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
                    {data.slice(0, 3).map((project) =>
                        <Grid key={project.id} item xl={4} lg={4} md={4} sm={11} xs={11} style={{ marginTop: '4vh' }}>
                            <Link className={classes.decoration} to={`/project/${language}/${project.id}`}>
                                <ProjectCard language={language} project={project} />
                            </Link>
                        </Grid>
                    )}
                    <Grid item xl={4} lg={4} md={4} sm={11} xs={11}>
                        <Grid className={classes.pageBox} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                            <Grid className={classes.box}>
                                <Link className={classes.decoration} to={`/projectsPage/${language}`}>
                                    {showMore && (
                                        <span className={classes.span}>+</span>
                                    )}
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