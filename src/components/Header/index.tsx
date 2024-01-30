import * as Styles from './index.styles';
import Logo from '@assets/logo/logo.png';

const Header = () => {
  return (
    <Styles.Container>
      <Styles.LogoImage src={Logo} />
    </Styles.Container>
  );
};

export default Header;
