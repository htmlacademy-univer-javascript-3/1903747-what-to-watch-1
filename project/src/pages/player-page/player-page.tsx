import { useParams, Link } from 'react-router-dom';
import { Films } from '../../types/types';
import Page404 from '../404Page/404Page';

function PlayerPage({ films }: { films: Films }): JSX.Element {
  const id = Number(useParams().id);
  const film = films.find((currentFilm) => currentFilm.id === id);
  if (!film) {
    return (<Page404 />);
  }
  return (
    <div className="player">
      <video src={film.videoSrc} className="player__video" poster="img/player-poster.jpg"></video>
      <Link
        type="button"
        className="player__exit"
        to={`/films/${id}`}
      >
        Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler">Toggler</div>
            <style>.player__toggler{'left: 30%;'}</style>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
