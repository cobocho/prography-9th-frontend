import CategoriesList from '@components/CategoriesList';
import CategoriesListSkeleton from '@components/CategoriesList/skeleton';
import { Suspense } from 'react';
import MealFilter from '@components/MealFilter';
import MealList from '@components/MealList';
import MealListSkeleton from '@components/MealList/skeleton';

const MainPage = () => {
  return (
    <>
      <Suspense fallback={<CategoriesListSkeleton length={10} />}>
        <CategoriesList />
      </Suspense>
      <MealFilter />
      <Suspense fallback={<MealListSkeleton length={20} />}>
        <MealList />
      </Suspense>
    </>
  );
};

export default MainPage;
