import { useState } from 'react';
import { Link } from 'react-router-dom';
import { genres } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeGenreAction, resetAmountToShow } from '../../store/action';
import { unID } from '../../utils';

function GenrePanel(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState(genres[0]);
  const dispatch = useAppDispatch();

  const setGenreHandler = (genre: string) => {
    dispatch(changeGenreAction(genre));
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
