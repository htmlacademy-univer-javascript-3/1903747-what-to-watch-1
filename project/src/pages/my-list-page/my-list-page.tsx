import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import AuthHeader from '../../components/header/user-block-auth';
import LoadingScreen from '../../components/loading-components/loading-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getFavoriteFilms, getFavoriteLoading } from '../../store/film-process/film-process-selectors';
import { resetAmountToShow } from '../../store/main-data/main-data';

function MyListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(resetAmountToShow());

  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isLoading = useAppSelector(getFavoriteLoading);

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to='/' className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list
          <span className="user-page__film-count">{favoriteFilms?.length}</span>
        </h1>
        <AuthHeader />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favoriteFilms} notFoundMessage={'You haven`t added films in favorite list yet'} />
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;

