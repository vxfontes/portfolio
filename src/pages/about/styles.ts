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
            boxShadow: '0px -9px 28px -10px rgba(0,0,0,0.78)'
        },
        
        image: {
            borderBottom: "3px solid #000000",
            [theme.breakpoints.only('xs')] : {
                borderBottom: "none",
            },
            [theme.breakpoints.down('sm')] : {
                height: '500px'
            },
            [theme.breakpoints.up('lg')] : {
                height: '800px'
            },
        },

        typoTitle: {
            display: 'flex', 
            textAlign: 'left', 
            padding: '5px 0 0 14px',
            fontFamily: 'Roboto'
        },

        typoText: {
            textAlign: 'initial', 
            padding: '14px 14px 14px 14px',
            fontSize: 20,
            [theme.breakpoints.up('sm')]: {
                fontSize: 24,
                padding: '0px 14px 14px 14px',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: 22,
                padding: '0px 14px 14px 14px',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 32,
                padding: '20px 14px 14px 14px',
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: 36,
                padding: '20px 14px 14px 14px',
            },
        },
        
        about: {
            backgroundColor: theme.palette.mybackgroundColor?.dark,
            justifyContent: 'flex-start',
            textAlign: 'start',
            [theme.breakpoints.down('xs')] : {
                marginTop: -150,
                padding: 50,
            },
            [theme.breakpoints.only('sm')] : {
                marginTop: -100,
                padding: 50,
            },
            [theme.breakpoints.only('md')] : {
                backgroundColor: theme.palette.mybackgroundColor?.main,
                marginLeft: 0,
            },
            [theme.breakpoints.up('lg')] : {
                backgroundColor: theme.palette.mybackgroundColor?.main,
                marginLeft: 0,
            },
            [theme.breakpoints.up('xl')] : {
                backgroundColor: theme.palette.mybackgroundColor?.main,
                marginLeft: -200,
            },
            borderRadius: '10px',
            padding: '2em',
        },
        
        icon: {
            // display: 'block',
            fontSize: 100,
            justifyContent: 'space-between',
            [theme.breakpoints.down('lg')] : {
                fontSize: 40,
            },
            [theme.breakpoints.down('sm')] : {
                fontSize: 40,
                marginTop: -200
            },
        }
    })
);

export default styles;