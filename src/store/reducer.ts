import { createReducer } from '@reduxjs/toolkit';
import { Cars } from '../types/cars';
import { fetchCars } from './action';

type State = {
  cars: Cars[];
}

const initialState: State = {
  cars: [],
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
    })
});
