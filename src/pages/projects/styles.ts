import { makeStyles, createStyles, Theme } from '@material-ui/core';
import asfalttexture from '../../assets/image/asfalttexture.png';

const styles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            width: '100%',
            height: '100vh',
            margin: 0,
            padding: 0,
            backgroundColor: theme.palette.mybackgroundColor?.main,
            backgroundImage: `url(${asfalttexture})`,
        },
    })
);

export default styles;