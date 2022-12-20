import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingScreen from '../../components/loading-components/loading-screen';
import PlayButton from '../../components/player-buttons/play-button';
import FullscreenButton from '../../components/UI/fullscreen-button';
import PlayerControls from '../../components/UI/palyer-controller';
import VideoPlayer from '../../components/UI/video-player';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilm, getFilmLoading } from '../../store/film-process/film-process-selectors';
import { resetAmountToShow, setIsPlaying } from '../../store/main-data/main-data';
import Page404 from '../not-found-page/not-found-page';

function PlayerPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const id = Number(useParams().id);
  const isLoading = useAppSelector(getFilmLoading);
  const film = useAppSelector(getFilm);

  useEffect(() => {
    dispatch(setIsPlaying(true));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchFilmAction(id));
    dispatch(resetAmountToShow());
  }, [id, dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (!film) {
    return <Page404 />;
  }

  return (
    <div className="player">
      <VideoPlayer videoLink={film.videoLink} backgroundImage={film.backgroundImage} />
      <a
        type="button"
        className="player__exit"
        onClick={() => navigate(-1)}
      >
        Exit
      </a>

      <div className="player__controls">
        <PlayerControls />
        <div className="player__controls-row">
          <PlayButton />
          <div className="player__name">{film.name}</div>

          <FullscreenButton />
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
