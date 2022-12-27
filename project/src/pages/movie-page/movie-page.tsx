import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Page404 from '../not-found-page/not-found-page';
import Header from '../../components/header/header';
import FilmTabs from '../../components/film-tabs/film-tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../../components/loading-components/loading-screen';
import { AuthorizationStatus } from '../../const';
import { fetchFavoriteFilmsAction, fetchFilmAction, fetchReviewsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import FilmList from '../../components/film-list/film-list';
import AddReviewButton from '../../components/add-review-button/add-review-button';
import { getAuthStatus } from '../../store/user-process/user-process-selectors';
import { getFilm, getFilmLoading, getSimilar, getSimilarLoading } from '../../store/film-process/film-process-selectors';
import { resetAmountToShow } from '../../store/main-data/main-data';
import MyListButton from '../../components/UI/my-list-button/my-list-button';

function MoviePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const id = Number(useParams().id);
  const authStatus = useAppSelector(getAuthStatus);
  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilar);

  const isFilmLoading = useAppSelector(getFilmLoading);
  const isSimilarFilmsLoading = useAppSelector(getSimilarLoading);

  useEffect(() => {
    dispatch(fetchSimilarFilmsAction(id));
    dispatch(resetAmountToShow());
    dispatch(fetchReviewsAction(id));
    dispatch(fetchFilmAction(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authStatus, dispatch]);

  if (isFilmLoading || isSimilarFilmsLoading) {
    return <LoadingScreen />;
  }

  if (!film || !similarFilms) {
    return <Page404 />;
  }
  return (
    <>
      <section style={{ background: film.backgroundColor }} className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton authStatus={authStatus} id={film.id} />
                {authStatus === AuthorizationStatus.Auth ? <AddReviewButton id={id} /> : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>
            <FilmTabs film={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList
            films={similarFilms.filter((filmInArray) => filmInArray.id !== film.id)}
            amountToShow={4}
            notFoundMessage={'We couldn&apos;t find any movies similar to this one :&#40;'}
          />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
