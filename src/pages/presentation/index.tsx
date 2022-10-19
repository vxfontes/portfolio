import { Button, Grid, Typography, Box } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

import NormalAvatar from '../../components/avatars/normalAvatar';
import styles from './styles';

const Presentation = () => {
    const classes = styles();

    return (
        <Grid className={classes.paper} container justifyContent="center" alignItems="center">
            <Grid item xl={5} lg={5} md={6} sm={6} xs={12} style={{ marginTop: -50 }}>
                <NormalAvatar />
            </Grid>
            <Grid item xl={7} lg={7} md={6} sm={6} xs={9}>
                <Grid className={classes.content} container direction='row' alignItems="center" spacing={1}>
                    <Grid className={classes.principalText} item xl={8} lg={9} md={10} sm={10} xs={12}>
                        <Typography className={classes.hello} variant='h6' color='secondary' align='left'>
                            Hello, I'm
                        </Typography>
                        <Typography variant='h2' color='secondary'>
                            Vanessa Fontes
                        </Typography>
                    </Grid>
                    <Grid item xl={8} lg={7} md={9} sm={12} xs={12}>
                        <Grid container direction='row' alignItems="center" spacing={1}>
                            <Grid item xl={6} lg={7} md={7} sm={10} xs={11}>
                                <Button className={classes.typo} variant="outlined" color='secondary' fullWidth>
                                    <Typography variant='h6'>
                                        Download Resume
                                    </Typography>
                                    <ArrowForward style={{ marginLeft: '1vw' }} />
                                </Button>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={10} xs={11}>
                                <Button className={classes.typo} variant="contained" color="primary" fullWidth>
                                    <Typography variant='h6'>
                                        Contact Me
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Presentation;