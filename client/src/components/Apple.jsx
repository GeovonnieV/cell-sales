import React, {useState} from "react";


const Apple = (props) => {

    const {iphones} = props;

    return(
        <div>
            <h1 className="apple-heading">Apple</h1>
            <div className="container">
                <h2 className="apple-row-name">Iphones</h2>
                <div className="apple-row">
                    {
                        iphones.map((iphone) => (
                            <div className="apple-card">
                                <img className="card-images" src={iphone.image} alt=""/>
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