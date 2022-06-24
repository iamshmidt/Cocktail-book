import React from "react";
import { useState, useEffect } from "react";
import { GoChevronUp } from "react-icons/go";

const BakToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <div className="round" onClick={scrollUp}>
          <div id="cta">
            <span className="arrow primera">
              <GoChevronUp></GoChevronUp>
            </span>
            <span className="arrow segunda ">
              <GoChevronUp></GoChevronUp>
            </span>
          </div>
        </div>
      )}
    </>
  );
  //    <div>{backToTopButton && <button className="back-to-top" onClick={scrollUp}>Back</button>}</div>;
};

export default BakToTopButton;
