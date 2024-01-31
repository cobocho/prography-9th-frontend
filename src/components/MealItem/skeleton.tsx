import Skeleton from '@components/Skeleton';
import * as Styles from './index.styles';

const MealItemSkeleton = () => {
  return (
    <Styles.Container>
      <Skeleton borderRadius={'10px'}>
        <Styles.Thumbnail style={{ opacity: '0' }} />
      </Skeleton>
      <Skeleton borderRadius={'10px'}>
        <Styles.Info />
      </Skeleton>
    </Styles.Container>
  );
};

export default MealItemSkeleton;
