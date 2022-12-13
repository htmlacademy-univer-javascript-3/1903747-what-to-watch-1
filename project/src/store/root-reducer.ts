import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmData } from './film-process/film-process';
import { mainData } from './main-data/main-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.MainData]: mainData.reducer
});
