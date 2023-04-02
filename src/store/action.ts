import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Cars, UpdateCar } from '../types/cars';
import { ApiRoute } from '../constants/api-route';
import { AxiosInstance } from 'axios';
import { SortName } from '../constants/sorting';

type Extra = {
  api: AxiosInstance;
}

export const Action = {
  SET_SORTING: 'sorting/set',
  FETCH_CARS: 'cars/fetch',
  DELETE_CAR: 'car/delete',
  UPDATE_CAR: 'car/update',
  OPEN_POPUP: 'popup/open',
  SET_OPENED_ID_CAR: 'opened-id-car/set',
}

export const setSorting = createAction<SortName>(Action.SET_SORTING);

export const setIdOpenedCar = createAction<number>(Action.SET_OPENED_ID_CAR);

export const deleteCar = createAction<number>(Action.DELETE_CAR);
export const updateCar = createAction<Cars>(Action.UPDATE_CAR);

export const openPopup = createAction<boolean>(Action.OPEN_POPUP);

export const fetchCars = createAsyncThunk<Cars[], undefined, { extra: Extra }>(
  Action.FETCH_CARS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Cars[]>(ApiRoute.Cars);

    return data;
  }
)
