import useMealsViewModel from '../../hooks/useMealsViewModel';
import MealItem from '@components/MealItem';
import * as Styles from './index.styles';
import { useFilterColumnQuantity } from '../../store/filter';

const MealList = () => {
  const { filteredMeals } = useMealsViewModel();
  const { columnQuantity } = useFilterColumnQuantity();

  return (
    <Styles.Container column={columnQuantity}>
      {filteredMeals.map((meal) => (
        <MealItem meal={meal} key={meal.idMeal} />
      ))}
    </Styles.Container>
  );
};

export default MealList;
