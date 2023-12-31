import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const data = useContext(UserContext);
    const userAuthCtaText = 'Login'
    const [loginCta, setLoginCta ] = useState(userAuthCtaText);

    const toggleCtaText = () => {
        loginCta === 'Login' ? setLoginCta('Logout') : setLoginCta('Login');
    };

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className="header d-flex">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="search d-none">
                <input type="text" placeholder="Search" className="search-restaurants" id="search-input"/>
                <button className="btn btn-primary search-cta">Search</button>
            </div>
            <div className="nav-items">
                <ul className="d-flex">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    <li>
                        <button className="btn btn-primary login-toggle-cta" onClick={toggleCtaText}>
                            {loginCta}
                        </button>
                    </li>
                    <li>
                        {data.loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;