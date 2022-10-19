import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme: Theme) =>

    createStyles({

        toolbar: {
            display: "flex",
            justifyContent: "space-between",
        },

        name: {
            color: 'white',
            fontWeight: 'bold',
        },

        span: {
            color: theme.palette.mybackgroundColor?.light,
        },

        dialog: {
            backgroundColor: theme.palette.mybackgroundColor?.main,
            height: '100vh',
            width: '100vw',
        },

        options: {
            display: 'flex',
        }
    })
);

export default styles;