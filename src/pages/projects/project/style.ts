import { makeStyles, createStyles, Theme } from '@material-ui/core';
import layers from '../../../assets/image/backLayers.svg'

const styles = makeStyles((theme: Theme) =>
    createStyles({
        
        paper: {
            width: '100%',
            minHeight: '100vh',
            height: '100%',
            margin: 0,
            padding: 30,
            backgroundImage: `url(${layers})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            [theme.breakpoints.down('sm')]: {
                padding: 40,
                minHeight: '100vh',
                backgroundRepeat: 'repeat',
            },
        },

        paperColor: {
            width: '100%',
            minHeight: '100vh',
            height: '100%',
            margin: 0,
            padding: 160,
            backgroundColor: theme.palette.mybackgroundColor?.main,
            [theme.breakpoints.only('sm')]: {
                padding: 100
            },
            [theme.breakpoints.only('xs')]: {
                padding: 50
            },
        },

        alignGrid: {
            display: 'flex',
            justifyContent: 'center',
        },
        
        imgPrincipal: {
            width: '100%',
            borderRadius: '20px',
            [theme.breakpoints.only('xl')]: {
                width: 850,
            },
            [theme.breakpoints.only('lg')]: {
                width: '100%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '80%',
                marginTop: 10,
                marginBottom: 30,
                marginLeft: 0
            },
            [theme.breakpoints.down('xs')]: {
                marginBottom: 10,
                width: '100%',
            },
        },
        
        imgPrincipalMobile: {
            height: 500,
            borderRadius: '20px',
        },

        chips: {
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            [theme.breakpoints.down('sm')]: {
                marginTop: 10,
                marginLeft: 0,
            },
        },

        chip: {
            marginRight: 5,
            marginBottom: 10,
            [theme.breakpoints.only('xs')]: {
                marginRight: 4,
                marginBottom: 5,
            }
        },

        repoButton: {
            borderRadius: '10px',
            marginTop: 10,
            textTransform: 'capitalize',
            [theme.breakpoints.down('sm')]: {
                marginLeft: 0,
            }
        },

        typoPrinc: {
            marginTop: 100,
            marginBottom: 10,
        },

        typo: {
            marginBottom: 10,
            textAlign: 'justify'
        },

        principal: {
            width: '100%',
        },

        pics: {
            height: 500,
            [theme.breakpoints.down('sm')]: {
                height: 'auto',
                width: '100%'
            },
        },

        picsMob: {
            height: 500,
            [theme.breakpoints.down('sm')]: {
                // height: 'auto',
                // width: '100%'
            },
        },

        desktop: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },

        picsMobile: {
            width: '100%',
        },

        carousel: {
            display: 'flex',
            justifyContent: 'space-around',
            maxWidth: '100%'
        },

        mob: {
            marginLeft: 10,
        }

    })
);

export default styles;
