import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = (
        <>
            <NavLink to="/" className="nav-link">
                <li>Home</li>
            </NavLink>
            <NavLink className="nav-link">
                <li>Contact Us</li>
            </NavLink>
            <NavLink className="nav-link">
                <li>Dashboard</li>
            </NavLink>
            <NavLink className="nav-link">
                <li>Our Menu</li>
            </NavLink>
            <NavLink className="nav-link">
                <li>Our Shop</li>
            </NavLink>
        </>)

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl font-bold">Bistro Boss</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                    <div className="flex gap-3 items-center">
                        <p className="text-xl">
                            <FaShoppingCart></FaShoppingCart>
                        </p>
                        <Link to='/signIn' className="text-green-700 underline">
                        Sign In
                        </Link>
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content w-10 rounded-full">
                                <span className="text-xs">User</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;