import { createAsyncThunk } from '@reduxjs/toolkit';
import { Cars } from '../types/cars';
import { Action } from '../constants/action';
import { ApiRoute } from '../constants/api-route';
import { AxiosInstance } from 'axios';

type Extra = {
  api: AxiosInstance;
}

export const fetchCars = createAsyncThunk<Cars[], undefined, { extra: Extra }>(
  Action.FETCH_CARS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Cars[]>(ApiRoute.Cars);

    return data;
  }
)
