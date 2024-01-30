import { PropsWithChildren } from 'react';
import * as Styles from './index.styles';
import Header from '@components/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Styles.Container>{children}</Styles.Container>
    </>
  );
};

export default Layout;
