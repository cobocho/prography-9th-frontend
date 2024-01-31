import * as Styles from './index.styles';
import SkeletonButton from '@components/Button/skeleton';

interface Props {
  length: number;
}

const CategoriesListSkeleton = ({ length }: Props) => {
  return (
    <Styles.Container>
      {Array.from({ length }).map((_, idx) => (
        <SkeletonButton key={idx} />
      ))}
    </Styles.Container>
  );
};

export default CategoriesListSkeleton;
