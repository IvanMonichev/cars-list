import { createReducer } from '@reduxjs/toolkit';
import { Cars } from '../types/cars';
import { fetchCars, setSorting } from './action';
import { SortName } from '../constants/sorting';

type State = {
  cars: Cars[];
  sorting: SortName;
  isCarsLoading: boolean;
}

const initialState: State = {
  cars: [],
  sorting: 'Default',
  isCarsLoading: false
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCars.pending, (state) => {
      state.isCarsLoading = true;
    })
    .addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.isCarsLoading = false;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
});
