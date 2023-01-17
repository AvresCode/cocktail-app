import { useParams } from "react-router";
import { useEffect } from "react";
import { useGetCocktailById } from "../hooks/useGetCocktailById";
import { CocktailCard } from "./CocktailCard";

export const CocktailById = () => {
  const { error, loading, oneCocktail, getOneCocktail } = useGetCocktailById();
  const { id } = useParams();

  useEffect(() => {
    getOneCocktail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    console.log(error.message);
  } else if (loading) {
    <div> ...Loading</div>;
  }

  const cocktail = oneCocktail && oneCocktail[0];

  const cocktailArray = Object.entries(cocktail);

  const ingredientsArray = cocktailArray
    .filter(
      ([first, second]) =>
        first.startsWith("strIngredient") && second && second.trim()
    )

    .map(([first, second]) => second);

  const measuresArray = cocktailArray
    .filter(
      ([first, second]) =>
        first.startsWith("strMeasure") && second && second.trim()
    )
    .map(([first, second]) => second);

  const ingredientsWithMeasures = ingredientsArray.map((value, index) => [
    value,
    measuresArray[index],
  ]);

  return (
    <div>
      {cocktail && (
        <CocktailCard
          {...cocktail}
          ingredientsWithMeasures={ingredientsWithMeasures}
        />
      )}
    </div>
  );
};
