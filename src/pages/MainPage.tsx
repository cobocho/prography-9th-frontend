import CategoriesList from '@components/CategoriesList';
import CategoriesListSkeleton from '@components/CategoriesList/skeleton';
import { Suspense } from 'react';
import { useGetMealsByCategories } from '../api/meals.api';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const selectedCategories = searchParams.get('category')
    ? searchParams.get('category')!.split(',')
    : [];

  const data = useGetMealsByCategories(selectedCategories);
  const queryClient = useQueryClient();

  const meals = selectedCategories
    .map((category) => queryClient.getQueryData(['meals', category]))
    .flat();

  console.log(meals);

  return (
    <>
      <Suspense fallback={<CategoriesListSkeleton length={10} />}>
        <CategoriesList />
      </Suspense>
    </>
  );
};

export default MainPage;
