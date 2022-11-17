import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import CallingPages from './pages/home/callingPages';
import TestBreakpoint from './test/breakpoints';

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path='/portfolio' element={<Home />}/>
                <Route path='/portfolio/:language' element={<CallingPages />}/>
                <Route path='/breakpoints' element={<TestBreakpoint />}/>
                <Route path='/about/:language' element={<About />}/>
            </Routes>
        </Router>
    );
}

export default RoutesApp;