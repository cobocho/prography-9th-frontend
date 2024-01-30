import * as Styles from './index.styles';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  color?: 'primary' | 'secondary';
  size?: 'big' | 'medium' | 'small';
  isSkeleton?: boolean;
}

const Button = ({
  color = 'primary',
  size = 'medium',
  isSkeleton = false,
  children,
  ...rest
}: Props) => {
  return (
    <Styles.Container className={isSkeleton ? 'skeleton' : ''} color={color} size={size} {...rest}>
      {!isSkeleton && children}
    </Styles.Container>
  );
};

export default Button;
