import { useEffect, useState } from 'react';
import { useGetMealsByCategories } from '../api/meals.api';
import { SortFilterType, useCategories, useFilterSort, useFilterViewCount } from '../store/filter';
import { Meal } from '../types/meal';

const useMealsViewModel = () => {
  const { selectedCategories } = useCategories();
  const { sort } = useFilterSort();
  const queries = useGetMealsByCategories(selectedCategories);
  const { setCurrentViewCount, setTotalViewCount } = useFilterViewCount();

  const [viewMeals, setViewMeals] = useState<Meal[]>([]);
  const [page, setPage] = useState<number>(1);

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

  const getFilteredMeals = () => {
    return sortMeals(
      queries.reduce<Meal[]>((acc, query) => {
        return query.data ? [...acc, ...(query.data as Meal[])] : acc;
      }, []),
      sort,
    );
  };

  const increasePage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(
    function changedCategory() {
      setPage(1);
      const filteredMeals = getFilteredMeals();
      setTotalViewCount(filteredMeals.length);
      setViewMeals(filteredMeals.splice(0, 20 * page));
    },
    [selectedCategories],
  );

  useEffect(
    function changedSortType() {
      const filteredMeals = getFilteredMeals();
      setViewMeals(filteredMeals.splice(0, 20 * page));
    },
    [sort],
  );

  useEffect(
    function changedPage() {
      const filteredMeals = getFilteredMeals();
      const result = filteredMeals.splice(0, 20 * page);
      setViewMeals(result);
      setCurrentViewCount(result.length);
    },
    [page],
  );

  return {
    viewMeals,
    increasePage,
  };
};

export default useMealsViewModel;
