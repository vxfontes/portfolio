import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './main.css'

// pages
import About from './pages/about';
import Home from './pages/home';
import CallingPages from './pages/home/callingPages';
import Project from './pages/projects/project/project';
import ProjectsPage from './pages/projects/projectsPage';
import Skills from './pages/skills';

const RoutesApp = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition timeout={250} classNames='fade' key={location.key}>
                <Routes location={location}>
                    <Route path='/' element={<Home />} />
                    <Route path='/:language' element={<CallingPages />} />

                    {/* projects */}
                    <Route path='/projectsPage/:language' element={<ProjectsPage />} />
                    <Route path='/project/:language/:project' element={<Project />} />

                    {/* ingles */}
                    <Route path='/about/:language' element={<About />} />
                    <Route path='/skills/:language' element={<Skills />} />

                    {/* portugues */}
                    <Route path='/sobre/:language' element={<About />} />
                    <Route path='/habilidades/:language' element={<Skills />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default RoutesApp;