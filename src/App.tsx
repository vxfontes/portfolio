import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import RoutesApp from "./routes";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/scroll';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <ScrollToTop />
                <RoutesApp />
            </Router>
        </ThemeProvider>
    );
}
export default App;