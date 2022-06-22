import React from 'react'
import { Link } from "react-router-dom";
import { BsSave } from "react-icons/bs";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { removeDuplicates } = useGlobalContext();
  // console.log(cart)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <h1>Choose your drink</h1>
        {/* <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link> */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/saved">
              <div className="amount-container">
                <BsSave />
                <p className="total-amount">{removeDuplicates.length}</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar