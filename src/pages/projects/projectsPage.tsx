import { useState } from "react";
import {
    Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, 
    DialogContentText, DialogTitle, Grid, Typography, useMediaQuery
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";

// local
import data from '../../data/projects.json';
import styles from "./styles";
import { ProjectProps } from "../../interface/ProjectProps";
import theme from "../../theme";


const ProjectsPage = () => {
    const params = useParams();
    const language = params.language;
    const classes = styles();

    const [open, setOpen] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid className={classes.paperProjects} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
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
                    <Grid item xl={4} lg={4} md={5} sm={12} xs={12}>
                        <Card className={classes.project}>
                            <CardMedia className={classes.media} image={project.imgPrincipal} title='Project Image' />

                            <CardContent className={classes.description}>
                                <Typography className={classes.chip} variant="h6" style={{ fontWeight: 'bold' }} color='secondary'>{project.title}</Typography>

                                <Box>
                                    {project.tecnologies.slice(0, 3).map((tec: string) => (
                                        <Chip className={classes.chip} size="small" label={tec} />
                                    ))}
                                    <Chip className={classes.chip} size="small" label='...' />
                                </Box>

                                <Typography variant="h6" color='secondary'>
                                    {language === 'english' ? (
                                        <>
                                            {project.descriptionEN.substr(0, 100)}...
                                        </>
                                    ) : (
                                        <>
                                            {project.descriptionPT.substr(0, 100)}...
                                        </>
                                    )}
                                </Typography>
                            </CardContent>

                            <CardActions className={classes.aligning}>
                                <Button style={{ textTransform: "capitalize" }} component={Link} to={`/project/${language}/${project.id}`} color='secondary' onClick={handleClickOpen}>
                                    <Typography variant="body1" color='secondary'>
                                        {language === 'english' ? (
                                            <>Ver Mais</>
                                        ) : (
                                            <>Ver Mais</>
                                        )}
                                    </Typography>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} >
                <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ProjectsPage;