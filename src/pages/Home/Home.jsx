import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import PopularMenu from "./Popular/PopularMenu";
import Slide from "./Slide/Slide";
import Testimonals from "./Testimonals";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Slide></Slide>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonals></Testimonals>
        </div>
    );
};

export default Home;