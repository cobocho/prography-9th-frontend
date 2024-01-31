import { useFilterColumnQuantity } from '../../store/filter';
import * as Styles from './index.styles';
import MealItem from '@components/MealItem';

interface Props {
  length: number;
}

const MealListSkeleton = ({ length }: Props) => {
  const { columnQuantity } = useFilterColumnQuantity();

  return (
    <Styles.Container column={columnQuantity}>
      {Array.from({ length }).map((_, idx) => (
        <MealItem key={idx} />
      ))}
    </Styles.Container>
  );
};

export default MealListSkeleton;
