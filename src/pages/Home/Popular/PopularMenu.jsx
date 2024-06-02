import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Share/Section title/SectionTitle";
import MenuItems from "../../../components/Share/MenuItems/MenuItems";
import useMenu from "../../../components/hooks/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu()
    const popular =menu.filter(item => item.category==='popular')
    
    return (
        <div>
            <SectionTitle
            subHeader='Check Out'
            header='From our menu'></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 my-10">
                {
                    popular.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
           
        </div>
    );
};

export default PopularMenu;