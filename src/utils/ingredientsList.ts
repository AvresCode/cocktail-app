import { APICocktail } from '../types/APItype';

export const getIngredientsList = (
  cocktail: APICocktail,
): Array<[string | null, string | null]> => {
  const cocktailArray: Array<[string | null, string | null]> =
    Object.entries(cocktail);

  const getIngredientsArray: Array<string | null> = cocktailArray
    ?.filter(
      ([ingredient, value]) =>
        ingredient?.startsWith('strIngredient') && value && value.trim(),
    )

    .map(([ingredient, value]) => value);

  const getMeasuresArray: Array<string | null> = cocktailArray
    ?.filter(
      ([measure, value]) =>
        measure?.startsWith('strMeasure') && value && value.trim(),
    )
    .map(([measure, value]) => value);

  const getIngredientsWithMeasures: Array<[string | null, string | null]> =
    getIngredientsArray?.map((value, index) => [
      value,
      getMeasuresArray?.[index],
    ]);

  return getIngredientsWithMeasures;
};
