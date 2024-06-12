import { BiSolidReport } from "react-icons/bi";
import { FaHome, FaRegImage, FaUsers } from "react-icons/fa";
import { MdCategory, MdHomeMax, MdOutlinePayments } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { GiMedicines } from "react-icons/gi";
import { RiAdvertisementLine } from "react-icons/ri";

const Dashboard = () => {
    const [role] = useRole()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-cyan-300">
                <ul className="menu space-y-4 mt-10 font-bold uppercase text-[#111845] ">
                    {
                        role === 'admin' && <>
                            <li >
                                <NavLink to={"/dashboard/adminHome"}>
                                    <FaHome />Home
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"manageUser"}>
                                    <FaUsers />Manage User
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"paymentManagement"}>
                                    <FaUsers />Payments Management
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"manageCategory"}>
                                    <MdCategory />Manage Category
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"salesReport"}>
                                    <BiSolidReport />Sales Report
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"manageBanner"}>
                                    <FaRegImage />Manage Banner
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        role === 'seller' && <>
                            <li >
                                <NavLink to={"/dashboard/adminHome"}>
                                    <FaHome />Home
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"manageMedicine"}>
                                    <GiMedicines />Manage Medicine
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"paymentRecord"}>
                                    <MdOutlinePayments />Payment History
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"advertisement"}>
                                    <RiAdvertisementLine /> Advertisement
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        role === 'user' && <>
                            <li >
                                <NavLink to={"/dashboard/userPaymentHistory"}>
                                    <FaHome />Payment History
                                </NavLink>
                            </li>
                        </>
                    }
                    {/* common link  */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                        <MdHomeMax />

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