import Button from '@components/Button';
import * as Styles from './index.styles';

const SKELETON_QUANTITY = 10;

const CategoriesListSkeleton = () => {
  return (
    <Styles.Container>
      {Array.from({ length: SKELETON_QUANTITY }).map((_, idx) => (
        <Button key={idx} isSkeleton />
      ))}
    </Styles.Container>
  );
};

export default CategoriesListSkeleton;
