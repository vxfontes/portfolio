import { makeStyles, createStyles, Theme } from '@material-ui/core';
import asfalttexture from '../../assets/image/asfalttexture.png';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
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
            width: '90%',
            height: '100%',
            margin: 0,
            paddingTop: 8,
            paddingBottom: 10,
            padding: 4,
            borderRadius: '15px',
            backgroundColor: theme.palette.mybackgroundColor?.dark,
        },

        progressBar: {
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: 12,
            display: 'flex',
            justifyContent: 'space-between',
            color: theme.palette.mybackgroundColor?.main,
        },

        progressText: {
            fontWeight: 'bold',
            color: theme.palette.mybackgroundColor?.main,
            width: '100%'
        },

        chip: {
            marginRight: 5,
            marginBottom: 10,
        },

    })
);

export default styles;