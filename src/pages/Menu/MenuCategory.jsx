import { Link } from "react-router-dom";
import MenuItems from "../../components/Share/MenuItems/MenuItems";
import Cover from "./Cover";



const MenuCategory = ({items,title,coverImg}) => {
    
    return (
        <div className="pt-10">
             {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-8 my-10 mt-16">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}> <button className="btn  btn-outline border-0 border-b-4">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;