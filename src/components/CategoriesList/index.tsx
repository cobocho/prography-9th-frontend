import Button from '@components/Button';
import * as Styles from './index.styles';
import { useGetAllCategories } from '../../api/category.api';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCategories } from '@store/filter';
import { useCallback, useEffect, useMemo } from 'react';
import { Category } from '../../types/category';

const CategoriesList = () => {
  const { data: categories } = useGetAllCategories();

  const [searchParams] = useSearchParams();

  const { setCategories } = useCategories();

  const currentSearchParams = searchParams.get('category');

  const navigate = useNavigate();

  const searchParamsArray = useMemo(
    () => (currentSearchParams ? currentSearchParams.split(',') : []),
    [currentSearchParams],
  );

  const clickHandler = useCallback(
    (strCategory: Category['strCategory']) => {
      const newCategories = searchParamsArray.includes(strCategory)
        ? searchParamsArray.filter((category) => category !== strCategory)
        : [...searchParamsArray, strCategory];
      searchParams.set('category', newCategories.join(','));
      navigate(`?${searchParams}`);
    },
    [navigate, searchParams, searchParamsArray],
  );

  useEffect(
    function changeCategory() {
      setCategories(searchParamsArray);
    },
    [currentSearchParams, searchParamsArray, setCategories],
  );

  return (
    <Styles.Container>
      {categories!.map(({ strCategory }) => (
        <li key={strCategory}>
          <Button
            onClick={() => clickHandler(strCategory)}
            color={searchParamsArray?.includes(strCategory) ? 'secondary' : 'primary'}
          >
            {strCategory}
          </Button>
        </li>
      ))}
    </Styles.Container>
  );
};

export default CategoriesList;
