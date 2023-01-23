import { useParams } from "react-router";
import { useEffect } from "react";
import { useGetCocktailById } from "../hooks/useGetCocktailById";
import { CocktailCard } from "./CocktailCard";

export const CocktailById = (): JSX.Element => {
  const { loading, oneCocktail, getOneCocktail } = useGetCocktailById();
  const { id } = useParams<string>();

  useEffect(() => {
    getOneCocktail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div> ...Loading</div>;
  }

  const cocktailArray: Array<[string, string | null]> | null =
    oneCocktail && Object.entries(oneCocktail);

  const ingredientsArray: Array<string | null> | undefined = cocktailArray
    ?.filter(
      ([first, second]) =>
        first.startsWith("strIngredient") && second && second.trim()
    )

    .map(([first, second]) => second);

  const measuresArray: Array<string | null> | undefined = cocktailArray
    ?.filter(
      ([first, second]) =>
        first.startsWith("strMeasure") && second && second.trim()
    )
    .map(([first, second]) => second);

  const ingredientsWithMeasures:
    | Array<[string | null, string | null | undefined]>
    | undefined = ingredientsArray?.map((value, index) => [
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
