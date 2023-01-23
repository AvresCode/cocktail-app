import { useState } from "react";
import axios from "axios";
import { APICocktail, APIResponse } from "../types/APItype";

export const useGetCocktailById = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [oneCocktail, setOneCocktail] = useState<APICocktail | null>(null);

  const getOneCocktail = async (id?: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<APIResponse>(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const oneCocktail = response.data.drinks?.[0] || null;
      setOneCocktail(oneCocktail);
      setLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
        setError(e.message);
      }
    }
  };

  return { error, loading, oneCocktail, getOneCocktail };
};
