import MyAppBar from '../../components/appBar';
import About from '../about';
import Presentation from '../presentation';
import Projects from '../projects';
import Skills from '../skills';

const CallingPages = () => {
    return (
        <>
            <MyAppBar />
            <Presentation />
            <About />
            <Skills />
            <Projects />
        </>
    );
}

export default CallingPages;