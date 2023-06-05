import React from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@material-ui/core';
import styles from './styles';
import theme from '../../theme';

// icons
import javascript from '../../assets/icons/javascript.svg';
import datascience from '../../assets/icons/datascience.svg';
import sql from '../../assets/icons/sql.svg';
import css from '../../assets/icons/css3.svg';
import git from '../../assets/icons/git.svg';
import machine from '../../assets/icons/machine.svg';
import html from '../../assets/icons/html-5.svg';
import java from '../../assets/icons/java.svg';
import typescript from '../../assets/icons/typescript.svg';
import python from '../../assets/icons/python.svg';
import react from '../../assets/icons/react-native.svg';
import node from '../../assets/icons/node-js.svg';
import { useParams } from 'react-router-dom';

const Skills = () => {
    const params = useParams();
    const language = params.language;

    const classes = styles();
    const gridPequeno = useMediaQuery(theme.breakpoints.only('xs'));

    const skillsData = [
        { icon: javascript, name: 'JavaScript', percentage: '80%' },
        { icon: typescript, name: 'TypeScript', percentage: '85%' },
        { icon: css, name: 'CSS', percentage: '95%' },
        { icon: html, name: 'HTML', percentage: '90%' },
        { icon: git, name: 'Git', percentage: '80%' },
        { icon: java, name: 'Java', percentage: '60%' },
        { icon: node, name: 'NodeJS', percentage: '65%' },
        { icon: python, name: 'Python', percentage: '60%' },
        { icon: react, name: 'ReactJS', percentage: '90%' },
        { icon: react, name: 'React Native', percentage: '45%' },
        { icon: sql, name: 'SQL', percentage: '90%' },
        { icon: datascience, name: 'DataScience', percentage: '36%' },
        { icon: machine, name: 'Machine Learning', percentage: '36%' },
    ];

    return (
        <Grid className={classes.paper} container direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Grid className={classes.container} container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <Grid item style={{ margin: '3vh 0 2vh 0' }} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="h4" color="secondary">
                        {language === 'english' ? 'My Skills' : 'Minhas habilidades'}
                    </Typography>
                </Grid>

                {skillsData.map((skill, index) => (
                    <Grid key={index} item xl={2} lg={2} md={3} sm={3} xs={4}>
                        <Box>
                            <img src={skill.icon} alt={skill.name} height={gridPequeno ? "60" : "90"} />
                            <Typography variant="h6" color="secondary">
                                {skill.name}
                            </Typography>
                            <Typography variant="body2" style={{ color: '#b8b8b89e' }}>
                                {skill.percentage}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Skills;
