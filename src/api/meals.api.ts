import { UseQueryOptions, useQueries } from '@tanstack/react-query';
import { http } from './http';
import { Meal } from '../types/meal';

export const MEALS_QUERY_KEY = ['meals'];

export const MEALS_STALE_TIME = 10 * 60 * 1000;

export const useGetMealsByCategories = (categories: string[]) => {
  const queries: UseQueryOptions[] = categories.map((category) => {
    return {
      queryKey: [...MEALS_QUERY_KEY, category],
      queryFn: () =>
        http.get<{ meals: Meal[] }>(`/filter.php?c=${category}`).then((res) => res.meals),
      staleTime: MEALS_STALE_TIME,
    };
  });

  return useQueries<Meal[]>({ queries });
};
