import { Grid } from '@material-ui/core';
import styles from './styles';

const Presentation = () => {
    const classes = styles();

    return (
        <Grid className={classes.paper} container>
            <h1>hi</h1>
        </Grid>
    );
}

export default Presentation;