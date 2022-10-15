import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Home from "./pages/home";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}
export default App;