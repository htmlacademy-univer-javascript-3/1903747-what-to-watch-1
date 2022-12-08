import { createAction } 	from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Review, Reviews } from '../types/review';
import { Film, Films } from '../types/types';

export const changeGenreAction = createAction<string>('films/changeGenre');
export const updateGenreFilms = createAction('films/updateGenreFilms');
export const increaseAmountToShow = createAction('films/increaseAmountToShow');
export const resetAmountToShow = createAction('films/resetAmountToShow');

export const loadFilms = createAction<Films>('films/loadFilms');
export const loadFilm = createAction<Film>('films/loadFilm');
export const loadPromoFilm = createAction<Film>('films/loadPromoFilm');
export const loadReviews = createAction<Reviews>('films/loadReviews');
export const loadSimilarFilms = createAction<Films>('films/loadSimilarFilms');

export const postReview = createAction<Review>('films/postReview');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('films/setError');
export const setIsFilmsLoading = createAction<boolean>('films/setIsFilmsLoading');
export const setIsFilmLoading = createAction<boolean>('films/setIsFilmLoading');
export const setIsPromoFilmLoading = createAction<boolean>('films/setIsPromoFilmLoading');
export const setIsSimilarFilmsLoading = createAction<boolean>('films/setIsSimilarFilmsLoading');


