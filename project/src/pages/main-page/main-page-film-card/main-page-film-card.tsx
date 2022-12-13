import { Link } from 'react-router-dom';
import Header from '../../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppRouteProps, AuthorizationStatus } from '../../../const';
import LoadingPromo from '../../../components/loading-components/promo-loading/promo-loading';
import { getPromo, getPromoLoading } from '../../../store/film-process/film-process-selectors';
import { getAuthStatus } from '../../../store/user-process/user-process-selectors';
import { useEffect } from 'react';
import { fetchPromoFilmAction } from '../../../store/api-actions';

function MainPagePromo(): JSX.Element {
  const dispatch = useAppDispatch();
  const isPromoLoading = useAppSelector(getPromoLoading);
  const authStatus = useAppSelector(getAuthStatus);
  const promoFilm = useAppSelector(getPromo);
  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, []);

  if (isPromoLoading || !promoFilm) {
    return <LoadingPromo />;
  }
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>

            <div className="film-card__buttons">
              <Link to={`/player/${promoFilm.id}`} className="btn btn--play film-card__button" type="button">
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
  );
}

export default MainPagePromo;

