import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { loadFilms, setError, setIsDataLoaded } from './action';
import { Films } from '../types/types';
import { store } from '.';

export const clearErrorAction = createAsyncThunk(
  'films/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/loadFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsDataLoaded(true));
    const { data } = await api.get<Films>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setIsDataLoaded(false));
  }
);
