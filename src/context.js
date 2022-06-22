import React, { useState, useContext, useReducer, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

// https://codepen.io/trevoreyre/pen/bRrrEx
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const [save, setSave] = useState(true);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState();

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
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
      // setSave(false);
      // setSave(true);
  };

  const removeFromCart = (id)=>{
      let newCart = cart.filter((item) => item.id != id);
      setCart(newCart);
  }

  const uniqueIds = [];
  const removeDuplicates = cart.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);
    if (!isDuplicate) {
      uniqueIds.push(element.id);

      return true;
    }
    return false;
  });

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm,
        handleAddToCart,
        cart,
        removeDuplicates,
        save,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
