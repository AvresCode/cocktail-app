import { useGetRandomCocktail } from "../hooks/useGetRandomCocktail";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./OneRandomCocktail.css";

export const OneRandomCocktail = () => {
  const { error, loading, randomCocktail, getRandomCocktail } =
    useGetRandomCocktail();

  useEffect(() => {
    getRandomCocktail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    console.log(error.message);
  } else if (loading) {
    <div> ...Loading</div>;
  }

  const cocktail = randomCocktail && randomCocktail[0];

  const { idDrink, strDrink, strDrinkThumb } = cocktail;

  return (
    <div className="home-container">
      <h1 id="top-section"> Welcome! </h1>{" "}
      <p> Here is a random cocktail for you! </p>
      h3
      {cocktail && (
        <div className="random-cocktail-container">
          {" "}
          <h3>{strDrink}</h3>
          <img src={strDrinkThumb} alt="" />{" "}
          <Link to={`/cocktails/${idDrink}`}>
            {" "}
            <button className="button-details"> Check details!</button>
          </Link>
          <button onClick={getRandomCocktail} className="button-details">
            {" "}
            One more cocktail!{" "}
          </button>
        </div>
      )}
    </div>
  );
};
