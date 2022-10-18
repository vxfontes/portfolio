import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = makeStyles((theme: Theme) =>

    createStyles({
        paper: {
                height: '100vh',
                backgroundColor: 'blue', //mobile
                [theme.breakpoints.up('sm')]: {
                    backgroundColor: 'red', // 600px
                },
                [theme.breakpoints.up('md')]: {
                    backgroundColor: 'green', // 960px
                },
                [theme.breakpoints.up('lg')]: {
                    backgroundColor: 'orange', // hd
                },
                [theme.breakpoints.up('xl')]: {
                    backgroundColor: 'cyan', //full hd
                },
        }

    })
);

export default styles;