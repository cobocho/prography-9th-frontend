import { useFilterColumnQuantity } from '../../store/filter';
import * as Styles from './index.styles';
import MealItemSkeleton from '@components/MealItem/skeleton';

interface Props {
  length: number;
}

const MealListSkeleton = ({ length }: Props) => {
  const { columnQuantity } = useFilterColumnQuantity();

  return (
    <Styles.Container column={columnQuantity}>
      {Array.from({ length }).map((_, idx) => (
        <MealItemSkeleton key={idx} />
      ))}
    </Styles.Container>
  );
};

export default MealListSkeleton;
