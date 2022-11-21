import { createAction } 	from '@reduxjs/toolkit';

export const changeGenreAction = createAction<string>('films/changeGenre');
export const updateGenreFilms = createAction('films/updateGenreFilms');
export const increaseAmountToShow = createAction('films/increaseAmountToShow');
export const resetAmountToShow = createAction('films/resetAmountToShow');
