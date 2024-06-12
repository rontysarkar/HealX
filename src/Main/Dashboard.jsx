import { BiSolidReport } from "react-icons/bi";
import { FaHome, FaRegImage, FaUsers } from "react-icons/fa";
import { MdCategory, MdHomeMax} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { GiMedicines } from "react-icons/gi";
import { RiAdvertisementLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

const Dashboard = () => {
    const [role] = useRole()
    return (
        <div className="flex">
            <div className="w-64 hidden lg:block lg:min-h-screen bg-cyan-300">
                <ul className="menu space-y-4 mt-10 font-bold uppercase text-[#111845] ">
                    {
                        role === 'admin' && <>
                            <li >
                                <NavLink to={"/dashboard/adminHome"}>
                                    <FaHome />Home
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/manageUser"}>
                                    <FaUsers />Manage User
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/paymentManagement"}>
                                    <FaUsers />Payments Management
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/manageCategory"}>
                                    <MdCategory />Manage Category
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/salesReport"}>
                                    <BiSolidReport />Sales Report
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/manageBanner"}>
                                    <FaRegImage />Manage Banner
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        role === 'seller' && <>
                            <li >
                                <NavLink to={"/dashboard/sellerHome"}>
                                    <FaHome />Home
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/manageMedicine"}>
                                    <GiMedicines />Manage Medicine
                                </NavLink>
                            </li>
                            
                            <li >
                                <NavLink to={"/dashboard/advertisement"}>
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
            <div className=" lg:hidden absolute top-8 left-2 dropdown dropdown-right">
                <div tabIndex={0} role="button" className=" m-1"><IoMdMenu className="text-3xl" />
                </div>
                {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"> */}
                <ul className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52    space-y-4 mt-10 font-bold uppercase text-[#111845] ">
                    {
                        role === 'admin' && <>
                            <li >
                                <NavLink to={"/dashboard/adminHome"}>
                                    <FaHome />Home
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/manageUser"}>
                                    <FaUsers />Manage User
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/paymentManagement"}>
                                    <FaUsers />Payments Management
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/manageCategory"}>
                                    <MdCategory />Manage Category
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/salesReport"}>
                                    <BiSolidReport />Sales Report
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/manageBanner"}>
                                    <FaRegImage />Manage Banner
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        role === 'seller' && <>
                            <li >
                                <NavLink to={"/dashboard/sellerHome"}>
                                    <FaHome />Home
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to={"/dashboard/manageMedicine"}>
                                    <GiMedicines />Manage Medicine
                                </NavLink>
                            </li>
                            
                            <li >
                                <NavLink to={"/dashboard/advertisement"}>
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
                {/* </ul> */}
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;