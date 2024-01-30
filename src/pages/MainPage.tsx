import CategoriesList from '@components/CategoriesList';
import CategoriesListSkeleton from '@components/CategoriesList/skeleton';
import { Suspense } from 'react';

const MainPage = () => {
  return (
    <>
      <Suspense fallback={<CategoriesListSkeleton length={10} />}>
        <CategoriesList />
      </Suspense>
    </>
  );
};

export default MainPage;
