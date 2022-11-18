import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import CallingPages from './pages/home/callingPages';
import Presentation from './pages/presentation';
import ProjectsPage from './pages/projects/projectsPage';
import Skills from './pages/skills';
import TestBreakpoint from './test/breakpoints';

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/:language' element={<CallingPages />}/>
                <Route path='/breakpoints' element={<TestBreakpoint />}/>
                <Route path='/projectsPage/:language' element={<ProjectsPage />}/>
                
                {/* ingles */}
                <Route path='/about/:language' element={<About />}/>
                <Route path='/skills/:language' element={<Skills />}/>

                {/* portugues */}
                <Route path='/sobre/:language' element={<About />}/>
                <Route path='/habilidades/:language' element={<Skills />}/>
            </Routes>
        </Router>
    );
}

export default RoutesApp;