import { makeStyles, createStyles, Theme } from '@material-ui/core';
import bgTexture from '../../assets/image/bgTexture.svg'

const styles = makeStyles((theme: Theme) =>

    createStyles({
        paper: {
            width: '100%',
            height: '100vh',
            margin: 0,
            padding: 0,
            backgroundColor: theme.palette.mybackgroundColor?.main,
            backgroundImage: `url(${bgTexture})`,
            flexDirection: 'row-reverse'
        },

        hello: {
            [theme.breakpoints.down('xs')]: {
                marginLeft: 4
            },
        },

        typo: {
            fontFamily: 'Roboto',
            textTransform: 'inherit'
        },

        content: {
            marginLeft: 100,
            [theme.breakpoints.down('md')]: {
                marginLeft: 50,
            },
            [theme.breakpoints.down('xs')]: {
                marginTop: -100,
                marginLeft: 0,
            },
        },
        
        principalText: {
            marginTop: '0.5em',
            marginBottom: '0.2em',
            [theme.breakpoints.down('xs')]: {
                textAlign: 'center',

            },
        },
    })
);

export default styles;