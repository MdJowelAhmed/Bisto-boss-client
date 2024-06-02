import { Link } from "react-router-dom";
import Foodcard from "./Foodcard";


const OrderTab = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 ">
                {
                    items.map(item => <Foodcard key={item._id} item={item}></Foodcard>)
                }
            </div>
           
        </div>
    );
};

export default OrderTab;