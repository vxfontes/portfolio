import { Box, Button, Chip, Grid, Link, Typography, useMediaQuery } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import MyAppBar from "../../components/appBar";
import data from '../../data/projects.json';
import { ProjectProps } from '../../interface/ProjectProps';
import theme from "../../theme";
import styles from "./styles";


const Infos = () => {
    let navigate = useNavigate();
    const params = useParams();
    const language = params.language;
    const classes = styles();
    const showBig = useMediaQuery(theme.breakpoints.up('lg'));
    const mobileVersion = useMediaQuery(theme.breakpoints.only('xs'));
    const id = Number(params.project);


    return (
        <>
            {data.map((proj: ProjectProps) => {
                if (proj.id === id) {

                    return (
                        <>
                            <MyAppBar />

                            {mobileVersion ? (
                                <Grid className={classes.paper} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography style={{ marginTop: 40 }} align="left" variant="h4" color='secondary'>
                                            {proj.title}
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12}>
                                        <img className={classes.imgPrincipal} src={proj.imgPrincipal} alt="imagem principal" />
                                    </Grid>

                                    <Grid xs={12}>
                                        <Typography align="left" variant="h6" color='secondary'>
                                            {language === 'portuguese' ? (
                                                proj.details[0]
                                            ) : (
                                                proj.details[1]
                                            )}
                                        </Typography>
                                        <br />
                                        <Typography style={{ fontWeight: 'bold' }} align="left" variant="h6" color='secondary'>
                                            {language === 'portuguese' ? (
                                                <>Tecnologias</>
                                            ) : (
                                                <>Technologies</>
                                            )}
                                        </Typography>
                                        <Box className={classes.chips}>
                                            {proj.tecnologies.map((tec: string) => (
                                                <Chip className={classes.chip} size="small" label={tec} variant='outlined' color='secondary' />
                                            ))}
                                        </Box>
                                    </Grid>

                                    <Button className={classes.repoButton} fullWidth variant='outlined' color='secondary'>
                                        <Link style={{ width: '100%', textDecoration: 'none' }} href={proj.link}>
                                            <Typography style={{ fontWeight: 'bold' }} align="center" variant="h6" color='secondary'>Repo</Typography>
                                        </Link>
                                    </Button>
                                </Grid>

                            ) : (

                                <Grid className={classes.paperInfo} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                                    <Grid style={{ height: '20vh' }} item xl={10} lg={10} md={10} sm={10} xs={10}>
                                        <Typography className={classes.typoPrinc} style={{ marginTop: 45 }} align="left" variant="h4" color='secondary'>
                                            {proj.title}
                                        </Typography>
                                    </Grid>

                                    <Grid style={{ height: '50vh' }} item xl={5} lg={5} md={5} sm={12} xs={12}>
                                        <Typography className={classes.typo} align="left" variant="h6" color='secondary'>
                                            {language === 'portuguese' ? (
                                                proj.details[0]
                                            ) : (
                                                proj.details[1]
                                            )}
                                        </Typography>
                                        <br />
                                        <Typography className={classes.typo} style={{ fontWeight: 'bold' }} align="left" variant="h6" color='secondary'>
                                            {language === 'portuguese' ? (
                                                <>Tecnologias</>
                                            ) : (
                                                <>Technologies</>
                                            )}
                                        </Typography>

                                        <Box className={classes.chips}>
                                            {proj.tecnologies.map((tec: string) => (
                                                <>
                                                    {showBig ? (
                                                        <Chip className={classes.chip} label={tec} variant='outlined' color='secondary' />
                                                    ) : (
                                                        <Chip className={classes.chip} size="small" label={tec} variant='outlined' color='secondary' />
                                                    )}
                                                </>
                                            ))}
                                        </Box>
                                        <Button className={classes.repoButton} fullWidth variant='outlined' color='secondary'>
                                            <Link style={{ width: '100%', textDecoration: 'none' }} href={proj.link}>
                                                <Typography style={{ fontWeight: 'bold' }} align="center" variant="h6" color='secondary'>Repo</Typography>
                                            </Link>
                                        </Button>
                                    </Grid>

                                    <Grid style={{ height: '60vh' }} item xl={4} lg={4} md={4} sm={12} xs={12}>
                                        <Box className={classes.principal} >
                                            {proj.id === 7 ? (
                                                <img className={classes.imgPrincipalMobile} src={proj.imgPrincipal} alt="imagem principal" />
                                            ) : (
                                                <img className={classes.imgPrincipal} src={proj.imgPrincipal} alt="imagem principal" />
                                            )}
                                        </Box>
                                    </Grid>

                                </Grid>
                            )}
                        </>
                    )
                }
            })}
        </>
    );
}

export default Infos;