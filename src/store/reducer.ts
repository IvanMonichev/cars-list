import { createReducer } from '@reduxjs/toolkit';
import { Cars } from '../types/cars';
import { deleteCar, fetchCars, openPopup, setIdOpenedCar, setSorting, updateCar } from './action';
import { SortName } from '../constants/sorting';

type State = {
  cars: Cars[];
  sorting: SortName;
  isCarsLoading: boolean;
  isPopupOpened: boolean;
  idOpenedCar: number;
}

const initialState: State = {
  cars: [],
  sorting: 'Default',
  isCarsLoading: false,
  isPopupOpened: false,
  idOpenedCar: 1,
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
    .addCase(deleteCar, (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    })
    .addCase(updateCar, (state, action) => {
      state.cars.forEach((car) => {
        if (car.id === state.idOpenedCar) {
          car.name = action.payload.name;
          car.model = action.payload.model;
          car.price = action.payload.price;
        }
      })
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setIdOpenedCar, (state, action) => {
      state.idOpenedCar = action.payload;
    })
    .addCase(openPopup, (state, action) => {
      state.isPopupOpened = action.payload;
    })
});
