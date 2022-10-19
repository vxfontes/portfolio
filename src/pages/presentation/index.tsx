import { Button, Grid, Typography, Box, useMediaQuery } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

import NormalAvatar from '../../components/avatars/normalAvatar';
import theme from '../../theme';
import styles from './styles';

const Presentation = () => {
    const classes = styles();
    const alignButton = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid className={classes.paper} container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6}>
                <NormalAvatar />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box className={classes.content}>
                    <Grid className={classes.principalText} item xs={12} md={12}>
                        <Typography variant='h6' color='secondary'>
                            Hello, I'm
                        </Typography>
                        <Typography variant='h2' color='secondary'>
                            Vanessa Fontes
                        </Typography>
                    </Grid>
                    <Grid className={classes.principalText} item xs={12} md={12}>
                        <Grid container direction='row' justifyContent="center" alignItems="flex-start" spacing={1}>
                            <Grid item xl={2} lg={3} md={4} sm={9} xs={9}>
                                <Button className={classes.typo} variant="outlined" color='secondary' size='large' fullWidth>
                                    Resume
                                    <ArrowForward style={{ marginLeft: '1vw' }} />
                                </Button>
                            </Grid>
                            <Grid item xl={2} lg={2} md={3} sm={9} xs={9}>
                                <Button className={classes.typo} variant="contained" color="primary" size='large' fullWidth>
                                    Contact
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Presentation;