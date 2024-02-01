import useMealsViewModel from '../../hooks/useMealsViewModel';
import MealItem from '@components/MealItem';
import * as Styles from './index.styles';
import { useFilterColumnQuantity } from '@store/filter';
import useInteractionObserver from '../../hooks/useInteractionObserver';
import { useEffect, useRef } from 'react';

const MealList = () => {
  const { viewMeals, increasePage } = useMealsViewModel(20);

  const { columnQuantity } = useFilterColumnQuantity();

  const observer = useRef(null);

  const [observe] = useInteractionObserver(increasePage);

  useEffect(
    function setInfiniteScrollObserver() {
      observe(observer.current!);
    },
    [observe],
  );

  return (
    <Styles.Container column={columnQuantity}>
      {viewMeals.map((meal) => (
        <li key={meal.idMeal}>
          <MealItem meal={meal} />
        </li>
      ))}
      <div ref={observer} />
    </Styles.Container>
  );
};

export default MealList;
