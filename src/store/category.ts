import { create } from 'zustand';
import { Category } from '../types/category';
import { devtools } from 'zustand/middleware';

interface CategoryStore {
  selectedCategories: Category['strCategory'][];
  toggleCategory: (strCategory: Category['strCategory']) => void;
}

const useCategoryStore = create<CategoryStore>()(
  devtools((set) => ({
    selectedCategories: [],
    toggleCategory: (strCategory) => {
      set((prev) => {
        if (prev.selectedCategories.includes(strCategory)) {
          return {
            ...prev,
            selectedCategories: prev.selectedCategories.filter((id) => id !== strCategory),
          };
        }
        return {
          ...prev,
          selectedCategories: [...prev.selectedCategories, strCategory],
        };
      });
    },
  })),
);

export const useToggleCategory = () => useCategoryStore((state) => state.toggleCategory);

export const useSelectedCategories = () => useCategoryStore((state) => state.selectedCategories);
