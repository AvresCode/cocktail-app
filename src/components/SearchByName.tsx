import './SearchByName.css';
import React, { useState } from 'react';
import { useGetCocktailsByName } from '../hooks/useGetCocktailsByName';
import { CocktailCardSearch } from './CocktailCardSearch';

export const SearchByName = (): JSX.Element => {
  const { loading, cocktailName, getCocktailsByName } = useGetCocktailsByName();

  const [search, setSearch] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getCocktailsByName(search);
    setSearch('');
  };

  if (loading) {
    return <div> ...Loading</div>;
  }

  return (
    <div className="search-page-container">
      {' '}
      <form className="search-container" onSubmit={handleSubmit}>
        <h1 style={{ color: 'white' }}>Search Cocktail </h1>
        <div className="input-submit">
          {' '}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field"
            placeholder="Type a name"
          />
          <button type="submit" id="submit-button">
            {' '}
            Submit
          </button>
        </div>
      </form>
      <div className="all-cocktails-container">
        {cocktailName === null ? (
          <div>
            {' '}
            <h1 className="no-result-container">Oops! Nothing found!</h1>{' '}
            <p>Search another cocktail</p>
          </div>
        ) : (
          cocktailName &&
          cocktailName.map((coc) => (
            <CocktailCardSearch {...coc} key={coc.idDrink} />
          ))
        )}
      </div>
    </div>
  );
};
