import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import CallingPages from './pages/home/callingPages';
import Presentation from './pages/presentation';
import Infos from './pages/projects/infos';
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

                {/* projects */}
                <Route path='/projectsPage/:language' element={<ProjectsPage />}/>
                <Route path='/project/:language/:project' element={<Infos />}/>
                
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