import Button from '@components/Button';
import * as Styles from './index.styles';

interface Props {
  length: number;
}

const CategoriesListSkeleton = ({ length }: Props) => {
  return (
    <Styles.Container>
      {Array.from({ length }).map((_, idx) => (
        <Button key={idx} isSkeleton />
      ))}
    </Styles.Container>
  );
};

export default CategoriesListSkeleton;
