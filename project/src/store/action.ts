import { createAction } 	from '@reduxjs/toolkit';

export const changeGenreAction = createAction<string>('films/changeGenre');
export const updateGenreFilms = createAction('films/updateGenreFilms');
