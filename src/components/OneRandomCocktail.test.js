import { render, screen, act, fireEvent } from "@testing-library/react";
import { OneRandomCocktail } from "./OneRandomCocktail";
import { MemoryRouter } from "react-router-dom";

import { rest } from "msw";
import { setupServer, SetupServerApi } from "msw/node";

//import axios from 'axios';

const mockData = {
  drinks: [
    {
      idDrink: "17831",
      strDrink: "A Furlong Too Late",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Highball glass",
      strInstructions:
        "Pour the rum and ginger beer into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
      strInstructionsES:
        "Vierta el ron y la cerveza de jengibre en un vaso alto casi lleno de cubitos de hielo. Agita bien. Para adornar, un twist de limón.",
      strInstructionsDE:
        "Den Rum und das Ingwerbier in ein Highball-Glas gießen, das fast mit Eiswürfeln gefüllt ist. Gut umrühren. Mit der Zitronenscheibe garnieren.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Guarnire con la scorza di limone.Versare il rum e la ginger beer in un bicchiere highball quasi riempito di cubetti di ghiaccio.Mescolare bene.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/ssxvww1472669166.jpg",
      strIngredient1: "Light rum",
      strIngredient2: "Ginger beer",
      strIngredient3: "Lemon peel",
      strIngredient4: null,
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
      strMeasure1: "2 oz ",
      strMeasure2: "4 oz ",
      strMeasure3: "1 twist of ",
      strMeasure4: null,
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
      strCreativeCommonsConfirmed: "No",
      dateModified: "2016-08-31 19:46:06",
    },
  ],
};

describe("OneRandomCocktail on Response back from server", () => {
  let server;
  beforeAll(async () => {
    server = setupServer(
      rest.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        (req, res, ctx) => {
          return res(ctx.json(mockData));
        }
      )
    );
    server.listen();
  });

  afterAll(async () => {
    server.close();
  });

  test("renders OneRandomCocktail", async () => {
    await act(() => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <OneRandomCocktail />
        </MemoryRouter>
      );
    });
    const heading = screen.getByText(/A Furlong Too Late/i);
    // const category = screen.getByText(/Ordinary Drink/i);
    expect(heading).toBeInTheDocument();
    // expect(category).toBeInTheDocument();

    const buttonToGetMocktail = screen.getByText(/One more cocktail!/i);

    expect(buttonToGetMocktail).toBeInTheDocument();
  });
});
