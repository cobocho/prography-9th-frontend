import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
