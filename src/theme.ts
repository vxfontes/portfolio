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
    },
})

export default theme;