import * as Styles from './index.styles';
import Logo from '@assets/logo/logo.png';

const Header = () => {
  return (
    <Styles.Container>
      <Styles.HeaderBox>
        <Styles.LogoImage src={Logo} />
      </Styles.HeaderBox>
    </Styles.Container>
  );
};

export default Header;
