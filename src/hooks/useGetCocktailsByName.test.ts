import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import { useGetCocktailsByName } from './useGetCocktailsByName';

jest.mock('axios');

describe('useGetCocktailsByName', () => {
  const mockCocktail = {
    idDrink: '123',
    strDrink: 'Margarita',
    strCategory: 'Cocktail',
  };
  const mockResponse = {
    data: {
      drinks: [mockCocktail],
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

it('should return the correct initial state', () => {
  const { result } = renderHook(() => useGetCocktailsByName());

  expect(result.current.error).toBeNull();
  expect(result.current.loading).toBe(false);
  expect(result.current.cocktailName).toBeUndefined();
});

  it('should fetch cocktail by name correctly', async () => {
    (axios.get as jest.Mock).mockResolvedValue(mockResponse);
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetCocktailsByName(),
    );

    act(() => {
      result.current.getCocktailsByName('Margarita');
    });

     expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.cocktailName).toEqual([mockCocktail]);
  });

  it('should set loading to false and handle error when getCocktailsByName fails', async () => {
    const errorMessage = 'Request failed with status code 404';
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetCocktailsByName(),
    );

    act(() => {
      result.current.getCocktailsByName('Margarita');
    });

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(errorMessage);
    expect(result.current.cocktailName).toBeUndefined();
  });
});
