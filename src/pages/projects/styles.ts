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

    })
);

export default styles;