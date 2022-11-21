import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { resetAmountToShow } from '../../store/action';

function Page404(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(resetAmountToShow());
  return (
    <div>
      <h1 className='page-404_main-text'>Ошибка 404</h1>
      <small>Страницы не существует или она была удалена</small>
      <Link to={'/'}>Вернуться на главну страницу</Link>
    </div>
  );
}

export default Page404;
