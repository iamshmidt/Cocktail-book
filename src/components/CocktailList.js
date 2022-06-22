import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useState, useEffect } from "react";

const CocktailList = () => {
  const { cocktails, loading, removeDuplicates } = useGlobalContext();
  if (loading) {
    return <Loading></Loading>;
  }
  if (cocktails.length < 1) {
    return (
      <>
        <h2 className="section-title"> no cocktails matched your criteria</h2>
        <button>
          <Link to="/">Home</Link>
        </button>
      </>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item}></Cocktail>;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
