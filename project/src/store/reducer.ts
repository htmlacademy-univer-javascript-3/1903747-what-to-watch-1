import { createReducer } from '@reduxjs/toolkit';
import { genres } from '../const';
import { Film, Films } from '../types/types';
import {
  changeGenreAction,
  loadPromoFilm,
  updateGenreFilms,
  increaseAmountToShow,
  loadSimilarFilms,
  resetAmountToShow,
  requireAuthorization,
  setIsPromoFilmLoading,
  setIsFilmsLoading,
  setIsFilmLoading,
  setError,
  loadFilm,
  loadReviews,
  setIsSimilarFilmsLoading
} from './action';
import { loadFilms } from './action';
import { AuthorizationStatus } from '../const';
import { Reviews } from '../types/review';

export type initialStateType = {
  films: {
    data: Films;
    isLoading: boolean;
  };
  promoFilm: {
    data: Film | null;
    isLoading: boolean;
  };
  currentFilm: {
    data: Film | null;
    reviews: Reviews;
    isLoading: boolean;
  };
  similarFilms: {
    data: Films | null;
    isLoading: boolean;
  };
  genreFilms: Films;
  genre: string;
  amountToShow: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  error: string | null;
};


const initialState: initialStateType = {
  films: {
    data: [],
    isLoading: true
  },
  promoFilm: {
    data: null,
    isLoading: true
  },
  currentFilm: {
    data: null,
    isLoading: true,
    reviews: [],
  },
  similarFilms: {
    data: null,
    isLoading: true,
  },
  genreFilms: [],
  genre: genres[0],
  amountToShow: 8,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenreAction, (state, { payload }) => {
    const newGenre = payload;
    state.genre = newGenre;
    state.genre === 'All genres' ? state.genreFilms = state.films.data : state.genreFilms = state.films.data.filter((film) => film.genre === state.genre);
  })
    .addCase(updateGenreFilms, (state) => {
      const films = state.films;
      state.genre === 'All genres' ? state.genreFilms = films.data : state.genreFilms = films.data.filter((film) => film.genre === state.genre);
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(increaseAmountToShow, (state) => {
      state.amountToShow = 16;
    })
    .addCase(resetAmountToShow, (state) => {
      state.amountToShow = 8;
    })
    .addCase(loadFilms, (state, action) => {
      const films = action.payload;
      state.films.data = films;
      state.genreFilms = films;
    })
    .addCase(loadFilm, (state, action) => {
      const film = action.payload;
      state.currentFilm.data = film;
    })
    .addCase(loadPromoFilm, (state, action) => {
      const film = action.payload;
      state.promoFilm.data = film;
    })
    .addCase(loadReviews, (state, action) => {
      const reviews = action.payload;
      state.currentFilm.reviews = reviews;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      const similarFilms = action.payload;
      state.similarFilms.data = similarFilms;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setIsFilmsLoading, (state, action) => {
      state.films.isLoading = action.payload;
    })
    .addCase(setIsFilmLoading, (state, action) => {
      state.currentFilm.isLoading = action.payload;
    })
    .addCase(setIsPromoFilmLoading, (state, action) => {
      state.promoFilm.isLoading = action.payload;
    })
    .addCase(setIsSimilarFilmsLoading, (state, action) => {
      state.similarFilms.isLoading = action.payload;
    });
});

export { reducer };
