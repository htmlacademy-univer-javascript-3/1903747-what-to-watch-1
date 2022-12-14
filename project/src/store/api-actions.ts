import { createAsyncThunk, Store } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { Film, Films } from '../types/types';
import { dropToken, saveToken } from '../services/token';
import { UserData, AuthData } from '../types/user-data';
import { ApiReview, Reviews } from '../types/review';
import { ProcessErrorHandler } from '../services/process-error-handler';
import { AppDispatch, PostFavoriteStatus } from '../types/state';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  extra: AxiosInstance;
  store: Store;
}>(
  'films/loadFilms',
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<Films>(APIRoute.Films);
      return data;
    } catch {
      ProcessErrorHandler('Не удалось получить список фильмов');
      throw new Error();
    }
  }
);

export const fetchFilmAction = createAsyncThunk<Film, number, {
  extra: AxiosInstance;
}>(
  'films/loadFilm',
  async (id, { extra: api }) => {
    try {
      const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
      return data;
    } catch {
      ProcessErrorHandler('Не удалось загрузить фильм');
      throw new Error();
    }
  }
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  extra: AxiosInstance;
}>(
  'films/loadPromoFilm',
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<Film>(APIRoute.PromoFilm);
      return data;
    } catch {
      ProcessErrorHandler('Не удалось загрузить промо фильм');
      throw new Error();
    }


  }
);
export const fetchReviewsAction = createAsyncThunk<Reviews, number, {
  extra: AxiosInstance;
}>(
  'films/loadReviews',
  async (id, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    return data;
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, number, {
  extra: AxiosInstance;
}>(
  'films/loadSimilarFilms',
  async (id, { extra: api }) => {
    try {
      const { data } = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
      return data;
    } catch {
      ProcessErrorHandler('Не удалось получить список похожих фильмов');
      throw new Error();
    }

  }
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, {
  extra: AxiosInstance;
}>(
  'films/loadFavoriteFilms',
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<Films>(`${APIRoute.Favorite}`);
      return data;
    } catch {
      ProcessErrorHandler('Не удалось получить список похожих фильмов');
      throw new Error();
    }
  }
);

export const fetchPostFavoriteAction = createAsyncThunk<void, PostFavoriteStatus, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'films/postFavoriteFilm',
  async ({ id, isFavorite }, { dispatch, extra: api }) => {
    try {
      const favorite = isFavorite ? 1 : 0;
      await api.post(`${APIRoute.Favorite}/${id}/${favorite}`);
      dispatch(fetchFavoriteFilmsAction());
    } catch {
      ProcessErrorHandler('Не удалось отправить комментарий');
      throw new Error();
    }
  }
);

export const checkAuthAction = createAsyncThunk<string, undefined, {
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data: { avatarUrl } } = await api.get<UserData>(APIRoute.Login);
    return avatarUrl;
  }
);

export const fetchPostReview = createAsyncThunk<void, ApiReview, {
  extra: AxiosInstance;
}>(
  'films/postReview',
  async ({ id, comment, rating }, { extra: api }) => {
    try {
      await api.post(`${APIRoute.Reviews}/${id}`, { comment, rating });
    } catch {
      ProcessErrorHandler('Не удалось отправить комментарий');
      throw new Error();
    }
  }
);

export const loginAction = createAsyncThunk<string, AuthData, {
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    try {
      const { data: { token, avatarUrl } } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      return avatarUrl;
    } catch {
      ProcessErrorHandler('Не удалось авторизоватсья');
      throw new Error();
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
