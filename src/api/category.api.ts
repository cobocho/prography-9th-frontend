import { useSuspenseQuery } from '@tanstack/react-query';

import { Category } from '../types/category';

import { http } from './http';

export const ALL_CATEGORY_QUERY_KEY = ['categories'];

export const ALL_CATEGORY_STALE_TIME = 10 * 60 * 1000;

export const useGetAllCategories = () => {
  return useSuspenseQuery<Category[]>({
    queryKey: ALL_CATEGORY_QUERY_KEY,
    queryFn: () =>
      http.get<{ categories: Category[] }>(`/categories.php`).then((res) => res.categories),
    staleTime: ALL_CATEGORY_STALE_TIME,
  });
};
