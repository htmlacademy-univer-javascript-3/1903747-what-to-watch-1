import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAmountToShow = (state: State): number => state[NameSpace.MainData].amountToShow;
export const getError = (state: State): string | null => state[NameSpace.MainData].error;

export const getIsPlaying = (state: State): boolean => state[NameSpace.MainData].player.isPlaying;
export const getPlayerToggler = (state: State): number => state[NameSpace.MainData].player.playerToggler;
export const getTimeLeft = (state: State): string => state[NameSpace.MainData].player.timeLeft;

export const getFullscreenStatus = (state: State): boolean=> state[NameSpace.MainData].player.fullscreenStatus;
