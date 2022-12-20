import { useAppSelector } from '../../hooks';
import { getCurrentGenre, getFilms, getFilmsLoading } from '../../store/film-process/film-process-selectors';
import { getAmountToShow } from '../../store/main-data/main-data-selectors';
import { filterFilmByGenre } from '../../utils/film-utils';
import FilmList from '../film-list/film-list';
import GenrePanel from '../genre-nav-panel/genre-nav-panel';
import LoadingFilmList from '../loading-components/film-list-loading/film-list-loading';
import LoadingGenrePanel from '../loading-components/genre-panel-loading/genre-panel-loading';
import ShowMoreButton from '../show-more-button/show-more-button';

function Catalog(): JSX.Element {
  const isFilmsLoading = useAppSelector(getFilmsLoading);
  const films = useAppSelector(getFilms);
  const currentGenre = useAppSelector(getCurrentGenre);
  let genreFilms = filterFilmByGenre(films, currentGenre);
  const amountToShow = useAppSelector(getAmountToShow);

  let isButtonHidden = false;
  if (!genreFilms) { genreFilms = []; }
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
      {
        <FilmList
          films={genreFilms}
          amountToShow={amountToShow}
          notFoundMessage={'We couldn&apos;t find any movies of this genre :&#40;'}
        />
      }

      {
        isButtonHidden ? '' : <ShowMoreButton />
      }
    </section>
  );
}

export default Catalog;


