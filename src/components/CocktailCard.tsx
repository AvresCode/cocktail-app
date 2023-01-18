import "./CocktailCard.css";

interface Iprops {
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strInstructions: string | null;
  ingredientsWithMeasures:
    | [string | null, string | null | undefined][]
    | undefined;
}

export const CocktailCard = ({
  strDrink,
  strDrinkThumb,
  strCategory,
  strAlcoholic,
  strInstructions,
  ingredientsWithMeasures,
}: Iprops) => {
  return (
    <div className="cocktail-card">
      {" "}
      <div>
        <h1>{strDrink}</h1>
        <div className="category-alcoholic">
          {" "}
          <div className="cat-alco-item">{strCategory}</div>
          <div className="cat-alco-item">{strAlcoholic}</div>
        </div>
        <img src={strDrinkThumb} alt="" className="img-cocktail" />
      </div>
      <div className="ingredients-instruction">
        {" "}
        <h2> Ingredients</h2>
        {ingredientsWithMeasures &&
          ingredientsWithMeasures.map((item, index) => (
            <div key={index} className="ingredient-measure-container">
              <div className="ingred-measure-item">{item[0]}</div>{" "}
              <div className="ingred-measure-item">{item[1]}</div>
            </div>
          ))}
        <div>
          <h2>Instruction</h2>
          <div>{strInstructions}</div>
        </div>
      </div>
    </div>
  );
};
