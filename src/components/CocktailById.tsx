import { useParams } from "react-router";
import { useEffect } from "react";
import { useGetCocktailById } from "../hooks/useGetCocktailById";
import { CocktailCard } from "./CocktailCard";

export const CocktailById = () => {
  const { error, loading, oneCocktail, getOneCocktail } = useGetCocktailById();
  const { id } = useParams<string>();

  useEffect(() => {
    getOneCocktail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return console.log(error);
  }

  if (loading) {
    return <div> ...Loading</div>;
  }

  const cocktailArray: Array<[string, string | null]> | null =
    oneCocktail && Object.entries(oneCocktail);

  const ingredientsArray = cocktailArray
    ?.filter(
      ([first, second]) =>
        first.startsWith("strIngredient") && second && second.trim()
    )

    .map(([first, second]) => second);

  const measuresArray = cocktailArray
    ?.filter(
      ([first, second]) =>
        first.startsWith("strMeasure") && second && second.trim()
    )
    .map(([first, second]) => second);

  const ingredientsWithMeasures = ingredientsArray?.map((value, index) => [
    value,
    measuresArray?.[index],
  ]);

  return (
    <div>
      {oneCocktail && (
        <CocktailCard
          {...oneCocktail}
          ingredientsWithMeasures={ingredientsWithMeasures}
        />
      )}
    </div>
  );
};
