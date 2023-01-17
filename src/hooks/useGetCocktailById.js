import { useState } from "react";
import axios from "axios";

export const useGetCocktailById = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [oneCocktail, setOneCocktail] = useState("");

  const getOneCocktail = async (id) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setOneCocktail(response.data.drinks);
      console.log("one cocktail:", response.data.drinks);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setError(true);
    }
  };

  return { error, loading, oneCocktail, getOneCocktail };
};
