import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Homee";
import Register from "../pages/Register/Register";


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
            path:'login',
            element:<Login/>
        },
        {
            path:'register',
            element:<Register/>
        }
      ]
    },
  ]);

export default router