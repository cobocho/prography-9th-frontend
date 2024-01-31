import * as Styles from './index.styles';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  color?: 'primary' | 'secondary';
  size?: 'big' | 'medium' | 'small';
}

const Button = ({ color = 'primary', size = 'medium', children, ...rest }: Props) => {
  return (
    <Styles.Container color={color} size={size} {...rest}>
      {children}
    </Styles.Container>
  );
};

export default Button;
