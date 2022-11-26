import { Link } from 'react-router-dom';
import FilmList from '../../components/film-list/FilmList';
import Footer from '../../components/footer/footer';
import GenrePanel from '../../components/genre-nav-panel/GenreNavPanel';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import ShowMoreButton from '../../components/show-more-button/ShowMoreButton';
import LoadingMain from '../../components/loading-screen/loading-main/loading-main';
import { AppRouteProps, AuthorizationStatus } from '../../const';

function MainPage(): JSX.Element {
  const isLoading = useAppSelector((state) => state.isDataLoaded);

  const genreFilms = useAppSelector((state) => state.genreFilms);
  let headerFilm = useAppSelector((state) => state.headerFilm);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  if (headerFilm === null) { headerFilm = genreFilms[0]; }

  const amountToShow = useAppSelector((state) => state.amountToShow);
  let isButtonHidden = false;
  if (genreFilms.length < 9 || amountToShow > 8) {
    isButtonHidden = true;
  }
  if (isLoading) {
    return (
      <LoadingMain />
    );
  }
  return (
    <div className="container">
      <section className="film-card">
        <div className="film-card__bg">
          <img src={headerFilm.backgroundImage} alt={headerFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={headerFilm.posterImage} alt={`${headerFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{headerFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{headerFilm.genre}</span>
                <span className="film-card__year">{headerFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${headerFilm.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={authStatus === AuthorizationStatus.Auth ? AppRouteProps.MyList : AppRouteProps.SignIn} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  {authStatus === AuthorizationStatus.Auth ? <span className="film-card__count">9</span> : ''}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenrePanel />
          {<FilmList films={genreFilms} amountToShow={amountToShow} />}
          {isButtonHidden ? '' : <ShowMoreButton />}
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default MainPage;

