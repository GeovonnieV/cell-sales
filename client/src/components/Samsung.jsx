import React, { useState } from "react";
import CellNavbar from "./CellNavbar";
import { Button, Badges, Icons, Dropdown } from "materialize-css";

const Samsung = (props) => {

    const { samsungPhones } = props;

    return (
       <div>
           <CellNavbar />
            <h1 className="samsung-heading">Samsung</h1>
            <div className="container">
            <h2 className="samsung-row-name">Galaxys</h2>
                <div className="samsung-row">
                {
                        samsungPhones.map((galaxy) => (
                            <div className="samsung-card">
                                <img className="card-images" src={galaxy.image} alt="" />
                                <p className="card-item-name">{galaxy.name}</p>
                                <p>${galaxy.price.toFixed(2)}</p>
                                <button className="waves-effect btn-small">Add</button>
                                {/*  */}
                            </div>
                        ))

                        
                    }
                </div>
            </div>
       </div>
    )

};

export default Samsung;