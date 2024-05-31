import { BsCartPlus } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-cyan-400" : ""
            }
        >
            <li>
                <span>Home</span>
            </li>
        </NavLink>
        <NavLink
            to="/shop"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-cyan-400" : ""
            }
        >
            <li>
                <span>Shop</span>
            </li>
        </NavLink>
        <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-cyan-400" : ""
            }
        >
            <li >

                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>

            </li>
        </NavLink>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 xl:px-96 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">HealX</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold flex items-center ">
                        {navLinks}

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            
                            <li><a>Update Profile</a></li>
                            <li><a>Dashboard</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;