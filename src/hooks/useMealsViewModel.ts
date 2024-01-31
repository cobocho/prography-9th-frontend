import { useEffect } from 'react';
import { useGetMealsByCategories } from '../api/meals.api';
import { SortFilterType, useCategories, useFilterSort, useFilterViewCount } from '../store/filter';
import { Meal } from '../types/meal';

const useMealsViewModel = () => {
  const { selectedCategories } = useCategories();
  const { sort } = useFilterSort();
  const queries = useGetMealsByCategories(selectedCategories);
  const { setTotalViewCount } = useFilterViewCount();

  const sortMeals = (meals: Meal[], sort: SortFilterType) => {
    switch (sort) {
      case 'new':
        return meals.sort((a, b) => Number(a.idMeal) - Number(b.idMeal));
      case 'asc':
        return meals.sort();
      case 'desc':
        return meals.sort().reverse();
    }
  };

  const filteredMeals = sortMeals(
    queries.reduce<Meal[]>((acc, query) => {
      return query.data ? [...acc, ...(query.data as Meal[])] : acc;
    }, []),
    sort,
  );

  useEffect(() => {
    setTotalViewCount(filteredMeals.length);
  }, [filteredMeals.length, setTotalViewCount]);

  return {
    filteredMeals,
  };
};

export default useMealsViewModel;
