import { useParams } from 'react-router-dom';
import MyAppBar from '../../components/appBar';
import About from '../about';
import Presentation from '../presentation';
import Projects from '../projects';
import Skills from '../skills';

const CallingPages = () => {
    
    const params = useParams();
    const language = params.language;

    console.log(language);
    

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