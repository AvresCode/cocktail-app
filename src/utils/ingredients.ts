import { APICocktail } from '../types/APItype';

export const getIngredientsList = (
  cocktail: APICocktail,
): Array<[string , string ]> => {
  const cocktailProps: Array<[string | null, string | null]> =
    Object.entries(cocktail);

  const ingredients = cocktailProps
    ?.filter(
      ([ingredient, value]) =>
        typeof ingredient === 'string' && ingredient.startsWith('strIngredient') && value && typeof value === 'string'&& value.trim(),
    )

    .map(([ingredient, value]) => value as string);

  const measures = cocktailProps
    ?.filter(
      ([measure, value]) =>
        typeof measure === 'string' && measure.startsWith('strMeasure') && value && typeof value === 'string'&& value.trim(),
    )
    .map(([measure, value]) => value as string);

  return ingredients?.map((value, index) => [value, measures?.[index]]);
};


