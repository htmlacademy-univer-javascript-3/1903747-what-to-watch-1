import { createReducer } from '@reduxjs/toolkit';
import { genres } from '../const';
import { Film, Films } from '../types/types';
import { changeGenreAction, updateGenreFilms, increaseAmountToShow, resetAmountToShow, requireAuthorization, setIsDataLoaded } from './action';
import { loadFilms } from './action';
import { AuthorizationStatus } from '../const';

export type initialStateType = {
  films: Films;
  headerFilm: Film | null;
  isFilmsLoading: boolean;
  genreFilms: Films;
  genre: string;
  amountToShow: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  error: string | null;
};


const initialState: initialStateType = {
  films: [],
  headerFilm: null,
  isFilmsLoading: false,
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
    state.genre === 'All genres' ? state.genreFilms = state.films : state.genreFilms = state.films.filter((film) => film.genre === state.genre);
  })
    .addCase(updateGenreFilms, (state) => {
      const films = state.films;
      state.genre === 'All genres' ? state.genreFilms = films : state.genreFilms = films.filter((film) => film.genre === state.genre);
    })
    .addCase(loadFilms, (state, action) => {
      const films = action.payload;
      state.films = films;
      state.headerFilm = films[0];
      state.genreFilms = films;
    })
    .addCase(increaseAmountToShow, (state) => {
      state.amountToShow = 16;
    })
    .addCase(resetAmountToShow, (state) => {
      state.amountToShow = 8;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setIsDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export { reducer };
