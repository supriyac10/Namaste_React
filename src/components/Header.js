import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";


const Header = () => {

    const [btnNameReact, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="flex justify-between items-center p-4 bg-red-100">
            <div className="logo-container">
                <img className="w-40 rounded-full" src={LOGO_URL} />
            </div>

            <div className="flex items-center space-x-4">
                <ul className="flex p-4 m-4 space-x-4">
                    <li className="font-bold text-lg font
                    -mono text-green-500">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="font-bold"><Link to="/">Home</Link></li>
                    <li className="font-bold"><Link to="/about">About Us</Link></li>
                    <li className="font-bold"><Link to="/contact">Contact Us</Link></li>
                    <li className="font-bold"><Link to="/grocery">Grocery</Link></li>
                    <li className="font-bold"><Link to="/cart">Cart-{cartItems.length}</Link></li>
                    <li className="font-bold">{loggedInUser}</li>
                    <button className="px-4 py-2 bg-gray-300 rounded-lg font-semibold hover:bg-gray-400" onClick={() => {
                        btnNameReact === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>);
};

export default Header;