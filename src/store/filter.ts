import { create } from 'zustand';
import { Category } from '../types/category';
import { devtools } from 'zustand/middleware';

export const SORT_FILTER_TYPE = {
  new: 'new',
  asc: 'asc',
  desc: 'desc',
} as const;

export type SortFilterType = (typeof SORT_FILTER_TYPE)[keyof typeof SORT_FILTER_TYPE];

interface FilterStore {
  viewCount: {
    current: number;
    total: number;
  };
  selectedCategories: Category['strCategory'][];
  sort: SortFilterType;
  setCurrentViewCount: (count: number) => void;
  setTotalViewCount: (count: number) => void;
  setCategories: (categories: Category['strCategory'][]) => void;
  setSort: (sortType: SortFilterType) => void;
}

const useFilterStore = create<FilterStore>()(
  devtools((set) => ({
    viewCount: {
      current: 0,
      total: 0,
    },
    selectedCategories: [],
    sort: SORT_FILTER_TYPE.new,
    setCurrentViewCount: (count) => {
      set((prev) => ({ ...prev, viewCount: { current: count, total: prev.viewCount.total } }));
    },
    setTotalViewCount: (count) => {
      set((prev) => ({
        ...prev,
        viewCount: { current: prev.viewCount.current, total: count },
      }));
    },
    setCategories: (selectedCategories) => {
      set((prev) => ({ ...prev, selectedCategories }));
    },
    setSort: (sort) => {
      set((prev) => ({ ...prev, sort }));
    },
  })),
);

export const useFilterViewCount = () => {
  const { setCurrentViewCount, setTotalViewCount, viewCount } = useFilterStore();
  return { setCurrentViewCount, setTotalViewCount, viewCount };
};

export const useFilterSort = () => {
  const { setSort, sort } = useFilterStore();
  return { setSort, sort };
};

export const useCategories = () => {
  const { setCategories, selectedCategories } = useFilterStore();
  return { setCategories, selectedCategories };
};
