import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, userId }) => (
    <div>
        <h1>Grayce-Shoppa</h1>
        <nav>
            {isLoggedIn ? (
                <div>
                    {/* The navbar will show these links after you log in */}
                    <Link to="/home">Home</Link>
                    <Link to="/products">View All Products</Link>
                    <Link to={`/viewCart`}>Checkout Cart</Link>
                    <a href="#" onClick={handleClick}>
                        Logout
                    </a>
                </div>
            ) : (
                <div>
                    {/* The navbar will show these links before you log in */}
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/products">View All Products</Link>
                    <Link to={`/viewCart`}>Checkout Cart</Link>
                </div>
            )}
        </nav>
        <hr />
    </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        userId: state.auth.id,
        isLoggedIn: !!state.auth.id,
    };
};

const mapDispatch = (dispatch) => {
    return {
        handleClick() {
            dispatch(logout());
        },
    };
};

export default connect(mapState, mapDispatch)(Navbar);
