import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, TIMEOUT_SHOW_ERROR } from '../../const';
import { MainData } from '../../types/state';

const initialState: MainData = {
  amountToShow : 8,
  error : null
};

export const mainData = createSlice({
  name: NameSpace.MainData,
  initialState,
  reducers: {
    setError : (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError : (state) => {
      setTimeout(() => { state.error = null; }, TIMEOUT_SHOW_ERROR);
    },
    resetAmountToShow : (state) => {
      state.amountToShow = 8;
    },
    increaseAmountToShow : (state) => {
      state.amountToShow = 16;
    }
  },
});

export const {setError, clearError, resetAmountToShow, increaseAmountToShow} = mainData.actions;
