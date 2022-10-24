import { createTheme } from '@material-ui/core/styles';

declare module "@material-ui/core/styles/createPalette" {
    interface PaletteOptions {
        mybackgroundColor?: Palette['info'];
    }

    interface Palette {
        mybackgroundColor?: Palette['info'];
    }

}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1380,
            xl: 1920,
        },
    },
    palette: {
        mybackgroundColor: {
            light: "#8d6ebf",
            main: "#372554",
            dark: "#463366",
            contrastText: 'white',
        },
        secondary: {
            light: '#000',
            main: '#fff',
            dark: '#fff'
        }
    },
    typography: {
        fontFamily: 'Roboto',
    }
})

theme.typography.h2 = {
    fontFamily: 'Roboto',
    fontSize: 120,
    [theme.breakpoints.only('xl')]: {
        fontSize: 120,
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '5.6em',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 70,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 49,
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 44,
    },
}

theme.typography.h4 = {
    fontFamily: 'Roboto',
    fontSize: 70,
    [theme.breakpoints.only('xl')]: {
        fontSize: 70,
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: 56,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 50,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 40,
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 30,
    },
}

theme.typography.h5 = {
    fontFamily: 'Roboto',
    fontSize: 70,
    [theme.breakpoints.only('xl')]: {
        fontSize: 40,
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: 30,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 20,
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 15,
    },
}

theme.typography.h6 = {
    fontFamily: 'Roboto',
    fontWeight: 'lighter',
    fontSize: 32,
    [theme.breakpoints.down('lg')]: {
        fontSize: 23,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 19,
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 19,
    },
}

theme.typography.body2 = {
    fontFamily: 'Roboto',
    fontSize: 32,
    [theme.breakpoints.only('xl')]: {
        fontSize: 24,
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: 17,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 13,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 14,
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 13,
    },
}

export default theme;