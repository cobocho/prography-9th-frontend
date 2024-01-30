import '@styles/reset.css';
import Layout from '@components/Layout';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};

export default App;
