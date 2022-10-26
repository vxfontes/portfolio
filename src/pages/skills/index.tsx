import { LanguageProps } from "../../interfaces/languageProps";
import { Box, Grid, Typography, useMediaQuery } from '@material-ui/core';
import styles from './styles';
import theme from "../../theme";

// icons
import javascript from '../../assets/icons/javascript.svg';
import css from '../../assets/icons/css3.svg';
import git from '../../assets/icons/git.svg';
import html from '../../assets/icons/html-5.svg';
import java from '../../assets/icons/java.svg';
import typescript from '../../assets/icons/typescript.svg';
import python from '../../assets/icons/python.svg';
import react from '../../assets/icons/react-native.svg';
import node from '../../assets/icons/node-js.svg';


const Skills = (get: LanguageProps) => {
    const language = get.language;
    const classes = styles();
    const gridGrande = useMediaQuery(theme.breakpoints.up('sm'));
    const gridPequeno = useMediaQuery(theme.breakpoints.only('xs'));

    return (
        <Grid className={classes.paper} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
            <Grid className={classes.container} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                <Grid item style={{ margin: '3vh 0 2vh 0' }} xl={12} lg={12} md={12} sm={12} xs={12}>
                    {language === 'english' ? (
                        <Typography variant="h4" color="secondary">
                            My skills
                        </Typography>
                    ) : (
                        <Typography variant="h4" color="secondary">
                            Minhas habilidades
                        </Typography>
                    )}
                </Grid>
                
                {gridGrande && (
                    <>
                        <Grid item className={classes.icons} xl={9} lg={10} md={10} sm={12}>
                            <Box>
                                <img src={javascript} alt='javascript' height='90' />
                                <Typography variant="h6" color='secondary'>JavaScript</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>80%</Typography>
                            </Box>
                            <Box>
                                <img src={typescript} alt='typescript' height='90' />
                                <Typography variant="h6" color='secondary'>TypeScript</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>75%</Typography>
                            </Box>
                            <Box>
                                <img src={css} alt='css' height='90' />
                                <Typography variant="h6" color='secondary'>CSS</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>95%</Typography>
                            </Box>
                            <Box>
                                <img src={html} alt='html' height='90' />
                                <Typography variant="h6" color='secondary'>HTML</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>90%</Typography>
                            </Box>
                            <Box>
                                <img src={git} alt='git' height='90' />
                                <Typography variant="h6" color='secondary'>Git</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>80%</Typography>
                            </Box>
                        </Grid>
                        <Grid item className={classes.icons} xl={9} lg={10} md={10} sm={12}>
                            <Box>
                                <img src={java} alt='java' height='90' />
                                <Typography variant="h6" color='secondary'>Java</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>60%</Typography>
                            </Box>
                            <Box>
                                <img src={node} alt='nodejs' height='90' />
                                <Typography variant="h6" color='secondary'>NodeJS</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>65%</Typography>
                            </Box>
                            <Box>
                                <img src={python} alt='python' height='90' />
                                <Typography variant="h6" color='secondary'>Python</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>36%</Typography>
                            </Box>
                            <Box>
                                <img src={react} alt='ReactJS' height='90' />
                                <Typography variant="h6" color='secondary'>ReactJs</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>90%</Typography>
                            </Box>
                            <Box>
                                <img src={react} alt='React native' height='90' />
                                <Typography variant="h6" color='secondary'>React Native</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>45%</Typography>
                            </Box>
                        </Grid>
                    </>
                )}

                {gridPequeno && (
                    <>
                        <Grid item className={classes.icons} xs={12}>
                            <Box>
                                <img src={javascript} alt='javascript' height='60' />
                                <Typography variant="h6" color='secondary'>JavaScript</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>80%</Typography>
                            </Box>
                            <Box>
                                <img src={typescript} alt='typescript' height='60' />
                                <Typography variant="h6" color='secondary'>TypeScript</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>75%</Typography>
                            </Box>
                        </Grid>
                        <Grid item className={classes.icons} xs={12}>
                            <Box>
                                <img src={css} alt='css' height='60' />
                                <Typography variant="h6" color='secondary'>CSS</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>95%</Typography>
                            </Box>
                            <Box>
                                <img src={html} alt='html' height='60' />
                                <Typography variant="h6" color='secondary'>HTML</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>90%</Typography>
                            </Box>
                        </Grid>
                        <Grid item className={classes.icons} xs={12}>
                            <Box>
                                <img src={git} alt='git' height='60' />
                                <Typography variant="h6" color='secondary'>Git</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>80%</Typography>
                            </Box>
                            <Box>
                                <img src={java} alt='java' height='60' />
                                <Typography variant="h6" color='secondary'>Java</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>60%</Typography>
                            </Box>
                        </Grid>
                        <Grid item className={classes.icons} xs={12}>
                            <Box>
                                <img src={node} alt='nodejs' height='60' />
                                <Typography variant="h6" color='secondary'>NodeJS</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>65%</Typography>
                            </Box>
                            <Box>
                                <img src={python} alt='pyhton' height='60' />
                                <Typography variant="h6" color='secondary'>Python</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>36%</Typography>
                            </Box>
                        </Grid>
                        <Grid item className={classes.icons} xs={12}>
                            <Box>
                                <img src={react} alt='ReactJS' height='60' />
                                <Typography variant="h6" color='secondary'>ReactJs</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>90%</Typography>
                            </Box>
                            <Box>
                                <img src={react} alt='React native' height='60' />
                                <Typography variant="h6" color='secondary'>React<br />Native</Typography>
                                <Typography variant="body2" style={{ color: '#b8b8b89e' }}>45%</Typography>
                            </Box>
                        </Grid>
                    </>
                )}
            </Grid>
        </Grid>
    );
}

export default Skills;