import Button from '@components/Button';
import * as Styles from './index.styles';
import { useGetAllCategories } from '../../api/category.api';
import { Category } from '../../types/category';
import { useSelectedCategories, useToggleCategory } from '../../store/category';

const CategoriesList = () => {
  const { data: categories } = useGetAllCategories();

  const toggleCategory = useToggleCategory();

  const selectedCategories = useSelectedCategories();

  const clickHandler = (idCategory: Category['idCategory']) => {
    toggleCategory(idCategory);
  };

  return (
    <Styles.Container>
      {categories!.map((category) => (
        <Button
          color={selectedCategories.includes(category.idCategory) ? 'secondary' : 'primary'}
          onClick={() => clickHandler(category.idCategory)}
          key={category.idCategory}
        >
          {category.strCategory}
        </Button>
      ))}
    </Styles.Container>
  );
};

export default CategoriesList;
