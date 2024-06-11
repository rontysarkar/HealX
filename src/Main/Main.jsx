import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../Sherd/Navbar/Navbar";
import Footer from "../Sherd/Footer/Footer";


const Main = () => {
    const location = useLocation()

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            <ScrollRestoration />
            {noHeaderFooter || <Navbar />}
            <div className=' min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>

            {noHeaderFooter || <Footer />}
           
        </div>
    );
};

export default Main;