import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme: Theme) =>

    createStyles({
        paper: {
            width: '100vw',
            height: '100vh',
            color: 'black',
            margin: 0,
            padding: 0,
        }

    })
);

export default styles;