import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-cyan-300">
                <ul className="menu space-y-4 mt-10 font-bold uppercase text-[#111845]">
                    <li >
                        <NavLink to={"home"}>
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
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;