import { useAppSelector } from '../../hooks';
import { getError } from '../../store/main-data/main-data-selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);
  return (error) ? <div className='error-message'>{error}</div> : null;
}

export default ErrorMessage;
