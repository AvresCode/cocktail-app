import axios from "axios";
import { useState } from "react";
import { APICocktail, APIResponse } from "../types/APItype";

export const useGetCocktailsByName = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cocktailName, setCocktailName] = useState<
    APICocktail[] | null | undefined
  >(undefined);
  const [error, setError] = useState<string | null>(null);

  const getCocktailsByName = async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<APIResponse>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      );
      const cocktails = response.data.drinks;
      setCocktailName(cocktails);
      setLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
        setError(e.message);
      }
    }
  };
  return { loading, error, cocktailName, getCocktailsByName };
};
