import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { genres, NameSpace } from '../../const';
import { FilmData } from '../../types/state';
import { sortByAlpabet } from '../../utils/math-utils';
import { fetchFavoriteFilmsAction, fetchFilmAction, fetchFilmsAction, fetchPostFavoriteAction, fetchPromoFilmAction, fetchReviewsAction, fetchSimilarFilmsAction } from '../api-actions';

const initialState: FilmData = {
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
  favoriteFilms: {
    data: null,
    isLoading: true
  },
  currentGenre: genres[0],
  genres: null,
};

export const filmData = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.currentFilm.isLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.currentFilm.data = action.payload;
        state.currentFilm.isLoading = false;
      })
      .addCase(fetchFilmsAction.pending, (state) => {
        state.films.isLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        const films = action.payload;
        state.films.data = films;
        state.films.isLoading = false;
        if (!state.genres) {
          const notFilteredGenres: string[] = [];
          films.map((film, key) => { notFilteredGenres[key] = film.genre; });
          state.genres = [genres[0], ...sortByAlpabet([...new Set(notFilteredGenres)])];
        }
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.promoFilm.isLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm.data = action.payload;
        state.promoFilm.isLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.similarFilms.isLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms.data = action.payload;
        state.similarFilms.isLoading = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.currentFilm.reviews = action.payload;
      })
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.favoriteFilms.isLoading = true;
      })
      .addCase(fetchPostFavoriteAction.pending, (state) => {
        state.favoriteFilms.isLoading = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms.data = action.payload;
        state.favoriteFilms.isLoading = false;
      });
  }
});

export const { setGenre } = filmData.actions;
