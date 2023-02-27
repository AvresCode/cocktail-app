import axios from 'axios';
import { useState } from 'react';
import { APICocktail, APIResponse } from '../types/APItype';

export const useGetRandomCocktail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [randomCocktail, setRandomCocktail] = useState<APICocktail | null>(
    null,
  );
  const [error, setError] = useState<null | string>(null);

  const getRandomCocktail = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.get<APIResponse>(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      );
      const randomCocktail = response.data.drinks?.[0] || null;
      setRandomCocktail(randomCocktail);
      
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, randomCocktail, getRandomCocktail };
};
