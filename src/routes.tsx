import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import TestBreakpoint from './test/breakpoints';

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path='/portfolio' element={<Home />}/>
                <Route path='/breakpoints' element={<TestBreakpoint />}/>
            </Routes>
        </Router>
    );
}

export default RoutesApp;