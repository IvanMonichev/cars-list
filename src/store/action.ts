import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Cars } from '../types/cars';
import { ApiRoute } from '../constants/api-route';
import { AxiosInstance } from 'axios';
import { SortName } from '../constants/sorting';

type Extra = {
  api: AxiosInstance;
}

export const Action = {
  SET_SORTING: 'sorting/set',
  FETCH_CARS: 'cars/fetch',
  DELETE_CARS: 'card/delete'
}

export const setSorting = createAction<SortName>(Action.SET_SORTING);

export const deleteCars = createAction<Number>(Action.DELETE_CARS);

export const fetchCars = createAsyncThunk<Cars[], undefined, { extra: Extra }>(
  Action.FETCH_CARS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Cars[]>(ApiRoute.Cars);

    return data;
  }
)
