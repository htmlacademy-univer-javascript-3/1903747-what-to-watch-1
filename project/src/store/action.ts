import { createAction } 	from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Films } from '../types/types';

export const changeGenreAction = createAction<string>('films/changeGenre');
export const updateGenreFilms = createAction('films/updateGenreFilms');
export const increaseAmountToShow = createAction('films/increaseAmountToShow');
export const resetAmountToShow = createAction('films/resetAmountToShow');
export const loadFilms = createAction<Films>('films/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('films/setError');
export const setIsDataLoaded = createAction<boolean>('films/setIsDataLoaded');

