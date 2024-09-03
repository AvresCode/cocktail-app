import { getIngredientsList } from "./ingredients";
import { APICocktail } from "../types/APItype";


describe('getIngredientsList', () => {
  it('should return an array of ingredient and measure pairs', () => {
    
    const cocktail: APICocktail = {
      idDrink: '1',
      strDrink: 'Margarita',
      strIngredient1: 'Tequila',
      strIngredient2: 'Lime Juice',
      strIngredient3: null,
      strMeasure1: '1 1/2 oz',
      strMeasure2: '1 oz',
      strMeasure3: null,
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/2t9r6w1504374811.jpg',
      strCategory: 'Cocktail',
      strAlcoholic: 'Alcoholic',
      strInstructions:'Shake and strain into a chilled cocktail glass',
    };

    const result = getIngredientsList(cocktail);

    // Assert
    expect(result).toEqual([
      ['Tequila', '1 1/2 oz'],
      ['Lime Juice', '1 oz'],
    ]);
  });

  it('should return an empty array if cocktail object has no ingredients', () => {
    // Arrange
    const cocktail: APICocktail = {
      idDrink: '1',
      strDrink: 'Margarita',
    };

    // Act
    const result = getIngredientsList(cocktail);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return an empty array if cocktail object is undefined', () => {
    // Arrange
    const cocktail: APICocktail | undefined = undefined;

    // Act
    const result = getIngredientsList(cocktail as APICocktail);

    // Assert
    expect(result).toEqual([]);
  });
});