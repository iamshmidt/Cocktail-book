import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import SavedSingleCoctail from './SavedSingleCocktail'
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Navbar from "../components/Navbar";

const SavedCocktails = () => {
  const { loading, removeDuplicates } = useGlobalContext();

  if (loading) {
    return <Loading></Loading>;
  }
  if (removeDuplicates.length < 1) {
    return (
      <>
        <section className="section">
          <h2 className="section-title"> no cocktails found</h2>
          <div className="section-title">
            <button className="btn btn-primary">
              <Link to="/">Home</Link>
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">
          {removeDuplicates.map((item) => {
            return <SavedSingleCoctail key={item.id} {...item}></SavedSingleCoctail>;
          })}
        </div>
      </section>
    </>
  );

};

export default SavedCocktails;
