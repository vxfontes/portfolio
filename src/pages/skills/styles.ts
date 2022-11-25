import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme: Theme) =>

    createStyles({
        paper: {
            width: '100%',
            height: '100vh',
            margin: 0,
            padding: 0,
            backgroundColor: theme.palette.mybackgroundColor?.main,
            textAlign: 'center',
        },

        container: {
            width: '80%',
            backgroundColor: theme.palette.mybackgroundColor?.dark,
            borderRadius: '20px',
            padding: '0.4em 0 1em 0',
        },

        icons: {
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '2vh',
            [theme.breakpoints.up('lg')]: {
                marginTop: '2vh'
            },
            [theme.breakpoints.only('xs')]: {
                margin: '2px 0 0 0 '
            }
        }

    })
);

export default styles;