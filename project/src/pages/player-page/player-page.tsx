import { useParams, useNavigate } from 'react-router-dom';
import LoadingScreen from '../../components/loading-components/loading-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilms, getFilmsLoading } from '../../store/film-process/film-process-selectors';
import { resetAmountToShow } from '../../store/main-data/main-data';
import Page404 from '../404Page/404Page';

function PlayerPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  dispatch(resetAmountToShow());
  const id = Number(useParams().id);
  const isLoading = useAppSelector(getFilmsLoading);
  const film = useAppSelector(getFilms).find((stateFilm) => stateFilm.id === id);
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (!film) {
    return <Page404 />;
  }
  return (
    <div className="player">
      <video
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
      >
      </video>
      <a
        type="button"
        className="player__exit"
        onClick={() => navigate(-1)}
      >
        Exit
      </a>

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
