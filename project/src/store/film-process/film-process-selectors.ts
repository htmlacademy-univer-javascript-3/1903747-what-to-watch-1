import { NameSpace } from '../../const';
import { Reviews } from '../../types/review';
import { State } from '../../types/state';
import { Film, Films } from '../../types/types';

export const getFilms = (state: State): Films=> state[NameSpace.Film].films.data;
export const getFilmsLoading = (state: State): boolean => state[NameSpace.Film].films.isLoading;

export const getFilm = (state: State): Film | null => state[NameSpace.Film].currentFilm.data;
export const getFilmLoading = (state: State): boolean | null => state[NameSpace.Film].currentFilm.isLoading;
export const getReviews = (state: State): Reviews => state[NameSpace.Film].currentFilm.reviews;

export const getSimilar = (state: State): Films | null => state[NameSpace.Film].similarFilms.data;
export const getSimilarLoading = (state: State): boolean => state[NameSpace.Film].similarFilms.isLoading;

export const getPromo = (state: State): Film | null => state[NameSpace.Film].promoFilm.data;
export const getPromoLoading = (state: State): boolean => state[NameSpace.Film].promoFilm.isLoading;

export const getCurrentGenre = (state: State): string => state[NameSpace.Film].currentGenre;
export const getGenres = (state: State): string[] | null => state[NameSpace.Film].genres;
