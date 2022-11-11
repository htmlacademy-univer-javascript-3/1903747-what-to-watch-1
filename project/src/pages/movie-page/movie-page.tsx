import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { Films } from '../../types/types';
import Page404 from '../404Page/404Page';
import FilmList from '../../components/film-list/FilmList';
import Header from '../../components/header/header';
import FilmTabs from '../../components/film-tabs/film-tabs';

function MoviePage({ films }: { films: Films }): JSX.Element {
  const id = Number(useParams().id);
  const film = films.find((currentFilm) => currentFilm.id === id);
  if (!film) {
    return (<Page404 />);
  }
  return (
    <>
      <section style={{background: film.backgroundColor}} className="film-card film-card--full">
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
                <Link to={'/mylist'} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>
            <FilmTabs film={film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={films.filter((filmInArray) => film.genre === filmInArray.genre && filmInArray.id !== film.id)} amountToShow={4} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;

