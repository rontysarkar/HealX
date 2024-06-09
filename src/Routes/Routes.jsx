import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Homee";
import Register from "../pages/Register/Register";
import Shop from "../pages/Shop/Shop";
import CategoryDetails from "../components/Categorydetails/CategoryDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Dashboard from "../Main/Dashboard";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import ManageCategory from "../pages/Dashboard/Admin/ManageCategory";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import SalesReport from "../pages/Dashboard/Admin/SalesReport";
import PaymentManagement from "../pages/Dashboard/Admin/PaymentManagement";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'shop',
          element:<Shop/>
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'register',
            element:<Register/>
        },
        {
          path:'categoryDetails/:category',
          element:<CategoryDetails/>
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:'checkout',
          element:<Checkout/>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard/>,
      children:[
        {
          path:'adminHome',
          element:<AdminHome/> 
        },
        {
          path:'manageCategory',
          element:<ManageCategory/>

        },
        {
          path:"manageBanner",
          element:<ManageCategory/>
        },
        {
          path:'manageUser',
          element:<ManageUsers/>
        },
        {
          path:'salesReport',
          element:<SalesReport/>,

        },
        {
          path:'paymentManagement',
          element:<PaymentManagement/>
        }
      ]
    }
  ]);

export default router