import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme: Theme) =>

    createStyles({
        paper: {
            width: '100%',
            height: '100vh',
            margin: 0,
            padding: 0,
            backgroundColor: theme.palette.mybackgroundColor?.main,
            flexDirection: 'row-reverse'
        },

        image: {
            // boxShadow: ''
        },
    })
);

export default styles;