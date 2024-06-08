import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Homee";
import Register from "../pages/Register/Register";
import Shop from "../pages/Shop/Shop";
import CategoryDetails from "../components/Categorydetails/CategoryDetails";


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
        }
      ]
    },
  ]);

export default router