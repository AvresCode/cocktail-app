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
    return console.log(error);
  }
  if (loading) {
    return <div> ...Loading</div>;
  }

  return (
    <div className="home-container">
      <h1 id="top-section"> Welcome! </h1>{" "}
      <p> Here is a random cocktail for you! </p>
      h3
      {randomCocktail && (
        <div className="random-cocktail-container">
          {" "}
          <h3>{randomCocktail.strDrink}</h3>
          <img src={randomCocktail.strDrinkThumb} alt="" />{" "}
          <Link to={`/cocktails/${randomCocktail.idDrink}`}>
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
