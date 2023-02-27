import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import { useGetCocktailById } from './useGetCocktailById';

jest.mock('axios');

describe('useGetCocktailById', () => {
   beforeEach(() => {
     jest.resetAllMocks();
   });

   it('should return the correct initial state', () => {
     const { result } = renderHook(() => useGetCocktailById());

     expect(result.current.error).toBeNull();
     expect(result.current.loading).toBe(false);
     expect(result.current.oneCocktail).toBeNull();
   });

  it('should fetch cocktail by ID', async () => {
    const cocktailId = '123';
    const responseData = {
      drinks: [
        {
          idDrink: '123',
          strDrink: 'Margarita',
          strInstructions: 'Shake and strain into a chilled glass.',
        },
      ],
    };
   (axios.get as jest.Mock).mockResolvedValue({ data: responseData });

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetCocktailById(),
    );
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.oneCocktail).toBeNull();

    result.current.getOneCocktail(cocktailId);
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.oneCocktail).toEqual(responseData.drinks[0]);
  });

  it('should handle error if request fails', async () => {
    const cocktailId = '123';
    const errorMessage = 'Something went wrong.';
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetCocktailById(),
    );
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.oneCocktail).toBeNull();

    result.current.getOneCocktail(cocktailId);
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(errorMessage);
    expect(result.current.oneCocktail).toBeNull();
  });
});
