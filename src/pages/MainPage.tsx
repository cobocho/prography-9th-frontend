import CategoriesList from '@components/CategoriesList';
import CategoriesListSkeleton from '@components/CategoriesList/skeleton';
import { Suspense } from 'react';
import MealFilter from '@components/MealFilter';
import MealList from '@components/MealList';
import MealListSkeleton from '@components/MealList/skeleton';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/ErrorFallback';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

const MainPage = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => <ErrorFallback reset={resetErrorBoundary} />}
    >
      <Suspense fallback={<CategoriesListSkeleton length={10} />}>
        <CategoriesList />
      </Suspense>
      <MealFilter />
      <Suspense fallback={<MealListSkeleton length={20} />}>
        <MealList />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MainPage;
