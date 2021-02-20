import React, { useState } from "react";
import CellNavbar from "./CellNavbar";
import { Button, Badges, Icons } from "materialize-css";

const Apple = (props) => {

    const { iphones } = props;

    return (
        <div>
            <CellNavbar />
            <h1 className="apple-heading">Apple</h1>
            <div className="container">
                <h2 className="apple-row-name">Iphones</h2>
                <div className="apple-row">
                    {
                        iphones.map((iphone) => (
                            <div className="apple-card">
                                <img className="card-images" src={iphone.image} alt="" />
                                <p className="card-item-name">{iphone.name}</p>
                                <p>${iphone.price.toFixed(2)}</p>
                                <button className="waves-effect btn-small">Add</button>
                                {/*  */}
                                <ul id="dropdown2" className="dropdown-content">
                                    <li><a href="#!">one<span className="badge">1</span></a></li>
                                    <li><a href="#!">two<span className="new badge">1</span></a></li>
                                    <li><a href="#!">three</a></li>
                                </ul>
                                <a className="btn dropdown-trigger" href="#!" data-target="dropdown2">Dropdown<i className="material-icons right">arrow_drop_down</i></a>
                            </div>
                        ))
                    }
                </div>
                {/* begin ipad row */}
                <h2 className="apple-row-name">Tablets</h2>
                <div className="apple-row">
                    {
                        iphones.map((iphone) => (
                            <div className="apple-card">
                                <img className="card-images" src={iphone.image} alt="" />
                                <p className="card-item-name">{iphone.name}</p>
                                <p>${iphone.price.toFixed(2)}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

};

export default Apple;