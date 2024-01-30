import Button from '@components/Button';
import * as Styles from './index.styles';
import { useGetAllCategories } from '../../api/category.api';

const CategoriesList = () => {
  const { data: categories } = useGetAllCategories();

  return (
    <Styles.Container>
      {categories!.map((category) => (
        <Button key={category.idCategory}>{category.strCategory}</Button>
      ))}
    </Styles.Container>
  );
};

export default CategoriesList;
