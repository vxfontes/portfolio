import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import RoutesApp from "./routes";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <RoutesApp />
        </ThemeProvider>
    );
}
export default App;