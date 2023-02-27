
import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import { useGetRandomCocktail } from './useGetRandomCocktail';

jest.mock('axios');

describe('useGetRandomCocktail', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return the correct initial state', () => {
    const { result } = renderHook(() => useGetRandomCocktail());

    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.randomCocktail).toBeNull();
    
  });

  it('should fetch a random cocktail successfully', async () => {
    const mockedData = {
      drinks: [{ idDrink: '123', strDrink: 'Mojito', strInstructions: '...' }],
    };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockedData });
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetRandomCocktail(),
    );

    act(() => {
      result.current.getRandomCocktail();
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.randomCocktail).toEqual(mockedData.drinks[0]);
  });

  it('should handle an error while fetching a random cocktail', async () => {
    const errorMessage = 'Network Error';
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetRandomCocktail(),
    );

    act(() => {
      result.current.getRandomCocktail();
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(errorMessage);
    expect(result.current.randomCocktail).toBeNull();
  });
});


