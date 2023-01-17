import "./SearchByName.css";
import { useState } from "react";
import { useGetCocktailsByName } from "../hooks/useGetCocktailsByName";
import { CocktailCardSearch } from "./CocktailCardSearch";

export const SearchByName = () => {
  const { cocktailName, getCocktailsByName } = useGetCocktailsByName();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getCocktailsByName(search);
    setSearch("");
  };

  return (
    <div className="search-page-container">
      {" "}
      <form className="search-container" onSubmit={handleSubmit}>
        <h1 style={{ color: "white" }}>Search Cocktail </h1>
        <div className="input-submit">
          {" "}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field"
            placeholder="Type a name"
          />
          <button type="submit" id="submit-button">
            {" "}
            Submit
          </button>
        </div>
      </form>
      <div className="all-cocktails-container">
        {cocktailName &&
          cocktailName.map((coc) => (
            <CocktailCardSearch {...coc} key={coc.idDrink} />
          ))}
      </div>
    </div>
  );
};
