import Button from '@components/Button';
import * as Styles from './index.styles';
import { useGetAllCategories } from '../../api/category.api';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CategoriesList = () => {
  const { data: categories } = useGetAllCategories();
  const [searchParams] = useSearchParams();
  const selectedCategories = searchParams.get('category')
    ? searchParams.get('category')!.split(',')
    : [];

  return (
    <Styles.Container>
      {categories!.map(({ strCategory }) => {
        const newCategories = selectedCategories.includes(strCategory)
          ? selectedCategories.filter((category) => category !== strCategory)
          : [...selectedCategories, strCategory];
        searchParams.set('category', newCategories.join(','));
        return (
          <Link to={`?${searchParams.toString()}`} key={strCategory}>
            <Button color={selectedCategories?.includes(strCategory) ? 'secondary' : 'primary'}>
              {strCategory}
            </Button>
          </Link>
        );
      })}
    </Styles.Container>
  );
};

export default CategoriesList;
