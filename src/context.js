import React, { useState, useContext, useReducer, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

// https://codepen.io/trevoreyre/pen/bRrrEx
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState();


  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleAddToCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    // setAmount(amount + 1);
  };

    const removeDuplicates = cart.filter(
      (ele, ind) =>
        ind ===
        cart.findIndex((elem) => elem.jobid === ele.jobid && elem.id === ele.id)
    );

  // console.log(amount);

  useEffect(() => {
    fetchDrinks();
      // setAmount(removeDuplicates.length);
  }, []);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, setSearchTerm, handleAddToCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
