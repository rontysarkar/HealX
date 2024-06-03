import { Outlet } from "react-router-dom";
import Navbar from "../Sherd/Navbar/Navbar";
import Footer from "../Sherd/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;