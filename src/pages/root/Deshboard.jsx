import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaJediOrder, FaList, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { FaBookBible, FaHouseMedical } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../components/hooks/useAdmin";
import useCart from "../../components/hooks/useCart";


const Deshboard = () => {
    const [isAdmin]=useAdmin()
    const [cart]=useCart()
    return (
        <div className="flex flex-col md:flex-row mx-12 my-20 gap-10">
            <div className="w-64 min-h-full bg-slate-500  text-white p-8 ">
               
            {
                isAdmin?<>
                 <NavLink to='/deshboard/adminHome'>
                    <div className="flex items-center gap-2">
                        <FaHome></FaHome> <span> Admin Home</span>
                    </div>
                </NavLink>

               <NavLink to='/deshboard/addItems'>
                    <div className="flex items-center gap-2 my-3"><FaUtensils />
                        <span>Add Items</span></div></NavLink>

                <NavLink to='/deshboard/manageItems'>
                   <div className="flex items-center gap-2"> <FaList />
                   <span> Manage List</span></div></NavLink>
                <NavLink to='/deshboard/manageBookings'>
                   <div className="flex items-center gap-2 my-3"> <FaBook />
                   <span> Manage Bookings</span></div></NavLink>

                <NavLink to='/deshboard/allUsers'>
                   <div className="flex items-center gap-2"> <FaUser />
                   <span> All Users</span></div></NavLink>
                </> : <>
                <NavLink to='/deshboard/userHome'>
                    <div className="flex items-center gap-2">
                        <FaHome></FaHome> <span> Home</span>
                    </div>
                </NavLink>

               <NavLink to='/deshboard/reservation'>
                    <div className="flex items-center gap-2 my-3"><FaCalendar />
                        <span>Reservation</span></div></NavLink>

                <NavLink to='/deshboard/cart'>
                   <div className="flex items-center gap-2"> <FaShoppingCart />
                   <span> Cart {cart.length}</span></div></NavLink>
                <NavLink to='/deshboard/add'>
                   <div className="flex items-center gap-2 my-3"> <FaAd />
                   <span> Add Review</span></div></NavLink>

                <NavLink to='/deshboard/paymentHistory'>
                   <div className="flex items-center gap-2"> <FaBookBible />
                   <span>Payment History</span></div></NavLink>
                </>
            }


                    <div className="divider text-white"></div>

                <NavLink to='/'>
                   <div className="flex items-center mt-12 gap-2"> <FaHouseMedical />
                   <span> Home</span></div></NavLink>

                <NavLink to='/menu'>
                   <div className="flex items-center gap-2"> <FaJediOrder />
                   <span> Menu</span></div></NavLink>

                <NavLink to='/deshboard/contract'>
                   <div className="flex items-center gap-2"> <FaEnvelope />
                   <span> Contract</span></div></NavLink>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;