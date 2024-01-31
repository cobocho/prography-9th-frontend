import Dropdown from '@components/Dropdown';
import {
  SORT_FILTER_TYPE,
  SortFilterType,
  useFilterSort,
  useFilterViewCount,
} from '../../store/filter';
import ViewCount from './ViewCount';
import * as Styles from './index.styles';
import { FormEvent } from 'react';

const MealFilter = () => {
  const { current, total } = useFilterViewCount();
  const { setSort } = useFilterSort();

  const dropdownChangeHandler = (e: FormEvent<HTMLSelectElement>) => {
    setSort(e.currentTarget.value as SortFilterType);
  };

  return (
    <Styles.Container>
      <ViewCount current={current} total={total} />
      <Dropdown onChange={dropdownChangeHandler} options={Object.values(SORT_FILTER_TYPE)} />
    </Styles.Container>
  );
};

export default MealFilter;
