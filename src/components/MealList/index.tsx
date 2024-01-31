import useMealsViewModel from '../../hooks/useMealsViewModel';
import MealItem from '@components/MealItem';

const MealList = () => {
  const { filteredMeals } = useMealsViewModel();

  return (
    <div>
      {filteredMeals.map((meal) => (
        <MealItem meal={meal} key={meal.idMeal} />
      ))}
    </div>
  );
};

export default MealList;
