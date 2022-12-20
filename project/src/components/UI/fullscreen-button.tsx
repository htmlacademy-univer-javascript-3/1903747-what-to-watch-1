import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFullscreenStatus } from '../../store/main-data/main-data';
import { getFullscreenStatus } from '../../store/main-data/main-data-selectors';
import { CombinedElement, exitFullScreen, requestFullScreen } from '../../utils/fullscreen-api';

function FullscreenButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const fullscreenStatus = useAppSelector(getFullscreenStatus);
  const onFullScreenClick = () => {
    const element = document.querySelector('.player') as CombinedElement;
    if (fullscreenStatus) {
      exitFullScreen();
      dispatch(setFullscreenStatus(false));
    } else {
      requestFullScreen(element);
      dispatch(setFullscreenStatus(true));
    }
  };

  return (
    <button onClick={onFullScreenClick} type="button" className="player__full-screen">
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}

export default FullscreenButton;
