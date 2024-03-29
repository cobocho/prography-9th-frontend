import { Meal } from '../../types/meal';
import * as Styles from './index.styles';

interface Props {
  meal: Meal;
}

const MealItem = ({ meal }: Props) => {
  return (
    <Styles.Container>
      <Styles.Thumbnail loading="lazy" src={meal.strMealThumb} />
      <Styles.Info>
        <span>{meal.strMeal}</span>
      </Styles.Info>
    </Styles.Container>
  );
};

export default MealItem;
