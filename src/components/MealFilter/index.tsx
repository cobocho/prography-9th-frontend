import Dropdown from '@components/Dropdown';
import {
  COLUMN_QUANTITY_TYPE,
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
import { FormEvent, useCallback, useLayoutEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { device } from '@styles/media';
import { pixelToNumber } from '../../utils/converter';

const MealFilter = () => {
  const { viewCount } = useFilterViewCount();
  const { sort, setSort } = useFilterSort();
  const { columnQuantity, setColumnQuantity } = useFilterColumnQuantity();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const sortDropdownChangeHandler = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      setSort(e.currentTarget.value as SortFilterType);

      const existingFilter = searchParams.get('filter');

      if (existingFilter) {
        searchParams.set('filter', e.currentTarget.value);
      } else {
        searchParams.append('filter', e.currentTarget.value);
      }

      navigate(`?${searchParams.toString()}`);
    },
    [navigate, searchParams, setSort],
  );

  const columnQuantityChangeHandler = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      setColumnQuantity(e.currentTarget.value as ColumnQuantityType);
    },
    [setColumnQuantity],
  );

  useLayoutEffect(
    function setDefaultFilterType() {
      const existingFilter = searchParams.get('filter');

      if (existingFilter) {
        setSort(existingFilter as SortFilterType);
      }

      const changeColumnQuantityByWindowSize = () => {
        if (window.innerWidth <= pixelToNumber(device.desktop)) {
          setColumnQuantity(COLUMN_QUANTITY_TYPE.one);
        } else {
          setColumnQuantity(COLUMN_QUANTITY_TYPE.four);
        }
      };

      changeColumnQuantityByWindowSize();

      window.addEventListener('resize', changeColumnQuantityByWindowSize);

      return () => {
        window.removeEventListener('resize', changeColumnQuantityByWindowSize);
      };
    },
    [searchParams, setColumnQuantity, setSort],
  );

  return (
    <Styles.Container>
      <ViewCount current={viewCount.current} total={viewCount.total} />
      <div className="dropdown-box">
        <Dropdown
          className="column-quantity"
          value={columnQuantity}
          onChange={columnQuantityChangeHandler}
          options={columnQuantityFilterList}
        />
        <Dropdown
          className="sort"
          value={sort}
          onChange={sortDropdownChangeHandler}
          options={sortFilterList}
        />
      </div>
    </Styles.Container>
  );
};

export default MealFilter;
