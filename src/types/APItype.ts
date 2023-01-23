export type APIResponse = {
  drinks: null | Array<APICocktail>;
};

export type APICocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strInstructions: string | null;
};
