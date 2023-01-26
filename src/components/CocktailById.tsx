import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useGetCocktailById } from '../hooks/useGetCocktailById';
import { CocktailCard } from './CocktailCard';
import { getIngredientsList } from '../utils/ingredients';

export const CocktailById = (): JSX.Element => {
  const { loading, oneCocktail, getOneCocktail } = useGetCocktailById();
  const { id } = useParams<string>();

  useEffect(() => {
    getOneCocktail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ingredientsWithMeasures = oneCocktail
    ? getIngredientsList(oneCocktail)
    : [];

  if (loading) {
    return <div> ...Loading</div>;
  }

  return (
    <div>
      {oneCocktail && (
        <CocktailCard
          {...oneCocktail}
          ingredientsWithMeasures={ingredientsWithMeasures}
        />
      )}
    </div>
  );
};
