import React, {useState} from "react";
import {Icons} from "materialize-css";
import {navigate, Link} from "@reach/router";

const CellNavbar = () => {
    return(
            <nav className="navbarItems">
                <div className="left-nav">
                    <h1 className="navbar-logo">Cellular Sells</h1>
                    <div className="menu-icon">
                        <i className="add_location"></i>
                    </div>
                </div>
                <ul className="navbar-list">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/apple">
                      <li>Apple</li>
                    </Link>
                    <Link to="/samsung">
                        <li>Samsung</li>
                    </Link>
                    <Link to="/other">
                      <li>Other</li>
                    </Link>
                    <Link to="/cart">
                      <button className="shopping-cart-btn"> <i className="small material-icons">shopping_cart</i> </button> 
                    </Link>
                </ul>
            </nav>
    )
};

export default CellNavbar;