import { createReducer } from '@reduxjs/toolkit';
import { Cars } from '../types/cars';
import { fetchCars, setSorting } from './action';
import { SortName } from '../constants/sorting';

type State = {
  cars: Cars[];
  sorting: SortName;
}

const initialState: State = {
  cars: [],
  sorting: 'Default'
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
});
