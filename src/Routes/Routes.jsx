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
import ManageBanner from "../pages/Dashboard/Admin/ManageBanner";
import PrivateRoutes from "./PrivateRoutes";
import SellerHomepage from "../pages/Dashboard/Seller/SellerHomepage";
import Advertise from "../pages/Dashboard/Seller/Advertise";
import PaymentRecord from "../pages/Dashboard/Seller/PaymentRecord";
import MedicineManage from "../pages/Dashboard/Seller/MedicineManage";
import UserPaymentHistory from "../pages/Dashboard/User/UserPaymentHistory";
import Invoice from "../pages/Invoice/Invoice";


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
        },
        {
          path:'invoice',
          element:<Invoice/>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
      children:[
        // Admin routes
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
          element:<ManageBanner/>
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
        },

        // seller routes

        {
          path:'sellerHome',
          element:<SellerHomepage/>
        },
        {
          path:'paymentRecord',
          element:<PaymentRecord/>
        },
        {
          path:'advertisement',
          element:<Advertise/>
        },

        {
          path:'manageMedicine',
          element:<MedicineManage/>
        },
        // user routes
        {
          path:'userPaymentHistory',
          element:<UserPaymentHistory/>
        }
      ]
    }
  ]);

export default router