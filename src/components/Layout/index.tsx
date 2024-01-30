import { PropsWithChildren } from 'react';
import * as Styles from './index.styles';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Styles.Container>{children}</Styles.Container>
    </>
  );
};

export default Layout;
