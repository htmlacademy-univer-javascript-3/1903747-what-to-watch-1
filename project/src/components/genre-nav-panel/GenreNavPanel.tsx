import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setGenre } from '../../store/film-process/film-process';
import { getGenres } from '../../store/film-process/film-process-selectors';
import { resetAmountToShow } from '../../store/main-data/main-data';
import { unID } from '../../utils';

function GenrePanel(): JSX.Element {
  const genres = useAppSelector(getGenres) ?? ['All genres'];
  const [currentGenre, setCurrentGenre] = useState(genres[0]);
  const dispatch = useAppDispatch();
  const setGenreHandler = (genre: string) => {
    dispatch(setGenre(genre));
    dispatch(resetAmountToShow());
    setCurrentGenre(genre);
  };
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          (
            <li key={unID()} onClick={() => setGenreHandler(genre)} className={genre === currentGenre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
              <Link to="#" className='catalog__genres-link'>{genre}</Link>
            </li>
          )
        )
      }
    </ul>
  );
}

export default GenrePanel;
