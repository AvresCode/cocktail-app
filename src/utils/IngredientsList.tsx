import React from 'react';
import { APICocktail } from '../types/APItype';

const IngredientsList = (
  cocktail: APICocktail,
): Array<[string | null, string | null]> => {
  const cocktailArray: Array<[string | null, string | null]> =
    Object.entries(cocktail);

  const ingredientsArray: Array<string | null> = cocktailArray
    ?.filter(
      ([ingredient, value]) =>
        ingredient?.startsWith('strIngredient') && value && value.trim(),
    )

    .map(([ingredient, value]) => value);

  const measuresArray: Array<string | null> = cocktailArray
    ?.filter(
      ([measure, value]) =>
        measure?.startsWith('strMeasure') && value && value.trim(),
    )
    .map(([measure, value]) => value);

  const ingredientsWithMeasures: Array<[string | null, string | null]> =
    ingredientsArray?.map((value, index) => [value, measuresArray?.[index]]);

  return ingredientsWithMeasures;
};

export default IngredientsList;
