import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAmountToShow = (state: State): number => state[NameSpace.MainData].amountToShow;
export const getError = (state: State): string | null => state[NameSpace.MainData].error;
