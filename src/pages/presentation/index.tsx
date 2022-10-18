import { Button, Grid, Typography } from '@material-ui/core';
import NormalAvatar from '../../components/avatars/normalAvatar';
import styles from './styles';

const Presentation = () => {
    const classes = styles();

    return (
        <Grid className={classes.paper} container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6}>
                <NormalAvatar />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button variant="outlined">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </Grid>
        </Grid>
    );
}

export default Presentation;