export type APIResponse = {
  drinks: null | Array<APICocktail>;
};

export type APICocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: null;
};
