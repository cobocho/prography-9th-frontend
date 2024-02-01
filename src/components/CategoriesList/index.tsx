import Button from '@components/Button';
import * as Styles from './index.styles';
import { useGetAllCategories } from '../../api/category.api';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCategories } from '@store/filter';
import { useEffect, useMemo } from 'react';

const CategoriesList = () => {
  const { data: categories } = useGetAllCategories();

  const [searchParams] = useSearchParams();

  const { setCategories } = useCategories();

  const currentSearchParams = searchParams.get('category');

  const searchParamsArray = useMemo(() => {
    return currentSearchParams ? currentSearchParams.split(',') : [];
  }, [currentSearchParams]);

  useEffect(
    function changeCategory() {
      setCategories(searchParamsArray);
    },
    [currentSearchParams, searchParamsArray, setCategories],
  );

  return (
    <Styles.Container>
      {categories!.map(({ strCategory }) => {
        const newCategories = searchParamsArray.includes(strCategory)
          ? searchParamsArray.filter((category) => category !== strCategory)
          : [...searchParamsArray, strCategory];
        searchParams.set('category', newCategories.join(','));
        return (
          <li key={strCategory}>
            <Link to={`?${searchParams.toString()}`}>
              <Button color={searchParamsArray?.includes(strCategory) ? 'secondary' : 'primary'}>
                {strCategory}
              </Button>
            </Link>
          </li>
        );
      })}
    </Styles.Container>
  );
};

export default CategoriesList;
