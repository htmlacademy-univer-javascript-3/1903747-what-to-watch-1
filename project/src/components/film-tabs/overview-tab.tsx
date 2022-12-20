import { Film } from '../../types/types';
import ratingConverter from '../../utils/film-utils';

function OverviewTab({ film }: { film: Film }): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingConverter(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.map((actor) => actor).join(', ')}</strong></p>
      </div>
    </>
  );
}

export default OverviewTab;
