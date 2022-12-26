import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ProjectProps } from "../../interface/ProjectProps";
import styles from "../../pages/projects/styles";

interface Props {
    project: ProjectProps,
    language: string | undefined
}

const ProjectCard = ({ project, language }: Props) => {
    const classes = styles();

    return (
        <Card className={classes.project}>
            <CardMedia className={classes.media} image={project.imgPrincipal} title='Project Image' />

            <CardContent className={classes.description}>
                <Typography className={classes.chip} variant="h6" style={{ fontWeight: 'bold' }} color='secondary'>{project.title}</Typography>
                <Typography className={classes.chip} variant="body1" color='secondary'>
                    {language === 'english' ? (
                        <>
                            {project.finish ? (
                                <>Done</>
                            ) : (
                                <>Doing...</>
                            )}
                        </>
                    ) : (
                        <>
                            {project.finish ? (
                                <>Finalizado</>
                            ) : (
                                <>Em progresso...</>
                            )}
                        </>
                    )}
                </Typography>

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
                <Button style={{ textTransform: "capitalize" }} component={Link} to={`/project/${language}/${project.id}`} color='secondary'>
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
    );
}

export default ProjectCard;