import { Button, Grid, Typography, Box, Avatar } from '@material-ui/core';
import styles from './styles';
import me from '../../assets/image/me.png';

const About = () => {
    const classes = styles();

    return (
        <Grid className={classes.paper} container direction='row' justifyContent="center" alignItems="center">
            <Grid item xl={7} lg={7} md={6} sm={6} xs={9}>
            </Grid>
            {/* <Grid item xl={7} lg={7} md={6} sm={6} xs={9}>
                
            </Grid> */}
            <img className={classes.image} height="500" src={me} />
        </Grid>
    );
}

export default About;