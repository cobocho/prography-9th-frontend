import CategoriesList from '@components/CategoriesList';
import CategoriesListSkeleton from '@components/CategoriesList/skeleton';
import { Suspense } from 'react';
import MealFilter from '@components/MealFilter';
import MealList from '@components/MealList';

const MainPage = () => {
  return (
    <>
      <Suspense fallback={<CategoriesListSkeleton length={10} />}>
        <CategoriesList />
      </Suspense>
      <MealFilter />
      <Suspense fallback={<div>로딩</div>}>
        <MealList />
      </Suspense>
    </>
  );
};

export default MainPage;
