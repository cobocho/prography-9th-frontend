import { Suspense } from 'react';
import '@styles/reset.css';
import CategoriesList from '@components/CategoriesList';
import Layout from '@components/Layout';
import CategoriesListSkeleton from '@components/CategoriesList/skeleton';

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<CategoriesListSkeleton />}>
        <CategoriesList />
      </Suspense>
    </Layout>
  );
};

export default App;
