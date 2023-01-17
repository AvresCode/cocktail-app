import axios from "axios";
import { useState } from "react";

export const useGetRandomCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [randomCocktail, setRandomCocktail] = useState("");
  const [error, setError] = useState(false);

  const getRandomCocktail = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );

      setRandomCocktail(response.data.drinks);
      // console.log("random cocktail:", response.data.drinks);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setError(true);
    }
  };

  return { error, loading, randomCocktail, getRandomCocktail };
};
