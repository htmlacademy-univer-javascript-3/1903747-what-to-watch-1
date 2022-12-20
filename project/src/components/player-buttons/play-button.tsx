import { useAppDispatch, useAppSelector } from '../../hooks';
import { setIsPlaying } from '../../store/main-data/main-data';
import { getIsPlaying } from '../../store/main-data/main-data-selectors';

function PlayButton(): JSX.Element {
  const dispatch = useAppDispatch();

  const isPlaying = useAppSelector(getIsPlaying);
  const playButtonHandler = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  return (
    <button onClick={playButtonHandler} type="button" className="player__play">
      <svg viewBox={isPlaying ? '0 0 14 21' : '0 0 19 19'} width={isPlaying ? 14 : 19} height={isPlaying ? 21 : 19}>
        <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
      </svg>
      <span>{isPlaying ? 'Pause' : 'Play'}</span>
    </button>
  );
}

export default PlayButton;


