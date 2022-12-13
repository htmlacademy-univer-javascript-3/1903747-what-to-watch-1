import { useAppDispatch } from '../hooks';
import { setError, clearError } from '../store/main-data/main-data';

export const ProcessErrorHandler = (message: string): void => {
  const Dispatch = useAppDispatch();
  Dispatch(setError(message));
  Dispatch(clearError());
};
