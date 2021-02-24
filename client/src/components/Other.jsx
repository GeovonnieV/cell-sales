import React from "react";
import CellNavbar from "./CellNavbar";
import { Button, Badges, Icons, Dropdown } from "materialize-css";

const Other = (props) => {
  // props
  const { games } = props;

  return (
    <div>
      <CellNavbar />
      <h1 className="apple-heading">Other</h1>
      <div className="container">
        <h2 className="apple-row-name">Games</h2>
        <div className="apple-row">
          {games.map((game) => (
            <div className="apple-card">
              <img className="card-images-other" src={game.image} alt="" />
              <p className="card-item-name">{game.name}</p>
              <p>${game.price.toFixed(2)}</p>
              {/* card btns */}
              <div className="btns-container">
                <button className="waves-effect btn-small">Add</button>
                {/* dropdown */}
              </div>
              {/* end card */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Other;
