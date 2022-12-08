import { useAppSelector } from '../../hooks';
import FilmList from '../film-list/FilmList';
import GenrePanel from '../genre-nav-panel/GenreNavPanel';
import LoadingFilmList from '../loading-components/film-list-loading/film-list-loading';
import LoadingGenrePanel from '../loading-components/genre-panel-loading/genre-panel-loading';
import ShowMoreButton from '../show-more-button/ShowMoreButton';

function Catalog(): JSX.Element {
  const isFilmsLoading = useAppSelector((state) => state.films.isLoading);
  const genreFilms = useAppSelector((state) => state.genreFilms);
  const amountToShow = useAppSelector((state) => state.amountToShow);

  let isButtonHidden = false;
  if (genreFilms.length < 9 || amountToShow > 8) {
    isButtonHidden = true;
  }
  if (isFilmsLoading) {
    return (
      <section className="catalog">
        <LoadingGenrePanel />
        <LoadingFilmList />
      </section>
    );
  }
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenrePanel />
      {<FilmList films={genreFilms} amountToShow={amountToShow} />}
      {isButtonHidden ? '' : <ShowMoreButton />}
    </section>
  );
}

export default Catalog;


