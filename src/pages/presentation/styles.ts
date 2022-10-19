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

        typo: {
            fontFamily: 'Roboto',
            textTransform: 'inherit'
        },

        content: {
            // display: 'block',
            // textAlign:  'center',
            // margin: 'auto'
        },
        
        principalText: {
            marginTop: '0.5em',
            marginBottom: '0.2em'
        },

        buttons: {
            justifyContent: 'normal',
            [theme.breakpoints.down('lg')]: {
                justifyContent: 'left',
            },
            [theme.breakpoints.down('md')]: {
                justifyContent: 'center',
            },
        }
    })
);

export default styles;