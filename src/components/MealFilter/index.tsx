import Dropdown from '@components/Dropdown';
import {
  ColumnQuantityType,
  SortFilterType,
  columnQuantityFilterList,
  sortFilterList,
  useFilterColumnQuantity,
  useFilterSort,
  useFilterViewCount,
} from '@store/filter';
import ViewCount from './ViewCount';
import * as Styles from './index.styles';
import { FormEvent, useLayoutEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const MealFilter = () => {
  const { viewCount } = useFilterViewCount();
  const { sort, setSort } = useFilterSort();
  const { setColumnQuantity } = useFilterColumnQuantity();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const sortDropdownChangeHandler = (e: FormEvent<HTMLSelectElement>) => {
    setSort(e.currentTarget.value as SortFilterType);

    const existingFilter = searchParams.get('filter');

    if (existingFilter) {
      searchParams.set('filter', e.currentTarget.value);
    } else {
      searchParams.append('filter', e.currentTarget.value);
    }

    navigate(`?${searchParams.toString()}`);
  };

  const columnQuantityChangeHandler = (e: FormEvent<HTMLSelectElement>) => {
    setColumnQuantity(e.currentTarget.value as ColumnQuantityType);
  };

  useLayoutEffect(
    function setDefaultSortType() {
      const existingFilter = searchParams.get('filter');

      if (existingFilter) {
        setSort(existingFilter as SortFilterType);
      }
    },
    [searchParams, setSort],
  );

  return (
    <Styles.Container>
      <ViewCount current={viewCount.current} total={viewCount.total} />
      <div className="dropdown-box">
        <Dropdown onChange={columnQuantityChangeHandler} options={columnQuantityFilterList} />
        <Dropdown value={sort} onChange={sortDropdownChangeHandler} options={sortFilterList} />
      </div>
    </Styles.Container>
  );
};

export default MealFilter;
