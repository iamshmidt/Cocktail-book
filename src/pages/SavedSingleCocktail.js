import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from '../context'
import { gsap } from "gsap";
import { AiOutlineClose } from "react-icons/ai";
// AiOutlineClose;

const SingleCocktail = (item) => {
  const { removeFromCart } = useGlobalContext();
  const { image, name, id, info, glass } = item;
  // console.log(save)
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1.02,
      boxShadow:
        "rgba(0, 0, 0, -0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      boxShadow: "none",
    });
  };
  return (
    <article className="cocktail" onMouseEnter={onEnter} onMouseLeave={onLeave}>
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
            <button
              className="btn btn-primary"
              onClick={() => removeFromCart(id)}
            >
              <AiOutlineClose></AiOutlineClose>
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

export default SingleCocktail;
