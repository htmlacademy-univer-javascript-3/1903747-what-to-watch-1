import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, TIMEOUT_SHOW_ERROR } from '../../const';
import { MainData } from '../../types/state';

const initialState: MainData = {
  amountToShow: 8,
  error: null,
  player: {
    isPlaying: true,
    timeLeft: '00:00:00',
    playerToggler: 0,
    fullscreenStatus: false
  }
};

export const mainData = createSlice({
  name: NameSpace.MainData,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      setTimeout(() => { state.error = null; }, TIMEOUT_SHOW_ERROR);
    },
    resetAmountToShow: (state) => {
      state.amountToShow = 8;
    },
    increaseAmountToShow: (state) => {
      state.amountToShow = 16;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.player.isPlaying = action.payload;
    },
    setTimeLeft: (state, action: PayloadAction<string>) => {
      state.player.timeLeft = action.payload;
    },
    setPlayerToggler: (state, action: PayloadAction<number>) => {
      state.player.playerToggler = action.payload;
    },
    setFullscreenStatus: (state, action: PayloadAction<boolean>) => {
      state.player.fullscreenStatus = action.payload;
    },
  },
});

export const { setError, clearError, resetAmountToShow, increaseAmountToShow,
  setIsPlaying, setTimeLeft, setPlayerToggler, setFullscreenStatus } = mainData.actions;
