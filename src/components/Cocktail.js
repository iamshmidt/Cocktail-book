import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Navbar from "./Navbar";
import { useState } from "react";
import { useGlobalContext } from "../context";

const Cocktail = (item) => {
  const { handleAddToCart, removeFromCart} = useGlobalContext();
  const [show, setShow] = useState(true);
  const { image, name, id, info, glass } = item;
  // console.log(save)

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h2>{name}</h2>
        <div className="cocktail-info">
          <div className="glass">
            <h5>glass type</h5>
            <p>{glass}</p>
          </div>
          <div className="vl"></div>
          <div className="cocktail-type">
            <h5>cocktail type</h5>
            <p>{info}</p>
          </div>
          <div className="vl"></div>
          <div className="cocktail-save">
            <button onClick={() => setShow(!show)}>
              {" "}
              {show ? (
                <FaRegHeart
                  style={{ fontSize: "23px" }}
                  onClick={() => handleAddToCart(item)}
                />
              ) : (
                <FaHeart
                  style={{ color: "#ede342", fontSize: "23px" }}
                  onClick={() => removeFromCart(id)}
                />
              )}
            </button>
          </div>
        </div>
        <Link to={`/cocktail/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
