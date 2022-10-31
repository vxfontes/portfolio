import { makeStyles, createStyles, Theme } from '@material-ui/core';
import asfalttexture from '../../assets/image/asfalttexture.png';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            width: '100%',
            minHeight: '100vh',
            height: '100%',
            margin: 0,
            padding: 0,
            backgroundColor: theme.palette.mybackgroundColor?.main,
            backgroundImage: `url(${asfalttexture})`,
        },
        
        page: {
            width: '100%',
            height: '100%',
            margin: 0,
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
        },
        
        chip: {
            marginRight: 5
        }

    })
);

export default styles;