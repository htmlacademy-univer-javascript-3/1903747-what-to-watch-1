import { Link, useParams } from 'react-router-dom';
import AuthHeader from '../../components/header/user-block-auth';
import LoadingScreen from '../../components/loading-components/loading-screen';
import ReviewForm from '../../components/review-form/ReviewForm';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilms, getFilmsLoading } from '../../store/film-process/film-process-selectors';
import { resetAmountToShow } from '../../store/main-data/main-data';
import Page404 from '../404Page/404Page';

function AddReviewPage(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(resetAmountToShow);

  const id = Number(useParams().id);
  const film = useAppSelector(getFilms).find((currentFilm) => currentFilm.id === id);
  const isLoading = useAppSelector(getFilmsLoading);
  if (isLoading) {
    return (<LoadingScreen />);
  }

  if (!film) {
    return <Page404 />;
  }
  return (
    <section className="film-card film-card--full" style={{background: film.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt="film.name" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={'/'}className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href='/'>Add review</a>
              </li>
            </ul>
          </nav>

          <AuthHeader />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt="film.name poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm backgroundColor={film.backgroundColor}/>
      </div>
    </section>
  );
}

export default AddReviewPage;

