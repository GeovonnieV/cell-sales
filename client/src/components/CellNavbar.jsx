import React, {useState} from "react";
import 'materialize-css/dist/css/materialize.min.css';
import {add_location} from "materialize-css"

const CellNavbar = () => {
    return(
            <nav className="navbarItems">
                <div className="left-nav">
                    <h1 className="navbar-logo">Cellular Sells</h1>
                    <div className="menu-icon">
                        <i className="add_location">add_location</i>
                    </div>
                </div>
                <ul className="navbar-list">
                    <li>Home</li>
                    <li>Apple</li>
                    <li>Samsung</li>
                    <li>Other</li>
                    <i>Cart</i>
                </ul>
            </nav>
    )
};

export default CellNavbar;