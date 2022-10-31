import { Chip, Grid, Typography } from "@material-ui/core";
import { LanguageProps } from "../../interfaces/languageProps";
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import styles from "./styles";

const Projects = (get: LanguageProps) => {
    const language = get.language;
    const classes = styles();

    function Thumbnail() {
        return (
            <Grid className={classes.page} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                <Grid className={classes.progressBar} container xl={11} lg={11} md={11} sm={11} xs={11}>
                    <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                        <DeveloperModeIcon />
                    </Grid>
                    <Grid style={{ display: 'flex' }} item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <DoubleArrowIcon />
                        <Typography className={classes.progressText} variant="h6">In Progress</Typography>
                    </Grid>
                </Grid>
                <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                    <Typography variant="h4" color='secondary'>File Name</Typography>
                    <Typography variant="body1" color='secondary'>hfsdkjfksdj sdkjksdjf skhdf ksjf skjf ksh fksj </Typography>
                </Grid>

                <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                    <Chip className={classes.chip} label="Clickable" variant='outlined' color='secondary'/>
                    <Chip className={classes.chip} label="Clickable" variant='outlined' color='secondary'/>
                    <Chip className={classes.chip} label="Clickable" variant='outlined' color='secondary'/>
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            {/* {language === 'english' ? (
                <h1>ok</h1>
                ) : (
                <h1>ok</h1>
            )}; */}

            <Grid className={classes.paper} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography variant='h2' color='secondary'>Projetos</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={11} xs={11}>
                    <Thumbnail />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={11} xs={11}>
                    <Thumbnail />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={11} xs={11}>
                    <Thumbnail />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={11} xs={11}>
                    <Thumbnail />
                </Grid>
            </Grid>
        </>
    )
}

export default Projects;