import axios from "axios";
import { useState } from "react";
export const useGetCocktailsByName = () => {
  const [loading, setLoading] = useState(false);
  const [cocktailName, setCocktailName] = useState("");
  const [error, setError] = useState(false);

  const getCocktailsByName = async (name) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      );
      setCocktailName(response.data.drinks);
      console.log("cocktailName", response.data.drinks);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setError(true);
    }
  };
  return { loading, error, cocktailName, getCocktailsByName };
};
