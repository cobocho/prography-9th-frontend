import Skeleton from '@components/Skeleton';
import * as Styles from './index.styles';
import { Props } from '.';

const SkeletonButton = ({ color = 'primary', size = 'medium', ...rest }: Props) => {
  return (
    <Skeleton width={'80px'} borderRadius={'100px'}>
      <Styles.Container
        style={{ opacity: '0' }}
        color={color}
        size={size}
        {...rest}
      ></Styles.Container>{' '}
    </Skeleton>
  );
};

export default SkeletonButton;
