import { render, screen, act } from '@testing-library/react';
import { CocktailById } from './CocktailById';
import { MemoryRouter } from 'react-router-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockData = {
  drinks: [
    {
      idDrink: '17219',
      strDrink: 'Yellow Bird',
      strDrinkAlternate: null,
      strTags: 'IBA,NewEra',
      strVideo: null,
      strCategory: 'Cocktail',
      strIBA: 'New Era Drinks',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Cocktail glass',
      strInstructions: 'Shake and strain into a chilled cocktail glass',
      strInstructionsES: null,
      strInstructionsDE:
        'In ein gekühltes Cocktailglas schütteln und abseihen.',
      strInstructionsFR: null,
      strInstructionsIT:
        'Shakerare e filtrare in una coppetta da cocktail ghiacciata',
      'strInstructionsZH-HANS': null,
      'strInstructionsZH-HANT': null,
      strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/2t9r6w1504374811.jpg',
      strIngredient1: 'White Rum',
      strIngredient2: 'Galliano',
      strIngredient3: 'Triple Sec',
      strIngredient4: 'Lime Juice',
      strIngredient5: null,
      strIngredient6: null,
      strIngredient7: null,
      strIngredient8: null,
      strIngredient9: null,
      strIngredient10: null,
      strIngredient11: null,
      strIngredient12: null,
      strIngredient13: null,
      strIngredient14: null,
      strIngredient15: null,
      strMeasure1: '3 cl',
      strMeasure2: '1.5 cl',
      strMeasure3: '1.5 cl',
      strMeasure4: '1.5 cl',
      strMeasure5: null,
      strMeasure6: null,
      strMeasure7: null,
      strMeasure8: null,
      strMeasure9: null,
      strMeasure10: null,
      strMeasure11: null,
      strMeasure12: null,
      strMeasure13: null,
      strMeasure14: null,
      strMeasure15: null,
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: 'No',
      dateModified: '2017-09-02 18:53:31',
    },
  ],
};

describe('cocktail by id', () => {
  let server: any;
  beforeAll(async () => {
    server = setupServer(
      rest.get(
        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17219',
        (req, res, ctx) => {
          return res(ctx.json(mockData));
        },
      ),
    );
    server.listen();
  });

  afterAll(async () => {
    server.close();
  });

  test('renders cocktail by id', async () => {
    await act(() => {
      render(
        <MemoryRouter initialEntries={['cocktails/:17219']}>
          <CocktailById />
        </MemoryRouter>,
      );
    });
    const heading = screen.getByText(/Yellow Bird/i);
    const category = screen.getByText(/Cocktail/);
    expect(heading).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });
});
