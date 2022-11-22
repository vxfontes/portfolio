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
            justifyContent: 'center',
        },
        
        box: {
            display: 'flex',
            [theme.breakpoints.down('sm')]: {
                display: 'block',
                textAlign: 'center',
                position: 'relative',
                marginTop: '30vh',
            }
        },

        bar: {
            marginLeft: 12,
            [theme.breakpoints.down('sm')]: {
                marginLeft: 0,
                marginTop: 10,
                fontSize: 45,
                fontWeight: 'bold'
            }
        },

        decoration: {
            textDecoration: 'none', 
            color: 'white'
        }
    })
);

export default styles;