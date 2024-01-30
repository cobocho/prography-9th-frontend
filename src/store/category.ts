import { create } from 'zustand';
import { Category } from '../types/category';
import { devtools } from 'zustand/middleware';

interface CategoryStore {
  selectedCategories: Category['idCategory'][];
  toggleCategory: (idCategory: Category['idCategory']) => void;
}

const useCategoryStore = create<CategoryStore>()(
  devtools((set) => ({
    selectedCategories: [],
    toggleCategory: (idCategory) => {
      set((prev) => {
        if (prev.selectedCategories.includes(idCategory)) {
          return {
            ...prev,
            selectedCategories: prev.selectedCategories.filter((id) => id !== idCategory),
          };
        }
        return {
          ...prev,
          selectedCategories: [...prev.selectedCategories, idCategory],
        };
      });
    },
  })),
);

export const useToggleCategory = () => useCategoryStore((state) => state.toggleCategory);

export const useSelectedCategories = () => useCategoryStore((state) => state.selectedCategories);
