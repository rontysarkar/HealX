import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Sherd/Navbar/Navbar";
import Footer from "../Sherd/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
    const location = useLocation()

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <div className=' min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>

            {noHeaderFooter || <Footer />}
            <Toaster />
        </div>
    );
};

export default Main;