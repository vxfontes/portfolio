import { makeStyles, createStyles, Theme } from '@material-ui/core';
import asfalttexture from '../../assets/image/asfalttexture.png';
import layers from '../../assets/image/backLayers.svg'

const styles = makeStyles((theme: Theme) =>
    createStyles({
        paperPrinc: {
            width: '100%',
            minHeight: '100vh',
            height: '100%',
            margin: 0,
            padding: 30,
            backgroundColor: theme.palette.mybackgroundColor?.main,
            backgroundImage: `url(${asfalttexture})`,
        },

        paper: {
            width: '100%',
            minHeight: '100%',
            height: '100%',
            margin: 0,
            padding: 30,
            backgroundColor: theme.palette.mybackgroundColor?.main,
            backgroundImage: `url(${asfalttexture})`,
            [theme.breakpoints.down('xs')]: {
                padding: 40,
                minHeight: '100%',
                backgroundImage: `url(${layers})`,
                backgroundRepeat: 'repeat',
                backgroundSize: '100%',
            },
        },

        paperColor: {
            width: '100%',
            minHeight: '100vh',
            height: '100%',
            margin: 0,
            padding: 30,
            backgroundColor: theme.palette.mybackgroundColor?.main,
        },

        paperInfo: {
            width: '100%',
            minHeight: '100vh',
            height: '100%',
            margin: 0,
            padding: 30,
            backgroundImage: `url(${layers})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            [theme.breakpoints.down('sm')]: {
                backgroundRepeat: 'repeat',
            },
        },

        inside: {
            width: '90%',
            minHeight: '100vh',
            height: '100%',
        },

        page: {
            width: '95%',
            height: '100%',
            margin: 0,
            marginTop: -100,
            paddingTop: 8,
            paddingBottom: 10,
            padding: 4,
            borderRadius: '15px',
            backgroundColor: theme.palette.mybackgroundColor?.dark,
        },

        pageBox: {
            width: '95%',
            height: '100%',
            margin: 0,
            marginTop: -100,
            paddingTop: 8,
            paddingBottom: 10,
            padding: 4,
            borderRadius: '15px',
        },

        progressBar: {
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: 9,
            display: 'flex',
            justifyContent: 'space-between',
            color: theme.palette.mybackgroundColor?.main,
            alignItems: 'center',
        },

        progressText: {
            fontWeight: 'bold',
            color: theme.palette.mybackgroundColor?.main,
            width: '100%'
        },

        chip: {
            marginRight: 5,
            marginBottom: 10,
            [theme.breakpoints.only('xs')]: {
                marginRight: 4,
                marginBottom: 5,
            }
        },

        span: {
            fontSize: 120,
            color: 'white',
        },

        colorProj: {
            color: theme.palette.mybackgroundColor?.light,
        },

        box: {
            paddingTop: '3vh',
            paddingBottom: '3vh',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },

        decoration: {
            textDecoration: 'none',
            color: 'white'
        },

        aligning: {
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: theme.palette.mybackgroundColor?.dark,
        },

        alignGrid: {
            display: 'flex',
            justifyContent: 'center'
        },

        project: {
            width: '90%',
            borderRadius: 15,
            border: '1px dashed #fff',
            marginBottom: '5vh',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            }
        },

        description: {
            padding: 15,
            marginTop: -90,
            backgroundColor: theme.palette.mybackgroundColor?.dark,
            zIndex: 6,
        },

        media: {
            height: 300,
            zIndex: -1,
        },

        principal: {
            width: '100%',
            [theme.breakpoints.up('xl')]: {
                marginLeft: 90,
                marginTop: 40
            },
            [theme.breakpoints.up('lg')]: {
                marginLeft: 50,
                marginTop: 40
            },
        },

        imgPrincipal: {
            width: 550,
            borderRadius: '20px',
            [theme.breakpoints.up('xl')]: {
                width: 700,
            },
            [theme.breakpoints.up('lg')]: {
                width: 550,
            },
            [theme.breakpoints.down('sm')]: {
                width: '80%',
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 0
            },
        },

        imgPrincipalMobile: {
            height: 550,
            marginTop: -50,
            marginLeft: 150,
            borderRadius: '20px',
            [theme.breakpoints.up('lg')]: {
                marginLeft: 50,
                marginTop: -70,
            },
            [theme.breakpoints.up('md')]: {
                height: 500,
                marginLeft: 50,
                marginTop: -70,
            },
            [theme.breakpoints.down('sm')]: {
                height: 500,
                marginTop: -300,
            },
        },

        typo: {
            marginLeft: -100,
            marginRight: '50px',
            marginBottom: 20,
            [theme.breakpoints.down('sm')]: {
                marginLeft: 30,
            },
        },

        typoPrinc: {
            marginLeft: -100,
            marginRight: '50px',
            [theme.breakpoints.only('xl')]: {
                paddingTop: 80
            },
            [theme.breakpoints.only('lg')]: {
                marginLeft: -70,
                paddingTop: 50
            },
            [theme.breakpoints.only('md')]: {
                marginLeft: -50,
                paddingTop: 50
            },
            [theme.breakpoints.only('sm')]: {
                marginLeft: -30,
                paddingTop: 50
            },
        },

        chips: {
            marginLeft: -100,
            marginTop: 10,
            [theme.breakpoints.down('sm')]: {
                marginTop: 10,
                marginLeft: 0,
            },
        },

        repoButton: {
            borderRadius: '10px',
            marginTop: 10,
            textTransform: 'capitalize',
            marginLeft: -70,
            [theme.breakpoints.down('sm')]: {
                marginLeft: 0,
            }
        },

        boxImg: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
        },
        
        imageList: {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
        },

        gallery: {
            columnCount: 3,
            columnWidth: '30%',
            padding: '0 12px',
        },

        picsDesktop: {
            height: 500,
        },

        picsMobile: {
            height: 500,
        },

    })
);

export default styles;