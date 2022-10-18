import { Typography } from '@material-ui/core';
import styles from './styles';

const TestBreakpoint = () => {
    const classes = styles();

    return (
        <div className={classes.paper}>
            <Typography>
                The background will change color based on the screen size.
            </Typography>
        </div>
    );
}

export default TestBreakpoint;
