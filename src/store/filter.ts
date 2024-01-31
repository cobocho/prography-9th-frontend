import { create } from 'zustand';
import { Category } from '../types/category';
import { devtools } from 'zustand/middleware';
import { DropdownOption } from '@components/Dropdown';

export const SORT_FILTER_TYPE = {
  new: 'new',
  asc: 'asc',
  desc: 'desc',
} as const;

export type SortFilterType = (typeof SORT_FILTER_TYPE)[keyof typeof SORT_FILTER_TYPE];

export interface SortItemType extends DropdownOption {
  value: SortFilterType;
}

export const sortFilterList: SortItemType[] = [
  {
    value: 'new',
    displayName: '최신순',
  },
  {
    value: 'asc',
    displayName: '이름 오름차순',
  },
  {
    value: 'desc',
    displayName: '이름 내림차순',
  },
];

export const COLUMN_QUANTITY_TYPE = {
  four: '4',
  two: '2',
  one: '1',
} as const;

export type ColumnQuantityType = (typeof COLUMN_QUANTITY_TYPE)[keyof typeof COLUMN_QUANTITY_TYPE];

interface ColumnQuantityItemType extends DropdownOption {
  value: ColumnQuantityType;
}

export const columnQuantityFilterList: ColumnQuantityItemType[] = [
  {
    value: '4',
    displayName: '4개씩 보기',
  },
  {
    value: '2',
    displayName: '2개씩 보기',
  },
];

interface FilterStore {
  viewCount: {
    current: number;
    total: number;
  };
  columnQuantity: ColumnQuantityType;
  selectedCategories: Category['strCategory'][];
  sort: SortFilterType;
  setCurrentViewCount: (count: number) => void;
  setColumnQuantity: (quantity: ColumnQuantityType) => void;
  setTotalViewCount: (count: number) => void;
  setCategories: (categories: Category['strCategory'][]) => void;
  setSort: (sortType: SortFilterType) => void;
}

const useFilterStore = create<FilterStore>()(
  devtools((set) => {
    return {
      viewCount: {
        current: 0,
        total: 0,
      },
      columnQuantity: COLUMN_QUANTITY_TYPE.four,
      selectedCategories: [],
      sort: SORT_FILTER_TYPE.new,
      setCurrentViewCount: (count) => {
        set((prev) => ({ ...prev, viewCount: { current: count, total: prev.viewCount.total } }));
      },
      setColumnQuantity: (quantity) => {
        set((prev) => ({ ...prev, columnQuantity: quantity }));
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
    };
  }),
);

export const useFilterColumnQuantity = () => {
  const { setColumnQuantity, columnQuantity } = useFilterStore();
  return { setColumnQuantity, columnQuantity };
};

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
