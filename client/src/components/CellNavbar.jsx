import React, {useState} from "react";
import {Icons} from "materialize-css";

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
                    <li>Home</li>
                    <li>Apple</li>
                    <li>Samsung</li>
                    <li>Other</li>
                   <button className="shopping-cart-btn"> <i className="small material-icons">shopping_cart</i> </button>
                </ul>
            </nav>
    )
};

export default CellNavbar;