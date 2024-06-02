import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import menuBg from "../../assets/menu/banner3.jpg"
import dessertBg from "../../assets/menu/dessert-bg.jpeg"
import soupBg from "../../assets/menu/soup-bg.jpg"
import pizzaBg from "../../assets/menu/pizza-bg.jpg"
import saladBg from "../../assets/menu/salad-bg.jpg"
import PopularMenu from "../Home/Popular/PopularMenu";
import SectionTitle from "../../components/Share/Section title/SectionTitle";
import useMenu from "../../components/hooks/useMenu";
import MenuCategory from "./MenuCategory";


const Menu = () => {
    const [menu]=useMenu()
   
    const dessert =menu.filter(item => item.category==='dessert')
    const pizza =menu.filter(item => item.category==='pizza')
    const soup =menu.filter(item => item.category==='soup')
    const salad =menu.filter(item => item.category==='salad')
    const offered =menu.filter(item => item.category==='offered')
    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
           <Cover img={menuBg} title='Our Menu'></Cover>
         <SectionTitle subHeader="Don't miss" header="Today's Offered"></SectionTitle>
           <MenuCategory items={offered}></MenuCategory>

           <MenuCategory items={dessert} title='dessert' coverImg={dessertBg}></MenuCategory>

           <MenuCategory items={soup} title='soup' coverImg={soupBg}></MenuCategory>

           <MenuCategory items={pizza} title='pizza' coverImg={pizzaBg}></MenuCategory>

           <MenuCategory items={salad} title='salad' coverImg={saladBg}></MenuCategory>
        </div>
    );
};

export default Menu;