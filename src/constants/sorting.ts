import { Cars } from '../types/cars';

export enum Sorting {
  Default = 'По умолчанию',
  YearRelease = 'Год выпуска',
  Price = 'Стоимость',
}

export type SortName = keyof typeof Sorting;

export const Comparator: { [key in SortName]: (a: Cars, b: Cars) => number } = {
  Default: () => 0,
  YearRelease: (a, b) => a.year - b.year,
  Price: (a, b) => a.price - b.price
}

