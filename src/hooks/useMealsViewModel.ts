import { useEffect, useState } from 'react';
import { useGetMealsByCategories } from '../api/meals.api';
import { SortFilterType, useCategories, useFilterSort, useFilterViewCount } from '../store/filter';
import { Meal } from '../types/meal';

const useMealsViewModel = (quantityPerPage: number) => {
  const { selectedCategories } = useCategories();
  const { sort } = useFilterSort();
  const queries = useGetMealsByCategories(selectedCategories);
  const { setCurrentViewCount, setTotalViewCount } = useFilterViewCount();

  const [viewMeals, setViewMeals] = useState<Meal[]>([]);
  const [page, setPage] = useState<number>(1);

  const sortMeals = (meals: Meal[], sort: SortFilterType) => {
    switch (sort) {
      case 'new':
        return [...meals].sort((a, b) => Number(a.idMeal) - Number(b.idMeal));
      case 'asc':
        return [...meals].sort((a, b) => a.strMeal.localeCompare(b.strMeal));
      case 'desc':
        return [...meals].sort((a, b) => b.strMeal.localeCompare(a.strMeal));
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

  const spliceMeals = (meals: Meal[], page: number) => {
    return [...meals].splice(0, quantityPerPage * page);
  };

  useEffect(
    function changedCategory() {
      const filteredMeals = getFilteredMeals();
      const splicedMeals = spliceMeals(filteredMeals, 1);
      setPage(1);
      setViewMeals(splicedMeals);
      setTotalViewCount(filteredMeals.length);
      setCurrentViewCount(splicedMeals.length);
    },
    [selectedCategories],
  );

  useEffect(
    function changedSortType() {
      const filteredMeals = getFilteredMeals();
      const splicedMeals = spliceMeals(filteredMeals, page);
      setViewMeals(splicedMeals);
    },
    [sort],
  );

  useEffect(
    function changedPage() {
      const filteredMeals = getFilteredMeals();
      const splicedMeals = spliceMeals(filteredMeals, page);
      setViewMeals(splicedMeals);
      setCurrentViewCount(splicedMeals.length);
    },
    [page],
  );

  return {
    viewMeals,
    increasePage,
  };
};

export default useMealsViewModel;
