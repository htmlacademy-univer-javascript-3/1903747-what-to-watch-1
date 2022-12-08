import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadFilm, loadFilms, loadPromoFilm, loadReviews, loadSimilarFilms, requireAuthorization, setError, setIsFilmLoading, setIsFilmsLoading, setIsPromoFilmLoading, setIsSimilarFilmsLoading } from './action';
import { Film, Films } from '../types/types';
import { store } from '.';
import { dropToken, saveToken } from '../services/token';
import { UserData, AuthData } from '../types/user-data';
import { ApiReview, Reviews } from '../types/review';

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
    dispatch(setIsFilmsLoading(true));
    const { data } = await api.get<Films>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setIsFilmsLoading(false));
  }
);

export const fetchFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/loadFilm',
  async (id, { dispatch, extra: api }) => {
    dispatch(setIsFilmLoading(true));
    const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
    dispatch(loadFilm(data));
    dispatch(setIsFilmLoading(false));
  }
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/loadPromoFilm',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsPromoFilmLoading(true));
    const { data } = await api.get<Film>(APIRoute.PromoFilm);
    dispatch(loadPromoFilm(data));
    dispatch(setIsPromoFilmLoading(false));
  }
);
export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/loadReviews',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    dispatch(loadReviews(data));
  }
);
export const fetchSimilarFilmsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/loadSimilarFilms',
  async (id, { dispatch, extra: api }) => {
    dispatch(setIsSimilarFilmsLoading(true));
    const { data } = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilarFilms(data));
    dispatch(setIsSimilarFilmsLoading(false));
  }
);
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));

    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const fetchPostReview = createAsyncThunk<void, ApiReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/postReview',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    await api.post(`${APIRoute.Reviews}/${id}`, { comment, rating });
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
