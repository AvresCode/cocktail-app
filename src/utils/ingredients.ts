import { APICocktail } from '../types/APItype';

export const getIngredientsList = (
  cocktail: APICocktail,
): Array<[string | null, string | null]> => {
  const cocktailProps: Array<[string | null, string | null]> =
    Object.entries(cocktail);

  const ingredients: Array<string | null> = cocktailProps
    ?.filter(
      ([ingredient, value]) =>
        ingredient?.startsWith('strIngredient') && value && value.trim(),
    )

    .map(([ingredient, value]) => value);

  const measures: Array<string | null> = cocktailProps
    ?.filter(
      ([measure, value]) =>
        measure?.startsWith('strMeasure') && value && value.trim(),
    )
    .map(([measure, value]) => value);

  return ingredients?.map((value, index) => [value, measures?.[index]]);
};
