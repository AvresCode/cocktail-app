import "./CocktailCardSearch.css";
import { Link } from "react-router-dom";
export const CocktailCardSearch = ({
  idDrink,
  strDrink,
  strCategory,
  strAlcoholic,
  strDrinkThumb,
}) => {
  return (
    <div className="cocktail-container">
      <div>
        {" "}
        <h3> {strDrink}</h3>{" "}
        <div className="category-alcoholic-container">
          {" "}
          <div className="category-alcoholic-item">{strCategory}</div>
          <div className="category-alcoholic-item">{strAlcoholic}</div>
        </div>
      </div>{" "}
      <Link to={`/cocktails/${idDrink}`}>
        {" "}
        <img src={strDrinkThumb} alt="" />
      </Link>{" "}
      <Link to={`/cocktails/${idDrink}`}>
        <button className="button-card-result"> View details</button>
      </Link>
    </div>
  );
};
