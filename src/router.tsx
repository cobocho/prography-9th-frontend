import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { PATH } from '@constants/path';
import { MainPage, NotFound } from './lazy';
import LoadingPage from './pages/LoadingPage';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: PATH.root,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingPage />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
