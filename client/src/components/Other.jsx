import React from "react";
import CellNavbar from "./CellNavbar";
import { Button, Badges, Icons, Dropdown } from "materialize-css";
import axios from "axios";

const Other = (props) => {
  // props
  const { games } = props;

//   add to cart functions

    // games add to cart
    const gamesAddToCart = (game) => {
        
            axios.post("http://localhost:3000/api/phones", {
              title: game.name,
              price: game.price,
            });
      
            alert(`${game.name} added to cart`);
          
    };

  return (
    <div>
      <CellNavbar />
      <h1 className="apple-heading">Other</h1>
      <div className="container">
        <div className="other-row">
          {games.map((game) => (
            <div className="other-card">
              <img className="card-images-other" src={game.image} alt="" />
              <p className="card-item-name other-name">{game.name}</p>
              <p>${game.price.toFixed(2)}</p>
              {/* card btns */}
              <div className="btns-container other-btns">
                <button className="waves-effect btn-small other-btn" onClick={() => gamesAddToCart(game)}>Add</button>
                {/* dropdown */}
              </div>
              <br></br>
              {/* end card */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Other;
