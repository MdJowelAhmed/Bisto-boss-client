import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../pages/root/Root";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood";
import Login from "../pages/Authenthication/Login";
import Register from "../pages/Register";
import Deshboard from "../pages/root/Deshboard";
import MyCart from "../pages/deshboard/Cart/MyCart";
import PrivateRoute from "../Routes/PrivateRoute"
import AllUsers from "../pages/deshboard/AllUsers/AllUsers";
import AddItems from "../pages/deshboard/AddItems/AddItems";
import AdminRoute from '../Routes/AdminRoute'
import ManageItems from "../pages/deshboard/ManageItems/ManageItems";
import Payment from "../pages/deshboard/Payment/Payment";
import PaymentHistory from "../pages/deshboard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/deshboard/AdminHome/AdminHome";
import UserHome from "../pages/deshboard/UserHome/UserHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/menu',
            element:<Menu></Menu>
        },
        {
            path: '/order',
            element:<OrderFood></OrderFood>
        },
        {
            path: '/order/:category',
            element:<PrivateRoute><OrderFood></OrderFood></PrivateRoute>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
      ]
    },
    {
      path: '/deshboard',
      element:<PrivateRoute><Deshboard></Deshboard></PrivateRoute>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'cart',
          element:<MyCart></MyCart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },


        // Admin Only 
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome> </AdminRoute>
        },
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:'allUsers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },

      ]
    }
  ]);

  export default router