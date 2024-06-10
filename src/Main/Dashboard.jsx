import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-cyan-300">
                <ul className="menu space-y-4 mt-10 font-bold uppercase text-[#111845]">
                    <li >
                        <NavLink to={"/dashboard/adminHome"}>
                            <FaHome />Home
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"manageUser"}>
                            <FaHome />Manage User
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"manageCategory"}>
                            <FaHome />Manage Category
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"salesReport"}>
                            <FaHome />Sales Report
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"manageBanner"}>
                            <FaHome />Manage Banner
                        </NavLink>
                    </li>
                    {/* common link  */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    
                </ul>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;