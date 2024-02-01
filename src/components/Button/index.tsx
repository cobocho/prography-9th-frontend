import * as Styles from './index.styles';
import { ButtonHTMLAttributes, PropsWithChildren, memo } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  color?: 'primary' | 'secondary';
  size?: 'big' | 'medium' | 'small';
}

const Button = memo(({ color = 'primary', size = 'medium', children, ...rest }: Props) => {
  return (
    <Styles.Container color={color} size={size} {...rest}>
      {children}
    </Styles.Container>
  );
});

export default Button;
