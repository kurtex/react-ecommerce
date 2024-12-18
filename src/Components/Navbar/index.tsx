import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

const Navbar = () => {

    const activeStyle = "underline underline-offset-4";
    const context = useContext(ShoppingCartContext);

    return (
        <nav className="flex justify-between 
        items-center fixed z-10 w-full py-5 px-8 text-sm
        top-0 dark:bg-[#242424] bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    test@test.com
                </li>
                <li>
                    <NavLink to="/my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center gap-1">
                    <ShoppingCartIcon className="h-6 w-6" /> {context.count}
                </li>
            </ul>
        </nav >
    );
};

export default Navbar;