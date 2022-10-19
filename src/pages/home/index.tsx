import MyAppBar from "../../components/appBar"
import About from "../about";
import Presentation from "../presentation";


const Home = () => {
    return (
        <>
            <MyAppBar />
            <Presentation />
            <About />
        </>
    );
}

export default Home;