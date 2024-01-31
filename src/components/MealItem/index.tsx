import { Meal } from '../../types/meal';

interface Props {
  meal: Meal;
}

const MealItem = ({ meal }: Props) => {
  return <div>{meal.strMeal}</div>;
};

export default MealItem;
