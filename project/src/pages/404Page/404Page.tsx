import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { resetAmountToShow } from '../../store/action';
import styles from './Page404-styles.module.css';

function Page404(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(resetAmountToShow());
  return (
    <div className={styles.page404__container}>
      <h1 className={styles.error__text}>Ошибка 404</h1>
      <p>Страницы не существует или она была удалена</p>
      <Link type='button' className={styles.error__button} to={'/'}>Вернуться на главную страницу</Link>
    </div>
  );
}

export default Page404;
