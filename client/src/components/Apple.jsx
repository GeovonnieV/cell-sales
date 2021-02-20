import React, { useState } from "react";
import CellNavbar from "./CellNavbar";
import { Button, Badges, Icons, Dropdown } from "materialize-css";

const Apple = (props) => {

    const { iphones, ipads } = props;

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
                            </div>
                        ))
                    }
                </div>
                {/* begin ipad row */}
                <h2 className="apple-row-name">Tablets</h2>
                <div className="apple-row">
                    {
                        ipads.map((ipad) => (
                            <div className="apple-card">
                                <img className="card-images" src={ipad.image} alt="" />
                                <p className="card-item-name">{ipad.name}</p>
                                <p>${ipad.price.toFixed(2)}</p>
                                <button className="waves-effect btn-small">Add</button>
                            </div>
                        ))
                    }
                </div>
                {/* begin watches row */}
            </div>
        </div>
    )

};

export default Apple;