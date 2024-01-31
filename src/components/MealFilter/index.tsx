import Dropdown from '@components/Dropdown';
import {
  COLUMN_QUANTITY_TYPE,
  ColumnQuantityType,
  SORT_FILTER_TYPE,
  SortFilterType,
  useFilterColumnQuantity,
  useFilterSort,
  useFilterViewCount,
} from '../../store/filter';
import ViewCount from './ViewCount';
import * as Styles from './index.styles';
import { FormEvent } from 'react';

const MealFilter = () => {
  const { viewCount } = useFilterViewCount();
  const { setSort } = useFilterSort();
  const { setColumnQuantity } = useFilterColumnQuantity();

  const sortDropdownChangeHandler = (e: FormEvent<HTMLSelectElement>) => {
    setSort(e.currentTarget.value as SortFilterType);
  };

  const columnQuantityChangeHandler = (e: FormEvent<HTMLSelectElement>) => {
    setColumnQuantity(e.currentTarget.value as unknown as ColumnQuantityType);
  };

  return (
    <Styles.Container>
      <ViewCount current={viewCount.current} total={viewCount.total} />
      <div className="dropdown-box">
        <Dropdown
          onChange={columnQuantityChangeHandler}
          options={Object.values(COLUMN_QUANTITY_TYPE)}
        />
        <Dropdown onChange={sortDropdownChangeHandler} options={Object.values(SORT_FILTER_TYPE)} />
      </div>
    </Styles.Container>
  );
};

export default MealFilter;
