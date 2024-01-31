import useMealsViewModel from '../../hooks/useMealsViewModel';
import MealItem from '@components/MealItem';
import * as Styles from './index.styles';
import { useFilterColumnQuantity } from '../../store/filter';
import useInteractionObserver from '../../hooks/useInteractionObserver';
import { useEffect, useRef } from 'react';

const MealList = () => {
  const { viewMeals, increasePage } = useMealsViewModel();
  const { columnQuantity } = useFilterColumnQuantity();
  const observer = useRef(null);

  const [observe] = useInteractionObserver(increasePage);

  useEffect(() => {
    observe(observer.current!);
  }, []);

  return (
    <Styles.Container column={columnQuantity}>
      {viewMeals.map((meal) => (
        <MealItem meal={meal} key={meal.idMeal} />
      ))}
      <div ref={observer} />
    </Styles.Container>
  );
};

export default MealList;
