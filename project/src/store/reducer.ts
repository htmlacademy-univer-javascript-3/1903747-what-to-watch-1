import { createReducer } from '@reduxjs/toolkit';
import { genres } from '../const';
import { changeGenreAction, updateGenreFilms, increaseAmountToShow, resetAmountToShow } from './action';
import { filmMocks } from '../mocks/films';

const initialState = {
  filmList: filmMocks,
  genreFilmList: filmMocks,
  genre: genres[0],
  amountToShow: 8
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenreAction, (state, { payload }) => {
    const newGenre = payload;
    state.genre = newGenre;
    state.genre === 'All genres' ? state.genreFilmList = state.filmList : state.genreFilmList = state.filmList.filter((film) => film.genre === state.genre);
  })
    .addCase(updateGenreFilms, (state) => {
      const films = state.filmList;
      state.genre === 'All genres' ? state.genreFilmList = films : state.genreFilmList = films.filter((film) => film.genre === state.genre);
    })
    .addCase(increaseAmountToShow, (state) => {
      state.amountToShow = 16;
    })
    .addCase(resetAmountToShow, (state) => {
      state.amountToShow = 8;
    });
});

export { reducer };
