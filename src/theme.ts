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
    palette: {
        mybackgroundColor: {
            light: "#8d6ebf",
            main: "#372554",
            dark: "#372554",
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
        fontSize: 116,
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: 88,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 65,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 49,
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 44,
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
        fontSize: 21,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 19,
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: 19,
    },
}

export default theme;