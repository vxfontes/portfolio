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
            display: 'block',
            textAlign:  'center',
            margin: 'auto'
        },
        
        principalText: {
            marginTop: '0.5em'
        }
    })
);

export default styles;